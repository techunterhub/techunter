import type { MetadataRoute } from 'next';


/**
 * Fetches and returns dynamic URLs with corresponding metadata from the server.
 * Each URL is expected to have the following properties:
 * - `slug`: The slug of the URL.
 * - `lastModified`: The last modified date of the URL in ISO format.
 * - `changeFrequency`: The frequency at which the URL is expected to change.
 * - `priority`: The priority of the URL from 0.0 to 1.0.
 *
 * @returns {Promise<MetadataRoute[]>} An array of dynamic URLs with metadata.
 * @throws {Error} If there is an error fetching the dynamic URLs.
 */
async function getDynamicUrls() {
  try {
    const response = await fetch('techunterhub.com');

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    return data.map((item) => ({
      url: `techunterhub.com/${item.slug}`,
      lastModified: item.lastModified ? new Date(item.lastModified) : new Date(),
      changeFrequency: item.changeFrequency || 'monthly',
      priority: item.priority || 0.5,
    }));
  } catch (error) {
    console.error('Error fetching dynamic URLs:', error);
    return []; 
  }
}

/**
 * Generates a sitemap for the app.
 *
 * The sitemap includes a static list of URLs with corresponding metadata and
 * a dynamic list of URLs fetched from the server. The server is expected to
 * return a JSON array of objects with the following properties:
 * - `slug`: The slug of the URL.
 * - `lastModified`: The last modified date of the URL in ISO format.
 * - `changeFrequency`: The frequency at which the URL is expected to change.
 * - `priority`: The priority of the URL from 0.0 to 1.0.
 *
 * @returns {Promise<MetadataRoute.Sitemap>} A promise that resolves to an array of
 * URLs with metadata.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = await getDynamicUrls();


  const staticUrls = [
    {
      url: 'techunterhub.com', 
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
