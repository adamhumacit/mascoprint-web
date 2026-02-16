# Google Analytics Implementation

## ✅ Implementation Complete

Google Analytics 4 has been successfully integrated into the Mascoprint website with comprehensive event tracking.

## 📁 Files Created/Modified

### New Files Created

1. **`src/components/analytics/GoogleAnalytics.tsx`**
   - Client component that loads GA4 script
   - Only renders when `NEXT_PUBLIC_GA_ID` is set
   - Uses Next.js Script component with `afterInteractive` strategy for optimal performance

2. **`src/lib/analytics.ts`**
   - Comprehensive event tracking utilities
   - Type-safe wrapper functions for common events
   - Includes tracking for:
     - Page views
     - Contact form submissions
     - Product/service clicks
     - Case study views
     - CTA button clicks
     - Phone/email clicks
     - External link clicks
     - File downloads

3. **`src/components/contact/ContactInfo.tsx`**
   - Client component for contact information
   - Tracks phone and email clicks on contact page

### Modified Files

4. **`src/app/layout.tsx`**
   - Added GoogleAnalytics component to body
   - GA script loads on all pages automatically

5. **`src/components/layout/Header.tsx`**
   - Added tracking for phone/email clicks in desktop nav
   - Added tracking for phone/email clicks in mobile menu

6. **`src/components/layout/Footer.tsx`**
   - Converted to client component
   - Added tracking for phone/email clicks
   - Added tracking for social media links (Twitter, YouTube)

7. **`src/app/contact/page.tsx`**
   - Refactored to use ContactInfo component with tracking

8. **`src/components/ContactForm.tsx`**
   - Added tracking for successful form submissions
   - Added tracking for form errors

## 🚀 Setup Instructions

### 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property (if you don't have one)
3. Get your measurement ID (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

Add your GA measurement ID to `.env.local`:

```bash
# Copy from .env.example if you haven't already
cp .env.example .env.local

# Edit .env.local and add your GA ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Deploy

The GA tracking is already integrated. Once you add the measurement ID:

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

## 📊 Events Being Tracked

### Automatic Events
- **Page views** - All page navigation
- **Session tracking** - User sessions and engagement

### Custom Events Implemented

#### Contact Interactions
- **Phone clicks** - When users click phone numbers
  - Event: `click` | Category: `contact` | Label: `phone_number`
  - Locations: Header, Footer, Contact page

- **Email clicks** - When users click email addresses
  - Event: `click` | Category: `contact` | Label: `email_address`
  - Locations: Header, Footer, Contact page

#### Form Tracking
- **Contact form submission (success)** - When form submits successfully
  - Event: `submit` | Category: `form` | Label: `contact_form_success`

- **Contact form error** - When form submission fails
  - Event: `error` | Category: `form` | Label: `contact_form_error`

#### Social Media
- **Twitter link click**
  - Event: `click` | Category: `external_link` | Label: `Twitter_https://twitter.com/mascoprint`

- **YouTube link click**
  - Event: `click` | Category: `external_link` | Label: `YouTube_https://youtube.com/@mascoprint`

### Available Tracking Functions

You can add more custom tracking using these utility functions:

```typescript
import {
  trackEvent,              // Generic event tracking
  trackPageView,          // Manual page view tracking
  trackContactFormSubmission, // Form submissions
  trackProductClick,      // Product interest
  trackServiceClick,      // Service interest
  trackCaseStudyView,     // Case study views
  trackCTAClick,          // Call-to-action buttons
  trackPhoneClick,        // Phone number clicks
  trackEmailClick,        // Email clicks
  trackExternalLink,      // External links
  trackDownload,          // File downloads
} from '@/lib/analytics'
```

## 📈 Viewing Analytics Data

1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property
3. Navigate to:
   - **Reports > Engagement > Events** - See all custom events
   - **Reports > Engagement > Pages and screens** - See page views
   - **Reports > User > Demographics** - User information
   - **Realtime** - See live traffic

## 🎯 Recommended Custom Reports

In GA4, create custom explorations to track:

1. **Contact Funnel**
   - Page view → Phone/Email click → Form submission

2. **Product Interest**
   - Pages visited → Product clicks → Contact form

3. **Traffic Sources**
   - Where users come from → What they click → Conversion

## 🔒 Privacy & GDPR Compliance

The current implementation:
- ✅ Uses standard GA4 tracking
- ✅ Respects browser Do Not Track settings (GA4 handles this)
- ⚠️ **TODO for production**: Add cookie consent banner

### Adding Cookie Consent (Optional)

For GDPR compliance, consider adding:
- Cookie consent banner
- Ability to opt-out of tracking
- Cookie policy page

Popular libraries:
- [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent)
- [cookieyes](https://www.cookieyes.com/)

## 🧪 Testing

### Verify GA is Working

1. **During development:**
   ```bash
   npm run dev
   ```
   - Open browser DevTools → Network tab
   - Filter for "google-analytics"
   - You should see requests to `www.google-analytics.com`

2. **Check Realtime reports:**
   - Go to GA4 → Realtime report
   - Visit your site
   - You should see yourself in the realtime view

3. **Test events:**
   - Click phone number → Check GA4 Events
   - Click email → Check GA4 Events
   - Submit contact form → Check GA4 Events
   - Click social media links → Check GA4 Events

### Debug Mode

To enable GA4 debug mode, add to your browser console:
```javascript
window.gtag('config', 'G-XXXXXXXXXX', { debug_mode: true })
```

Or use the [Google Analytics Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)

## 📝 Next Steps

1. ✅ **Get GA4 measurement ID** - Create GA4 property
2. ✅ **Add to .env.local** - Configure environment variable
3. ⏳ **Deploy to production** - GA will start collecting data
4. ⏳ **Wait 24-48 hours** - GA needs time to collect data
5. ⏳ **Create custom reports** - Set up dashboards in GA4
6. 🔄 **Optional: Add cookie consent** - For GDPR compliance

## 🆘 Troubleshooting

**GA not showing data?**
- Check `NEXT_PUBLIC_GA_ID` is set in `.env.local`
- Verify measurement ID format: `G-XXXXXXXXXX`
- Clear browser cache and reload
- Check browser console for errors
- Wait 24-48 hours for data to appear in reports

**Events not tracked?**
- Open DevTools → Console
- Look for gtag errors
- Verify window.gtag is defined
- Check Network tab for analytics calls

**Measurement ID not found?**
- Ensure environment variable starts with `NEXT_PUBLIC_`
- Restart dev server after adding env vars
- Check build includes the env var

## 📚 Additional Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [GA4 Best Practices](https://support.google.com/analytics/answer/9267735)

---

**Implementation Date**: February 16, 2026
**Status**: ✅ Complete - Ready for production with GA ID
