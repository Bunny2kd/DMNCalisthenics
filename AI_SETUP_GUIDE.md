# AI Image Generation Setup Guide

## Overview
DMNCalisthenics now supports **AI-powered exercise demonstration images** using Hugging Face's Stable Diffusion model. This is completely optional - the app works perfectly fine with placeholder images.

## Why Use AI Images?
- ✅ Personalized exercise demonstrations
- ✅ Professional-quality tutorial images
- ✅ Better visual learning experience
- ✅ Real-time image generation

## Setup Steps (5 minutes)

### Step 1: Create a Hugging Face Account
1. Go to **https://huggingface.co**
2. Click "Sign Up"
3. Fill in your details (completely free)
4. Verify your email

### Step 2: Generate Your API Token
1. Log in to Hugging Face
2. Click your profile icon (top-right corner)
3. Go to **Settings → Access Tokens**
4. Click "New token"
5. Name it: `DMNCalisthenics`
6. Select "Read" permission (read-only is safe)
7. Click "Generate token"
8. **Copy your token** (save it somewhere safe)

### Step 3: Add Token to DMNCalisthenics
**Method 1: Through the App**
1. Open DMNCalisthenics
2. Click the ⚙️ settings icon (top-right)
3. Tap "Setup AI Images (Optional)"
4. Paste your API token when prompted
5. Done! The app will reload

**Method 2: Manually in Browser Console**
```javascript
setHFApiKey('your_token_here')
```

### Step 4: Verify It's Working
1. Go to the Training section
2. Click "Watch Tutorial" on any exercise
3. You should see the image loading smoothly
4. It will say "...studio lighting" or similar in the image

## What Happens Behind the Scenes

When you click "Watch Tutorial":
1. The app sends a prompt to Hugging Face API
2. Stable Diffusion generates a custom image
3. Image displays in the modal
4. Form tips appear below

Example prompts used:
- **Push-ups**: "professional male athlete doing perfect push-ups form, fitness demonstration, gym..."
- **Handstand Hold**: "professional male athlete in perfect handstand position, balance..."

## Troubleshooting

### "Images aren't generating"
**Solution**: Your API key might be incorrect. Go back to Settings → "Setup AI Images" and re-enter it.

### "Still seeing placeholder images"
**Reason**: This is normal! First-time API calls take 20-40 seconds to generate. Give it a moment.

**Still not working?** 
- Check if your Hugging Face API token is valid
- Make sure you copied the entire token (no spaces)
- Try refreshing the page

### "I see an error about API rate limit"
**Reason**: Hugging Face free tier allows 5 API calls per minute.

**Solution**: Wait a minute and try again. If you need unlimited generations, upgrade to Hugging Face Pro ($9/month).

### "I don't want to set this up"
No problem! The app works perfectly with placeholder images. This feature is entirely optional.

## Privacy & Security

✅ **Safe and Secure**
- Your API token is stored locally in your browser (localStorage)
- We never send your token to our servers
- Hugging Face is a trusted AI platform
- Read-only permission means the token can't modify your account

## Free vs Paid

**Hugging Face Free Tier:**
- ✅ Unlimited API calls (with rate limits)
- ✅ 5 calls per minute
- ✅ Perfect for personal use

**Hugging Face Pro ($9/month):**
- ✅ Faster generation
- ✅ Higher rate limits
- ✅ More concurrent requests

For this app, the free tier is more than sufficient!

## Alternative AI Providers

If you want to use a different AI service:

1. **Replicate.com** - Easy setup, $0.025 per image
2. **OpenAI DALL-E 3** - Premium quality, paid only
3. **Midjourney** - Discord-based, $20/month

Feel free to extend the `ai-image-generator.js` file to support other providers!

## Questions?

Check the embedded instructions:
- Settings → "Setup AI Images" button shows quick help
- Browser console errors will guide you to issues

## Disabling AI Images

To disable and return to placeholders:
```javascript
localStorage.removeItem('hf_api_key')
location.reload()
```

---

**Happy learning with professional AI-generated demonstrations!** 💪🤖
