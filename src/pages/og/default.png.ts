import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

// Branded 1200x630 fallback card used as the default og:image for pages
// that don't have a per-post OG image (see Layout.astro).
export const GET: APIRoute = async () => {
  let fontData: ArrayBuffer;
  try {
    const fontPath = path.join(process.cwd(), 'src/assets/fonts/Inter-SemiBold.ttf');
    fontData = fs.readFileSync(fontPath).buffer as ArrayBuffer;
  } catch {
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
              style: { display: 'flex', flexDirection: 'column', gap: '18px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '80px',
                      fontWeight: 600,
                      color: '#e8e6e3',
                      lineHeight: 1.1,
                    },
                    children: 'Sambulo Senda',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '36px',
                      color: '#1a9d5a',
                    },
                    children: 'React Native Engineer',
                  },
                },
              ],
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
                    style: { fontSize: '24px', color: '#9e9e9b' },
                    children: 'Shipping apps to the App Store — London',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '22px', color: '#6b8ef2' },
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
