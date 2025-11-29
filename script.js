// Translation system
const translations = {
    pt: {
        nav: {
            about: 'Sobre',
            skills: 'Skills',
            projects: 'Projetos',
            contact: 'Contato'
        },
        about: {
            title: 'Olá 👋, eu sou o Nelson',
            description: 'Sou um desenvolvedor Full Stack com foco em criar soluções web e mobile inteligentes, escaláveis e de alto impacto. Tenho experiência prática com Java, Spring Boot, React Native e outras tecnologias modernas, além de integração com APIs e serviços em nuvem. Sou movido pelo desafio de transformar ideias em sistemas funcionais, com código limpo, testes bem estruturados e automações eficientes.',
            button1: 'Ver meus trabalhos',
            button2: 'Vamos trocar ideia'
        },
        skills: {
            title: 'Tecnologias & Skills'
        },
        projects: {
            title: 'Projetos em destaque',
            view: 'Visualizar',
            project1: {
                title: 'Sistema de Landing Page',
                description: 'Um sistema de landing page responsivo e otimizado para a empresa Foton, que conta com um gerenciador de conteúdo para facilitar a atualização e manutenção do site.'
            },
            project2: {
                title: 'Siad FOU',
                description: 'Um projeto desenvolvido para prefeitura, com intuito de gerenciar obras da cidade, permitindo o controle de documentos, alvarás e imagens.'
            },
            project3: {
                title: 'Easy Talk',
                description: 'Plataforma de comunicação que permite a troca de mensagens por meio do Whatsapp por meio de um agente IA, facilitando a interação com os clientes.'
            },
            project4: {
                title: 'Doutor Agenda',
                description: 'Sistema de agendamento de consultas médicas, que permite o cadastro de médicos, pacientes e agendamentos, facilitando a gestão de consultas e horários.'
            },
            project5: {
                title: 'Relead',
                description: 'Sistema de gestão de pós-venda com automação de mensagens via WhatsApp, voltado para fidelização de clientes e aumento de vendas, oferecendo integrações, automação inteligente e relatórios estratégicos.'
            },
            project6: {
                title: 'Portal das Missões',
                description: 'Sistema completo que inclui portal público de notícias e painel administrativo para cadastro, edição e publicação de conteúdos, permitindo a gestão e organização das informações.'
            }
        },
        contact: {
            title: 'Vamos trabalhar juntos',
            description: 'Estou sempre interessado em novas oportunidades e projetos interessantes. Vamos discutir como podemos dar vida às suas ideias.'
        },
        footer: {
            rights: 'Todos os direitos reservados.'
        }
    },
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        about: {
            title: 'Hello 👋, I\'m Nelson',
            description: 'I\'m a Full Stack Developer focused on creating intelligent, scalable, and high-impact web and mobile solutions. I have practical experience with Java, Spring Boot, React Native, and other modern technologies, as well as API integration and cloud services. I\'m driven by the challenge of transforming ideas into functional systems, with clean code, well-structured tests, and efficient automations.',
            button1: 'View my work',
            button2: 'Let\'s chat'
        },
        skills: {
            title: 'Technologies & Skills'
        },
        projects: {
            title: 'Featured Projects',
            view: 'View',
            project1: {
                title: 'Landing Page System',
                description: 'A responsive and optimized landing page system for Foton company, featuring a content management system to facilitate site updates and maintenance.'
            },
            project2: {
                title: 'Siad FOU',
                description: 'A project developed for the city hall, aimed at managing city construction projects, allowing control of documents, permits, and images.'
            },
            project3: {
                title: 'Easy Talk',
                description: 'Communication platform that enables message exchange via WhatsApp through an AI agent, facilitating customer interaction.'
            },
            project4: {
                title: 'Doctor Schedule',
                description: 'Medical appointment scheduling system that allows registration of doctors, patients, and appointments, facilitating the management of consultations and schedules.'
            },
            project5: {
                title: 'Relead',
                description: 'Post-sales management system with WhatsApp message automation, focused on customer loyalty and sales growth, offering integrations, intelligent automation, and strategic reports.'
            },
            project6: {
                title: 'Portal das Missões',
                description: 'Complete system that includes a public news portal and administrative panel for content registration, editing, and publishing, enabling information management and organization.'
            }
        },
        contact: {
            title: 'Let\'s work together',
            description: 'I\'m always interested in new opportunities and interesting projects. Let\'s discuss how we can bring your ideas to life.'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    }
};

let currentLang = localStorage.getItem('language') || 'en';

function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language buttons active state
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Translate all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    translatePage(currentLang);
    
    // Language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile navigation
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navLinks.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });
    
    // Close mobile navigation when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // Reset hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
    
    // Smooth scrolling for navigation links
    navLinkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove shadow based on scroll position
        if (scrollTop > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-item, .project-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add typing effect to the main title (optional enhancement)
    const aboutTitle = document.querySelector('.about-title');
    if (aboutTitle) {
        const originalText = aboutTitle.textContent;
        aboutTitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                aboutTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn, .project-link, .contact-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn, .project-link, .contact-link {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);