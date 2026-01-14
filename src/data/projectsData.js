
export const projectsData = [
    // New projects added (placeholders for image/link where no public URL exists)
    {
        title: "Finanzas Personales",
        description: "Producto full-stack para gestión financiera personal: cuentas, movimientos, deudas, presupuestos y reportes. Incluye importación bancaria y exportación de reportes.",
        image: "", // TODO: add image
        technologies: ["React", "TypeScript", "Vite", "Tailwind", "Node.js", "PostgreSQL", "Prisma", "Docker"],
        link: "", // TODO: add link
    },
    {
        title: "Autoseller",
        description: "Plataforma full-stack para gestión contable interna y de un predio de carros: cuentas/movimientos, consignaciones, cuentas por cobrar, activos y reportes.",
        image: "", // TODO: add image
        technologies: ["React", "TypeScript", "Vite", "Tailwind", "Node.js", "PostgreSQL", "Prisma", "Docker"],
        link: "", // TODO: add link
    },
    {
        title: "ChordLab",
        description: "App web de teoría musical (armonía, escalas y práctica) construida como proyecto personal. Frontend-only, con enfoque en experiencia interactiva.",
        image: "", // TODO: add image
        technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Zustand", "Tone.js"],
        stack: {
            details: "Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Zustand, Tone.js, next-i18next (i18n EN/ES), Vercel, Google AdSense, Vitest, Playwright, ESLint"
        },
        link: "", // TODO: add link
    },
    {
        title: "Prototipo App TutorMatch",
        description: "Aplicación para conectar estudiantes con tutores, desarrollada como prototipo para un proyecto universitario.",
        image: "/images/tutormatch.png",
        technologies: ["Kotlin", "FireBase"],
        link: "https://github.com/Vann06/TutorMatch"
    },
    {
        title: "Backend para aplicación CEC",
        description: "Utilizando TypeScript me encargué de crear el backend para el sistema de autenticación por medio de QR's",
        image: "/images/cec2024.png",
        technologies: ["TypeScript", "JavaScript"],
        link: "https://github.com/AGICE-CEC/server"
    },
    {
        title: "Sistema de Prestamo de Componentes Electrónicos",
        description: "Sistema para gestionar el préstamo de componentes electrónicos en la UVG, desarrollado con TS",
        image: "/images/componentes.png",
        technologies: ["TypeScript", "React"],
        link: "https://github.com/dlop6/prestamo-componentes-electronicos"
    }
]