# Analytics Setup Documentation

## Current Analytics Configuration

### ✅ Vercel Analytics (Installed & Active)

The website currently uses Vercel's built-in analytics suite:

#### 1. **Vercel Analytics** (`@vercel/analytics`)
- **Version**: 1.5.0
- **Location**: `/src/app/[locale]/layout.tsx`
- **Features**:
  - Automatic pageview tracking
  - User engagement metrics
  - Traffic sources and referrers
  - Real-time visitor data
  - No configuration needed
  - GDPR compliant (no cookies)

#### 2. **Vercel Speed Insights** (`@vercel/speed-insights`)
- **Version**: 1.2.0
- **Location**: `/src/app/[locale]/layout.tsx`
- **Features**:
  - Core Web Vitals monitoring
  - Page load performance
  - Real user metrics (RUM)
  - Performance scoring
  - Automatic optimization suggestions

### 📊 Accessing Vercel Analytics

1. Go to [vercel.com](https://vercel.com)
2. Select your project
3. Click **Analytics** in the sidebar
4. View:
   - Pageviews and unique visitors
   - Top pages and referrers
   - User locations and devices
   - Performance metrics

---

## 🔧 Adding Google Analytics (GA4) - Optional

If you need more advanced tracking, you can add Google Analytics 4:

### Benefits of Adding GA4

- **Advanced Event Tracking**: Custom events, conversions, e-commerce
- **User Journey Analysis**: Detailed user flow and behavior paths
- **Demographics & Interests**: Age, gender, interests data
- **Google Ads Integration**: Campaign tracking and ROI analysis
- **Custom Reports**: Create custom dashboards and reports
- **Data Export**: Export data to BigQuery for analysis
- **Historical Data**: Keep data beyond Vercel's retention period

### Setup Steps for GA4

#### 1. Create Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Start measuring**
3. Create an account for "MyPeterinarian"
4. Create a property for "MyPeterinarian Website"
5. Select **Web** as the platform
6. Enter website details:
   - Website URL: `https://www.mypeterinarian.com`
   - Stream name: "MyPeterinarian Production"
7. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

#### 2. Install GA4 in Your Website

**Option A: Using next/script (Recommended)**

Add to `/src/app/[locale]/layout.tsx`:

```tsx
import Script from 'next/script';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang={locale}>
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        {/* existing content */}
      </body>
    </html>
  );
}
```

**Option B: Using react-ga4 package**

```bash
npm install react-ga4
```

Then create `/src/lib/analytics.ts`:

```typescript
import ReactGA from 'react-ga4';

export const initGA = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

export const logPageView = (url: string) => {
  ReactGA.send({ hitType: 'pageview', page: url });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
```

#### 3. Add Environment Variable

**Local Development (`.env.local`):**
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Production (Vercel):**
1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Your GA4 Measurement ID
   - **Environment**: Production, Preview, Development
4. Redeploy

#### 4. Track Custom Events (Optional)

Track specific user actions:

```typescript
// Track newsletter signup
logEvent('Newsletter', 'signup', email);

// Track contact form submission
logEvent('Contact', 'form_submit', name);

// Track button clicks
logEvent('CTA', 'click', 'Book Appointment');
```

#### 5. Configure Enhanced Measurement

In GA4 dashboard:
1. Go to **Admin** → **Data Streams**
2. Click your web stream
3. Enable **Enhanced Measurement**:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Video engagement
   - ✅ File downloads

---

## 📈 Analytics Comparison

| Feature | Vercel Analytics | Google Analytics 4 |
|---------|------------------|-------------------|
| Pageviews | ✅ | ✅ |
| Unique visitors | ✅ | ✅ |
| Traffic sources | ✅ | ✅ |
| Performance metrics | ✅ | ❌ |
| Custom events | ❌ | ✅ |
| User demographics | ❌ | ✅ |
| Conversion tracking | ❌ | ✅ |
| Google Ads integration | ❌ | ✅ |
| Custom reports | Basic | Advanced |
| Data export | ❌ | ✅ (BigQuery) |
| Privacy | GDPR compliant | Configurable |
| Setup complexity | Zero config | Moderate |
| Cost | Free (Vercel plan) | Free |

---

## 🎯 Recommendation

**For most small businesses:** Vercel Analytics is sufficient for basic tracking and requires zero configuration.

**Add Google Analytics if you need:**
- Google Ads campaign tracking
- Detailed user demographics
- Custom conversion goals
- Advanced reporting
- Data export for analysis

**Best Practice:** Use both! They complement each other:
- Vercel Analytics: Quick insights and performance
- Google Analytics: Deep analysis and marketing integration

---

## 🔒 Privacy Considerations

### Vercel Analytics
- No cookies used
- GDPR compliant by default
- No personal data collected
- Privacy-first approach

### Google Analytics
- Uses cookies for tracking
- Requires cookie consent banner (GDPR/CCPA)
- Consider anonymizing IP addresses
- Update privacy policy

**Recommended:** If adding GA4, also add a cookie consent banner:
- Use packages like `react-cookie-consent`
- Display before GA tracking starts
- Link to privacy policy

---

## 📊 Current Implementation

**File**: `/src/app/[locale]/layout.tsx` (lines 11-12)

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

// ... in the component:
<SpeedInsights />
<Analytics />
```

**Status**: ✅ Working and active on all pages

---

## 🚀 Next Steps

1. **If happy with Vercel Analytics**: No action needed - it's already working!

2. **If you want to add GA4**:
   - Create GA4 account and get Measurement ID
   - Add environment variable
   - Update layout.tsx with GA4 script
   - Add cookie consent banner
   - Update privacy policy

3. **Monitor your analytics**:
   - Vercel: [vercel.com/dashboard/analytics](https://vercel.com/dashboard)
   - GA4: [analytics.google.com](https://analytics.google.com)

---

## 📞 Support

- **Vercel Analytics**: [vercel.com/docs/analytics](https://vercel.com/docs/analytics)
- **Google Analytics**: [support.google.com/analytics](https://support.google.com/analytics)
- **Next.js + Analytics**: [nextjs.org/docs/app/building-your-application/optimizing/analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
