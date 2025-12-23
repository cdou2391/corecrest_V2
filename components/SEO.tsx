import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  ogPublishedTime?: string;
  ogAuthor?: string;
  ogSection?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  robots?: string;
  schema?: object | object[];
  noindex?: boolean;
}

export default function SEO({
  title = "CoreCrest - Website Development & SaaS Solutions",
  description = "CoreCrest - Software Company in Rwanda providing tailored IT solutions, website development, and SaaS products. Leading technology innovation in Kigali with exceptional software development services for businesses.",
  keywords = "Best Software Company in Rwanda, Top IT Company Kigali, Website Development Rwanda, Tailored IT Solutions, SaaS Solutions, Web App Development, IT Services Rwanda, Software Development Rwanda, Custom Websites, Small Business Technology",
  ogTitle = "CoreCrest - Website Development & SaaS Solutions",
  ogDescription = "Rwanda's leading software company empowering businesses through innovative website development, SaaS solutions, and custom web applications with exceptional value and quality.",
  ogImage = "/logo.png",
  ogUrl,
  ogType,
  ogPublishedTime,
  ogAuthor,
  ogSection,
  twitterTitle = "CoreCrest - Website Development & SaaS Solutions",
  twitterDescription = "Rwanda's premier software development company delivering custom websites, SaaS solutions, and web applications for businesses in Kigali and beyond.",
  twitterImage = "/logo.png",
  canonicalUrl,
  robots = "index, follow",
  schema,
  noindex = false,
}: SEOProps) {
  const baseUrl = "https://corecrest.tech";
  const fullOgUrl = ogUrl || canonicalUrl || baseUrl;
  const fullCanonicalUrl = canonicalUrl || baseUrl;
  const finalRobots = noindex ? "noindex, nofollow" : robots;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="CoreCrest" />
      <meta name="robots" content={finalRobots} />
      <meta name="geo.region" content="RW" />
      <meta name="geo.placename" content="Kigali" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />
      <meta property="og:type" content={ogType || (fullOgUrl.includes('/blog-post') ? 'article' : 'website')} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:site_name" content="CoreCrest" />
      {ogPublishedTime && <meta property="article:published_time" content={ogPublishedTime} />}
      {ogAuthor && <meta property="article:author" content={ogAuthor} />}
      {ogSection && <meta property="article:section" content={ogSection} />}

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage.startsWith('http') ? twitterImage : `${baseUrl}${twitterImage}`} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Schema.org JSON-LD */}
      {schema && (
        Array.isArray(schema) ? (
          schema.map((s, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )
      )}
    </Helmet>
  );
}

