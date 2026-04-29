import {
  BedDouble,
  Binoculars,
  Car,
  Coffee,
  ConciergeBell,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Mountain,
  Sparkles,
  TreePine,
  Users,
  Utensils,
} from "lucide-react";

export const brand = {
  name: "RUMBO CALAMUCHITA",
  location: "Santa Rosa de Calamuchita, Cordoba",
  // Reemplazar por el numero real con codigo de pais, sin + ni espacios. Ejemplo Argentina: 5493511234567
  whatsappNumber: "5493510000000",
  whatsappMessage: "Hola, quiero consultar disponibilidad para alojarme en Calamuchita.",
  // Reemplazar por el usuario real de Instagram.
  instagramUrl: "https://instagram.com/rumbo.calamuchita"
};

export function getWhatsAppUrl(message: string = brand.whatsappMessage) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = getWhatsAppUrl();

export const navigation = [
  { label: "Cabanas", href: "#cabanas" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Servicios", href: "#servicios" },
  { label: "Resenas", href: "#resenas" },
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
    slug: "cabana-serrana",
    name: "Cabana Serrana",
    description:
      "Una opcion calida y funcional para parejas o familias pequenas que quieren descansar cerca de la naturaleza sin resignar comodidad.",
    capacity: "2 a 4 personas",
    services: ["Cocina equipada", "Parrilla", "Wi-Fi", "Vista al entorno natural"],
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    // Reemplazar por fotos reales de la cabana.
    gallery: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
    ],
    whatsappMessage: "Hola, quiero consultar disponibilidad para Cabana Serrana en Calamuchita."
  },
  {
    slug: "refugio-del-valle",
    name: "Refugio del Valle",
    description:
      "Un alojamiento amplio para compartir en grupo, con espacios comodos y una ubicacion practica para recorrer el valle.",
    capacity: "4 a 6 personas",
    services: ["Ambientes amplios", "Ropa blanca", "Estacionamiento", "Espacio exterior"],
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1200&q=80",
    // Reemplazar por fotos reales de la cabana.
    gallery: [
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
    ],
    whatsappMessage: "Hola, quiero consultar disponibilidad para Refugio del Valle en Calamuchita."
  },
  {
    slug: "casa-de-descanso",
    name: "Casa de Descanso",
    description:
      "Una casa pensada para estadias tranquilas, con ambientes luminosos y acceso cercano a servicios y paseos.",
    capacity: "Hasta 5 personas",
    services: ["Living luminoso", "Calefaccion", "Cercania al centro", "Consultas flexibles"],
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    // Reemplazar por fotos reales de la cabana.
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    whatsappMessage: "Hola, quiero consultar disponibilidad para Casa de Descanso en Calamuchita."
  }
];

export const experiences = [
  {
    slug: "escapadas-romanticas",
    title: "Escapadas romanticas",
    description: "Planes tranquilos, detalles especiales y alojamientos con clima intimo.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    services: ["Detalles especiales", "Recomendaciones gastronomicas", "Alojamiento sugerido", "Asesoria por fecha"],
    whatsappMessage: "Hola, quiero consultar por una escapada romantica en Calamuchita.",
    icon: Heart
  },
  {
    slug: "viajes-familiares",
    title: "Viajes familiares",
    description: "Opciones comodas para compartir dias de descanso, rio y paseos cercanos.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
    ],
    services: ["Alojamientos familiares", "Balnearios cercanos", "Paseos simples", "Opciones para ninos"],
    whatsappMessage: "Hola, quiero consultar opciones para viajar en familia a Calamuchita.",
    icon: Users
  },
  {
    slug: "turismo-de-naturaleza",
    title: "Turismo de naturaleza",
    description: "Rutas serranas, caminatas, balnearios y rincones para reconectar.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    services: ["Caminatas", "Balnearios", "Rutas panoramicas", "Recomendaciones locales"],
    whatsappMessage: "Hola, quiero consultar por turismo de naturaleza en Calamuchita.",
    icon: Mountain
  },
  {
    slug: "fines-de-semana-largos",
    title: "Fines de semana largos",
    description: "Consultas rapidas para fechas de alta demanda y estadias cortas.",
    image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    services: ["Disponibilidad por fecha", "Estadias cortas", "Opciones flexibles", "Respuesta por WhatsApp"],
    whatsappMessage: "Hola, quiero consultar disponibilidad para un fin de semana largo en Calamuchita.",
    icon: Binoculars
  }
];

export const services = [
  {
    slug: "desayunos-artesanales",
    title: "Desayunos artesanales",
    description: "Desayunos regionales coordinados para sumar comodidad y un detalle especial a la estadia.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80"
    ],
    services: ["Desayuno", "Productos regionales", "Coordinacion previa", "Sujeto a disponibilidad"],
    whatsappMessage: "Hola, quiero consultar por desayunos artesanales para mi estadia en Calamuchita.",
    icon: Coffee
  },
  {
    slug: "pension-y-comidas",
    title: "Media pension y comidas",
    description: "Opciones de comida para resolver parte de la estadia con proveedores locales seleccionados.",
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80"
    ],
    services: ["Media pension", "Pension completa", "Menus a coordinar", "Proveedores externos"],
    whatsappMessage: "Hola, quiero consultar por media pension o comidas para mi estadia en Calamuchita.",
    icon: Utensils
  },
  {
    slug: "traslados-y-paseos",
    title: "Traslados y paseos",
    description: "Coordinacion de servicios externos para moverte con mas facilidad por el Valle de Calamuchita.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    services: ["Traslados", "Paseos", "Recomendaciones", "Coordinacion personalizada"],
    whatsappMessage: "Hola, quiero consultar por traslados y paseos en Calamuchita.",
    icon: Car
  },
  {
    slug: "limpieza-y-blanqueria",
    title: "Limpieza y blanqueria",
    description: "Servicios adicionales para estadias mas comodas, especialmente en viajes familiares o prolongados.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1200&q=80"
    ],
    services: ["Toallas", "Limpieza", "Ropa blanca", "Coordinacion previa"],
    whatsappMessage: "Hola, quiero consultar por limpieza, toallas o blanqueria para mi estadia.",
    icon: BedDouble
  }
];

export const reviews = [
  {
    name: "Mariana G.",
    text: "Nos ayudaron a encontrar una cabana hermosa para descansar. La atencion fue rapida, clara y muy amable.",
    rating: 5,
    source: "Google"
  },
  {
    name: "Lucas y Flor",
    text: "Fuimos un fin de semana largo y nos recomendaron una opcion perfecta para pareja. Todo muy cuidado.",
    rating: 5,
    source: "Instagram"
  },
  {
    name: "Carolina R.",
    text: "Viajamos en familia y nos orientaron con alojamiento y paseos cerca del rio. Muy buena experiencia.",
    rating: 5,
    source: "WhatsApp"
  }
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
