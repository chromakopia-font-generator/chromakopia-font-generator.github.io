// meta.config.ts

import { Metadata } from "next";
import { isDevelopment } from "./lib/utils";

const siteTitle = "Chromakopia Font Generator | Create Stylish Text & Custom Fonts Online";
const siteTitleTemplate = "Chromakopia Font Generator";
const siteDescription = "Create unique and stylish text with Chromakopia Font Generator. Transform plain text into beautiful custom fonts for social media, PFP, names and more. Free and easy to use online tool.";

export const siteUrl = isDevelopment() ? "http://localhost:3000" : "https://chromakopia-font-generator.github.io";

export const metaConfig: Metadata = {
    title: {
        default: siteTitle,
        template: `%s | ${siteTitleTemplate}`,
    },
    description: siteDescription,
    keywords: "chromakopia font generator, chromakopia name generator, chromakopia text generator, chromakopia pfp, chromakopia tyler, chromakopia truck",
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: `${siteUrl}/`,
        siteName: siteTitle,
        images: [
            {
                url: `${siteUrl}/logo.svg`,
                width: 512,
                height: 512,
                alt: siteTitle,
            },
        ],
        type: 'website',
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
            { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
            { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
            { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteUrl}/site.webmanifest`,
};

export function getTermsMetaConfig(): Metadata {
    const title = "Terms of Service";
    const description = "Terms of service and usage conditions for Chromakopia Font Generator"
    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${siteUrl}/terms`,
        },
        openGraph: {
            title: `${title} | ${siteTitleTemplate}`,
            description: description,
            url: `${siteUrl}/terms`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    }
}

export function getPrivacyMetaConfig(): Metadata {
    const title = "Privacy Policy";
    const description = "Privacy policy and data collection practices for Chromakopia Font Generator"
    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${siteUrl}/privacy`,
        },
        openGraph: {
            title: `${title} | ${siteTitleTemplate}`,
            description: description,
            url: `${siteUrl}/privacy`,
            siteName: siteTitle,
            images: [
                {
                    url: `${siteUrl}/logo.svg`,
                    width: 512,
                    height: 512,
                    alt: siteTitle,
                },
            ],
            type: 'website',
        }
    }
}