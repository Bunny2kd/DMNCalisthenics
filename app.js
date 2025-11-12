// ========================================
// DMNCalisthenics - App Data & Logic
// ========================================

// Exercise Database
const exercises = [
    {
        id: 1,
        name: 'Push-ups',
        difficulty: 'beginner',
        icon: '💪',
        description: 'Classic upper body exercise targeting chest, shoulders, and triceps.',
        reps: '3 sets x 10-15 reps',
        time: '10-15 mins',
        videoUrl: 'Media/Exercise/exercise-pushups.jpg'
    },
    {
        id: 2,
        name: 'Pull-ups',
        difficulty: 'intermediate',
        icon: '⬆️',
        description: 'Advanced back exercise that builds strength and endurance.',
        reps: '3 sets x 5-10 reps',
        time: '15-20 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Pull-ups'
    },
    {
        id: 3,
        name: 'Handstand Hold',
        difficulty: 'advanced',
        icon: '🤸',
        description: 'Ultimate balance exercise for core and shoulder strength.',
        reps: '3 sets x 20-60 seconds',
        time: '20-30 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Handstand'
    },
    {
        id: 4,
        name: 'Squats',
        difficulty: 'beginner',
        icon: '🦵',
        description: 'Fundamental lower body exercise targeting legs and glutes.',
        reps: '3 sets x 15-20 reps',
        time: '10-15 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Squats'
    },
    {
        id: 5,
        name: 'Dips',
        difficulty: 'intermediate',
        icon: '📉',
        description: 'Powerful triceps and chest builder using your body weight.',
        reps: '3 sets x 8-12 reps',
        time: '15-20 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Dips'
    },
    {
        id: 6,
        name: 'Muscle-up',
        difficulty: 'advanced',
        icon: '🔝',
        description: 'Advanced pulling and pushing combination for maximum strength.',
        reps: '3 sets x 3-8 reps',
        time: '20-30 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Muscle-up'
    },
    {
        id: 7,
        name: 'Planks',
        difficulty: 'beginner',
        icon: '➡️',
        description: 'Core strengthening isometric hold exercise.',
        reps: '3 sets x 30-60 seconds',
        time: '10-15 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Planks'
    },
    {
        id: 8,
        name: 'L-Sit Hold',
        difficulty: 'advanced',
        icon: '🎯',
        description: 'Elite core and hip flexor strength builder.',
        reps: '3 sets x 15-45 seconds',
        time: '15-25 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=L-Sit'
    },
    {
        id: 9,
        name: 'Lunges',
        difficulty: 'beginner',
        icon: '🚶',
        description: 'Single-leg lower body exercise for balance and strength.',
        reps: '3 sets x 12 per leg',
        time: '10-15 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Lunges'
    },
    {
        id: 10,
        name: 'Front Lever',
        difficulty: 'advanced',
        icon: '⚡',
        description: 'Advanced horizontal pulling move for elite strength.',
        reps: '3 sets x 10-30 seconds',
        time: '20-30 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Front+Lever'
    },
    {
        id: 11,
        name: 'Push-up Hold',
        difficulty: 'intermediate',
        icon: '⏸️',
        description: 'Isometric hold to build pushing strength and stability.',
        reps: '3 sets x 20-45 seconds',
        time: '12-18 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Push-up+Hold'
    },
    {
        id: 12,
        name: 'Handstand Push-up',
        difficulty: 'advanced',
        icon: '🔄',
        description: 'Ultimate shoulder and upper body strength move.',
        reps: '3 sets x 3-8 reps',
        time: '20-30 mins',
        videoUrl: 'https://via.placeholder.com/300x200?text=Handstand+Push-up'
    }
];

// Nutrition Tips Database
const nutritionTips = [
    {
        title: 'Protein Power',
        emoji: '🍗',
        description: 'Consume 0.8-1g of protein per lb of body weight daily to support muscle growth. Good sources: chicken, eggs, Greek yogurt, beans, and tofu.'
    },
    {
        title: 'Carbs for Energy',
        emoji: '🍚',
        description: 'Complex carbohydrates fuel your workouts and replenish glycogen stores. Choose whole grains, oats, sweet potatoes, and brown rice.'
    },
    {
        title: 'Healthy Fats',
        emoji: '🥑',
        description: 'Essential fats support hormone production and overall health. Include avocado, nuts, seeds, and olive oil in your diet.'
    },
    {
        title: 'Hydration Matters',
        emoji: '💧',
        description: 'Drink 2-3 liters of water daily for optimal performance. More during intense training or hot weather.'
    },
    {
        title: 'Pre-Workout Nutrition',
        emoji: '⏰',
        description: 'Eat 1-2 hours before training: carbs + protein combo. This provides energy and preps muscles for work.'
    },
    {
        title: 'Post-Workout Recovery',
        emoji: '🔄',
        description: 'Within 30-60 minutes: protein + carbs to refuel and repair muscles. A protein shake with banana works great.'
    },
    {
        title: 'Sleep & Recovery',
        emoji: '😴',
        description: 'Aim for 7-9 hours nightly. Sleep is when your body builds muscle. Consistent sleep = better progress.'
    },
    {
        title: 'Calorie Balance',
        emoji: '⚖️',
        description: 'Eat slightly above maintenance (300-500 cal surplus) to build muscle. Track intake for 2-3 weeks to find your sweet spot.'
    }
];

// Achievements
const achievements = [
    { id: 1, name: 'First Workout', icon: '💪', description: 'Complete your first workout' },
    { id: 2, name: 'Week Warrior', icon: '⏰', description: 'Complete 7 workouts in a week' },
    { id: 3, name: 'Push Master', icon: '📈', description: 'Complete 50 push-ups' },
    { id: 4, name: 'Protein Lover', icon: '🍗', description: 'Log 10 meals' },
    { id: 5, name: 'Consistent', icon: '🔥', description: 'Maintain a 7-day streak' },
    { id: 6, name: 'Elite', icon: '👑', description: 'Complete 100 workouts' }
];

// ========================================
// Local Storage Management
// ========================================

const AppData = {
    initializeData: function() {
        if (!localStorage.getItem('dmn_user')) {
            localStorage.setItem('dmn_user', JSON.stringify({
                name: 'Athlete',
                age: 25,
                weight: 75,
                height: 180,
                goal: 'Strength'
            }));
        }

        if (!localStorage.getItem('dmn_workouts')) {
            localStorage.setItem('dmn_workouts', JSON.stringify([]));
        }

        if (!localStorage.getItem('dmn_meals')) {
            localStorage.setItem('dmn_meals', JSON.stringify([]));
        }

        if (!localStorage.getItem('dmn_achievements')) {
            localStorage.setItem('dmn_achievements', JSON.stringify({}));
        }
    },

    getUser: function() {
        return JSON.parse(localStorage.getItem('dmn_user'));
    },

    setUser: function(data) {
        localStorage.setItem('dmn_user', JSON.stringify(data));
    },

    getWorkouts: function() {
        return JSON.parse(localStorage.getItem('dmn_workouts')) || [];
    },

    addWorkout: function(workout) {
        const workouts = this.getWorkouts();
        workouts.push({
            ...workout,
            date: new Date().toISOString()
        });
        localStorage.setItem('dmn_workouts', JSON.stringify(workouts));
    },

    getMeals: function() {
        return JSON.parse(localStorage.getItem('dmn_meals')) || [];
    },

    addMeal: function(meal) {
        const meals = this.getMeals();
        meals.push({
            ...meal,
            date: new Date().toISOString()
        });
        localStorage.setItem('dmn_meals', JSON.stringify(meals));
    },

    deleteMeal: function(index) {
        const meals = this.getMeals();
        meals.splice(index, 1);
        localStorage.setItem('dmn_meals', JSON.stringify(meals));
    },

    clearAllData: function() {
        localStorage.clear();
        this.initializeData();
    }
};

// ========================================
// Utility Functions
// ========================================

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
}

function getTodayDate() {
    return new Date().toDateString();
}

function getTodayWorkouts() {
    const workouts = AppData.getWorkouts();
    const today = getTodayDate();
    return workouts.filter(w => new Date(w.date).toDateString() === today);
}

function getWeekWorkouts() {
    const workouts = AppData.getWorkouts();
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return workouts.filter(w => new Date(w.date) >= weekAgo);
}

function getTodayMeals() {
    const meals = AppData.getMeals();
    const today = getTodayDate();
    return meals.filter(m => new Date(m.date).toDateString() === today);
}

function calculateMacros() {
    const meals = getTodayMeals();
    return meals.reduce((acc, meal) => ({
        protein: acc.protein + (meal.protein || 0),
        carbs: acc.carbs + (meal.carbs || 0),
        fats: acc.fats + (meal.fats || 0)
    }), { protein: 0, carbs: 0, fats: 0 });
}

function getStreak() {
    const workouts = AppData.getWorkouts();
    if (workouts.length === 0) return 0;

    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    while (true) {
        const dateStr = currentDate.toDateString();
        const hasWorkout = workouts.some(w => new Date(w.date).toDateString() === dateStr);
        
        if (!hasWorkout) break;
        
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
    }

    return streak;
}

function updateDashboard() {
    const user = AppData.getUser();
    const weekWorkouts = getWeekWorkouts();
    const todayWorkouts = getTodayWorkouts();
    const macros = calculateMacros();
    const streak = getStreak();
    
    // Update greeting
    document.getElementById('userName').textContent = user.name;
    
    // Update stats
    document.getElementById('weekStreak').textContent = streak;
    document.getElementById('weekWorkouts').textContent = weekWorkouts.length;
    document.getElementById('todayProgress').textContent = todayWorkouts.length > 0 ? '100%' : '0%';
    
    // Update quick stats
    document.getElementById('totalCals').textContent = AppData.getWorkouts().length;
    document.getElementById('mealsLogged').textContent = AppData.getMeals().length;
    document.getElementById('goalProgress').textContent = Math.min((AppData.getWorkouts().length / 50) * 100, 100).toFixed(0) + '%';
    
    // Update nutrition
    document.getElementById('proteinCount').textContent = macros.protein + 'g';
    document.getElementById('carbsCount').textContent = macros.carbs + 'g';
    document.getElementById('fatsCount').textContent = macros.fats + 'g';
    
    // Update profile stats
    document.getElementById('profileStats').textContent = `${AppData.getWorkouts().length} Workouts | ${streak} Day Streak`;
}

// ========================================
// View Navigation
// ========================================

function goToView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
        v.style.display = 'none';
    });

    // Show selected view
    const view = document.getElementById(viewName);
    if (view) {
        view.classList.add('active');
        view.style.display = 'block';
    }

    // Update bottom nav
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.querySelector(`.nav-tab[data-view="${viewName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Update page title
    const titles = {
        'dashboardView': 'DMNCalisthenics',
        'trainingView': 'Training',
        'workoutDetailView': 'Workout',
        'nutritionView': 'Nutrition',
        'progressView': 'Progress',
        'profileView': 'Profile'
    };
    document.getElementById('pageTitle').textContent = titles[viewName] || 'DMNCalisthenics';

    // Refresh content
    if (viewName === 'trainingView') renderTraining();
    if (viewName === 'progressView') renderProgress();
    if (viewName === 'dashboardView') updateDashboard();
}

// ========================================
// Training Functions
// ========================================

function renderTraining() {
    const list = document.getElementById('trainingList');
    list.innerHTML = '';

    exercises.forEach(exercise => {
        const item = document.createElement('div');
        item.className = 'exercise-card-detailed';
        
        const today = getTodayWorkouts();
        const isCompleted = today.some(w => w.exerciseId === exercise.id);
        
        item.innerHTML = `
            <div class="exercise-header">
                <div class="exercise-title">
                    <span class="exercise-icon">${exercise.icon}</span>
                    <div>
                        <h4>${exercise.name}</h4>
                        <span class="difficulty-badge difficulty-${exercise.difficulty}">${exercise.difficulty}</span>
                    </div>
                </div>
                <div class="exercise-status ${isCompleted ? 'completed' : ''}">
                    <i class="fas fa-check-circle"></i>
                </div>
            </div>
            <div class="exercise-body">
                <p class="exercise-description">${exercise.description}</p>
                <div class="exercise-details">
                    <div class="detail-item">
                        <span class="detail-label">Reps:</span>
                        <span class="detail-value">${exercise.reps}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Duration:</span>
                        <span class="detail-value">${exercise.time}</span>
                    </div>
                </div>
                <div class="exercise-actions">
                    <button class="btn btn-secondary" onclick="openVideoModal(${exercise.id}, '${exercise.name}', '${exercise.description}')">
                        <i class="fas fa-play-circle"></i> Watch Tutorial
                    </button>
                    <button class="btn btn-primary" onclick="openWorkoutModal(${exercise.id}, '${exercise.name}')">
                        <i class="fas fa-graduation-cap"></i> Log Workout
                    </button>
                </div>
            </div>
        `;
        
        list.appendChild(item);
    });

    // Tab filtering
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            if (filter !== 'all') {
                document.querySelectorAll('.exercise-card-detailed').forEach(item => {
                    const badge = item.querySelector('.difficulty-badge');
                    const shouldShow = badge.textContent.toLowerCase() === filter;
                    item.style.display = shouldShow ? 'block' : 'none';
                });
            } else {
                document.querySelectorAll('.exercise-card-detailed').forEach(item => {
                    item.style.display = 'block';
                });
            }
        });
    });
}

function openWorkoutModal(exerciseId, exerciseName) {
    const currentExercise = exercises.find(e => e.id === exerciseId);
    const modal = document.getElementById('completeWorkoutModal');
    
    // Store current exercise
    window.currentExercise = { id: exerciseId, name: exerciseName };
    
    modal.classList.add('active');
}

function closeWorkoutModal() {
    document.getElementById('completeWorkoutModal').classList.remove('active');
}

function openVideoModal(exerciseId, exerciseName, exerciseDescription) {
    const currentExercise = exercises.find(e => e.id === exerciseId);
    const modal = document.getElementById('videoModal');
    
    // Update modal content
    document.getElementById('videoTitle').textContent = exerciseName + ' - Tutorial';
    document.getElementById('exerciseNameInVideo').textContent = exerciseName;
    document.getElementById('exerciseDescInVideo').textContent = exerciseDescription;
    
    // Generate or use placeholder AI image
    const videoImg = document.getElementById('videoPlaceholder');
    const difficulty = currentExercise.difficulty;
    
    // Try to generate AI image, fallback to placeholder
    if (hasHFApiKey()) {
        videoImg.style.opacity = '0.6';
        generateExerciseImage(exerciseName, difficulty).then(imageUrl => {
            videoImg.src = imageUrl;
            videoImg.style.opacity = '1';
        });
    } else {
        videoImg.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(exerciseName + ' Demo')}`;
    }
    
    // Update form tips based on exercise
    const formTipsList = document.getElementById('formTips');
    formTipsList.innerHTML = '';
    
    const tips = getFormTips(currentExercise.name);
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        formTipsList.appendChild(li);
    });
    
    modal.classList.add('active');
}

function closeVideoModal() {
    document.getElementById('videoModal').classList.remove('active');
}

function getFormTips(exerciseName) {
    const tipsList = {
        'Push-ups': [
            'Keep your body straight from head to heels',
            'Lower yourself until your chest nearly touches the floor',
            'Push through your palms to return to start position',
            'Maintain a tight core throughout'
        ],
        'Pull-ups': [
            'Grip shoulder-width apart, palms facing away',
            'Pull yourself up until your chin passes the bar',
            'Lower yourself with control',
            'Avoid swinging momentum'
        ],
        'Handstand Hold': [
            'Start in a downward dog position',
            'Step one foot forward and kick into handstand',
            'Keep your shoulders directly over your hands',
            'Engage your core and glutes for stability'
        ],
        'Squats': [
            'Feet shoulder-width apart',
            'Lower your body by bending your knees and hips',
            'Keep your chest up and core tight',
            'Press through your heels to stand'
        ],
        'Dips': [
            'Place hands on parallel bars or bench',
            'Lower your body until arms are at 90 degrees',
            'Push back to starting position',
            'Keep elbows close to your body'
        ],
        'Muscle-up': [
            'This is advanced - master pull-ups and dips first',
            'Use momentum to transition from pull to dip',
            'Keep the bar close to your body',
            'Practice explosive pull-ups'
        ],
        'Planks': [
            'Forearms on ground, body straight',
            'Engage core throughout the hold',
            'Keep hips level with shoulders',
            'Breathe steadily - don\'t hold your breath'
        ],
        'L-Sit Hold': [
            'Hands on parallel bars or rings',
            'Keep legs straight out in front',
            'Engage core and glutes intensely',
            'Build up duration gradually'
        ],
        'Lunges': [
            'Step forward and lower hips',
            'Front knee should be over ankle',
            'Back knee nearly touches the ground',
            'Return to start and repeat on other side'
        ],
        'Front Lever': [
            'This is advanced - master regular progressions first',
            'Body should be straight and parallel to ground',
            'Intense core and shoulder engagement needed',
            'Practice pull-up variations first'
        ],
        'L-Sit Pull-ups': [
            'Combine L-sit hold with pull-up motion',
            'Maintain rigid body position throughout',
            'Very advanced - excellent core strengthener',
            'Build up gradually'
        ],
        'Diamond Push-ups': [
            'Hands form a diamond shape',
            'This targets triceps more than regular push-ups',
            'Keep elbows close to body',
            'Maintain straight body alignment'
        ]
    };
    
    return tipsList[exerciseName] || [
        'Keep your core engaged',
        'Control the movement - no jerky motions',
        'Breathe steadily throughout',
        'Quality over quantity - form is everything'
    ];
}

function saveWorkout(event) {
    event.preventDefault();
    
    const sets = document.getElementById('setsCompleted').value;
    const reps = document.getElementById('repsCompleted').value;
    const notes = document.getElementById('workoutNotes').value;
    
    AppData.addWorkout({
        exerciseId: window.currentExercise.id,
        exerciseName: window.currentExercise.name,
        sets: parseInt(sets),
        reps: parseInt(reps),
        notes: notes
    });
    
    closeWorkoutModal();
    renderTraining();
    updateDashboard();
    renderProgress();
    
    // Show notification
    showNotification('Workout logged! Great job! 💪');
}

// ========================================
// Nutrition Functions
// ========================================

function renderNutrition() {
    const list = document.getElementById('nutritionTipsList');
    list.innerHTML = '';
    
    nutritionTips.forEach(tip => {
        const item = document.createElement('div');
        item.className = 'tip-card';
        item.innerHTML = `
            <div class="tip-header">
                <span class="tip-emoji">${tip.emoji}</span>
                <h4>${tip.title}</h4>
            </div>
            <p class="tip-content">${tip.description}</p>
        `;
        list.appendChild(item);
    });

    renderMeals();
}

function renderMeals() {
    const list = document.getElementById('mealsList');
    const meals = getTodayMeals();
    
    list.innerHTML = '';
    
    if (meals.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999;">No meals logged yet</p>';
        return;
    }
    
    meals.forEach((meal, index) => {
        const item = document.createElement('div');
        item.className = 'meal-item';
        item.innerHTML = `
            <div>
                <div class="meal-name">${meal.name}</div>
                <div class="meal-macros">P: ${meal.protein}g | C: ${meal.carbs}g | F: ${meal.fats}g</div>
            </div>
            <button class="meal-delete-btn" onclick="deleteMeal(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        list.appendChild(item);
    });
}

function showAddMeal() {
    document.getElementById('addMealModal').classList.add('active');
}

function hideAddMeal() {
    document.getElementById('addMealModal').classList.remove('active');
    document.getElementById('addMealForm').reset();
}

function addMeal(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input[type="text"], input[type="number"]');
    
    const meal = {
        name: inputs[0].value,
        protein: parseInt(inputs[1].value),
        carbs: parseInt(inputs[2].value),
        fats: parseInt(inputs[3].value)
    };
    
    AppData.addMeal(meal);
    hideAddMeal();
    renderNutrition();
    updateDashboard();
    
    showNotification('Meal logged! 🍗');
}

function deleteMeal(index) {
    AppData.deleteMeal(index);
    renderMeals();
    updateDashboard();
}

// ========================================
// Progress Functions
// ========================================

function renderProgress() {
    renderRecentWorkouts();
    renderPRs();
    renderAchievements();
}

function renderRecentWorkouts() {
    const list = document.getElementById('recentWorkouts');
    const workouts = AppData.getWorkouts().slice(-10).reverse();
    
    list.innerHTML = '';
    
    if (workouts.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999;">No workouts logged yet</p>';
        return;
    }
    
    workouts.forEach(workout => {
        const item = document.createElement('div');
        item.className = 'workout-item';
        item.innerHTML = `
            <div>
                <div class="workout-date">${workout.exerciseName}</div>
                <div class="workout-sets">${workout.sets}x${workout.reps} • ${formatDate(workout.date)}</div>
            </div>
        `;
        list.appendChild(item);
    });
}

function renderPRs() {
    const list = document.getElementById('prList');
    const workouts = AppData.getWorkouts();
    
    list.innerHTML = '';
    
    if (workouts.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999;">Complete workouts to set PRs</p>';
        return;
    }
    
    // Get best reps for each exercise
    const prs = {};
    workouts.forEach(workout => {
        if (!prs[workout.exerciseName]) {
            prs[workout.exerciseName] = { name: workout.exerciseName, reps: workout.reps * workout.sets };
        } else {
            const totalReps = workout.reps * workout.sets;
            if (totalReps > prs[workout.exerciseName].reps) {
                prs[workout.exerciseName].reps = totalReps;
            }
        }
    });
    
    Object.values(prs).forEach(pr => {
        const item = document.createElement('div');
        item.className = 'pr-item';
        item.innerHTML = `
            <div class="pr-info">
                <h4>${pr.name}</h4>
            </div>
            <div class="pr-value">${pr.reps} Reps</div>
        `;
        list.appendChild(item);
    });
}

function renderAchievements() {
    const grid = document.getElementById('achievementsList');
    grid.innerHTML = '';
    
    const workoutCount = AppData.getWorkouts().length;
    const mealCount = AppData.getMeals().length;
    const streak = getStreak();
    
    achievements.forEach(achievement => {
        const badge = document.createElement('div');
        badge.className = 'achievement-badge';
        
        let unlocked = false;
        
        if (achievement.id === 1 && workoutCount >= 1) unlocked = true;
        if (achievement.id === 2 && workoutCount >= 7) unlocked = true;
        if (achievement.id === 3 && workoutCount >= 50) unlocked = true;
        if (achievement.id === 4 && mealCount >= 10) unlocked = true;
        if (achievement.id === 5 && streak >= 7) unlocked = true;
        if (achievement.id === 6 && workoutCount >= 100) unlocked = true;
        
        badge.classList.add(unlocked ? 'achievement-unlocked' : 'achievement-locked');
        
        badge.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
        `;
        
        grid.appendChild(badge);
    });
}

// ========================================
// Profile Functions
// ========================================

function loadProfile() {
    const user = AppData.getUser();
    document.getElementById('inputName').value = user.name;
    document.getElementById('inputAge').value = user.age;
    document.getElementById('inputWeight').value = user.weight;
    document.getElementById('inputHeight').value = user.height;
    document.getElementById('inputGoal').value = user.goal;
    
    document.getElementById('profileName').textContent = user.name;
    updateDashboard();
}

function saveProfile() {
    const user = {
        name: document.getElementById('inputName').value,
        age: parseInt(document.getElementById('inputAge').value),
        weight: parseInt(document.getElementById('inputWeight').value),
        height: parseInt(document.getElementById('inputHeight').value),
        goal: document.getElementById('inputGoal').value
    };
    
    AppData.setUser(user);
    loadProfile();
    showNotification('Profile saved! 👍');
}

// ========================================
// Settings Functions
// ========================================

function openSettings() {
    document.getElementById('settingsBtn').addEventListener('click', () => {
        document.getElementById('settingsModal').classList.add('active');
    });
}

function closeSettings() {
    document.getElementById('settingsModal').classList.remove('active');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('dmn_darkMode', isDark);
}

function exportData() {
    const data = {
        user: AppData.getUser(),
        workouts: AppData.getWorkouts(),
        meals: AppData.getMeals()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dmn-data-' + new Date().getTime() + '.json';
    link.click();
    
    showNotification('Data exported! 📥');
}

function importData() {
    alert('Import feature coming soon!');
}

function resetData() {
    if (confirm('Are you sure? This will delete all your data!')) {
        AppData.clearAllData();
        loadProfile();
        updateDashboard();
        showNotification('Data reset! Starting fresh! 🔄');
    }
}

// ========================================
// Notification System
// ========================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        padding: 15px 25px;
        background: var(--secondary-color);
        color: var(--primary-color);
        border-radius: 8px;
        box-shadow: var(--shadow);
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ========================================
// Time Display
// ========================================

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('timeDisplay').textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();

// ========================================
// Initialize App
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    AppData.initializeData();
    loadProfile();
    goToView('dashboardView');
    renderTraining();
    renderNutrition();
    renderProgress();
    
    // Settings button
    document.getElementById('settingsBtn').addEventListener('click', () => {
        document.getElementById('settingsModal').classList.add('active');
    });
    
    // Load dark mode preference
    if (localStorage.getItem('dmn_darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
        }
    });
});
