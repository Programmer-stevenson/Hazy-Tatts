# Hazy Tatts

A responsive tattoo portfolio website developed as a component-based React single-page application. The frontend includes a filterable image gallery, lightbox viewing, animated page elements, responsive navigation, legal pages, and a booking inquiry form.

## Technology Stack

| Technology                    | Purpose                                                         |
| ----------------------------- | --------------------------------------------------------------- |
| **React 18**                  | Component-based user interface development                      |
| **React DOM**                 | Rendering the React application in the browser                  |
| **JavaScript / JSX**          | Application logic and component structure                       |
| **Create React App**          | Frontend development environment and production build system    |
| **React Scripts 5**           | Development server, testing, bundling, and build commands       |
| **CSS3**                      | Responsive layouts, animations, transitions, and visual styling |
| **Web3Forms API**             | Serverless booking-form submission                              |
| **Fetch API**                 | Sending booking inquiries to Web3Forms                          |
| **FormData API**              | Packaging contact-form fields for submission                    |
| **Intersection Observer API** | Triggering reveal animations as sections enter the viewport     |
| **RequestAnimationFrame**     | Updating the custom desktop cursor efficiently                  |
| **SVG**                       | Loader artwork and scalable decorative elements                 |

## Application Architecture

The project is structured as a React single-page application. The interface is divided into reusable components, while the primary application component controls page sections and legal-page rendering.

The main website is assembled from these sections:

```text
Navbar
Hero
Ribbon
About
Portfolio
Services
Banner
Testimonials
Contact
Footer
```

Terms and privacy content are rendered through URL hashes:

```text
#terms
#privacy
```

The project uses native hash handling for legal-page navigation. Although `react-router-dom` is installed, the current application does not use React Router for routing.

## Core Technical Features

### Responsive Navigation

The navigation component includes:

* Desktop navigation links
* Mobile hamburger menu
* Scroll-based navbar styling
* Body scroll locking while the mobile menu is open
* Anchor navigation between page sections

### Portfolio Gallery

The portfolio is built from structured JavaScript data and includes:

* Category-based filtering
* Initial limited gallery display
* Expand and collapse functionality
* Smooth scrolling when the gallery is collapsed
* Responsive image tiles
* Full-screen lightbox previews
* Escape-key lightbox closing
* Background scroll locking while the lightbox is open

Portfolio categories include illustrative, realism, traditional, fine-line, and stippling work.

### Contact Form Integration

The booking form submits directly to the Web3Forms API using `fetch()` and `FormData`.

The form includes:

* Required-field validation
* Submission loading state
* Success and error feedback
* Bot-check field
* Mobile panel transition
* Responsive desktop layout

The Web3Forms access key is configured in:

```text
src/components/Contact.jsx
```

Replace the existing value assigned to `WEB3FORMS_ACCESS_KEY` with the appropriate project key before deploying a copied or forked version.

### Animation and Interaction

The application uses CSS animations and native browser APIs for interactive effects:

* Animated SVG loading screen
* Dynamically generated loader sparks
* Hero particle animation
* Intersection Observer scroll reveals
* Custom image-based desktop cursor
* Hover and focus transitions
* Timed booking popup
* Responsive gallery expansion controls

The custom cursor is disabled automatically on coarse-pointer and touch devices.

### Component Communication

The portfolio and booking popup communicate through a custom browser event:

```text
gallery-expanded
```

When the gallery expands, the booking popup temporarily hides to prevent interface overlap.

## Project Structure

```text
Hazy-Tatts/
├── public/
│   ├── index.html
│   ├── pointer.png
│   ├── favicon-512.png
│   ├── decorative image assets
│   └── portfolio photography
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Cursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Lightbox.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Popup.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Privacy.jsx
│   │   ├── Ribbon.jsx
│   │   ├── Services.jsx
│   │   ├── Terms.jsx
│   │   └── Testimonials.jsx
│   ├── App.js
│   ├── data.js
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package-lock.json
└── package.json
```

## Local Development

### Prerequisites

Install a current supported version of:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Programmer-stevenson/Hazy-Tatts.git
```

Enter the project directory:

```bash
cd Hazy-Tatts
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Create React App will normally open the project at:

```text
http://localhost:3000
```

## Available Scripts

### Start Development Server

```bash
npm start
```

Runs the application in development mode with automatic browser refresh.

### Create Production Build

```bash
npm run build
```

Creates an optimized production build in the `build` directory.

### Run Tests

```bash
npm test
```

Starts the Create React App test runner in interactive watch mode.

### Eject Configuration

```bash
npm run eject
```

Exposes the underlying Create React App configuration. This operation cannot be reversed easily and is normally unnecessary.

## Styling

The project uses a custom CSS system rather than a component library or utility framework. Global styles are located in:

```text
src/styles.css
```

Several components also include locally scoped style rules through inline `<style>` elements. The design system uses CSS custom properties for reusable colors and interface values.

## Asset Management

Portfolio images and decorative graphics are stored in the `public` directory and referenced through root-relative paths:

```jsx
<img src="/example-image.jpg" alt="Example" />
```

New gallery items can be added by placing the image in `public` and adding its metadata to the `customPieces` array inside:

```text
src/components/Portfolio.jsx
```

## Build and Deployment

Generate the production build with:

```bash
npm run build
```

Deploy the generated `build` directory to a static hosting platform that supports React applications, such as:

* Netlify
* Vercel
* GitHub Pages
* Cloudflare Pages
* Azure Static Web Apps

Because the booking form communicates directly with Web3Forms, the current application does not require a custom backend server.

## Technical Notes

* `react-router-dom` is installed but is not currently imported by the application.
* Legal pages are controlled through `window.location.hash`.
* The configured development proxy points to `http://localhost:5000`, but the current contact form submits directly to Web3Forms.
* Global scroll restoration is disabled so the application loads at the top of the page.
* The application is rendered inside `React.StrictMode`.
