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
            title: "Discover Data with Oracle Education Foundation",
            company: "Oracle Chile",
            period: "Septiembre 2022",
            description: `Participé en el programa Discover Data with Oracle Education Foundation, 
            donde adquirí conocimientos en análisis y manejo de datos utilizando tecnologías de Oracle.
             Esta experiencia me permitió fortalecer habilidades en bases de datos y 
             fundamentos de ciencia de datos.`

        },
        {
            title: "HP Innovation",
            company: "HP Chile",
            period: "Octubre 2023",
            description: `Desarrollador Front-end en Innovation Camp HP 2023, 
            encargado de diseñar y construir la interfaz de usuario de la aplicación 
            utilizando tecnologías web modernas. Colaboré en equipo para crear una 
            experiencia visual atractiva y funcional, contribuyendo al éxito del 
            proyecto que obtuvo el primer lugar.`
        },
        {
            title: "Practicante Profesional",
            company: "Banco de Chile",
            period: "Diciembre 2023 — Enero 2024",
            description: `Desarrollo de programas para validación y modificación de mallas de control
                          utilizando Python. Participación en proyectos de gestión y análisis de datos
                          enfocados en Big Data, contribuyendo a la automatización de procesos y mejora continua.`
        }
    ],
    //Certificaciones
    certifications: [
        {
            title: 'Introduction to Cybersecurity',
            issuer: 'Cisco',
            issueDate: '5/27/2025',
            credentialUrl: 'https://www.credly.com/earner/earned/badge/b375038e-3872-4ba3-9950-98838eea1921',
            badgeImage: 'assets/images/cyberseguridad.png'
        },
        {
            title: 'Artificial Intelligence Professional Certification - CAIPC®',
            issuer: 'Certiprof',
            issueDate: 'Date issued: October 11, 2025 | Expires: October 11, 2028',
            credentialUrl: 'https://www.credly.com/badges/3d60ff55-7d30-459b-a169-cc27f0a30ced/linked_in_profile',
            badgeImage: 'assets/images/blob.png'
        },
        {
            title: 'Python Essentials 1',
            issuer: 'Cisco',
            issueDate: '6/2/2024',
            credentialUrl: 'https://www.credly.com/earner/earned/badge/b92ee607-04e5-47c6-b33c-8353e7abdb05',
            badgeImage: 'assets/images/python.png'
        },
        {
            title: 'Introduction to Cloud',
            issuer: 'IBM Developer Skills Network',
            issueDate: 'Febrero 22, 2024',
            credentialUrl: 'https://courses.cognitiveclass.ai/certificates/2eb17cae793047c2974d06a9a16d301d',
            badgeImage: 'assets/images/ibm_logo.jpg'
        },
        {
            title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 9.3',
            issuer: 'Red Hat',
            issueDate: '9/19/2025',
            credentialUrl: 'https://www.credly.com/earner/earned/badge/7f6af487-c6d2-4fa0-8317-74e5a69c2155',
            badgeImage: 'assets/images/redhat.png'
        },
        {
            title: 'SQL and Relational Databases 101',
            issuer: 'IBM Developer Skills Network',
            issueDate: 'Septiembre 20, 2025',
            credentialUrl: 'https://courses.cognitiveclass.ai/certificates/298833c7b11b4daaafba23cbd1779652',
            badgeImage: 'assets/images/ibm_logo.jpg'
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
            image: 'assets/images/pasteleria-mil-sabores.webp'
        },
        {
            title: 'GameZone - Tienda de Videojuegos',
            description: 'Aplicación web para tienda de videojuegos con catálogo de productos, filtros y diseño responsive. Proyecto académico desarrollado con tecnologías frontend modernas.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Authentication','Bootstrap'],
            github: 'https://github.com/BastianEd/Web_GameZon_Evaluacion_Uno',
            demo: 'https://gamezone-store.netlify.app/',
            image: 'assets/images/gamezone.webp'
        }
    ],
    // Links para redes sociales
    socials: [
        { name: 'github', url: 'https://github.com/BastianEd', label: 'GitHub' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/bastián-rubio-meneses/', label: 'LinkedIn' },
    ]
};