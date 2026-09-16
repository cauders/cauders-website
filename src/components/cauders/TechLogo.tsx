'use client';

import React, { useState } from 'react';

interface TechLogoProps {
 name: string;
}

export default function TechLogo({ name }: TechLogoProps) {
 const [hasError, setHasError] = useState(false);
 
 // Map common tech names to simpleicons slugs
 const slugMap: Record<string, string> = {
 'next.js': 'nextdotjs',
 'node.js': 'nodedotjs',
 'vue.js': 'vuedotjs',
 'react native': 'react',
 'aws': 'amazonaws',
 'gcp': 'googlecloud',
 'c#': 'csharp',
 'c++': 'cplusplus',
 'scikit-learn': 'scikitlearn',
 'power bi': 'powerbi',
 'tailwind css': 'tailwindcss',
 'google cloud': 'googlecloud',
 };

 const normalizedName = name.toLowerCase();
 const slug = slugMap[normalizedName] || normalizedName.replace(/[\s\.]/g, '');

 return (
 <div className="flex flex-col items-center justify-center px-4 md:px-6 py-2 group">
 <div className="w-12 h-12 md:w-16 md:h-16 mb-3 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
 {!hasError ? (
 <img 
 src={`https://cdn.simpleicons.org/${slug}`}
 alt={name}
 className="w-6 h-6 md:w-8 md:h-8 object-contain"
 onError={() => setHasError(true)}
 />
 ) : (
 <span className="text-heading-card font-bold text-zinc-800 uppercase tracking-wider">
 {name.charAt(0)}
 </span>
 )}
 </div>
 <span className="text-sm font-medium text- tracking-wide text-center whitespace-nowrap">
 {name}
 </span>
 </div>
 );
}
