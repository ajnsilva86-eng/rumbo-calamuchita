import {
  BedDouble,
  Binoculars,
  Coffee,
  ConciergeBell,
  Heart,
  Home,
  Instagram,
  MapPin,
  MessageCircle,
  Mountain,
  Sparkles,
  TreePine,
  Users,
  Utensils,
  Waves
} from "lucide-react";

export const brand = {
  name: "RUMBO CALAMUCHITA",
  location: "Santa Rosa de Calamuchita, Córdoba",
  // Reemplazar por el numero real con codigo de pais, sin + ni espacios. Ejemplo Argentina: 5493511234567
  whatsappNumber: "5493546437157",
  whatsappMessage: "Hola, quiero consultar disponibilidad para alojarme en Santa Rosa de Calamuchita. Somos ___ personas y buscamos para las fechas ___.",
  // Reemplazar por el usuario real de Instagram.
  instagramUrl: "https://instagram.com/rumbo.calamuchita"
};

export const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
  brand.whatsappMessage
)}`;

export const navigation = [
  { label: "Cabanas", href: "#cabanas" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ubicacion", href: "#ubicacion" }
];

export const reasons = [
  {
    title: "Naturaleza",
    description: "Alojamientos pensados para descansar cerca del rio, las sierras y el aire puro del valle.",
    icon: TreePine
  },
  {
    title: "Ubicacion estrategica",
    description: "Santa Rosa de Calamuchita es un punto ideal para recorrer pueblos, balnearios y caminos serranos.",
    icon: MapPin
  },
  {
    title: "Atencion personalizada",
    description: "Te orientamos para elegir la opcion mas comoda segun tu fecha, grupo y estilo de viaje.",
    icon: ConciergeBell
  },
  {
    title: "Servicios adicionales",
    description: "Sumamos opciones para que tu escapada sea simple, cuidada y a tu medida.",
    icon: Sparkles
  }
];

export const cabins = [
  {
    name: "Cabana Serrana",
    capacity: "2 a 4 personas",
    services: ["Cocina equipada", "Parrilla", "Wi-Fi", "Vista al entorno natural"],
    // Reemplazar por una foto real de la cabana.
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Refugio del Valle",
    capacity: "4 a 6 personas",
    services: ["Ambientes amplios", "Ropa blanca", "Estacionamiento", "Espacio exterior"],
    // Reemplazar por una foto real de la cabana.
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Casa de Descanso",
    capacity: "Hasta 5 personas",
    services: ["Living luminoso", "Calefaccion", "Cercania al centro", "Consultas flexibles"],
    // Reemplazar por una foto real de la cabana.
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
  }
];

export const experiences = [
  {
    title: "Escapadas romanticas",
    description: "Planes tranquilos, detalles especiales y alojamientos con clima intimo.",
    icon: Heart
  },
  {
    title: "Viajes familiares",
    description: "Opciones comodas para compartir dias de descanso, rio y paseos cercanos.",
    icon: Users
  },
  {
    title: "Turismo de naturaleza",
    description: "Rutas serranas, caminatas, balnearios y rincones para reconectar.",
    icon: Mountain
  },
  {
    title: "Fines de semana largos",
    description: "Consultas rapidas para fechas de alta demanda y estadias cortas.",
    icon: Binoculars
  }
];

export const optionalServices = [
  { name: "Desayuno", icon: Coffee },
  { name: "Media pension", icon: Utensils },
  { name: "Pension completa", icon: Home },
  { name: "Toallas", icon: Waves },
  { name: "Limpieza", icon: Sparkles },
  { name: "Experiencias personalizadas", icon: BedDouble }
];

export const socialLinks = [
  {
    label: "Instagram",
    href: brand.instagramUrl,
    icon: Instagram
  },
  {
    label: "WhatsApp",
    href: whatsappUrl,
    icon: MessageCircle
  }
];
