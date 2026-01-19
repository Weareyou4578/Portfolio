// Typing Animation
        new Typed('.typing-text', {
            strings: ['Full Stack Developer', 'MERN Stack Enthusiast', 'UI/UX Designer', 'Coder'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        // Sticky Navbar
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if(window.scrollY > 50) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        });

        // Mobile Menu
        const menuBtn = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });