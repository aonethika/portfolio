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
  shopnow: {
    title: "ShopNow - E-commerce UI",
    desc: "Modern ecommerce UI with product browsing and cart experience.",

    theme: {
      bg: "from-zinc-950 via-stone-900 to-black",
      accent: "rose-400",
      glow: "rose-500/20",
    },

    images: [
      "/shopNowFlash.png",
      "/shopNowDash.png",
    ],

    live: "#",

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
};