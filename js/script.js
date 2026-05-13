const translations = {
      en: {
        'header.role': 'Software Developer · Computer Science Student · Tech Enthusiast',
        'header.location': 'San Lorenzo - Paraguay',
        'about.title': 'About me',
        'about.p1': 'Backend-oriented software developer passionate about building efficient, scalable, and maintainable applications. Experienced working with Python, Django, Express, Java, Docker, databases, and software testing, with a strong interest in system design.',
        'about.p2': 'Currently working at CLT as a Backend Developer, outsourced for Banco Continental, while also developing personal and academic projects focused on backend development and containerized applications.',
        'about.p3': 'Final-year Computer Science student at Facultad Politécnica – Universidad Nacional de Asunción.',
        'languages.title': 'Languages',
        'languages.spanish': 'Spanish - Native proficiency',
        'languages.english': 'English - Full professional proficiency',
        'work_experience.title': 'Work Experience',
        'work_experience.tech_label': 'Technologies:',
        'portfolio.title': 'Portfolio',
        'portfolio.todoapp.desc': 'Personal learning full-stack project: Node.js/Express + React, REST API design, JWT auth, Prisma, Docker, and env vars.',
        'skills.title': 'Skills',
        'skills.programming': 'Programming Languages',
        'skills.databases': 'Databases',
        'skills.tools': 'Tools and Frameworks',
        'skills.other': 'Other Skills',
        'education.title': 'Education',
        'certifications.title': 'Certifications',
        'download.button': 'Download PDF',

        // Education translations
        'education.b1': 'Facultad Politécnica – Universidad Nacional de Asunción',
        'education.p1': 'Computer Science Student (Currently in 5th Year)',
        'education.b2': 'Colegio Técnico Nacional de la Capital',
        'education.p2': 'Computer Technician (2018–2020)',
        'education.b3': 'CCPA – Centro Cultural Paraguayo Americano',
        'education.p3': 'English Language Studies (2019–2022)'
      },
      es: {
        'header.role': 'Desarrollador de Software · Estudiante de Ingeniería en Informática · Entusiasta de la Tecnología',
        'header.location': 'San Lorenzo - Paraguay',
        'about.title': 'Sobre mí',
        'about.p1': 'Soy desarrollador de software orientado a backend, apasionado por construir aplicaciones eficientes, escalables y mantenibles. Tengo experiencia trabajando con Python, Django, Express, Java, Docker, bases de datos y testing de software, con un fuerte interés en el diseño de sistemas.',
        'about.p2': 'Actualmente trabajo en CLT como Desarrollador Backend, subcontratado para Banco Continental, mientras desarrollo proyectos personales y académicos enfocados en el desarrollo backend y aplicaciones containerizadas.',
        'about.p3': 'Estudiante de Ingeniería en Informática en la Facultad Politécnica – Universidad Nacional de Asunción (Actualmente en 5to Año).',
        'languages.title': 'Idiomas',
        'languages.spanish': 'Español - Nativo',
        'languages.english': 'Inglés - Competencia profesional completa',
        'work_experience.title': 'Experiencia Laboral',
        'work_experience.tech_label': 'Tecnologías:',
        'portfolio.title': 'Portafolio',
        'portfolio.todoapp.desc': 'Proyecto personal para practicar full-stack: Node.js/Express + React, diseño de APIs REST, JWT, Prisma, Docker y variables de entorno.',
        'skills.title': 'Habilidades',
        'skills.programming': 'Lenguajes de Programación',
        'skills.databases': 'Bases de Datos',
        'skills.tools': 'Herramientas y Frameworks',
        'skills.other': 'Otras Habilidades',
        'education.title': 'Educación',
        'certifications.title': 'Certificaciones',
        'download.button': 'Descargar PDF',

        // Education translations
        'education.b1': 'Facultad Politécnica – Universidad Nacional de Asunción',
        'education.p1': 'Estudiante de Ingeniería en Informática (Actualmente en 5to Año)',
        'education.b2': 'Colegio Técnico Nacional de la Capital',
        'education.p2': 'Técnico en Informática (2018–2020)',
        'education.b3': 'CCPA – Centro Cultural Paraguayo Americano',
        'education.p3': 'Estudios del Lenguaje Inglés (2019–2022)'
      }
    };

    let currentLang = localStorage.getItem('language') || 'en';

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem('language', lang);
      
      // Update all elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
          element.innerHTML = translations[lang][key];
        }
      });
      
      // Update active button
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
      setLanguage(currentLang);
      
      // Add click event to language buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          setLanguage(btn.dataset.lang);
        });
      });
});