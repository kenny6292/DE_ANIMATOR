# DE_ANIMATOR Portfolio

Portfolio website for DE_ANIMATOR's 2D animation, 3D animation, CGI, product visuals and motion-design services.

## Tech stack
- Next.js 15 / React 19
- Tailwind CSS 4
- Framer Motion and Lucide icons
- Nodemailer with Gmail SMTP for contact-form delivery

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the Gmail settings.
4. Run `npm run dev` and open http://localhost:3000.

## Contact form configuration
Set:
- `GMAIL_USER`: the Gmail account used to send contact-form notifications.
- `GMAIL_APP_PASSWORD`: a Google App Password for that account.
- `CONTACT_TO_EMAIL`: destination inbox for inquiries (defaults to `kennymichael322@gmail.com`).

Never commit real credentials or App Passwords. If the Gmail variables are missing, the form returns a clear setup message and provides direct email/WhatsApp contact options.

## Portfolio content
Edit `src/data/projects.js` to update project entries. Current entries are labelled as personal concepts or concept projects. Replace concept imagery and descriptions with approved original work before presenting them as completed client projects.

Edit `src/data/showreels.js` to maintain the curated Vimeo reference library. The showreel page identifies these as third-party videos and credits their creators; they are not DE_ANIMATOR productions.

## Deploy
Import this repository into Vercel and configure the Gmail environment variables for the Production environment. Redeploy after changing environment variables.

## Pre-launch checks
- Confirm the contact email and WhatsApp details.
- Test the inquiry form with a real submission.
- Replace concept imagery with approved original animation stills and videos as they become available.
- Confirm all third-party showreel credits and embeds remain accurate.