# May's Chills React Migration

This project is a React + TypeScript + Vite migration of the original May's Chills static site.

## Environment variables

Create a `.env` file and set the following values before deploying:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_PAYSTACK_PUBLIC_KEY`

## Server-side secrets

The legacy browser-side secrets must never be committed. The webhook/server-side notification worker should use the following deployment secrets:

- `PAYSTACK_SECRET`
- `TELEGRAM_BOT_TOKEN`
- `EMAILJS_KEY`

## Migration log

- Ported: home, FAQ, privacy, terms, navigation, shop shell, cart flow, and checkout form.
- Pending: full Firebase Auth/Firestore integration, Paystack webhook verification, and server-side notifications.
