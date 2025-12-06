# Now UI Kit Angular - Replit Setup

## Overview
This is a Now UI Kit Angular application - a responsive Bootstrap 4 UI kit featuring over 50 elements and 3 example templates. It's been configured to run seamlessly in the Replit environment.

**Project Type:** Frontend-only Angular application  
**Angular Version:** 14.2.0  
**Bootstrap Version:** 4.5.3  

## Current State
The application is fully configured and running on Replit with:
- Development server on port 5000 with host 0.0.0.0
- Proxy-friendly configuration (disableHostCheck enabled)
- Production deployment configured as static site
- All dependencies installed with legacy peer deps

## Project Architecture

### Structure
```
now-ui-kit-angular/
├── src/
│   ├── app/           # Angular components and modules
│   ├── assets/        # Static assets (images, fonts, styles)
│   ├── environments/  # Environment configurations
│   └── index.html     # Main HTML file
├── angular.json       # Angular CLI configuration
├── package.json       # NPM dependencies and scripts
└── dist/             # Build output directory
```

### Key Components
- **Components:** Basic UI elements, modals, navigation, notifications, icons, typography
- **Examples:** Landing page, login page, profile page
- **Styling:** SCSS with Now UI Kit custom theme

## Replit Configuration

### Development Server
- **Workflow Name:** Angular Dev Server
- **Command:** `npm start`
- **Port:** 5000 (exposed for webview)
- **Host:** 0.0.0.0 (required for Replit proxy)
- **Special Settings:** `--disable-host-check` enabled for iframe compatibility

### Deployment Configuration
- **Type:** Static
- **Build Command:** `npm run build`
- **Public Directory:** `dist`

## Recent Changes

### December 6, 2025 - Design Repair & Visual Overhaul (5 Steps Completed)

#### STEP 1: Home Page Design Overhaul
- Added "How We Work" Process section with 4 steps (Consultation → Strategy → Execution → Support)
- Added "Mini Stats" black strip (50+ Projects, 12+ Experts, 100% Satisfaction)
- Redesigned service cards with hover-reveal effect using gradient backgrounds
- Added "Featured Project" spotlight section at the bottom

#### STEP 2: About Page Fixes
- Fixed Quote Box with proper desktop overlap (-120px margin-top, z-index: 20)
- Added "Our Roots" vertical timeline (2018 Founded → 2020 Expansion → 2024 New Tech)
- Added "Core Values" 3-card section (Innovation, Integrity, Impact)

#### STEP 3: Contact Page Hybrid Makeover
- Redesigned with floating white form card on gradient background
- Added horizontal contact info bar above map
- Full-width Google Maps iframe at bottom

#### STEP 4: Admin Login Alignment Fix
- Added padding-top: 80px to login page container to clear navbar

#### STEP 5: Mobile Fixes
- Added padding-right to social row for Instagram icon cutoff fix
- Added contact button container centering styles

### December 6, 2025 - Fresh Clone Setup
- Fresh clone of GitHub repository imported to Replit
- Installed all npm dependencies with `--legacy-peer-deps` flag
- Verified Angular Dev Server workflow running successfully on port 5000
- Confirmed deployment configuration (static site, dist folder)
- Application successfully compiling and running with no errors
- Verified web preview working correctly through Replit proxy

### December 4, 2025 - Previous Updates

### Major Refactor - Component-Scoped Styling & New Features

#### STEP 1: Navbar & Footer Localization
- Moved mobile menu styles from global styles.scss to navbar.component.scss
- Footer styles now properly scoped with ::ng-deep

#### STEP 2: Home Page Updates
- Added 2 new service cards: Photography & Cinematography, Cyber Security & Audits
- Updated local styles for text colors (black card headings)
- Removed icons from service cards for cleaner design

#### STEP 3: Team Page Styling
- Added styling for leader names (black), job titles (blue), descriptions (black)

#### STEP 4: About Page
- Verified existing quote box overlap logic is correct

#### STEP 5: Service Details Page Redesign
- Implemented Zig-Zag layout (alternating text/image sections)
- Added Sticky Sidebar with Request Quote card
- Added 12 services with full metadata including photography and cybersecurity

#### STEP 6: Contact Page Modernization
- Complete redesign with Floating Glass design
- Full background with glassmorphism card containing info panel + form
- Added mobile fallback for iOS Safari (background-attachment: scroll on mobile)

#### STEP 7: Global Cleanup
- Removed moved styles from styles.scss
- Kept only essential globals (hero alignment, image security, button overrides)

### Initial Replit Setup
1. Configured Angular to bind to 0.0.0.0:5000 for Replit's proxy system
2. Updated angular.json to allow all hosts (disableHostCheck: true)
3. Modified package.json start script to use npx and correct host/port
4. Installed dependencies with `--legacy-peer-deps` due to @agm/core peer dependency conflicts
5. Set up Angular Dev Server workflow
6. Configured static deployment for production

## Dependencies

### Known Issues
- **@agm/core:** Has peer dependency conflicts with Angular 14. Installation requires `--legacy-peer-deps` flag.
- **Deprecated packages:** Several deprecated npm packages (protractor, popper.js v1, core-js@3.8.1) - consider updating in future.
- **SCSS warnings:** Division operator warnings for Dart Sass 2.0.0 compatibility.

### Installation Notes
Always use `npm install --legacy-peer-deps` when installing new packages to avoid peer dependency conflicts.

## Development

### Running the App
The application starts automatically via the "Angular Dev Server" workflow. To restart manually:
```bash
npm start
```

### Building for Production
```bash
npm run build
```

### Other Commands
- `npm test` - Run unit tests with Karma
- `npm run lint` - Run TSLint checks
- `npm run e2e` - Run end-to-end tests with Protractor

## User Preferences
None specified yet.

## Notes
- This project uses Angular's deprecated View Engine libraries for some components (@ng-bootstrap/ng-bootstrap, ng2-nouislider, jw-bootstrap-switch-ng2)
- The template includes beautiful gradients, typography, and spacious layouts
- Perfect for creating clean, modern websites with flat design aesthetic
