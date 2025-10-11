export const profileData = {
    name: 'Bastian Rubio',
    role: 'Estudiante de Ingeniero en informática',
    location: 'Chile',
    // Datos para la sección Hero
    hero: {
        title: 'Hola, soy Bastián Rubio',
        subtitle: 'Estudiante de Ingeniero en informática',
        university: 'Duoc UC',
        description: `Apasionado por la programación y el análisis de datos. 
                        Manejo tecnologías como Python, JavaScript, Oracle SQL y Java. 
                        Me especializo en Ciencia de Datos y disfruto desarrollar proyectos que 
                        combinen automatización, bases de datos y soluciones web.
                        `,
        contactLink: 'https://www.linkedin.com/in/bastián-rubio-meneses/',
        projectsLink: '#proyectos' // O el link a tu repo de GitHub
    },
    // Datos para la sección Sobre Mí
    about: {
        title: 'Sobre mí',
        paragraphs: [
            `Me llamo Bastián Rubio, estudiante de Ingeniería Informática en Duoc UC. Apasionado por la tecnología y la programación, comenzando mi especialización en Ciencia de Datos el próximo año.`,
            `Tengo experiencia en Python, Oracle SQL y automatización de procesos. He participado en proyectos como mi práctica en Banco de Chile, donde desarrollé herramientas de validación con Python.`,
            `Me interesa el análisis de datos, machine learning y crear soluciones que resuelvan problemas reales. Siempre estoy aprendiendo nuevas tecnologías y buscando aplicar mis conocimientos en proyectos prácticos.`
        ]
    },
    // Datos para la sección de Experiencia
    experience: [
        {
            title: "Practicante Profesional",
            company: "Banco de Chile",
            period: "Diciembre 2023 — Enero 2024",
            description: `Desarrollo de programas para validación y modificación de mallas de control
                          utilizando Python. Participación en proyectos de gestión y análisis de datos
                          enfocados en Big Data, contribuyendo a la automatización de procesos y mejora continua.`
        }
    ],
    // Datos para la sección de Proyectos
    projects: [
        {
            title: 'Pastelería Mil Sabores Dulces',
            description: 'E-commerce completo para pastelería con carrito de compras, autenticación de usuarios, sistema de descuentos y blog integrado. Incluye usuarios de prueba con diferentes roles.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Authentication','Bootstrap'],
            github: 'https://github.com/BastianEd/MilSaboresDulces',
            demo: 'https://pasteleriamilsabores.netlify.app/',
            image: 'https://i.ibb.co/4nkWXDgf/pasteleria-mil-sabores.webp'
        },
        {
            title: 'GameZone - Tienda de Videojuegos',
            description: 'Aplicación web para tienda de videojuegos con catálogo de productos, filtros y diseño responsive. Proyecto académico desarrollado con tecnologías frontend modernas.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Authentication','Bootstrap'],
            github: 'https://github.com/BastianEd/Web_GameZon_Evaluacion_Uno',
            demo: 'https://gamezone-store.netlify.app/',
            image: 'https://i.ibb.co/rfwkfJH5/gamezone.webp'
        }
    ],
    // Links para redes sociales
    socials: [
        { name: 'github', url: 'https://github.com/BastianEd', label: 'GitHub' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/bastián-rubio-meneses/', label: 'LinkedIn' },
        { name: 'email', url: 'mailto:bastian.rubio.meneses@gmail.com', label: 'Email' } // Cambia a tu email
    ]
};