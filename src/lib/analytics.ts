// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}

/**
 * Track a custom event in Google Analytics
 * @param action - The action being tracked (e.g., 'click', 'submit', 'download')
 * @param category - The category of the event (e.g., 'engagement', 'form', 'navigation')
 * @param label - Optional label for additional context
 * @param value - Optional numeric value
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

/**
 * Track page views (for client-side navigation)
 * @param url - The URL being viewed
 * @param title - Optional page title
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: title,
    })
  }
}

/**
 * Track contact form submissions
 * @param inquiryType - The type of inquiry (products, services, etc.)
 */
export const trackContactFormSubmission = (inquiryType: string) => {
  trackEvent('submit', 'form', `contact_form_${inquiryType}`)
}

/**
 * Track product interest/clicks
 * @param productName - The name of the product
 */
export const trackProductClick = (productName: string) => {
  trackEvent('click', 'engagement', `product_${productName}`)
}

/**
 * Track service interest/clicks
 * @param serviceName - The name of the service
 */
export const trackServiceClick = (serviceName: string) => {
  trackEvent('click', 'engagement', `service_${serviceName}`)
}

/**
 * Track case study views
 * @param industry - The industry/sector
 */
export const trackCaseStudyView = (industry: string) => {
  trackEvent('view', 'engagement', `case_study_${industry}`)
}

/**
 * Track CTA button clicks
 * @param ctaLabel - The label/text of the CTA
 * @param location - Where the CTA is located (e.g., 'hero', 'footer')
 */
export const trackCTAClick = (ctaLabel: string, location: string) => {
  trackEvent('click', 'cta', `${location}_${ctaLabel}`)
}

/**
 * Track phone number clicks
 */
export const trackPhoneClick = () => {
  trackEvent('click', 'contact', 'phone_number')
}

/**
 * Track email clicks
 */
export const trackEmailClick = () => {
  trackEvent('click', 'contact', 'email_address')
}

/**
 * Track external link clicks
 * @param url - The external URL
 * @param linkText - The link text/label
 */
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('click', 'external_link', `${linkText}_${url}`)
}

/**
 * Track file downloads
 * @param fileName - The name of the file
 */
export const trackDownload = (fileName: string) => {
  trackEvent('download', 'engagement', fileName)
}
