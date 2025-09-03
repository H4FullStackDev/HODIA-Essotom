    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu
    document.getElementById('menuBtn').addEventListener('click', () => {
      document.getElementById('mobileNav').classList.toggle('hidden');
    });

    // Theme switch (dark by default)
    const root = document.documentElement;
    document.getElementById('themeBtn').addEventListener('click', () => {
      root.classList.toggle('dark');
    });

    // Mailto form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const name = encodeURIComponent(fd.get('name'));
      const email = encodeURIComponent(fd.get('email'));
      const subject = encodeURIComponent(fd.get('subject'));
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${fd.get('message')}`);
      window.location.href = `mailto:dimitrihodia0@gmail.com?subject=${subject}&body=${body}`;
    });

    // i18n
    let lang = 'fr';
    const T = {
      fr: {
        nav_about:"À propos", nav_skills:"Compétences", nav_services:"Services", nav_projects:"Projets", nav_resume:"CV", nav_contact:"Contact",
        hero_tag:"Développeur Full-Stack", hero_title_1:"Spring Boot, Angular, PostgreSQL.", hero_title_2:"Des applis stables, rapides et maintenables.", hero_sub:"La résilience c'est transformer chaque défi en opportunité.",
        cta_projects:"Voir mes projets", cta_contact:"Me contacter",
        about_title:"À propos", about_tag:"Qui je suis et ce que je fais",
        about_p1:"Je m’appelle HODIA Essotom, développeur d’applications avec 2 ans d’expérience. Je conçois des logiciels modernes avec Spring Boot et Angular.",
        about_p2:"J’ai contribué à Compta Pro Art, utilisé par des milliers d’utilisateurs en Afrique, et j’évolue chez DATA School (Data24, Maroc) sur une plateforme de gestion scolaire adoptée par plus de 100 établissements.",
        about_p3:"J’interviens sur l’analyse des besoins, le développement, la maintenance et l’évolution continue, avec un souci de performance, sécurité et lisibilité du code.",
        skills_title:"Compétences", skills_tag:"Technos que j’utilise au quotidien",
        skills_front:"Frontend", skills_back:"Backend", skills_db:"Bases de données", skills_tools:"Outils", skills_lang:"Langues", skills_hobby:"Centres d’intérêt",
        services_title:"Services", services_tag:"Ce que je peux faire pour vous",
        s1_title:"Conception d’applications modernes", s1_desc:"De l’idée au déploiement, avec une architecture claire et des tests.",
        s2_title:"Sites web modernes", s2_desc:"Sites vitrines rapides, accessibles et responsive.",
        s3_title:"Montage vidéo", s3_desc:"Mises en forme propres pour présentations et réseaux.",
        s4_title:"Conception de logos", s4_desc:"Wordmarks simples et identités minimales pour démarrer vite.",
        s5_title:"Installation & maintenance", s5_desc:"Mise en place et suivi des outils informatiques.",
        projects_title:"Projets", projects_tag:"Sélection récente",
        p1_desc:"Application de comptabilité simplifiée. Django REST + Angular.",
        p2_desc:"Contribution maintenance et évolution. Spring Boot, Angular, PostgreSQL, Docker.",
        p3_desc:"Application de gestion des réquisitions et livraisons. Spring Boot, Angular, PostgreSQL.",
        p4_desc:"Site de services (formations, vente). Laravel + Angular + MySQL.",
        proj_live:"Site", proj_soon:"Lien à venir",
        resume_title:"Curriculum Vitae", resume_tag:"Version PDF à jour", resume_btn:"Télécharger mon CV",
        contact_title:"Contact", contact_tag:"Discutons de votre projet",
        f_name:"Nom", f_email:"Email", f_subject:"Sujet", f_message:"Message", f_send:"Envoyer", f_note:"Le bouton ouvre votre client mail (mailto).",
        footer_loc:"Basé à Lomé, Togo"
      },
      en: {
        nav_about:"About", nav_skills:"Skills", nav_services:"Services", nav_projects:"Projects", nav_resume:"Resume", nav_contact:"Contact",
        hero_tag:"Full-Stack Developer", hero_title_1:"Spring Boot, Angular, PostgreSQL.", hero_title_2:"Stable, fast and maintainable apps.",
        hero_sub:"Resilience means turning every challenge into opportunity.",
        cta_projects:"See my projects", cta_contact:"Contact me",
        about_title:"About", about_tag:"Who I am and what I do",
        about_p1:"I’m HODIA Essotom, a software developer with 2 years of experience. I build modern software with Spring Boot and Angular.",
        about_p2:"I contributed to Compta Pro Art, used by thousands across Africa, and I work on DATA School (Data24, Morocco), adopted by 100+ schools.",
        about_p3:"I cover requirements analysis, development, maintenance and continuous improvement with focus on performance, security and clean code.",
        skills_title:"Skills", skills_tag:"Technologies I use daily",
        skills_front:"Frontend", skills_back:"Backend", skills_db:"Databases", skills_tools:"Tools", skills_lang:"Languages", skills_hobby:"Interests",
        services_title:"Services", services_tag:"What I can do for you",
        s1_title:"Modern web applications", s1_desc:"From idea to deployment with clear architecture and tests.",
        s2_title:"Modern websites", s2_desc:"Fast, accessible and responsive.",
        s3_title:"Video editing", s3_desc:"Clean cuts for presentations and social.",
        s4_title:"Logo design", s4_desc:"Simple wordmarks and minimal identities.",
        s5_title:"Setup & maintenance", s5_desc:"Set up and maintain your tools.",
        projects_title:"Projects", projects_tag:"Recent work",
        p1_desc:"Simplified accounting app. Django REST + Angular.",
        p2_desc:"Maintenance and evolution. Spring Boot, Angular, PostgreSQL, Docker.",
        p3_desc:"Requisitions and deliveries management. Spring Boot, Angular, PostgreSQL.",
        p4_desc:"Services website (training, store). Laravel + Angular + MySQL.",
        proj_live:"Live", proj_soon:"Coming soon",
        resume_title:"Resume", resume_tag:"Latest PDF version", resume_btn:"Download my Resume",
        contact_title:"Contact", contact_tag:"Let's talk about your project",
        f_name:"Name", f_email:"Email", f_subject:"Subject", f_message:"Message", f_send:"Send", f_note:"This button opens your mail client (mailto).",
        footer_loc:"Based in Lomé, Togo"
      }
    };

    const applyI18n = () => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (T[lang] && T[lang][key]) el.textContent = T[lang][key];
      });
      document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr' : 'en');
    };

    document.getElementById('langBtn').addEventListener('click', () => {
      lang = lang === 'fr' ? 'en' : 'fr';
      applyI18n();
    });

    applyI18n();
    /* ====== Intersection Observer pour révéler les éléments ====== */
(function () {
    const els = Array.from(document.querySelectorAll("[data-animate]"));
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach(el => el.classList.add("in-view"));
      return;
    }
  
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger simple: on peut utiliser data-stagger-group pour échelonner
          const group = entry.target.getAttribute("data-stagger-group");
          if (group) {
            const groupEls = [...document.querySelectorAll(`[data-stagger-group="${group}"]:not(.in-view)`)];
            groupEls.forEach((el, i) => {
              el.style.transitionDelay = `${i * 80}ms`;
              el.classList.add("in-view");
            });
          } else {
            entry.target.classList.add("in-view");
          }
          // On n’observe plus l’élément, animation jouée une fois
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
  
    // Petite optimisation: éviter d’observer des éléments cachés
    els.forEach(el => {
      if (el.offsetParent !== null) io.observe(el);
    });
  
    // Optionnel: animation d’intro sur le héros
    window.addEventListener("load", () => {
      document.querySelectorAll("[data-intro]").forEach((el, i) => {
        el.style.transitionDelay = `${i * 90}ms`;
        el.classList.add("in-view");
      });
    });
  })();
  
