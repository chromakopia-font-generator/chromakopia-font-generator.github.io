import { getPrivacyMetaConfig } from "@/meta.config"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
    return getPrivacyMetaConfig();
}

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 prose">
            <h1 className="text-center">Privacy Policy</h1>

            <h2>Introduction</h2>
            <p>
                At Chromakopia Font Generator, we take your privacy seriously. This Privacy Policy explains our practices regarding data collection and usage.
            </p>

            <h2>1. Information Collection</h2>
            <p>
                Chromakopia Font Generator operates on a no-storage policy. We do not:
            </p>
            <ul>
                <li>Collect personal information</li>
                <li>Require user registration</li>
                <li>Store your created images</li>
                <li>Save your uploaded backgrounds</li>
                <li>Track individual user behavior</li>
            </ul>

            <h2>2. Analytics</h2>
            <p>
                We use Google Analytics to collect anonymous usage data to improve our service. This includes:
            </p>
            <ul>
                <li>Page views and time spent on the site</li>
                <li>Device type and browser information</li>
                <li>Geographic location (country/region level only)</li>
                <li>Referral sources</li>
            </ul>
            <p>
                You can opt out of Google Analytics tracking using browser extensions or privacy settings.
            </p>

            <h2>3. Advertising</h2>
            <p>
                Our service may display third-party advertisements. These advertisers may use cookies and similar technologies to collect data about user interests. We do not share any personal information with advertisers as we do not collect any.
            </p>

            <h2>4. Cookies</h2>
            <p>
                We use essential cookies to provide basic site functionality. Analytics and advertising services may also set their own cookies. You can control cookie settings through your browser preferences.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
                Our service integrates with:
            </p>
            <ul>
                <li>Google Analytics for anonymous usage statistics</li>
                <li>Advertising networks for displaying ads</li>
            </ul>
            <p>
                These services operate under their own privacy policies, which we encourage you to review.
            </p>

            <h2>6. Data Security</h2>
            <p>
                Since we don't collect or store personal data, all image generation and customization happens directly in your browser. Your content remains private and is not transmitted to our servers.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
                Our Service is not directed to children under 13. We do not knowingly collect any information from children under 13.
            </p>

            <h2>8. Changes to Privacy Policy</h2>
            <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:contact@chromakopia-font-generator.com">contact@chromakopia-font-generator.com</a>
            </p>
            
            <p className="text-sm text-gray-600 mt-8">
                Last Updated: November 2024
            </p>
        </div>
    );
}