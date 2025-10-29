# Website (CRA + Tailwind)

## Prerequisites
- Node.js 16+ and npm

## Install
```bash
npm install
```

## Develop
Run Tailwind in watch mode (in a separate terminal):

```bash
npm run tw:watch
```

Start the CRA dev server (another terminal):

```bash
npm start
```
Open http://localhost:3000

## Build (production)
```bash
npm run tw:build   # build Tailwind CSS once
npm run build      # build React app
```
The output is written to `build/`.

## Tailwind notes
- Tailwind input: `src/tailwind.css`
- Generated output: `src/tailwind.output.css` (imported in `src/index.js`)
- Dark mode: OS-preference (`darkMode: 'media'`)

## Styling
- Global CSS variables and layout are in `src/index.css` (also imported in `src/index.js`).

