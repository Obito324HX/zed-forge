import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zed-forge-xi.vercel.app";
  const routes = ["", "/work/bella-vista", "/work/ironforge", "/work/carepoint", "/work/clientflow"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
