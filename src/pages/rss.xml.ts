import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = import.meta.glob('./blog/*.{md,mdx}', { eager: true }) as Record<string, any>;

  const items = Object.entries(posts)
    .map(([path, post]) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.date),
      description: post.frontmatter.description || '',
      link: path.replace('./', '/').replace(/\.(md|mdx)$/, '/'),
    }))
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: "Sambulo Senda's Blog",
    description: 'Thoughts and tutorials about mobile development and React Native.',
    site: context.site!.toString(),
    items,
  });
}
