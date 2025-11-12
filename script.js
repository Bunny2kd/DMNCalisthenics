// ========================================
// DMNCalisthenics - Advanced JavaScript
// Smooth Animations & Interactions
// ========================================

// Exercises Database
const exercises = [
    {
        id: 1,
        name: 'Push-ups',
        difficulty: 'beginner',
        icon: '💪',
        description: 'Classic upper body exercise targeting chest, shoulders, and triceps.',
        reps: '3 sets x 10-15 reps',
        time: '10-15 mins'
    },
    {
        id: 2,
        name: 'Pull-ups',
        difficulty: 'intermediate',
        icon: '⬆️',
        description: 'Advanced back exercise that builds strength and endurance.',
        reps: '3 sets x 5-10 reps',
        time: '15-20 mins'
    },
    {
        id: 3,
        name: 'Handstand Hold',
        difficulty: 'advanced',
        icon: '🤸',
        description: 'Ultimate balance exercise for core and shoulder strength.',
        reps: '3 sets x 20-60 seconds',
        time: '20-30 mins'
    },
    {
        id: 4,
        name: 'Squats',
        difficulty: 'beginner',
        icon: '🦵',
        description: 'Fundamental lower body exercise targeting legs and glutes.',
        reps: '3 sets x 15-20 reps',
        time: '10-15 mins'
    },
    {
        id: 5,
        name: 'Dips',
        difficulty: 'intermediate',
        icon: '📉',
        description: 'Powerful triceps and chest builder using your body weight.',
        reps: '3 sets x 8-12 reps',
        time: '15-20 mins'
    },
    {
        id: 6,
        name: 'Muscle-up',
        difficulty: 'advanced',
        icon: '🔝',
        description: 'Advanced pulling and pushing combination for maximum strength.',
        reps: '3 sets x 3-8 reps',
        time: '20-30 mins'
    },
    {
        id: 7,
        name: 'Planks',
        difficulty: 'beginner',
        icon: '➡️',
        description: 'Core strengthening isometric hold exercise.',
        reps: '3 sets x 30-60 seconds',
        time: '10-15 mins'
    },
    {
        id: 8,
        name: 'L-Sit Hold',
        difficulty: 'advanced',
        icon: '🎯',
        description: 'Elite core and hip flexor strength builder.',
        reps: '3 sets x 15-45 seconds',
        time: '15-25 mins'
    },
    {
        id: 9,
        name: 'Lunges',
        difficulty: 'beginner',
        icon: '🚶',
        description: 'Single-leg lower body exercise for balance and strength.',
        reps: '3 sets x 12 per leg',
        time: '10-15 mins'
    },
    {
        id: 10,
        name: 'Front Lever',
        difficulty: 'advanced',
        icon: '⚡',
        description: 'Advanced horizontal pulling move for elite strength.',
        reps: '3 sets x 10-30 seconds',
        time: '20-30 mins'
    },
    {
        id: 11,
        name: 'Push-up Hold',
        difficulty: 'intermediate',
        icon: '⏸️',
        description: 'Isometric hold to build pushing strength and stability.',
        reps: '3 sets x 20-45 seconds',
        time: '12-18 mins'
    },
    {
        id: 12,
        name: 'Handstand Push-up',
        difficulty: 'advanced',
        icon: '🔄',
        description: 'Ultimate shoulder and upper body strength move.',
        reps: '3 sets x 3-8 reps',
        time: '20-30 mins'
    }
];

// Nutrition Database
const nutritionTips = [
    {
        id: 1,
        title: 'Protein Power',
        emoji: '🍗',
        description: 'Consume 0.8-1g of protein per lb of body weight daily to support muscle growth and recovery.',
        tips: [
            'Eggs and chicken are excellent protein sources',
            'Don\'t neglect plant-based proteins like lentils',
            'Include Greek yogurt in your diet',
            'Spread protein throughout the day'
        ]
    },
    {
        id: 2,
        title: 'Carbs for Energy',
        emoji: '🍚',
        description: 'Complex carbohydrates fuel your workouts and replenish glycogen stores.',
        tips: [
            'Choose whole grains over refined carbs',
            'Eat carbs around your training time',
            'Brown rice, oats, and sweet potatoes are ideal',
            'Don\'t fear carbs - they\'re your training fuel'
        ]
    },
    {
        id: 3,
        title: 'Healthy Fats',
        emoji: '🥑',
        description: 'Essential fats support hormone production and overall health.',
        tips: [
            'Include avocado in your meals',
            'Nuts and seeds are great snacks',
            'Olive oil supports your cardiovascular health',
            'Fish rich in omega-3s aid recovery'
        ]
    },
    {
        id: 4,
        title: 'Hydration Matters',
        emoji: '💧',
        description: 'Proper hydration is crucial for performance and recovery.',
        tips: [
            'Drink 2-3 liters of water daily',
            'Hydrate before, during, and after workouts',
            'Monitor your urine color for hydration status',
            'Electrolytes help during intense sessions'
        ]
    },
    {
        id: 5,
        title: 'Meal Timing',
        emoji: '⏰',
        description: 'When you eat is as important as what you eat.',
        tips: [
            'Eat 1-2 hours before training',
            'Post-workout meal within 30-60 minutes',
            'Consistent meal times boost metabolism',
            'Never skip breakfast'
        ]
    },
    {
        id: 6,
        title: 'Supplements Wisely',
        emoji: '💊',
        description: 'Supplements support but don\'t replace good nutrition.',
        tips: [
            'Focus on diet first, supplements second',
            'Whey protein powder is convenient',
            'Creatine monohydrate is well-researched',
            'Always prioritize whole foods'
        ]
    }
];

// Pro Tips Database
const proTips = [
    {
        title: 'Progressive Overload',
        content: 'Gradually increase reps, sets, or difficulty of exercises to ensure continuous improvement and prevent plateaus.'
    },
    {
        title: 'Rest & Recovery',
        content: 'Give your muscles 48 hours between intense training sessions. Sleep 7-9 hours nightly for optimal recovery.'
    },
    {
        title: 'Form Over Ego',
        content: 'Perfect technique is more important than doing more reps. Poor form increases injury risk and reduces effectiveness.'
    },
    {
        title: 'Consistency Wins',
        content: 'Train consistently, even if it\'s just 20 minutes. Regular training beats sporadic intense sessions.'
    },
    {
        title: 'Mind-Muscle Connection',
        content: 'Focus on the muscle you\'re working. Slow, controlled movements build better results than fast, sloppy ones.'
    },
    {
        title: 'Mix It Up',
        content: 'Vary your workout routine every 4-6 weeks to challenge different muscle fibers and prevent boredom.'
    },
    {
        title: 'Warm Up Properly',
        content: 'Spend 5-10 minutes warming up before intense training to prevent injuries and improve performance.'
    },
    {
        title: 'Track Your Progress',
        content: 'Keep a workout journal. Tracking makes it easier to see improvement and stay motivated.'
    },
    {
        title: 'Listen to Your Body',
        content: 'Pain is a signal. Distinguish between muscle soreness and injury. Rest when needed to prevent burnout.'
    },
    {
        title: 'Community Support',
        content: 'Train with others or find an online community. Social accountability increases consistency and enjoyment.'
    }
];

// ========================================
// DOM Elements
// ========================================

const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTop = document.getElementById('scrollToTop');
const exercisesGrid = document.getElementById('exercisesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const nutritionGrid = document.querySelector('.nutrition-grid');
const tipsContainer = document.querySelector('.tips-container');

// ========================================
// Navigation Functions
// ========================================

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
});

// Scroll to top functionality
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Exercise Filtering & Display
// ========================================

function renderExercises(filter = 'all') {
    const filtered = filter === 'all' 
        ? exercises 
        : exercises.filter(ex => ex.difficulty === filter);

    exercisesGrid.innerHTML = '';
    
    filtered.forEach((exercise, index) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
        
        card.innerHTML = `
            <div class="exercise-image">
                ${exercise.icon}
            </div>
            <div class="exercise-content">
                <span class="exercise-difficulty difficulty-${exercise.difficulty}">
                    ${exercise.difficulty}
                </span>
                <h3>${exercise.name}</h3>
                <p>${exercise.description}</p>
                <div class="exercise-meta">
                    <span>
                        <i class="fas fa-repeat"></i> ${exercise.reps}
                    </span>
                    <span>
                        <i class="fas fa-clock"></i> ${exercise.time}
                    </span>
                </div>
            </div>
        `;
        
        exercisesGrid.appendChild(card);
    });
}

// Filter button listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        renderExercises(filter);
    });
});

// ========================================
// Nutrition Display
// ========================================

function renderNutrition() {
    nutritionGrid.innerHTML = '';
    
    nutritionTips.forEach((tip, index) => {
        const card = document.createElement('div');
        card.className = 'nutrition-card';
        card.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
        
        const tipsList = tip.tips.map(t => `<li>${t}</li>`).join('');
        
        card.innerHTML = `
            <div class="nutrition-card-content">
                <h3>
                    <span>${tip.emoji}</span>
                    ${tip.title}
                </h3>
                <p>${tip.description}</p>
                <ul class="nutrition-tips">
                    ${tipsList}
                </ul>
            </div>
        `;
        
        nutritionGrid.appendChild(card);
    });
}

// ========================================
// Pro Tips Display
// ========================================

function renderTips() {
    tipsContainer.innerHTML = '';
    
    proTips.forEach((tip, index) => {
        const card = document.createElement('div');
        card.className = 'tip-card';
        card.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
        
        card.innerHTML = `
            <h3>${tip.title}</h3>
            <p>${tip.content}</p>
        `;
        
        tipsContainer.appendChild(card);
    });
}

// ========================================
// Form Handling
// ========================================

function handleNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Validation
    if (!email || !isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Success message
    showNotification('Thanks for subscribing! Check your email for updates.', 'success');
    form.reset();
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================================
// Notification System
// ========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#6bcf7f' : '#ff6b6b'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    if (!document.querySelector('style[data-notification]')) {
        document.head.appendChild(style);
    }
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card, .exercise-card, .nutrition-card, .tip-card');
    cards.forEach(card => observer.observe(card));
});

// ========================================
// Smooth Scroll Enhancement
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// Initialize on Page Load
// ========================================

window.addEventListener('DOMContentLoaded', () => {
    renderExercises('all');
    renderNutrition();
    renderTips();
    
    // Add subtle animation to hero on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'slideInLeft 0.8s ease-out';
    }
});

// ========================================
// Keyboard Navigation
// ========================================

document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
    
    // Ctrl/Cmd + K to scroll to exercises
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' });
    }
});

// ========================================
// Performance Optimization
// ========================================

// Lazy load images and defer non-critical rendering
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// Console Easter Egg
// ========================================

console.log('%cWelcome to DMNCalisthenics! 💪', 'font-size: 20px; color: #ffd700; font-weight: bold;');
console.log('%cDiscipline Over Everything', 'font-size: 16px; color: #ffd700;');
console.log('Master bodyweight training through dedicated practice and proven methods!');
