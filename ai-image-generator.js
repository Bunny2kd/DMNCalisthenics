// ========================================
// AI Image Generator Setup
// Uses Hugging Face Inference API
// ========================================

// SETUP INSTRUCTIONS:
// 1. Go to https://huggingface.co and sign up (free)
// 2. Create an API token at https://huggingface.co/settings/tokens
// 3. Copy your token and paste it below or set it in localStorage
// 4. The app will generate AI images for exercise demonstrations

// Configuration
const HF_API_KEY = localStorage.getItem('hf_api_key') || '';
const HF_API_URL = 'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5';

/**
 * Generate an exercise demo image using AI
 * @param {string} exerciseName - Name of the exercise
 * @param {string} difficulty - Difficulty level
 * @returns {Promise<string>} - URL to generated image or placeholder if failed
 */
async function generateExerciseImage(exerciseName, difficulty) {
    // Return placeholder if no API key
    if (!HF_API_KEY) {
        return `https://via.placeholder.com/600x400?text=${encodeURIComponent(exerciseName + ' Demo')}`;
    }

    const prompts = {
        'Push-ups': 'professional male athlete doing perfect push-ups form, fitness demonstration, gym, detailed muscles, high quality, studio lighting',
        'Pull-ups': 'professional male athlete doing pull-ups on bar, back view, fitness demonstration, gym, detailed muscles, high quality, studio lighting',
        'Handstand Hold': 'professional male athlete in perfect handstand position, balance, fitness demonstration, white background, high quality, studio lighting',
        'Squats': 'professional male athlete doing perfect squat form, legs bent, fitness demonstration, gym, high quality, studio lighting',
        'Dips': 'professional male athlete doing dips on parallel bars, fitness demonstration, gym, high quality, studio lighting',
        'Muscle-up': 'professional male athlete doing muscle-up transition, advanced calisthenics, fitness demonstration, high quality, studio lighting',
        'Planks': 'professional male athlete in perfect plank position, core strength, fitness demonstration, side view, high quality, studio lighting',
        'L-Sit Hold': 'professional male athlete in L-sit hold position, advanced calisthenics, fitness demonstration, high quality, studio lighting',
        'Lunges': 'professional male athlete doing perfect lunge form, legs, fitness demonstration, gym, high quality, studio lighting',
        'Front Lever': 'professional male athlete in front lever position, advanced calisthenics, horizontal hold, high quality, studio lighting',
        'L-Sit Pull-ups': 'professional male athlete doing L-sit pull-ups, advanced calisthenics, fitness demonstration, high quality, studio lighting',
        'Diamond Push-ups': 'professional male athlete doing diamond push-ups form, triceps focus, fitness demonstration, high quality, studio lighting'
    };

    const prompt = prompts[exerciseName] || `professional athlete demonstrating ${exerciseName} exercise, fitness, high quality, studio lighting`;

    try {
        const response = await fetch(HF_API_URL, {
            headers: { Authorization: `Bearer ${HF_API_KEY}` },
            method: 'POST',
            body: JSON.stringify({ inputs: prompt }),
        });

        if (response.ok) {
            const result = await response.blob();
            const url = URL.createObjectURL(result);
            return url;
        } else {
            console.warn(`Failed to generate image for ${exerciseName}`);
            return `https://via.placeholder.com/600x400?text=${encodeURIComponent(exerciseName + ' Demo')}`;
        }
    } catch (error) {
        console.error('Image generation error:', error);
        return `https://via.placeholder.com/600x400?text=${encodeURIComponent(exerciseName + ' Demo')}`;
    }
}

/**
 * Set Hugging Face API key
 * @param {string} apiKey - Your HF API token
 */
function setHFApiKey(apiKey) {
    localStorage.setItem('hf_api_key', apiKey);
    location.reload(); // Reload to apply new key
}

/**
 * Get current API key status
 * @returns {boolean} - True if API key is set
 */
function hasHFApiKey() {
    return !!HF_API_KEY;
}

/**
 * Open API key setup modal
 */
function openApiKeySetup() {
    const key = prompt('Enter your Hugging Face API Key:\n\n1. Sign up at https://huggingface.co\n2. Create token at https://huggingface.co/settings/tokens\n3. Paste your token below:');
    
    if (key && key.trim()) {
        setHFApiKey(key.trim());
    }
}
