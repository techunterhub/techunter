import type { MetadataRoute } from 'next';

// Function to fetch dynamic URLs
async function getDynamicUrls() {
  try {
    const response = await fetch('techunterhub.com'); // Replace with your API endpoint

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    return data.map((item) => ({
      url: `techunterhub.com/${item.slug}`, // Adjust based on your API response
      lastModified: item.lastModified ? new Date(item.lastModified) : new Date(),
      changeFrequency: item.changeFrequency || 'monthly', // Default value if not provided
      priority: item.priority || 0.5, // Default value if not provided
    }));
  } catch (error) {
    console.error('Error fetching dynamic URLs:', error);
    return []; // Return an empty array on error
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = await getDynamicUrls(); // Fetch dynamic URLs

  // Add static URLs to the sitemap if needed
  const staticUrls = [
    {
      url: 'techunterhub.com', // Homepage
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'techunterhub.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'techunterhub.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
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
