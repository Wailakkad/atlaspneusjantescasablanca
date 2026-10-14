import { BUSINESS_CONFIG } from '../config/business';
import { Language, TireProduct, RimProduct, CartItem, WorkshopService } from '../types';

/**
 * Checks if WhatsApp is properly configured with a non-placeholder number
 */
export function isWhatsAppConfigured(): boolean {
  return Boolean(
    BUSINESS_CONFIG.whatsappNumber &&
    BUSINESS_CONFIG.whatsappNumber.length >= 9 &&
    !BUSINESS_CONFIG.whatsappNumber.endsWith('000000') // Check for demo placeholder
  );
}

/**
 * Builds the direct WhatsApp API link with encoded message
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * WhatsApp message for Tire Quote
 */
export function buildTireQuoteMessage(
  tire: TireProduct,
  quantity: number = 4,
  withFitting: boolean = true,
  lang: Language = 'fr'
): string {
  const dimensionStr = `${tire.width}/${tire.aspectRatio} R${tire.diameter} ${tire.loadIndex}${tire.speedRating}`;
  const totalEstimated = tire.priceMAD * quantity;

  if (lang === 'ar') {
    return `السلام عليكم، أود الحصول على عرض سعر لـ ${quantity} إطارات من نوع ${tire.brand} ${tire.model} (المقاس: ${dimensionStr}).
السعر الإرشادي: ${totalEstimated} درهم.
${withFitting ? 'مع خدمة التركيب والموازنة بالورشة.' : 'بدون تركيب.'}
شكراً لتأكيد التوفر النهائي وموعد الزيارة.`;
  }

  return `Bonjour Atlas Pneus, je souhaite un devis pour ${quantity} pneus ${tire.brand} ${tire.model} (${dimensionStr}).
Prix estimatif : ${totalEstimated} DH.
${withFitting ? 'Souhait de montage et équilibrage au centre.' : 'Pneus seuls sans montage.'}
Merci de me confirmer la disponibilité du stock et les créneaux atelier disponibles.`;
}

/**
 * WhatsApp message for Rim Quote
 */
export function buildRimQuoteMessage(
  rim: RimProduct,
  vehicleName: string = '',
  quantity: number = 4,
  lang: Language = 'fr'
): string {
  const totalEstimated = rim.pricePerUnitMAD * quantity;

  if (lang === 'ar') {
    return `السلام عليكم، أود الاستفسار عن طقم جنوط ألومنيوم (4 جنوط) من نوع ${rim.brand} ${rim.model}، القطر ${rim.diameter} بوصة (اللون: ${rim.finish}).
${vehicleName ? `سيارتي هي: ${vehicleName}.` : 'يرجى تأكيد التوافق مع سيارتي.'}
السعر التقديري للطقم: ${totalEstimated} درهم.
شكراً لإفادتي بمدى التوفر وإمكانية التركيب.`;
  }

  return `Bonjour Atlas Pneus, je souhaite un devis pour un pack de ${quantity} jantes aluminium ${rim.brand} ${rim.model} en ${rim.diameter} pouces (Finition: ${rim.finish}, Entraxe: ${rim.pcd}).
${vehicleName ? `Mon véhicule : ${vehicleName}.` : 'Pouvez-vous confirmer la compatibilité avec mon véhicule ?'}
Estimation jeu complet : ${totalEstimated} DH.
Merci de confirmer la compatibilité et les disponibilités de pose.`;
}

/**
 * WhatsApp message for Search Dimension Quote
 */
export function buildDimensionSearchQuoteMessage(
  width: number | string,
  aspectRatio: number | string,
  diameter: number | string,
  speedOrLoad: string = '',
  lang: Language = 'fr'
): string {
  const dimension = `${width}/${aspectRatio} R${diameter} ${speedOrLoad}`.trim();

  if (lang === 'ar') {
    return `السلام عليكم، أبحث عن إطارات بمقاس: ${dimension}.
يرجى إفادتي بالعلامات التجارية المتوفرة لديكم، والأسعار الإجمالية بالدرهم مع التركيب والموازنة. شكراً.`;
  }

  return `Bonjour, je cherche des pneus en dimension ${dimension}.
Merci de me communiquer les marques disponibles en stock, le prix total en MAD, ainsi que les disponibilités pour le montage et l'équilibrage.`;
}

/**
 * WhatsApp message for Workshop Appointment
 */
export function buildServiceAppointmentMessage(
  service: WorkshopService,
  vehicleInfo: string = '',
  preferredDate: string = '',
  lang: Language = 'fr'
): string {
  if (lang === 'ar') {
    return `السلام عليكم، أود حجز موعد لخدمة: ${service.title.ar}
${vehicleInfo ? `نوع السيارة: ${vehicleInfo}` : ''}
${preferredDate ? `الموعد المفضل: ${preferredDate}` : ''}
شكراً لإفادتي بالمواعيد المتاحة والتكلفة المحددة.`;
  }

  return `Bonjour, je souhaite demander un rendez-vous pour : ${service.title.fr}
${vehicleInfo ? `Véhicule : ${vehicleInfo}` : ''}
${preferredDate ? `Créneau souhaité : ${preferredDate}` : ''}
Merci de me communiquer les disponibilités de l'atelier et le tarif indicatif.`;
}

/**
 * WhatsApp message for full Cart / Quote Summary
 */
export function buildCartQuoteMessage(
  items: CartItem[],
  subtotal: number,
  fittingFee: number,
  customerNotes: string = '',
  lang: Language = 'fr'
): string {
  const total = subtotal + fittingFee;
  const itemsTextFr = items
    .map(
      (item) =>
        `- ${item.quantity}x ${item.brand} ${item.name} (${item.spec}) = ${item.unitPriceMAD * item.quantity} DH ${
          item.withFitting ? '[+Montage souhaité]' : ''
        }`
    )
    .join('\n');

  if (lang === 'ar') {
    const itemsTextAr = items
      .map(
        (item) =>
          `- ${item.quantity}x ${item.brand} ${item.name} (${item.spec}) = ${item.unitPriceMAD * item.quantity} درهم`
      )
      .join('\n');

    return `السلام عليكم، أود تأكيد طلبي وعرض السعر من موقعكم:

${itemsTextAr}

المجموع الإرشادي: ${total} درهم.
${customerNotes ? `ملاحظات: ${customerNotes}` : ''}
شكراً لموافاتي بالتوفر النهائي وحجز الموعد بالدار البيضاء.`;
  }

  return `Bonjour Atlas Pneus, je souhaite valider mon devis préparé sur votre site :

${itemsTextFr}

Frais atelier estimés : ${fittingFee} DH
Total indicatif : ${total} DH
${customerNotes ? `Précisions : ${customerNotes}` : ''}

Merci de me confirmer la disponibilité des articles et les créneaux disponibles à l'atelier de Casablanca.`;
}
