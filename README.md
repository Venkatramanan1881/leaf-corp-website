# Leaf Corporation website

Next.js 15 + TypeScript + Tailwind. Design approach modelled on swigatoindia.in; all content from leafcorporation.in.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Enquiry form
POST /api/enquiry sends email over SMTP. Copy `.env.example` to `.env.local` and fill in SMTP_* values.
Without them the form shows WhatsApp / email / call fallbacks instead of failing silently.

## All business content lives in `lib/site.ts`

## Open items to confirm with the client
1. WhatsApp number: the source site lists none. `lib/site.ts` uses the first phone (+91 80125 30795).
2. Social links: the source site's Facebook/Twitter/Instagram icons point to Wix's own accounts, so only LinkedIn is used.
3. Service pages on the source site contain Wix template placeholders (San Francisco address, 123-456-7890, info@mysite.com, prices of Rs.10 / Rs.400). None are used. No prices are shown.
4. "Restaurant Restructuring" has no description on the source site; only its headline is used.
5. Testimonials are first names only (Preethi, Santhosh, Ashok); no business names or dates are given.
6. One client logo has no name on the source site.
7. Images (logo, client logos, hero photo) load from Leaf's existing Wix image host. Download them into /public for long-term independence.
8. Privacy / Terms / Refund / Accessibility pages link to the existing pages on leafcorporation.in.
9. Not built (no source content): team, pricing, FAQ, blog, calculators, comparison table.
10. Leaf green (#2F7D32) replaces Swigato's orange, matching Leaf's leaf imagery.
