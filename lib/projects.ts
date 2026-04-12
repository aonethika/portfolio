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
      "Patient dashboard",
      "Doctor dashboard",
      "Admin control panel",
      "Appointment system",
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
      "Expense tracking",
      "Income management",
      "Analytics dashboard",
      "Monthly reports",
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
      "Product listing UI",
      "Cart system",
      "Responsive design",
      "API-ready structure",
    ],
  },
};