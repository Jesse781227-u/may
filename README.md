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
- `VITE_WEBHOOK_URL` (set this to your deployed webhook endpoint, such as `https://your-domain.com/api/webhook`)

## Live Paystack test flow

1. Start the app with `npm run dev` or deploy it to your hosting provider.
2. Set `VITE_PAYSTACK_PUBLIC_KEY` to your Paystack test public key.
3. Set `VITE_WEBHOOK_URL` to the public URL of your deployed webhook endpoint.
4. Complete a Paystack test transaction to verify that the order is created and the webhook confirmation is received.

## Render environment variables

Add these in the Render dashboard for the frontend service:

- `VITE_PAYSTACK_PUBLIC_KEY`
- `VITE_WEBHOOK_URL`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

If you also deploy the webhook backend as a separate Render web service, add these server-side variables there:

- `PAYSTACK_SECRET`
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

## Server-side secrets

The legacy browser-side secrets must never be committed. The webhook/server-side notification worker should use the following deployment secrets:

- `PAYSTACK_SECRET`
- `TELEGRAM_BOT_TOKEN`
- `EMAILJS_KEY`

## Migration log

- Ported: home, FAQ, privacy, terms, navigation, shop shell, cart flow, and checkout form.
- Pending: full Firebase Auth/Firestore integration, Paystack webhook verification, and server-side notifications.
