// app/sitemap.js
import artworks from '@/data/artworks';

export default function sitemap() {
  const paintings = artworks.map((a) => ({
    url: `https://isabelmonserrat.com/gallery/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    {
      url: 'https://isabelmonserrat.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://isabelmonserrat.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://isabelmonserrat.com/shop',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://isabelmonserrat.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://isabelmonserrat.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...paintings,
  ];
}