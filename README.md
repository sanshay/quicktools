# QuickTools

QuickTools is a static, browser-based utility website with **85 working tools**. This build is structured for SEO and future ad monetization.

## What is included

- Searchable homepage with category filters
- 85 dedicated tool URLs under `tools/<seo-slug>/`
- Working browser-based tool UI on every dedicated page
- About, Contact, Privacy and Terms pages
- `robots.txt` and `sitemap.xml`
- `ads.txt` placeholder
- Configurable AdSense loader with manual ad slots
- Ad placements above/below the main content without placing ads next to calculation controls
- Responsive light/dark theme

## Before publishing

### 1. Set your domain

The generated `sitemap.xml` and `robots.txt` currently use:

```text
https://quicktools.example
```

Replace that domain with the final production domain.

### 2. Configure AdSense

Open `ads-config.js` and replace:

```js
publisherId: "ca-pub-XXXXXXXXXXXXXXXX"
```

with your real publisher ID. Add the ad-unit slot IDs created in AdSense:

```js
slots: {
  homeTop: "1234567890",
  homeBottom: "...",
  toolTop: "...",
  toolBottom: "..."
}
```

Then set:

```js
enabled: true
```

`autoAds: true` is retained as a configuration note; the publisher script will be loaded when ads are enabled. Manual slots are populated only when a slot ID is present.

While developing, `previewPlaceholders: true` shows subtle ad-space placeholders. Set it to `false` to hide unconfigured slots.

### 3. Configure ads.txt

Replace `pub-XXXXXXXXXXXXXXXX` inside `ads.txt` with the exact line supplied by your AdSense account.

### 4. Customize legal/contact details

The Privacy Policy and Terms are starter text, not jurisdiction-specific legal advice. Replace the placeholder email in `contact.html` and review the policies for your legal entity, analytics, cookies, consent setup and advertising configuration.

### 5. Consent management

If your advertising/analytics setup requires user consent in a visitor's region, configure an appropriate consent-management solution before enabling those services. Do not treat the included static privacy text as a consent platform.

## Hosting

The entire project is static and can be deployed to GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any normal web host.

For the cleanest URLs, deploy at the root of a custom domain.
