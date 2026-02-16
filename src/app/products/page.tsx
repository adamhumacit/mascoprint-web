'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Skeleton } from '@/components/ui/Skeleton'

const products = [
  {
    id: 'cp12',
    number: '01',
    title: 'CP12 Printing Machine',
    description: 'A bench mounted semi-automatic cylindrical screen printing machine capable of printing on diverse items. Handles both rigid and flexible products including pens, thermometers, tubes, hoses, plastic bottles, glass jars, mugs, alloy cans, ice buckets, and fire extinguishers.',
    features: [
      'Semi-automatic operation',
      'Cylindrical screen printing',
      'Suitable for rigid and flexible products',
      'Adjustable for various diameters',
      'Precision printing capabilities',
    ],
    images: [
      '/images/products/cp12-2.png',
      '/images/products/cp12-1.jpg',
      '/images/products/cp12-3.png',
      '/images/products/cp12-4.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/w5FGew6sOk8',
    datasheetUrl: 'https://mascoprint.co.uk/wp-content/uploads/2023/05/Mascoprint-CP12-Data-sheet.pdf',
  },
  {
    id: 'tampograf',
    number: '02',
    title: 'Tampograf Pad Printers',
    description: 'A range of modular machines which can satisfy all the demands of the users of pad printing. Excel at printing onto uneven surfaces, making them ideal for three-dimensional objects like golf balls and pens.',
    features: [
      'Modular design',
      'Suitable for 3D objects',
      'Multiple models available',
      'Excellent for uneven surfaces',
      'High precision pad printing',
    ],
    models: [
      { name: 'TG150', image: '/images/products/tg150.jpg' },
      { name: 'TG30', image: '/images/products/tg30.jpg' },
      { name: 'TG80135', image: '/images/products/tg80135.jpg' },
      { name: 'TG80', image: '/images/products/tg80.jpg' },
    ],
    images: [
      '/images/products/tg150.jpg',
      '/images/products/tg30.jpg',
      '/images/products/tg80135.jpg',
      '/images/products/tg80.jpg',
    ],
    videoUrl: null,
    datasheetUrl: null,
  },
  {
    id: 'hand-bases',
    number: '03',
    title: 'Custom-Built Hand Bases',
    description: 'Bespoke wooden hand bases designed for short-run articles and r&d work. These are custom-made products requiring direct contact for specifications and pricing.',
    features: [
      'Custom designed to specification',
      'Wooden construction',
    ],
    images: [],
    videoUrl: null,
    datasheetUrl: null,
  },
]

function ProductGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [imageLoading, setImageLoading] = useState(true)
  const [thumbnailsLoading, setThumbnailsLoading] = useState<Record<number, boolean>>({})

  if (images.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border-2 border-gray-200 group">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <Skeleton className="w-full h-full rounded-lg" animation="wave" />
          </div>
        )}
        <Image
          src={images[selectedImage]}
          alt={`Product image ${selectedImage + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
          className={`object-contain p-8 group-hover:scale-105 transition-all duration-500 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoading(false)}
          priority={selectedImage === 0}
        />
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedImage(index)
                setImageLoading(true)
              }}
              className={`relative h-24 bg-gray-50 rounded-lg border-2 transition-all overflow-hidden ${
                selectedImage === index
                  ? 'border-brand-600 ring-2 ring-brand-200 scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {thumbnailsLoading[index] !== false && (
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <Skeleton className="w-full h-full rounded" animation="wave" />
                </div>
              )}
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, 150px"
                className={`object-contain p-2 transition-opacity duration-300 ${
                  thumbnailsLoading[index] !== false ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setThumbnailsLoading(prev => ({ ...prev, [index]: false }))}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProductSection({ product, index }: { product: typeof products[0], index: number }) {
  const [showVideo, setShowVideo] = useState(false)

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showVideo) {
        setShowVideo(false)
      }
    }

    if (showVideo) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showVideo])

  const isEven = index % 2 === 0

  return (
    <div className="relative">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative ${isEven ? '' : 'lg:grid-flow-dense'}`}>
        {/* Image Gallery */}
        {product.images.length > 0 ? (
          <div className={isEven ? '' : 'lg:col-start-2'}>
            <ProductGallery images={product.images} />

            {/* Video Button */}
            {product.videoUrl && (
            <>
              <div className="mt-6">
                <button
                  onClick={() => setShowVideo(true)}
                  className="w-full py-4 px-6 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-600/25"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  See the CP12 in Action
                </button>
              </div>

              {/* Video Modal */}
              {showVideo && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                  onClick={() => setShowVideo(false)}
                >
                  <div
                    className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowVideo(false)}
                      className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                      aria-label="Close video"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <iframe
                      src={product.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </>
            )}

            {/* Model Variations */}
            {product.models && (
            <div className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl">
              <h4 className="font-display font-bold text-lg mb-4">Available Models</h4>
              <div className="flex flex-wrap gap-3">
                {product.models.map((model) => (
                  <span
                    key={model.name}
                    className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg text-sm font-semibold hover:border-brand-600 transition-colors"
                  >
                    {model.name}
                  </span>
                ))}
              </div>
            </div>
            )}
          </div>
        ) : (
          <div className={`hidden lg:block ${isEven ? '' : 'lg:col-start-2'}`} />
        )}

        {/* Product Details */}
        <div className={`flex flex-col space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {product.title}
            </h2>
          </div>

          <div className="h-1 w-16 bg-brand-600 rounded-full" />

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div>
            <h3 className="font-display font-bold text-2xl mb-6">
              Key Features
            </h3>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 space-y-4">
            {product.datasheetUrl && (
              <a
                href={product.datasheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="lg" variant="outline" className="w-full border-2 text-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Datasheet
                </Button>
              </a>
            )}
            <Button href="/contact" size="lg" className="w-full bg-brand-600 hover:bg-brand-700 text-white border-0 text-lg font-semibold shadow-lg shadow-brand-600/25">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/[0.02] via-brand-600/[0.01] to-slate-900/[0.02]" />
        <Container>
          <div className="max-w-4xl relative">
            <div className="inline-block px-4 py-1.5 bg-brand-600/10 border border-brand-600/20 rounded-full mb-6">
              <span className="text-sm font-bold text-brand-700 tracking-wide uppercase">
                Equipment
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
              Our
              <br />
              <span className="text-brand-600">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              High-quality screen and pad printing equipment for industrial applications, from semi-automatic cylindrical printers to custom-built solutions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Product Sections */}
      <Section spacing="lg">
        <Container>
          <div className="space-y-32">
            {products.map((product, index) => (
              <ProductSection key={product.id} product={product} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section spacing="lg">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-12 py-20 text-center">
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }}
            />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Need Help Choosing?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Our expert team can help you select the perfect printing solution for your specific requirements.
              </p>
              <Button href="/contact" size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-xl shadow-brand-600/25">
                Get Expert Advice
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
