# BKBIET modern homepage (React)

A static, responsive React homepage concept inspired by the public BKBIET website. It is a visual frontend prototype, not a complete institutional website.

## Run locally
1. Install Node.js (18+ recommended).
2. Extract this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Build
Run `npm run build`. The production output is created in `dist/`.

## Notes
- React + Vite, with Lucide icons.
- All page sections are static; there is no backend, database, authentication, CMS or working admission form.
- Navigation dropdowns and the mobile menu are frontend interactions only.
- Photos are loaded from Unsplash and therefore need an internet connection.
- Verify institutional facts, current programme availability, placement figures and contact information before publishing.
- Official source: https://bkbiet.ac.in/

## Replace the Director portrait
1. Add the real portrait image inside the `public/` folder and name it `director.jpg` (create the folder if it does not exist).
2. In `src/App.jsx`, find the `directorPortrait` constant and change its value to `/director.jpg`.
3. Save the file; Vite will refresh the page automatically.
