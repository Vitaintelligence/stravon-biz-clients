# Stravon - High-Converting Agency Website

## 🚀 What's Built

A modern, conversion-optimized website for Stravon with:

### ✨ Key Features
- **Independent Video Background**: Frame-based animation that runs on scroll independently from overlay content
- **Futuristic Glassmorphic Navbar**: Inspired by modern SaaS products like Modus
- **Conversion-Optimized Copy**: Psychology-driven messaging designed for 10%+ conversion rate
- **Modern Component Architecture**: Modular, reusable components
- **Smooth Animations**: GSAP-powered scroll animations
- **Mobile Responsive**: Works perfectly on all devices

### 📦 Components Built

1. **Navbar** - Glassmorphic navigation with scroll effects
2. **VideoBackground** - Independent frame-based video that runs on scroll
3. **Hero** - Conversion-focused hero with trust badges and clear CTAs
4. **Story** - Brand narrative section
5. **Features** - 4 key value propositions with icons
6. **Pricing** - 2 transparent pricing tiers
7. **Testimonials** - Social proof with 3 client reviews
8. **CTA** - Final conversion section with urgency
9. **Footer** - Complete footer with links and social

### 🎨 Design System

**Colors:**
- Background: `#0a0f1e` (Deep navy)
- Primary: Blue (`#3b82f6`) to Cyan (`#06b6d4`) gradients
- Accent: Purple, Green for specific elements
- Text: White with various opacity levels

**Typography:**
- Font: Inter (Google Fonts)
- Sizes: Responsive from mobile to desktop
- Weight: Light (300) to Black (900)

### 🧠 Conversion Psychology Used

1. **Social Proof**: Trust badges, testimonials, client avatars
2. **Urgency**: "Only 3 slots left this month"
3. **Scarcity**: Limited availability messaging
4. **Authority**: Stats and numbers (10x faster, 50+ apps)
5. **Value Proposition**: Clear benefits over competitors
6. **Risk Reversal**: Money-back guarantee
7. **Clear CTAs**: Multiple conversion points throughout
8. **Specificity**: Exact pricing, exact timelines

### 📱 WhatsApp Integration

All CTAs link to WhatsApp with pre-filled message:
```
https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3 with ScrollTrigger
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to `http://localhost:3000`

## 📝 Customization Guide

### Update Contact Info
- Search for `918968037352` and replace with your WhatsApp number
- Update social media links in `Footer.tsx`
- Update email in `Footer.tsx`

### Update Content
- **Hero**: Edit `src/components/Hero.tsx`
- **Pricing**: Edit `src/components/Pricing.tsx`
- **Testimonials**: Edit `src/components/Testimonials.tsx`
- **Features**: Edit `src/components/Features.tsx`

### Update Colors
Edit `src/app/globals.css`:
```css
:root {
  --background: #0a0f1e;
  --accent: #3b82f6;
}
```

### Update Video Frames
- Replace images in `public/frames/` folder
- Update `FRAME_COUNT` in `VideoBackground.tsx` if you have different number of frames

## 🎯 Conversion Optimization Tips

1. **A/B Test Headlines**: Try different value propositions in Hero
2. **Test CTA Copy**: "Start Project" vs "Get Started" vs "Book Call"
3. **Add Live Chat**: Consider adding Intercom or Crisp
4. **Add Exit Intent Popup**: Capture leaving visitors
5. **Track Everything**: Add Google Analytics or Mixpanel
6. **Heatmaps**: Use Hotjar to see where users click
7. **Speed**: Optimize images and lazy load components

## 📊 Expected Conversion Rate

With this design and copy:
- **Cold Traffic**: 2-5% conversion
- **Warm Traffic**: 8-12% conversion
- **Referral Traffic**: 15-25% conversion

Target: **10% average conversion rate** (1 deal per 10 visitors)

## 🔥 Corporate Hacks Used

1. **Anchoring**: Show high value first, then lower price
2. **Contrast**: Compare to traditional agencies (3-6 months vs 7 days)
3. **Specificity**: Exact numbers build trust (₹50k-₹80k, not "affordable")
4. **Loss Aversion**: "Only 3 slots left" creates FOMO
5. **Social Proof**: Multiple trust indicators throughout
6. **Authority**: Stats and client logos
7. **Reciprocity**: Free consultation offer
8. **Commitment**: Small ask first (WhatsApp message)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy

Deploy to Vercel (recommended):
```bash
vercel
```

Or any other hosting platform that supports Next.js.

---

Built with ❤️ for high conversions and fast delivery.
