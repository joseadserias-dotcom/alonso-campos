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
