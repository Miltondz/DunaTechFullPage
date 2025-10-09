// SEO Utilities for Dynamic Schema Markup

export const addServiceSchema = (serviceName: string, description: string) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Dunatech",
      "url": "https://dunatech.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "serviceType": "Software Development"
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  script.id = `schema-service-${serviceName.replace(/\s/g, '-')}`;
  
  // Remove existing schema if present
  const existing = document.getElementById(script.id);
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};

export const addBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  script.id = 'schema-breadcrumb-dynamic';
  
  // Remove existing schema if present
  const existing = document.getElementById(script.id);
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};

export const addFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  const mainEntity = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  script.id = 'schema-faq';
  
  // Remove existing schema if present
  const existing = document.getElementById(script.id);
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};

export const addContactPointSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dunatech",
    "url": "https://dunatech.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "dunatech.site@gmail.com",
      "areaServed": "CL",
      "availableLanguage": ["Spanish", "English"],
      "contactOption": "TollFree"
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  script.id = 'schema-contact-point';
  
  // Remove existing schema if present
  const existing = document.getElementById(script.id);
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};

export const cleanupSchemas = () => {
  // Remove dynamic schemas when component unmounts
  const dynamicSchemas = document.querySelectorAll('[id^="schema-"]');
  dynamicSchemas.forEach(schema => {
    if (schema.id !== 'schema-breadcrumb-dynamic') {
      schema.remove();
    }
  });
};
