const translations = {
      en: {
        'header.role': 'Junior Software Developer · Computer Science Student · Tech Enthusiast',
        'header.location': 'San Lorenzo - Paraguay',
        'about.title': 'About me',
        'about.p1': 'I am a Computer Science student at Facultad Politécnica – Universidad Nacional de Asunción, with a strong foundation in <strong>programming</strong>, <strong>databases</strong>, <strong>software testing</strong>, <strong>data analysis</strong>, and <strong>problem-solving</strong>. I am passionate about software development, continuous learning, and building efficient, scalable, and maintainable applications.',
        'about.p2': 'Currently, I am developing academic and personal projects using Python, Django, and Docker, while strengthening my skills in Software Testing and DevOps practices.',
        'languages.title': 'Languages',
        'languages.spanish': 'Spanish - Native proficiency',
        'languages.english': 'English - Full professional proficiency',
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
        'header.role': 'Desarrollador de Software Junior · Estudiante de Ingeniería en Informática · Entusiasta de la Tecnología',
        'header.location': 'San Lorenzo - Paraguay',
        'about.title': 'Sobre mí',
        'about.p1': 'Soy estudiante de Ingeniería en Informática en la Facultad Politécnica – Universidad Nacional de Asunción, con una sólida base en <strong>programación</strong>, <strong>bases de datos</strong>, <strong>testing de software</strong>, <strong>análisis de datos</strong> y <strong>resolución de problemas</strong>. Me apasiona el desarrollo de software, el aprendizaje continuo y la construcción de aplicaciones eficientes, escalables y mantenibles.',
        'about.p2': 'Actualmente, estoy desarrollando proyectos académicos y personales utilizando Python, Django y Docker, mientras fortalezco mis habilidades en Testing de Software y prácticas DevOps.',
        'languages.title': 'Idiomas',
        'languages.spanish': 'Español - Nativo',
        'languages.english': 'Inglés - Competencia profesional completa',
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