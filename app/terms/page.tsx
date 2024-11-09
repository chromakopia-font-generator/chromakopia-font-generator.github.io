import { getTermsMetaConfig } from "@/meta.config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return getTermsMetaConfig();
}

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 prose">
            <h1 className="text-center">Terms of Service</h1>

            <h2>1. Service Description</h2>
            <p>
                Chromakopia Font Generator ("the Service") is an online tool that converts text into images. The Service provides text-to-image generation, including Chromakopia names, PFP, and text designs.
            </p>

            <h2>2. User Agreement</h2>
            <p>
                By using Chromakopia Font Generator, you agree to these terms. The Service is provided "as is" without warranties of any kind.
            </p>

            <h2>3. Acceptable Use</h2>
            <p>
                When using Chromakopia Font Generator, you agree to:
            </p>
            <ul>
                <li>Use the Service lawfully</li>
                <li>Not interfere with the Service's operation</li>
                <li>Not use automated methods to access the Service</li>
                <li>Not create harmful or offensive content</li>
            </ul>

            <h2>4. Content Rights</h2>
            <p>
                Images you create using Chromakopia Font Generator are yours to use. We do not store or claim rights to your generated content.
            </p>

            <h2>5. Service Changes</h2>
            <p>
                We may modify or discontinue any part of the Service at any time without notice.
            </p>

            <h2>6. Contact</h2>
            <p>
                For questions about these terms, Please open an issue on our{' '}
                <a href="https://github.com/chromakopia-font-generator/chromakopia-font-generator.github.io/issues" target="_blank" rel="noopener noreferrer">
                    GitHub repository
                </a>
            </p>

            <p className="text-sm text-gray-600 mt-8">
                Last Updated: November 2024
            </p>
        </div>
    );
}