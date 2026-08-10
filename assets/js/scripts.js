document.querySelector(".footer-copy").textContent =
  `© ${new Date().getFullYear()} Mapa Ambiental`; 
 
 
const CONSENT_KEY = 'mapaambiental-analytics-consent-v1';

  function loadAnalytics(){
    if(window.__mapaAmbientalAnalyticsLoaded) return;
    window.__mapaAmbientalAnalyticsLoaded = true;

    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-7JEXZ9Z9S1';
    document.head.appendChild(gtagScript);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-7JEXZ9Z9S1');

    window.clarity = window.clarity || function(){ (window.clarity.q = window.clarity.q || []).push(arguments); };
    const clarityScript = document.createElement('script');
    clarityScript.async = true;
    clarityScript.src = 'https://www.clarity.ms/tag/xoy15nb6dj';
    document.head.appendChild(clarityScript);
  }

  function clearAnalyticsCookies(){
    document.cookie.split(';').map(cookie => cookie.trim().split('=')[0]).filter(name => {
      return /^_(ga|gid|gat|clck|clsk)/.test(name) || ['CLID', 'ANONCHK', 'MR', 'MUID'].includes(name);
    }).forEach(name => {
      document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax';
    });
  }

  function setCookieConsent(choice){
    try { localStorage.setItem(CONSENT_KEY, choice); } catch(error) {}
    const banner = document.getElementById('cookieBanner');
    if(banner) banner.hidden = true;
    if(choice === 'accepted') loadAnalytics();
    else clearAnalyticsCookies();
  }

  function openCookiePreferences(){
    const banner = document.getElementById('cookieBanner');
    if(banner) {
      banner.hidden = false;
      document.getElementById('cookieReject')?.focus();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    let consent = null;
    try { consent = localStorage.getItem(CONSENT_KEY); } catch(error) {}
    if(consent === 'accepted') loadAnalytics();
    else if(consent !== 'rejected') document.getElementById('cookieBanner').hidden = false;
  });
