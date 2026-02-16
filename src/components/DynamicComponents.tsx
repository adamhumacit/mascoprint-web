'use client'

import dynamic from 'next/dynamic'

// Lazy load components that aren't immediately visible
export const DynamicContactForm = dynamic(
  () => import('./ContactForm').then(mod => ({ default: mod.ContactForm })),
  {
    loading: () => (
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-12 h-[600px] flex items-center justify-center">
        <div className="animate-pulse text-white">Loading form...</div>
      </div>
    ),
    ssr: false, // Don't render on server for forms with state
  }
)

export const DynamicPartnerLogos = dynamic(
  () => import('./PartnerLogos').then(mod => ({ default: mod.PartnerLogos })),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-200 animate-pulse h-64 rounded-2xl" />
        ))}
      </div>
    ),
  }
)
