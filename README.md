# FairGarage AI Frontend MVP

Mobile-first frontend prototype for a calm, testable car-repair assistant. The app lets a user describe a symptom, upload a workshop quote, or upload a warning-light photo, then walks them through a believable demo analysis flow using mock data.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## How to run

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project structure

```text
src/
  components/   Reusable UI building blocks
  data/         Mock analyses and sample history
  lib/          Context, helpers, and small utilities
  pages/        Route-level screens
  types/        Shared TypeScript models
```

## What is mocked

- Symptom analysis results
- Warning light photo analysis results
- Workshop quote analysis results
- History list
- Upload handling and previews
- Analysis/loading progress flow

There is no real OCR, image recognition, pricing engine, or backend yet. The app simulates those states with local mock data and route-driven transitions.

## Suggested next backend connections

- Replace `src/data/mockAnalyses.ts` with API-backed analysis responses
- Connect upload screens to real file storage or signed-upload endpoints
- Send symptom text, warning-light images, and quote files to dedicated backend analysis routes
- Persist analysis history per authenticated user instead of localStorage
- Add real quote/OCR parsing, warning-light classification, and market-pricing logic
