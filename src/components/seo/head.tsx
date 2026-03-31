"use client";

import { useEffect } from "react";

interface SEOMeta {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  canonical?: string;
}

export default function SEOMeta({ meta }: { meta?: SEOMeta }) {
  useEffect(() => {
    if (!meta) return;

    // Set title
    if (meta.title) {
      document.title = meta.title;
    }

    // Set description
    if (meta.description) {
      document.documentElement.setAttribute("data-description", meta.description);
    }

    // Set canonical URL
    if (meta.canonical) {
      document.head.innerHTML = 
        document.head.innerHTML + 
        `<link rel="canonical" href="${meta.canonical}" />`;
    }

    // Open Graph tags
    const ogTags = [
      meta.ogTitle && `<meta property="og:title" content="${meta.ogTitle}" />`,
      meta.ogDescription && `<meta property="og:description" content="${meta.ogDescription}" />`,
      meta.ogImage && `<meta property="og:image" content="${meta.ogImage}" />`,
      meta.ogImage && `<meta property="og:image:secure_url" content="${meta.ogImage}" />`,
      meta.ogImage && `<meta property="og:image:width" content="1200" />`,
      meta.ogImage && `<meta property="og:image:height" content="630" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:url" content="${window.location.href}" />`,
      `<meta property="og:locale" content="en_US" />`,
    ].filter(Boolean);

    document.head.innerHTML = 
      document.head.innerHTML + 
      ogTags.join("\n");

    // Twitter Card tags
    if (meta.twitterCard) {
      const twitterTags = [
        `<meta name="twitter:card" content="${meta.twitterCard}" />`,
        `<meta name="twitter:title" content="${meta.twitterCard === 'summary_large_image' ? meta.ogTitle || meta.title : meta.twitterCard}" />`,
        meta.twitterCard !== 'summary_large_image' && meta.twitterCard && 
          `<meta name="twitter:description" content="${meta.twitterCard === 'summary_large_image' ? meta.ogDescription || meta.description : meta.twitterCard}" />`,
        meta.twitterCard !== 'summary_large_image' && meta.twitterCard && 
          `<meta name="twitter:image" content="${meta.twitterCard === 'summary_large_image' ? meta.ogImage || '/lv-logo-grey.png' : meta.twitterCard}" />`,
        meta.twitterCard === 'summary_large_image' && meta.ogImage && 
          `<meta name="twitter:image:alt" content="${meta.ogImage}" />`,
      ].filter(Boolean);

      document.head.innerHTML = 
        document.head.innerHTML + 
        twitterTags.join("\n");
    }
  }, [meta]);

  return null;
}
