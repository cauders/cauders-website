'use client';

import React, { useState } from 'react';

interface TechLogoProps {
  name: string;
  logoUrl?: string;
}

export default function TechLogo({ name, logoUrl }: TechLogoProps) {
  const [hasError, setHasError] = useState(false);

  const customUrlMap: Record<string, string> = {
    aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/azure/azure-original.svg',
    'microsoft azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/azure/azure-original.svg',
    salesforce: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/salesforce/salesforce-original.svg',
  };

  const slugMap: Record<string, string> = {
    'next.js': 'nextdotjs',
    'node.js': 'nodedotjs',
    'vue.js': 'vuedotjs',
    'react native': 'react',
    aws: 'amazonwebservices',
    gcp: 'googlecloud',
    'c#': 'csharp',
    'c++': 'cplusplus',
    'scikit-learn': 'scikitlearn',
    'power bi': 'powerbi',
    'tailwind css': 'tailwindcss',
    'google cloud': 'googlecloud',
  };

  const normalizedName = name.toLowerCase();
  const slug = slugMap[normalizedName] || normalizedName.replace(/[\s.]/g, '');
  const validLogoUrl =
    logoUrl && !logoUrl.includes('devicon/devicon-original.svg') ? logoUrl : undefined;
  const imageSrc =
    customUrlMap[normalizedName] || validLogoUrl || `https://cdn.simpleicons.org/${slug}`;

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-6 py-2 group">
      <div className="w-12 h-12 md:w-16 md:h-16 mb-3 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
        {!hasError ? (
          <img
            src={imageSrc}
            alt={name}
            width={32}
            height={32}
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
            loading="lazy"
            decoding="async"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="text-heading-card font-bold text-zinc-800 uppercase tracking-wider">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-white tracking-wide text-center whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
