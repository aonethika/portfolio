export const projects = {
  hms: {
    title: "Hospital Management System",
    desc: "Role-based system for doctors, patients, and admin with appointment scheduling and dashboards.",

    theme: {
      bg: "from-gray-950 via-slate-900 to-gray-950",
      accent: "cyan-400",
      glow: "cyan-500/20",
    },

    images: [
      "/patientDash.png",
      "/adminDash.png",
      "/doctorDash.png",
    ],

    live: "http://13.206.89.129/auth/login",

    credentials: {
      email: "admin / doctor / patient login",
      password: "set during registration or admin setup",
    },

    features: [
      "Role-based dashboards (Admin / Doctor / Patient)",
      "Appointment & slot booking system",
      "Walk-in token management",
      "Prescription & patient history tracking",
      "Doctor schedule and availability management",
      "Real-time appointment status updates",
      "Admin control panel for hospital operations",
    ],
  },

   dentalClinic: {
    title: "Olive Dental Clinic",
    desc: "Minimal dental clinic system for appointment booking and basic admin/doctor management.",

    theme: {
      bg: "from-emerald-950 via-teal-900 to-black",
      accent: "emerald-400",
      glow: "emerald-500/20",
    },

    images: [
      "/oliveDentalHome.png",
    ],

    live: "https://olive-dental-home.vercel.app/",

    features: [
      "Patient appointment booking",
      "Doctor & admin management",
      "Daily booking overview",
      "Simple call-based booking",
      "Clean responsive UI",
    ],
  },

  fintrackr: {
    title: "FinTrackr - Personal Finance Tracker",
    desc: "Finance tracking app with analytics, income/expense management and charts.",

    theme: {
      bg: "from-black via-gray-900 to-black",
      accent: "green-400",
      glow: "green-500/20",
    },

    images: [
      "/finFlash.png",
      "/finDash.png",
    ],

    live: "https://fintrcker.netlify.app/",

    credentials: {
      email: "test@gmail.com",
      password: "password1234",
    },

    features: [
      "Personal income & expense tracking",
      "Category-wise expense management",
      "Monthly financial analysis and reports",
      "Interactive charts and spending insights",
      "Create groups and split shared expenses",
      "Equal and custom bill splitting",
      "Real-time balance tracking (who owes whom)",
      "Settle-up system for clearing group debts",
      "Unified dashboard for personal and group finances",
    ],
  },

  coffeeshop: {
  title: "Coffee House - Premium Coffee Shop UI",
  desc: "Aesthetic coffee shop website with smooth animations and a modern, cozy browsing experience.",

  theme: {
    bg: "from-[#3b2f2f] via-[#1e1e1e] to-black",
    accent: "amber-200",
    glow: "amber-300/20",
  },

  images: [
    "/brew-bean-title.png",
    "/brew-bean-home.png",
  ],

  live: "https://your-coffee-site.vercel.app/",

  features: [
    "Modern coffee shop UI with warm, cozy aesthetics",
    "Smooth animations using Framer Motion",
    "Responsive design optimized for mobile and desktop",
    "Interactive menu browsing experience",
    "Reusable component-based architecture (Next.js)",
    "Clean and minimal navigation flow",
    "Custom theme inspired by coffee tones and ambiance",
  ],
},

  shopnow: {
    title: "ShopNow - E-commerce UI",
    desc: "Modern ecommerce UI with product browsing and cart experience.",

    theme: {
      bg: "from-black via-red-950 to-black",
      accent: "rose-400",
      glow: "rose-500/20",
    },

    images: [
      "/shopNowFlash.png",
      "/shopNowDash.png",
    ],

    live: "https://shopnow-store.netlify.app/",

    credentials: {
      email: "user1@gmail.com",
      password: "1234",
    },

    features: [
      "Product listing with API integration",
      "Category-based product filtering",
      "Shopping cart management system",
      "Responsive ecommerce UI design",
      "Dynamic product detail pages",
      "Add to cart and quantity control",
      "Clean and modern shopping experience",
    ],
  },

  cakelounge: {
  title: "Cake Lounge - Cake Shop UI",
  desc: "Elegant cake shop website with a modern UI for browsing cakes and categories.",

  theme: {
    bg: "from-amber-900 via-rose-900 to-black",
    accent: "amber-300",
    glow: "amber-400/20",
  },

  images: [
    "/cakeLoungeTitle.png",
    "/cakeLoungeHome.png",
  ],

  live: "https://cake-lounge.vercel.app/",

  features: [
    "Modern cake shop UI with elegant design",
    "Product listing with categorized cake items",
    "Responsive layout for all screen sizes",
    "Reusable Next.js components architecture",
    "Smooth navigation and clean user experience",
    "Static frontend data handling without backend",
    "Chocolate-themed visual design system",
  ],
},

 
};