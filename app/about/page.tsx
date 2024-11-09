import { getAboutMetaConfig } from "@/meta.config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return getAboutMetaConfig();
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 prose">
            <h1 className="text-center">About Chromakopia Font Generator</h1>

            <h2>What is Chromakopia Font Generator?</h2>
            <p>
                Chromakopia Font Generator helps you create stunning text images instantly. Our generator specializes in transforming text into beautiful visuals for various purposes - from Chromakopia names and PFP to lyrics visualization and custom text designs.
            </p>

            <h2>What You Can Create</h2>
            <ul>
                <li>Chromakopia Names - Create unique styled names for social media</li>
                <li>PFP Generator - Design custom profile pictures with text</li>
                <li>Text Designs - Transform any text into beautiful images</li>
                <li>Lyrics Visualization - Turn your favorite lyrics into shareable images</li>
            </ul>

            <h2>Why Choose Chromakopia</h2>
            <ul>
                <li>Instant text to image conversion</li>
                <li>No registration required</li>
                <li>Free to use</li>
                <li>Easy to customize and share</li>
                <li>High-quality image output</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
                Questions or suggestions? Please open an issue on our{' '}
                <a href="https://github.com/chromakopia-font-generator/chromakopia-font-generator.github.io/issues" target="_blank" rel="noopener noreferrer">
                    GitHub repository
                </a>
            </p>
        </div>
    );
}
