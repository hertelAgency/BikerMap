# 🚵 Biker-Map.com

Interaktive Karte zum Entdecken von Mountainbike-Trails, Bikeparks und Bike-Shops.

## 🚀 Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Redux Toolkit** - State Management
- **Tailwind CSS** - Styling
- **MapLibre GL** - Interactive Maps
- **React Router** - Navigation

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Environment-Variablen einrichten
cp .env.example .env
# Dann .env mit deinen Werten anpassen
```

## 🛠️ Entwicklung

```bash
# Development Server starten
npm run dev

# TypeScript Type-Check
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Code formatieren
npm run format
npm run format:check
```

## 🏗️ Build

```bash
# Production Build erstellen
npm run build

# Build lokal testen
npm run preview
```

## 📁 Projektstruktur

```
src/
├── components/      # Wiederverwendbare UI-Komponenten
├── layouts/         # Layout-Komponenten (App, Dashboard)
├── pages/           # Seiten-Komponenten
├── lib/
│   ├── service/     # API Services
│   └── store/       # Redux Store & Slices
├── styles/          # SCSS Stylesheets
├── utils/           # Helper-Funktionen
└── assets/          # Bilder, Icons, etc.
```

## 🔐 Umgebungsvariablen

Erforderliche Variablen in `.env`:

```env
VITE_API_BASE_URL=https://your-api-url.com/api
VITE_MAP_DEFAULT_LAT=50.9077
VITE_MAP_DEFAULT_LNG=8.0275
VITE_MAP_DEFAULT_ZOOM=10
```

## 📝 Scripts Übersicht

| Script | Beschreibung |
|--------|--------------|
| `npm run dev` | Startet Development Server |
| `npm run build` | Erstellt Production Build |
| `npm run preview` | Testet Production Build lokal |
| `npm run lint` | Prüft Code-Qualität |
| `npm run format` | Formatiert Code mit Prettier |
| `npm run type-check` | TypeScript Typ-Prüfung |

## 🤝 Contributing

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Changes committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request öffnen

## 📄 Lizenz

Alle Rechte vorbehalten © hertelAgency
