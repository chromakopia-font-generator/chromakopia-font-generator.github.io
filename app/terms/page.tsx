import { getTermsMetaConfig } from "@/meta.config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return getTermsMetaConfig();
}

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 prose">
            <h1 className="text-center">Terms of Service</h1>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing and using Chromakopia Font Generator ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>

            <h2>2. Service Description</h2>
            <p>
                Chromakopia Font Generator provides text-to-image generation services. The Service operates entirely within your web browser and does not require registration or account creation.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>
                When using Chromakopia Font Generator, you agree to:
            </p>
            <ul>
                <li>Use the Service in compliance with all applicable laws and regulations</li>
                <li>Only upload background images for which you have proper usage rights</li>
                <li>Not use the Service to create content that is unlawful, offensive, or infringing on others' rights</li>
                <li>Not attempt to interfere with or disrupt the Service's functionality</li>
                <li>Not use automated methods to access or use the Service</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
                Chromakopia Font Generator and its original content, features, and functionality are owned by Chromakopia Font Generator and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>5. User Content</h2>
            <p>
                Any content you create using the Service (including uploaded background images) remains your responsibility. We do not claim ownership of your content, and we do not store any content you create or upload.
            </p>

            <h2>6. Disclaimers</h2>
            <p>
                The Service is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that the Service will be uninterrupted, secure, or error-free.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
                Chromakopia Font Generator shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
                We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the "Last updated" date at the top of these terms.
            </p>

            <h2>9. Contact Information</h2>
            <p>
                For any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:contact@chromakopia-font-generator.com">contact@chromakopia-font-generator.com</a>
            </p>

            <p className="text-sm text-gray-600 mt-8">
                Last Updated: November 2024
            </p>
        </div>
    );
}