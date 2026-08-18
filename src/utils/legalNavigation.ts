import { LegalDocType, legalDocList } from '../config/legalConfig';

/**
 * Gets the current legal document ID from query parameter `?legal=...`
 */
export function getCurrentLegalDocFromUrl(): LegalDocType | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const legalParam = params.get('legal');
  if (!legalParam) return null;

  const validDoc = legalDocList.find((doc) => doc.slug === legalParam);
  return validDoc ? validDoc.id : null;
}

export const getCurrentLegalDoc = getCurrentLegalDocFromUrl;

/**
 * Subscribes to legal navigation events and browser back/forward
 */
export function onLegalNavigate(callback: (doc: LegalDocType | null) => void): () => void {
  const handler = () => {
    callback(getCurrentLegalDocFromUrl());
  };

  window.addEventListener('popstate', handler);
  window.addEventListener('legalnavigation', handler);

  return () => {
    window.removeEventListener('popstate', handler);
    window.removeEventListener('legalnavigation', handler);
  };
}

/**
 * Builds the URL for a legal document respecting GitHub Pages base path
 */
export function buildLegalUrl(docType: LegalDocType): string {
  if (typeof window === 'undefined') return `?legal=${docType}`;
  const url = new URL(window.location.href);
  url.searchParams.set('legal', docType);
  // Clear any existing hash when switching legal pages
  url.hash = '';
  return url.pathname + url.search;
}

/**
 * Builds the URL to return to the landing home (or a specific section hash)
 */
export function buildHomeUrl(sectionHash?: string): string {
  if (typeof window === 'undefined') return sectionHash || './';
  const url = new URL(window.location.href);
  url.searchParams.delete('legal');
  const base = url.pathname;
  return sectionHash ? `${base}${sectionHash.startsWith('#') ? sectionHash : `#${sectionHash}`}` : base;
}

/**
 * Programmatically navigate to a legal document
 */
export function navigateToLegal(docType: LegalDocType, replace = false) {
  const newUrl = buildLegalUrl(docType);
  if (replace) {
    window.history.replaceState({ legal: docType }, '', newUrl);
  } else {
    window.history.pushState({ legal: docType }, '', newUrl);
  }
  // Dispatch custom popstate-like event so React components re-render immediately
  window.dispatchEvent(new Event('legalnavigation'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Programmatically return to home
 */
export function navigateToHome(sectionHash?: string) {
  const newUrl = buildHomeUrl(sectionHash);
  window.history.pushState({}, '', newUrl);
  window.dispatchEvent(new Event('legalnavigation'));
  if (sectionHash) {
    const el = document.querySelector(sectionHash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
