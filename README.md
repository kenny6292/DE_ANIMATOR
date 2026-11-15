# DE_ANIMATOR Portfolio

Premium portfolio website for 2D animation, 3D animation, CGI, motion design and visual storytelling.

## Tech stack
- Next.js 15 / React 19
- Tailwind CSS 4
- Framer Motion-ready dependency and Lucide icons
- Resend contact-form integration

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Run `npm run dev` and open http://localhost:3000.

## Contact form
Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and a verified `CONTACT_FROM_EMAIL` to enable email delivery. Until configured, the form clearly reports that email delivery is not active.

## Portfolio content
Edit `src/data/projects.js` to add or update projects. Current entries are explicitly marked as personal concepts or concept projects. Replace their copy and imagery with your own approved work before launch.

## Deploy
Import this repository into Vercel and configure the environment variables above.

## Before publishing
- Add your business email and WhatsApp details to the contact page.
- Replace concept imagery with your own animation stills, showreel and project videos.
- Verify the Resend sender domain and test the inquiry form.
