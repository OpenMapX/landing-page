import { blogMetadata, posts } from '$lib';
import { Feed } from 'feed';
import { DateTime } from 'luxon';

export const feed = new Feed({
  title: blogMetadata.title,
  description: blogMetadata.description,
  id: 'https://openmapx.org/blog',
  link: 'https://openmapx.org/blog',
  language: 'en',
  copyright: `Copyright © ${DateTime.now().year} OpenMapX. All rights reserved.`,
  favicon: 'https://openmapx.org/favicon.ico',
  feedLinks: {
    atom: 'https://openmapx.org/blog/atom.xml',
    json: 'https://openmapx.org/blog/feed.json',
  },
});

for (const post of posts) {
  feed.addItem({
    title: post.title,
    id: post.id,
    link: 'https://openmapx.org' + post.url,
    description: post.description,
    author: post.authors.map((author) => ({ name: author })),
    date: (post.modifiedAt ?? post.publishedAt).toJSDate(),
    published: post.publishedAt.toJSDate(),
  });
}
