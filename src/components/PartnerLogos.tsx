'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/Skeleton'
import { partners } from '@/config/partners'

export function PartnerLogos() {
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
  })

  const handleImageLoad = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {partners.map((partner, index) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${partner.name}`}
          className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-brand-600 transition-colors group"
        >
          <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
            {loadingStates[index] && (
              <div className="absolute inset-6">
                <Skeleton className="w-full h-full" animation="wave" />
              </div>
            )}
            <div className={`relative ${index === 0 ? 'w-full h-full' : 'w-[70%] h-[70%]'}`}>
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                className={`object-contain group-hover:scale-105 transition-all duration-300 ${
                  loadingStates[index] ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-display text-xl font-bold mb-2">{partner.name}</h3>
            <p className="text-gray-600">{partner.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
