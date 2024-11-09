// app/page.tsx

import FAQ from "@/components/FAQ";
import FontGenerator from "@/components/FontGenerator";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import { siteUrl } from "@/meta.config";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${siteUrl}/`,
    },
  }
}

export default function Home() {
  return (
    <div className="py-12 space-y-12">

      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#0B0A1E] mb-6">
          Chromakopia Font Generator
        </h1>
        <p className="text-lg">
          Welcome to Chromakopia Font Generator! Transform your regular text into beautiful, stylish fonts instantly. Perfect for social media posts, profile pictures, and creative names.
        </p>
      </section>

      <section>
        <FontGenerator />
      </section>

      <section>
        <div className="max-w-3xl mx-auto">
          <YouTubeEmbed videoid="dL6LM4DyzU8" />
        </div>
      </section>

      <section>
        <UseCases />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <FAQ />
      </section>

    </div>
  );
}
