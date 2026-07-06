# PopX Mobile App Simulator (React JS)

A pixel-perfect recreation of the PopX mobile design built using **React JS**.

## 🚀 Live Demo & Repository
- **Public GitHub Repository:** `[Insert your public GitHub repo URL here]`
- **Hosted Link:** `[Insert your hosted Netlify/Vercel URL here]`

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
