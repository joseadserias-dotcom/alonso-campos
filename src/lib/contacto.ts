// Datos de contacto de la firma. Fuente única: el Layout y las páginas de
// contacto los importan de aquí en vez de codificarlos a mano en cada sitio.

export const EMAIL = 'info@alonsoycamposadvisors.com';

/** Número en formato internacional sin signos, que es lo que exige wa.me. */
export const WHATSAPP_E164 = '34650513134';

/** El mismo número, formateado para mostrarlo. */
export const WHATSAPP_VISIBLE = '+34 650 513 134';

/** Enlace a WhatsApp, con texto inicial opcional. */
export const whatsappHref = (texto?: string) =>
  `https://wa.me/${WHATSAPP_E164}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

/**
 * Dirección de la sede, en una línea. Solo se localiza el país: el resto es
 * un nombre propio y se escribe igual en las dos versiones del sitio.
 */
export const DIRECCION_ES = 'Calle Santos Ovejero, 1 — 24008 León, España';
export const DIRECCION_EN = 'Calle Santos Ovejero, 1 — 24008 León, Spain';

/** Ficha de la sede en Google Maps. */
export const MAPA_HREF =
  'https://maps.google.com/?q=Calle+Santos+Ovejero+1,+24008+León,+España';
