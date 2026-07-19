# Leanne Ganado Portfolio

A responsive, self-contained portfolio website built with HTML5, CSS3, and vanilla JavaScript. Open `index.html` in a browser to run it locally.

## Included design features

- Light mode with a warm, editorial robotics-inspired palette and bold grotesk-style typography
- Neutral charcoal dark mode
- Light/dark theme toggle with saved preference
- Chris Junio-inspired hero structure without copying his color palette
- Animated typing roles in the hero
- Local portrait placeholder and floating experience cards
- Compact two-direction tools ribbon without a repeated section heading
- Responsive navigation, project filters, scroll reveal, and reduced-motion support
- No video assets or video sections

## Folder structure

```text
portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── favicon.svg
    └── images/
        ├── automation/
        ├── profile/
        ├── web/
        ├── certificates/
        ├── tools/
        └── shared/
```

## Main places to update

1. **Profile photo (Hero + About):** Put the final image in `assets/images/profile/`, then edit the single `profilePhoto` object near the top of `js/script.js`. Change its `src` once and both sections update automatically. Use `heroObjectPosition` and `aboutObjectPosition` to adjust each crop.
2. **Typing roles:** Edit the `roleTitles` array in `js/script.js`. Keep the article (`a` or `an`) inside each phrase because it is part of the typing animation.
3. **Tools ribbons:** Edit the `toolLogos` array near the top of `js/script.js`. Replace files in `assets/images/tools/` with final logos or update their paths.
4. **Automation projects:** Edit the `automationProjects` array in `js/script.js`.
5. **Web project screenshots and repositories:** Edit the `webProjects` array in `js/script.js`.
6. **Certifications:** Edit the `certifications` array in `js/script.js`.
7. **Calendly:** Update the booking URL in `index.html` if Leanne’s scheduling link changes.
8. **Light and dark colors:** Update the CSS variables at the top of `css/style.css` under `:root` and `html[data-theme="dark"]`.
9. **Social metadata:** Replace the placeholder domain and Open Graph URLs in the `<head>` of `index.html`.

## Profile photo replacement

1. Add your image to `assets/images/profile/` (for example, `leanne-profile.webp`).
2. Open `js/script.js` and find the **PROFILE PHOTO — HERO + ABOUT** object near the top.
3. Change `profilePhoto.src` to your file path. Both portrait sections use this one setting.
4. Adjust `heroObjectPosition` or `aboutObjectPosition` when you need to reposition the crop without editing CSS.

A copy of these instructions is also included at `assets/images/profile/PUT-YOUR-PHOTO-HERE.txt`.

## Image guidance

- Keep project screenshots close to a 16:10 aspect ratio.
- Use optimized `.webp`, `.jpg`, `.png`, or `.svg` files.
- Missing project images automatically fall back to `assets/images/shared/image-fallback.svg`.
- All current placeholders are local, so the portfolio works offline.

## Ribbon and accessibility behavior

- Both tool ribbons pause on hover or keyboard focus.
- Reduced-motion visitors receive non-animated, horizontally scrollable tool lists.
- The theme toggle stores the selected mode in local storage.
- Keyboard focus styles, a skip link, semantic sections, and mobile navigation are included.

## Latest theme and layout updates
- Light mode is the first-visit default; the visitor's manual theme choice is saved.
- Every page section now follows the active light or dark theme, including the contact section.
- Removed the portrait overlay labels/cards so the image area stays clean.
- Added wider, responsive page gutters for more balanced spacing on desktop, tablet, and mobile.

- The contact area now uses Leanne’s 30-minute Calendly booking link instead of a demo form.
- The tools area displays only the two animated ribbons to avoid repeating the full Tools & Technologies section.


## Calendly

The contact section uses the official Calendly inline widget for `https://calendly.com/leannefrances740/30min`. An internet connection is required for the scheduler to load.


## Latest visual updates

- Calendly is displayed without an outer white card, shadow, or rounded shell.
- The light-mode ribbon background is `#f3f0e8`.
- Tool items use transparent backgrounds so the icons and names appear to float across the page.


## Latest layout updates

- The About section uses two desktop columns only: the heading on the left and all biography/focus content stacked on the right.
- The Calendly scheduler is embedded directly on the contact section without an outer card, border, radius, or shadow.
- Calendly’s internal background is matched to the active site theme through supported embed URL parameters; the default Calendly accent styling is retained.

## Latest layout update
- The contact section now uses a single `.layout-container`; the Calendly widget is its direct grid child.
- Tool ribbon logos and labels are slightly larger while retaining the transparent floating style.

## Contact links

The hero and contact sections include Gmail, LinkedIn, and GitHub links. The hero uses logo-only circular buttons. Replace `your-email@example.com` and `https://www.linkedin.com/in/your-profile/` in `index.html` with Leanne’s active contact details. The Calendly embed uses `https://calendly.com/leannefrances740/30min`.


## Design notes
- The original hero section is preserved. The About section uses a separate editorial two-column portrait and biography layout.

## Latest update

- Removed the Core Focus card from the About section.


## Editing the automation project popups

Open `js/script.js` and search for:

`AUTOMATION PROJECT POPUP DETAILS — EDIT CONTENT HERE`

Each object key matches an automation project's `id`. Replace the lorem ipsum title, introduction, four section headings, paragraphs, bullet points, and image paths inside that project object. The placeholder images are stored in `assets/images/project-details/`.

## Scrollable project-details popup

- The popup header stays visible while the project content scrolls inside the modal.
- A visible yellow scrollbar appears on the right side of the popup.
- Desktop, tablet, and mobile layouts all constrain the popup to the viewport, so every section remains reachable.
- The popup contains only four detail sections: Project Overview, Challenge, Solution and Workflow, and Error Handling and Testing.
- All popup text, labels, lists, and image paths remain inside the `automationProjectDetails` JavaScript object for easy editing.
