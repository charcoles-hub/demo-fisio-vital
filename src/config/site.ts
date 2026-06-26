/* DEMO PORTFOLIO — Clínica de fisioterapia */

export const site = {
  name: "Fisio Vital",
  tagline: "Recupera tu movimiento, recupera tu vida",
  logoText: "Fisio Vital",
  whatsapp: "34600111222",
  email: "hola@fisiovital.es",
  formAccessKey: "TU-ACCESS-KEY-WEB3FORMS",

  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "Tratamientos", href: "#features" },
    { label: "Tarifas", href: "#pricing" },
    { label: "Pedir cita", href: "#contacto" },
  ],

  hero: {
    eyebrow: "Fisioterapia · Valencia",
    title: "Vuelve a moverte\nsin dolor",
    subtitle:
      "Tratamientos personalizados con fisioterapeutas colegiados. Primera valoración sin compromiso. Recupérate más rápido con un plan hecho para ti.",
    ctaPrimary: { label: "Pedir cita", href: "#contacto" },
    ctaSecondary: { label: "Ver tratamientos", href: "#features" },
    image: "",
  },

  featuresTitle: "Cómo te ayudamos",
  features: [
    { icon: "🦴", title: "Lesiones deportivas", text: "Vuelve a entrenar antes y mejor con recuperación guiada." },
    { icon: "💆", title: "Terapia manual", text: "Aliviamos contracturas, cervicales y dolor de espalda." },
    { icon: "🩺", title: "Rehabilitación", text: "Postoperatorio y recuperación funcional paso a paso." },
    { icon: "🧘", title: "Pilates terapéutico", text: "Refuerza tu cuerpo y previene futuras lesiones." },
  ],

  pricingTitle: "Tarifas claras",
  pricing: [
    { name: "Sesión suelta", price: "40€", period: "/sesión",
      features: ["45 min de tratamiento", "Valoración inicial", "Plan personalizado"],
      cta: "Reservar", highlight: false },
    { name: "Bono 5 sesiones", price: "175€", period: "",
      features: ["Ahorras 25€", "Seguimiento continuo", "Ejercicios para casa"],
      cta: "Comprar bono", highlight: true },
    { name: "Bono 10 sesiones", price: "320€", period: "",
      features: ["Ahorras 80€", "Plan de recuperación completo", "Revisión final incluida"],
      cta: "Comprar bono", highlight: false },
  ],

  cta: {
    title: "¿Empezamos tu recuperación?",
    subtitle: "Pide tu primera valoración. Te contestamos en menos de 24h.",
    button: { label: "Pedir cita", href: "#contacto" },
  },

  footer: {
    address: "Av. de la Salud 45, 46010 Valencia",
    phone: "+34 600 111 222",
    hours: "Lun–Vie · 08:00–20:00",
    social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/", tiktok: "" },
  },
} as const;

export type Site = typeof site;
