import { siteUrl } from "@/meta.config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const base: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];

    return [...base];
}