# Smooth Scrolling & Animation Features

## ✨ Features Added

### 1. **Smooth Scrolling**
- Native smooth scrolling enabled on the entire page
- Scroll padding to account for fixed navbar
- iOS momentum scrolling support
- Smooth navigation link transitions

### 2. **Scroll-Based Animations**
Created a reusable `ScrollAnimation` component that triggers animations when elements enter the viewport:

#### Animation Types:
- **Fade Up** (default): Elements fade in and slide up
- **Scale Up**: Elements scale up from 95% to 100%
- **From Left**: Elements slide in from the left
- **From Right**: Elements slide in from the right

#### Features:
- Intersection Observer API for performance
- Customizable delays for staggered animations
- Smooth cubic-bezier easing functions
- Threshold and root margin controls

### 3. **Section Animations**

#### Work Section
- Heading fades in
- Each project card animates in with staggered delays (100ms apart)
- Cards have smooth hover effects with scale and shadow transitions

#### Skills Section
- Heading fades in
- Skills board scales up smoothly
- Individual skill tiles have enhanced hover animations
- Progress bars animate smoothly on hover

#### Certifications Section
- Header and tabs fade in together
- Certification/badge lists animate in
- Smooth tab switching

#### Experience Section
- Heading fades in
- Each experience card animates in with staggered delays
- Smooth glassmorphism effects

#### Contact Section
- Headline fades in first
- Contact form scales up with a 200ms delay
- Smooth form interactions

### 4. **Enhanced Transitions**

#### Navigation
- Nav links have smooth background color transitions
- Subtle lift effect on hover (translateY)
- Active state feedback
- Contact button with purple border on hover

#### Work Cards
- 400ms smooth transform and shadow transitions
- Video scales smoothly on hover (500ms)
- Shine effect sweeps across on hover

#### Skill Tiles
- 300ms cubic-bezier transitions
- Smooth background gradient animations
- Progress bars slide up smoothly

### 5. **Performance Optimizations**
- Uses `will-change` for transform and box-shadow
- Hardware-accelerated animations
- Efficient cubic-bezier timing functions
- Intersection Observer for scroll animations (better than scroll listeners)

## 🎨 Easing Functions Used

- **cubic-bezier(0.4, 0, 0.2, 1)**: Material Design standard easing for smooth, natural motion
- Applied to transforms, opacity, and box-shadows throughout

## 📱 Mobile Support

All animations are fully responsive and work smoothly on:
- Desktop browsers
- Tablets
- Mobile devices (with touch-optimized scrolling)

## 🚀 How to Use

The ScrollAnimation component is automatically applied to all major sections. To use it in new components:

```tsx
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

<ScrollAnimation>
  <YourContent />
</ScrollAnimation>

// With delay
<ScrollAnimation delay={200}>
  <YourContent />
</ScrollAnimation>

// With animation type
<ScrollAnimation className="scale-up">
  <YourContent />
</ScrollAnimation>
```

## ⚡ Performance

- Animations only trigger when elements are visible (Intersection Observer)
- GPU-accelerated transforms
- Minimal repaints and reflows
- Smooth 60fps animations

