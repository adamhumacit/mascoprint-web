'use client'

import { trackPhoneClick, trackEmailClick } from '@/lib/analytics'

export function ContactInfo() {
  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Address */}
      <div className="relative group">
        <div className="absolute -top-3 -left-3 text-7xl font-bold text-brand-600/5 leading-none pointer-events-none">
          01
        </div>
        <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
          <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold mb-4">Address</h3>
          <div className="space-y-1 text-gray-600">
            <p className="font-semibold">Mascoprint Developments Ltd</p>
            <p>Stags End Cottage Barn</p>
            <p>Gaddesden Row</p>
            <p>Hemel Hempstead</p>
            <p>Hertfordshire</p>
            <p>HP2 6HN</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-1 text-sm text-gray-500">
            <p>VAT: GB 196 9926 85</p>
            <p>Company No: 1040660</p>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="relative group">
        <div className="absolute -top-3 -left-3 text-7xl font-bold text-brand-600/5 leading-none pointer-events-none">
          02
        </div>
        <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
          <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold mb-4">Phone</h3>
          <a
            href="tel:+441582791190"
            onClick={trackPhoneClick}
            className="text-lg text-brand-600 hover:text-brand-700 font-semibold transition-colors"
          >
            +44 (0)1582 791190
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="relative group">
        <div className="absolute -top-3 -left-3 text-7xl font-bold text-brand-600/5 leading-none pointer-events-none">
          03
        </div>
        <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-600 transition-colors">
          <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold mb-4">Email</h3>
          <a
            href="mailto:office@mascoprint.co.uk"
            onClick={trackEmailClick}
            className="text-lg text-brand-600 hover:text-brand-700 font-semibold transition-colors break-all"
          >
            office@mascoprint.co.uk
          </a>
        </div>
      </div>
    </div>
  )
}
