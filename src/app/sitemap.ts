import type { MetadataRoute } from 'next';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';
import { getPosts } from 'src/actions/blog-queries';

// ----------------------------------------------------------------------

// ✅ Força renderização dinâmica (a API é consultada em cada request do Google Bot)
export const dynamic = 'force-dynamic';

/**
 * SITEMAP DINÂMICO - PRODUÇÃO 2026
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = CONFIG.siteUrl;

  const { posts } = await getPosts();

  // 1. Rotas Estáticas Principais (Institucional, Legal e Hubs)
  const now = new Date().toISOString();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${URL}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${URL}${paths.news.root}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${URL}${paths.about}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}${paths.ecosystem}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${URL}${paths.documentos}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${URL}${paths.team}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${URL}${paths.whitepaper}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}${paths.contact}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${URL}${paths.faqs}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${URL}${paths.terms}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${URL}${paths.privacy}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${URL}${paths.cookies}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. Rotas Dinâmicas: Posts
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${URL}${paths.post.details(post.slug)}`,
    lastModified: post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 3. Rotas de Categorias
  const categories = [...new Set(posts.map((post) => post.category))];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${URL}${paths.post.category(category.toLowerCase())}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes];
}
