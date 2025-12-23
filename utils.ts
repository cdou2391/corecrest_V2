export function createPageUrl(pageName: string): string {
  const pageMap: Record<string, string> = {
    'Home': '/',
    'About': '/about',
    'Services': '/services',
    'Blog': '/blog',
    'BlogPost': '/blog-post',
    'Contact': '/contact',
    'BookConsultation': '/book-consultation',
    'PrivacyPolicy': '/privacy-policy',
    'TermsOfService': '/terms-of-service',
  };

  return pageMap[pageName] || '/';
}

