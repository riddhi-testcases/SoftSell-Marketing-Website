# SoftSell - Software License Marketplace

A modern, responsive single-page marketing website for SoftSell, a platform that helps businesses sell their unused software licenses.

## Live Demo
[View Live Site](https://riddhi-softsell-marketing.netlify.app)

## Features Implemented

### Core Features
- Responsive single-page design that works seamlessly across all devices
- Dark/Light mode toggle with system preference detection
- Smooth scroll navigation
- Reveal animations on scroll for enhanced user engagement
- Form validation with error handling
- Interactive UI elements with hover states

### Page Sections
1. **Hero Section**
   - Eye-catching headline with clear value proposition
   - Animated card showcasing available licenses
   - Primary and secondary CTAs

2. **How It Works**
   - Three-step process explanation
   - Icon-based visual guides
   - Animated reveal on scroll

3. **Why Choose Us**
   - Four key value propositions
   - Icon-based feature cards
   - Conversion-focused CTA section

4. **Testimonials**
   - Real-world use cases
   - Customer success stories
   - Company logos showcase

5. **Contact Form**
   - Comprehensive lead capture form
   - Real-time validation
   - Success/error states
   - License type selection

6. **AI Chat Widget**
   - Minimizable chat interface
   - Pre-programmed responses
   - Natural conversation flow
   - Instant responses to common queries

## LLM-Powered Chat Feature

A simple, mock AI-powered chat widget that helps answer common user questions interactively.

-  **LLM Simulation** using hardcoded prompts and logic
-  Floating widget with open/close toggle
-  Predefined questions handled:
  - "How do I sell my license?"
  - "What types of licenses do you accept?"
  - "Is it legal?"
  - "How long does it take?"
  - "What are the payment methods?"

> If a user types a question outside this list, a fallback response is provided politely suggesting alternate ways to get help.


### Technical Features
- SEO optimized with meta tags
- Custom favicon
- Performance optimized images
- Semantic HTML structure
- Accessible UI components
- Custom Tailwind configuration
- TypeScript for type safety

## Design Choices

### Visual Design
- Clean, modern aesthetic with ample white space
- Consistent color palette using primary blue and complementary colors
- Custom shadows and hover effects for depth
- Subtle animations for enhanced engagement
- Professional typography using Inter font family

### UX Considerations
- Clear visual hierarchy
- Intuitive navigation
- Consistent spacing and alignment
- Mobile-first responsive design
- Clear call-to-actions
- Feedback on user interactions

### Technical Architecture
- React + Vite for optimal development experience
- Tailwind CSS for utility-first styling
- TypeScript for type safety
- Component-based architecture
- Custom hooks for reusable logic
- Modular CSS with Tailwind

### Performance Optimization
- Lazy loading of images
- Optimized bundle size
- Minimal dependencies
- Efficient re-renders
- Responsive images

## Tech Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

---


## ⏱ Time Spent

| Task                              | Duration |
|-----------------------------------|----------|
| Initial design & layout planning  | ~1.5 hrs |
| Component development             | ~3.0 hrs |
| Chat widget (logic + styling)     | ~1.5 hrs |
| Light/Dark mode toggle            | ~0.5 hr  |
| Styling, animations & polish      | ~1.5 hrs |
| Testing, README & deployment      | ~1.0 hr  |
| **Total**                         | ~9 hrs   |

---

## Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
