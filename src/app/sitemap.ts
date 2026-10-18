import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;
  const pages = ["", "/work", "/experience", "/projects", "/skills", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}` })),
    ...caseStudies.map((c) => ({ url: `${base}/work/${c.slug}` })),
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}` })),
  ];
}
