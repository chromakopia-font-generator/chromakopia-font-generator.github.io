import { getPrivacyMetaConfig } from "@/meta.config"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    return getPrivacyMetaConfig();
}

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 prose">
            <h1 className="text-center">Privacy Policy</h1>

            <h2>1. No Data Collection</h2>
            <p>
                Chromakopia Font Generator does not:
            </p>
            <ul>
                <li>Collect personal information</li>
                <li>Require registration</li>
                <li>Store your generated images</li>
                <li>Track individual users</li>
            </ul>

            <h2>2. Analytics</h2>
            <p>
                We use Google Analytics to collect anonymous usage data, including:
            </p>
            <ul>
                <li>Page views</li>
                <li>Country-level location</li>
                <li>Device type</li>
                <li>Site interaction</li>
            </ul>

            <h2>3. Advertising</h2>
            <p>
                Our site may display advertisements. Ad providers may use cookies for serving relevant ads. We do not share any personal data with advertisers.
            </p>

            <h2>4. Your Privacy</h2>
            <p>
                All image generation happens in your browser. We don't store your content or personal information. Your creations remain private and secure.
            </p>

            <h2>5. Questions</h2>
            <p>
                For privacy concerns, contact us at{' '}
                <a href="mailto:contact@chromakopia-font-generator.com">contact@chromakopia-font-generator.com</a>
            </p>

            <p className="text-sm text-gray-600 mt-8">
                Last Updated: November 2024
            </p>
        </div>
    );
}