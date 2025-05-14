document.addEventListener('DOMContentLoaded', function() {
    // Progress bar animation
    const progressBar = document.querySelector('.progress-bar');
    let width = 0;
    
    function animateProgress() {
        if (width >= 100) {
            // Reset the progress bar
            width = 0;
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            
            // Force a reflow
            progressBar.offsetHeight;
            
            // Restart the animation
            progressBar.style.transition = 'width 2s ease-in-out';
            requestAnimationFrame(() => {
                width = 100;
                progressBar.style.width = '100%';
            });
        } else {
            width = 100;
            progressBar.style.transition = 'width 2s ease-in-out';
            progressBar.style.width = width + '%';
        }
    }

    // Start the initial animation
    animateProgress();

    // Set up the animation loop
    progressBar.addEventListener('transitionend', animateProgress);

    // Form submissions
    const emailForms = document.querySelectorAll('.email-form, .footer-email');
    emailForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input.value) {
                alert('Thank you for subscribing! We will keep you updated.');
                input.value = '';
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.book-now, .apply-now, .apply-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 