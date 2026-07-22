import type { MetadataRoute } from 'next';
import { SITE_URL } from './site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/download', '/faq', '/privacy-policy', '/support', '/terms'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/download' ? 0.9 : 0.6,
  }));
}
