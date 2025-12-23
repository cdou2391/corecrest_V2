import React from 'react';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import ProblemAwareness from '../components/home/ProblemAwareness';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTASection from '../components/home/CTASection';
import SEO from '../components/SEO';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CoreCrest",
  "url": "https://corecrest.tech",
  "logo": "https://corecrest.tech/logo.png",
  "description": "Leading software company in Rwanda providing tailored IT solutions, website development, and SaaS products for small businesses. Helping businesses attract more customers, streamline operations, and grow with confidence.",
  "slogan": "Best Software Company in Rwanda",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kigali",
    "addressRegion": "Kigali",
    "addressCountry": "Rwanda"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+250788863783",
    "contactType": "customer service",
    "email": "info@corecrest.tech",
    "areaServed": "RW",
    "availableLanguage": ["en"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/corecrest",
    "https://twitter.com/corecrest"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Rwanda"
  },
  "knowsAbout": [
    "Website Development",
    "SaaS Solutions",
    "Web Application Development",
    "IT Advisory",
    "Business Automation",
    "Small Business Technology"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CoreCrest",
  "url": "https://corecrest.tech",
  "description": "Website development, SaaS solutions, and custom web applications for small businesses in Rwanda",
  "publisher": {
    "@type": "Organization",
    "name": "CoreCrest"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://corecrest.tech/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["#home", "#services", "#about"]
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Website Development",
        "description": "Small business website design that converts visitors into customers. Custom-designed, responsive websites built around your customer journey to generate more leads and drive growth.",
        "provider": {
          "@type": "Organization",
          "name": "CoreCrest"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Rwanda"
        },
        "serviceType": "Website Development"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Automation & Integrations",
        "description": "Business automation and tool integrations for SMEs. Connect the tools you already use and automate repetitive tasks so your team can focus on work that actually grows the business.",
        "provider": {
          "@type": "Organization",
          "name": "CoreCrest"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Rwanda"
        },
        "serviceType": "Business Automation"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Custom Web Apps & Internal Tools",
        "description": "Custom internal tools and web applications for business efficiency. Replace spreadsheets, email chains, and manual processes with simple tools that save time and reduce mistakes.",
        "provider": {
          "@type": "Organization",
          "name": "CoreCrest"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Rwanda"
        },
        "serviceType": "Web Application Development"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "IT Advisory (Decision-Safe Tech)",
        "description": "Technology strategy and advisory for small businesses. Make tech decisions with confidence. We help you choose what to build, what to buy, and what to fix first — with a clear ROI lens.",
        "provider": {
          "@type": "Organization",
          "name": "CoreCrest"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Rwanda"
        },
        "serviceType": "IT Advisory"
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <SEO
        title="CoreCrest | Website Development & Tech Solutions for Small Businesses in Rwanda"
        description="CoreCrest provides website development, SaaS solutions, and custom web applications for small businesses in Rwanda — helping teams attract more customers, streamline operations, and grow with confidence. Websites, automation & advisory for growth."
        keywords="Best Software Company in Rwanda, Top IT Company Kigali, Website Development Rwanda, Tailored IT Solutions, SaaS Solutions, Web App Development, IT Services Rwanda, Software Development Rwanda, Custom Websites, Small Business Technology, Business Growth Rwanda, Lead Generation, Workflow Automation, Internal Tools SMEs, Operational Efficiency, Decision-Safe Tech Advisory"
        ogTitle="CoreCrest | Website Development & Tech Solutions for Small Businesses in Rwanda"
        ogDescription="CoreCrest provides website development, SaaS solutions, and custom web applications for small businesses in Rwanda — helping teams attract more customers, streamline operations, and grow with confidence."
        ogImage="/logo.png"
        ogUrl="https://corecrest.tech"
        twitterTitle="CoreCrest | Website Development & Tech Solutions for Small Businesses in Rwanda"
        twitterDescription="CoreCrest provides website development, SaaS solutions, and custom web applications for small businesses in Rwanda — helping teams attract more customers, streamline operations, and grow with confidence."
        twitterImage="/logo.png"
        canonicalUrl="https://corecrest.tech"
        schema={[organizationSchema, webPageSchema, websiteSchema]}
      />
      <div>
        <Hero />
        <ServicesPreview />
        <ProblemAwareness />
        <WhyChooseUs />
        <CTASection />
      </div>
    </>
  );
}