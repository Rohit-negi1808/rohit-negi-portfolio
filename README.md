# Rohit Negi — Portfolio

A React + Vite portfolio built from a simple component structure and a
single data file.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Where things live

- `src/data/portfolio.js` — **the one file you'll edit most.** Your name,
  title, links, skills, projects, education and certifications all live here.
- `src/components/` — one component per section (Navbar, Hero, About,
  Skills, Projects, Experience, Contact, Footer, plus ProjectDetails and
  NotFound).
- `src/style.css` — the single stylesheet. Colors are CSS variables at the
  top (`:root` for dark, `[data-theme="light"]` for light).
- `public/` — your resume, profile image and project screenshots.

## Common edits

**Replace your resume**
Drop your real PDF in as `public/resume.pdf` (same filename). The
"Download Resume" / "View Resume" links already point there.

**Replace project images**
Put screenshots in `public/projects/` and update the `image` path for that
project in `src/data/portfolio.js`. Current images are generated
placeholders — swap them for real screenshots any time.

**Add a new project**
Add a new object to the `projects` array in `src/data/portfolio.js`. Give it
a unique `id` — that becomes its URL at `/projects/your-id`. Leave `github`
or `live` as `""` if you don't have a link yet; the UI hides that button
automatically.

**Update skills**
Add or remove entries in the `skills` array in `portfolio.js`. Each skill
needs a `name`, `category`, and an `icon` key. If you use a new icon key,
add a matching import + mapping entry in `src/components/Skills.jsx` (see
the `ICONS` object at the top of that file) — icons come from
[react-icons](https://react-icons.github.io/react-icons/).

**Update contact info / GitHub / LinkedIn**
All in the `profile` object at the top of `src/data/portfolio.js`.

**Update education / certifications**
Edit the `education` and `certifications` arrays in `portfolio.js`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), click "Add New → Project", and
   import that repository.
3. Vercel auto-detects Vite. Keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click Deploy. Every future push to your main branch redeploys
   automatically.

## Notes

- This is a frontend-only app — there's no backend, database or auth.
- **Connect / contact**: the "Connect With Me" button and the contact form
  both open the visitor's email app with a message pre-filled to your
  address (via `mailto:`). The GitHub, LinkedIn, and email icons in the
  hero, footer, and contact section all link out directly too. If you'd
  rather the form send silently instead of opening an email app, wire it up
  to a form service like Formspree later.
- **Resume**: "View Resume" opens the PDF in a new tab; "Download" saves it
  straight to the visitor's device (no extra click).
- **Skill & technology icons** are each brand's real logo in its official
  color (from [react-icons](https://react-icons.github.io/react-icons/)),
  not a generic icon set — so it's easy to scan at a glance. A few tools
  (PowerBI, Tableau, Excel) don't have official logos in the icon library
  used, so those use a colored chart/table icon instead.
- **Project cards** are fully clickable — clicking anywhere on a card (not
  just "View Details") opens that project's detail page.
- Dark mode is the default; the toggle in the navbar saves the visitor's
  choice to `localStorage`.

## How the contact form works

There is no backend. When a visitor hits **Send Message**, the form builds a
pre-filled email addressed to you and opens Gmail's web compose window in a
new tab. The visitor just presses send there and it arrives in your inbox.

Three routes are available so nobody gets stuck:

1. **Send Message** — opens Gmail web compose (works in any browser, even
   with no desktop mail app installed).
2. **Use my mail app** — a standard `mailto:` link for people who prefer
   Outlook / Apple Mail / Thunderbird.
3. **Copy icon** next to your email address — copies it to the clipboard.

Your address comes from `profile.email` in `src/data/portfolio.js`, so
changing it there updates every route at once.

### Want messages to arrive silently, without a compose window?

Sign up for a free form service such as [Formspree](https://formspree.io) or
[Web3Forms](https://web3forms.com), then replace the body of `handleSubmit`
in `src/components/Contact.jsx` with a `fetch` POST to the endpoint they give
you. The rest of the form (state, validation, status message) already works
as-is.
