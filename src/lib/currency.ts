import { BUSINESS_CONFIG } from '../config/business';
import { Language } from '../types';

/**
 * Format a number into Moroccan Dirham (MAD / DH)
 * Tabular numerals friendly
 */
export function formatMAD(amount: number, lang: Language = 'fr'): string {
  const formattedNumber = new Intl.NumberFormat(lang === 'ar' ? 'ar-MA' : 'fr-FR', {
    maximumFractionDigits: 0,
  }).format(amount);

  if (lang === 'ar') {
    return `${formattedNumber} ${BUSINESS_CONFIG.currency.nameAr}`;
  }
  return `${formattedNumber} ${BUSINESS_CONFIG.currency.symbol}`;
}
