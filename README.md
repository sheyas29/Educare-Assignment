# PopX Mobile App Simulator (React JS)

A pixel-perfect recreation of the PopX mobile design built using **React JS** for the **React JS - Intern/Fresher** qualifying interview assignment.

---

## 📋 Problem Statement
* **Objective:** Reconstruct the four primary screens (Welcome, Login, Signup, and Account Settings) of the "PopX" mobile application in React JS, ensuring exact design consistency with the Adobe XD blueprints.
* **Pixel-Perfection:** Replicate all visual components using precise coordinates, padding, margins, shadows, and exact hex colors (such as `#F7F8F9` background, `#6C25FF` primary purple, and `#1D2226` body text).
* **Device Simulation:** Center the mobile app UI on the desktop screen, simulating a standard mobile viewport (`375px` width x `812px` height) as a flat, distraction-free container.
* **No-Scroll Constraints:** Prevent browser-level desktop scrollbars. The interface must dynamically scale down on smaller viewport heights (like laptop screens) without cropping or clipping the top and bottom of the app layout.
* **Seamless Navigation:** Implement client-side routing between mock screens that mirrors the prototype flow while keeping the project structure clean, modular, and optimized.

---

## 🚀 Live Demo & Repository
- **Public GitHub Repository:** [sheyas29/Educare-Assignment](https://github.com/sheyas29/Educare-Assignment)
- **Hosted Link:** [educare-assignment-kohl.vercel.app](https://educare-assignment-kohl.vercel.app/)

---

## 🎨 Features
- **Centered Mobile Frame:** The app simulates a standard mobile screen (`375px` width x `812px` height) centered perfectly on both desktop and tablet viewports.
- **Fluid Desktop Scaling:** Features an automated scaling mechanism. If the browser height is smaller than the mock phone height (e.g. on laptops), the container scales down proportionally to fit the viewport. **This prevents any browser window scrollbars**, preserving a sleek and clean appearance.
- **Pixel-Perfect Fidelity:** Recreated in strict accordance with the Adobe XD design layouts, using precise coordinates, padding, margins, shadows, and exact hexadecimal color values (such as `#F7F8F9` background, `#6C25FF` primary purple, and `#1D2226` body text).
- **Seamless Router Navigation:** Uses `react-router-dom` to support instant transitions between all four screens without page refreshes.
- **Custom Floating Labels:** Standard text inputs feature dynamic, border-intersecting label typography with red asterisks (`*`) for required fields.

---

## 📁 Directory Structure
The project directory has been organized cleanly, adhering to professional standards:

```text
react-assignment/
├── public/                 # Static assets
└── src/
    ├── components/
    │   ├── Input.jsx           # Reusable floating-label input component
    │   └── MobileContainer.jsx # Device mockup wrapper with scale-to-fit logic
    ├── pages/
    │   ├── Welcome.jsx         # Landing page (Welcome to PopX)
    │   ├── Login.jsx           # Account Sign-In
    │   ├── Signup.jsx          # Account Registration (with Agency radio buttons)
    │   └── AccountSettings.jsx # User Profile / Settings
    ├── App.jsx             # React Router route configuration
    ├── index.css           # Global resets and CSS variables
    └── main.jsx            # React root mount entry point
```

---

## 🛠️ Tech Stack
- **Core:** React JS (Scaffolded using Vite for optimal build size and speed)
- **Routing:** React Router DOM (v6)
- **Styling:** Vanilla CSS (Inline React styles and global index.css reset for exact styling control)

---

## 💡 Key Design Decisions
### 1. Border-Intersecting Labels
Instead of using complex absolute positioned layers that rely on matching background colors (which can break if input background states change), the `Input` component uses standard HTML `<fieldset>` and `<legend>` tags. This naturally forces a gap in the border where the label text is placed, mirroring the Adobe XD mockup.

### 2. No-Scroll Mobile centering
To achieve the user requirement where *“the mobile App interface is centered on the webpage and isn't scrollabely long”*, `MobileContainer.jsx` detects the window size via a resize listener. If the viewport height is less than `852px` (including margin), it calculates a ratio and applies a CSS `transform: scale(scale)` wrapper. 

Additionally, the outer flexbox wrapper resizes its own dimensions to `375 * scale` and `812 * scale`. This prevents CSS alignment issues where scaled elements overflow the top of the browser screen and get cropped.

### 3. Navigation & Interaction Flow
The transitions between screens mimic the exact navigation triggers specified in the Adobe XD prototype:
- **Welcome Screen:** "Create Account" navigates to the Signup page, and "Already Registered? Login" navigates to the Login page.
- **Login Screen:** The "Login" button navigates directly to the Account Settings page.
- **Signup Screen:** The "Create Account" button navigates directly to the Account Settings page.

*Note: Since this is a frontend UI mockup qualifying task, full authentication logic (like database calls or validation checks) is bypassed. The buttons trigger routing directly so that the evaluator can review all four screens and their layout implementations seamlessly.*

---

## 💻 Local Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd react-assignment
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173` to interact with the application.
