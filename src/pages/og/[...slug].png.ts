import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = import.meta.glob('../blog/*.{md,mdx}', { eager: true }) as Record<string, any>;

  return Object.entries(posts).map(([filePath, post]) => {
    const slug = filePath.split('/').pop()?.replace(/\.(md|mdx)$/, '') || '';
    return {
      params: { slug },
      props: {
        title: post.frontmatter.title,
        description: post.frontmatter.description || '',
        date: post.frontmatter.date,
      },
    };
  });
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description, date } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Load Inter font — use the Google Fonts API URL or a local file
  let fontData: ArrayBuffer;
  try {
    const fontPath = path.join(process.cwd(), 'src/assets/fonts/Inter-SemiBold.ttf');
    fontData = fs.readFileSync(fontPath).buffer as ArrayBuffer;
  } catch {
    // Fallback: fetch from Google Fonts
    const fontResponse = await fetch(
      'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff'
    );
    fontData = await fontResponse.arrayBuffer();
  }

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#1a1a19',
          padding: '60px',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '16px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '48px',
                      fontWeight: 600,
                      color: '#e8e6e3',
                      lineHeight: 1.2,
                      maxWidth: '900px',
                    },
                    children: title,
                  },
                },
                description
                  ? {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '24px',
                          color: '#9e9e9b',
                          lineHeight: 1.4,
                          maxWidth: '800px',
                        },
                        children: description,
                      },
                    }
                  : null,
              ].filter(Boolean),
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '24px',
                            fontWeight: 600,
                            color: '#e8e6e3',
                          },
                          children: 'Sambulo Senda',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '20px',
                            color: '#6b6b69',
                          },
                          children: '·',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '20px',
                            color: '#9e9e9b',
                          },
                          children: formattedDate,
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '20px',
                      color: '#6b8ef2',
                    },
                    children: 'sambulosenda.com',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 600,
          style: 'normal',
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
