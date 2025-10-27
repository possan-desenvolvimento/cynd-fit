// Configurações - ALTERE AQUI OS DADOS DA REVENDEDORA
const CONFIG = {
    whatsapp: {
        phone: "5511999999999", // Número com DDD (substitua pelo real)
        message: "Olá! Gostaria de saber mais sobre os produtos Herbalife da Cynd-Fit."
    },
    instagram: "cynd.fit", // @ do Instagram (substitua pelo real)
    email: "contato@cyndfit.com" // Email (substitua pelo real)
};

// Menu Mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'var(--white)';
            navLinks.style.padding = '2rem';
            navLinks.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        });
    }
}

// Função para rolar suave para as seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Altura do header
        const elementPosition = element.offsetTop - offset;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Função para rolar para contato
function scrollToContact() {
    scrollToSection('contact');
}

// Função WhatsApp
function openWhatsApp() {
    const url = `https://wa.me/${CONFIG.whatsapp.phone}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`;
    window.open(url, '_blank');
}

// Função Instagram
function openInstagram() {
    const url = `https://instagram.com/${CONFIG.instagram}`;
    window.open(url, '_blank');
}

// Função Email
function openEmail() {
    const subject = "Informações sobre produtos Herbalife";
    const body = "Olá! Gostaria de saber mais sobre os produtos Herbalife.";
    const url = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
}

// Header fixo com background quando scroll
function initScrollHeader() {
    const header = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    });
}

// Animação de entrada das seções
function initScrollAnimations() {
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

    // Observar todas as seções
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Observar cards de produtos e depoimentos
    document.querySelectorAll('.product-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Smooth scroll para links do menu
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                scrollToSection(targetId.substring(1));
            }
        });
    });
}

// Contador de estatísticas (opcional)
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initScrollHeader();
    initScrollAnimations();
    initSmoothScroll();
    
    // Adiciona classe de animação inicial
    document.querySelector('.hero-content').classList.add('fade-in');
});

// Efeitos de hover nos botões
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Loading screen (opcional)
window.addEventListener('load', function() {
    document.body.style.overflow = 'auto';
});

// Console log bonitinho 😊
console.log(`
%cCYND-FIT 🍃%c
Landing Page Herbalife
Desenvolvida com 💚 para sua saúde!
`, 
'background: linear-gradient(135deg, #8CC63F, #2C5F2D); color: white; padding: 10px 20px; border-radius: 5px; font-size: 16px; font-weight: bold;',
'color: #8CC63F; font-size: 14px; margin-left: 10px;'
);