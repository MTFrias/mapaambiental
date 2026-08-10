const CONSENT_KEY = 'mapaambiental-analytics-consent-v1';
const GA_MEASUREMENT_ID = 'G-7JEXZ9Z9S1';
const CLARITY_PROJECT_ID = 'xoy15nb6dj';

function ensureGtagQueue() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
}

function updateGoogleConsent(granted) {
  ensureGtagQueue();
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
}

function updateClarityConsent(granted) {
  if (typeof window.clarity !== 'function') return;
  window.clarity('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: granted ? 'granted' : 'denied'
  });
  if (!granted) window.clarity('consent', false);
}

function loadAnalytics() {
  if (window.__mapaAmbientalAnalyticsLoaded) {
    updateGoogleConsent(true);
    updateClarityConsent(true);
    return;
  }
  window.__mapaAmbientalAnalyticsLoaded = true;

  ensureGtagQueue();
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  updateGoogleConsent(true);
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });

  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);

  window.clarity = window.clarity || function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  updateClarityConsent(true);

  const clarityScript = document.createElement('script');
  clarityScript.async = true;
  clarityScript.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  document.head.appendChild(clarityScript);
}

function clearAnalyticsCookies() {
  document.cookie.split(';')
    .map(cookie => cookie.trim().split('=')[0])
    .filter(name => /^_(ga|gid|gat|clck|clsk)/.test(name))
    .forEach(name => {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname}; SameSite=Lax`;
    });
}

function setCookieConsent(choice) {
  const granted = choice === 'accepted';
  try { localStorage.setItem(CONSENT_KEY, choice); } catch (error) {}

  const banner = document.getElementById('cookieBanner');
  if (banner) banner.hidden = true;

  if (granted) {
    loadAnalytics();
  } else {
    updateGoogleConsent(false);
    updateClarityConsent(false);
    clearAnalyticsCookies();
  }
}

function openCookiePreferences() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  banner.hidden = false;
  document.getElementById('cookieReject')?.focus();
}

function ensureConsentStyles() {
  if (document.getElementById('analyticsConsentStyles')) return;
  const styles = document.createElement('style');
  styles.id = 'analyticsConsentStyles';
  styles.textContent = `
    #cookieBanner{position:fixed;z-index:10000;right:20px;bottom:20px;width:min(460px,calc(100vw - 40px));box-sizing:border-box;background:#fff;border:1px solid #c9d2c6;border-left:4px solid #2f5233;border-radius:4px;padding:18px;box-shadow:0 12px 36px rgba(28,43,34,.25);color:#1c2b22;font-family:'IBM Plex Sans',Arial,sans-serif}
    #cookieBanner[hidden]{display:none}
    #cookieBanner h2{margin:0 0 7px;font-family:'Fraunces',Georgia,serif;font-size:20px;font-weight:500}
    #cookieBanner p{margin:0;color:#4a5a50;font-size:12.5px;line-height:1.55}
    #cookieBanner .cookie-actions{display:flex;gap:10px;margin-top:15px}
    #cookieBanner .cookie-action{flex:1;min-height:40px;padding:9px 12px;border:1px solid #2f5233;border-radius:3px;background:#fff;color:#2f5233;font:600 12px 'IBM Plex Mono',monospace;cursor:pointer}
    #cookieBanner .cookie-action:hover{background:#e4ebe1}
    #cookieBanner .cookie-action.accept{background:#2f5233;color:#fff}
    .cookie-settings{margin-top:8px;padding:0;border:0;border-bottom:1px solid currentColor;background:transparent;color:#2f5233;font:600 11.5px 'IBM Plex Sans',Arial,sans-serif;cursor:pointer}
    @media(max-width:600px){#cookieBanner{right:12px;bottom:12px;width:calc(100vw - 24px);padding:16px}}
  `;
  document.head.appendChild(styles);
}

function ensureConsentControls() {
  if (!document.getElementById('cookieBanner')) return;
  ensureConsentStyles();

  const rejectButton = document.getElementById('cookieReject');
  if (rejectButton && !rejectButton.hasAttribute('onclick')) {
    rejectButton.addEventListener('click', () => setCookieConsent('rejected'));
  }
  const acceptButton = document.getElementById('cookieAccept') || document.querySelector('#cookieBanner .cookie-action.accept');
  if (acceptButton && !acceptButton.hasAttribute('onclick')) {
    acceptButton.addEventListener('click', () => setCookieConsent('accepted'));
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const footerCopy = document.querySelector('.footer-copy');
  if (footerCopy) footerCopy.textContent = `© ${new Date().getFullYear()} Mapa Ambiental`;

  ensureConsentControls();

  let consent = null;
  try { consent = localStorage.getItem(CONSENT_KEY); } catch (error) {}

  if (consent === 'accepted') loadAnalytics();
  else if (consent === 'rejected') setCookieConsent('rejected');
  else {
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.hidden = false;
  }
});
