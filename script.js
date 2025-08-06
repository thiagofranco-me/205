// Funcionalidade do Accordion
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            const accordionIcon = this.querySelector('.accordion-icon');
            
            // Fecha todos os outros accordions
            const allAccordionContents = document.querySelectorAll('.accordion-content');
            const allAccordionHeaders = document.querySelectorAll('.accordion-header');
            
            allAccordionContents.forEach(content => {
                if (content !== accordionContent) {
                    content.classList.remove('active');
                }
            });
            
            allAccordionHeaders.forEach(header => {
                if (header !== this) {
                    header.classList.remove('active');
                }
            });
            
            // Toggle do accordion atual
            accordionContent.classList.toggle('active');
            this.classList.toggle('active');
            
            // Atualiza o ícone
            if (accordionContent.classList.contains('active')) {
                accordionIcon.textContent = '×';
            } else {
                accordionIcon.textContent = '+';
            }
        });
    });
});

// Animação de scroll para o background
document.addEventListener('DOMContentLoaded', function() {
    const gradientBackground = document.querySelector('.gradient-background');
    
    if (gradientBackground) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Calcula a porcentagem do scroll (0 a 1)
            const scrollPercentage = scrollTop / (documentHeight - windowHeight);
            
            // Aplica a animação baseada no scroll
            if (scrollPercentage > 0.1) { // Começa a animar após 10% do scroll
                gradientBackground.classList.add('animated');
            } else {
                gradientBackground.classList.remove('animated');
            }
        });
    }
});

// Funcionalidade da seta de scroll
document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            const heroSection = document.querySelector('.hero-section');
            const nextSection = heroSection.nextElementSibling;
            
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
