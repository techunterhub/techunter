import type { MetadataRoute } from 'next';

interface DynamicUrl {
  slug: string;
  lastModified?: string;
  changeFrequency?: 'monthly' | 'yearly' | 'weekly' | 'always' | 'hourly' | 'daily' | 'never'; // Specific string literals
  priority?: number;
}

// Function to fetch dynamic URLs
async function getDynamicUrls() {
  try {
    const response = await fetch('https://techunterhub.com/');

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data: DynamicUrl[] = await response.json();

    return data.map((item: DynamicUrl) => ({
      url: `https://techunterhub.com/${item.slug}`,
      lastModified: item.lastModified ? new Date(item.lastModified) : new Date(),
      changeFrequency: item.changeFrequency || 'monthly', // Use a default value
      priority: item.priority || 0.5,
    }));
  } catch (error) {
    console.error('Error fetching dynamic URLs:', error);
    return []; 
  }
}

// Generates the sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = await getDynamicUrls();

  const staticUrls = [
    {
      url: 'https://techunterhub.com',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const, // Assert the type
      priority: 1,
    },
    {
      url: 'https://techunterhub.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const, // Assert the type
      priority: 0.8,
    },
    {
      url: 'https://techunterhub.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const, // Assert the type
      priority: 0.5,
    },
  ];

  // Combine static and dynamic URLs
  const allUrls = [...staticUrls, ...urls];

  return allUrls.map((url) => ({
    url: url.url,
    lastModified: url.lastModified,
    changeFrequency: url.changeFrequency,
    priority: url.priority,
  }));
}
