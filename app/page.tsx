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
          Use Chromakopia Font Generator to create stunning Chromakopia names, PFP, and text designs instantly.
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
        <Testimonials />
      </section>

      <section>
        <FAQ />
      </section>

    </div>
  );
}
