/**
 * Cauders Production Analytics & Conversion Event Dispatcher
 * Dispatches to LinkedIn Insight Tag (lintrk), Google Tag Manager (dataLayer), and CustomEvents
 */
export function trackConversion(eventName: string, data?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  // 1. LinkedIn Insight Tag Conversion Tracking
  try {
    if ((window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: 18844393 });
    }
  } catch {
    // Fail-safe
  }

  // 2. Google Tag Manager / GTM DataLayer
  try {
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...data,
      });
    }
  } catch {
    // Fail-safe
  }

  // 3. Native DOM CustomEvent for extensible analytics interception
  try {
    window.dispatchEvent(
      new CustomEvent('cauders:analytics', {
        detail: { event: eventName, data, timestamp: Date.now() },
      })
    );
  } catch {
    // Fail-safe
  }
}
