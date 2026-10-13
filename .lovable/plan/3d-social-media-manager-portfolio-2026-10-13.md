# 3D Social Media Manager Portfolio

## Direction
Build a polished demo portfolio with a full-width story layout, a prominent demo portrait, and interactive 3D social objects. Keep the manager’s work and personality more prominent than the effects.

- **Colors:** Charcoal `#171717`, secondary charcoal `#303030`, coral `#F26B5B`, and crisp white `#FAFAFA`. Alternate dark and light sections for contrast rather than making every section dark.
- **Typography:** Outfit headings and Figtree body text, with generous spacing and clear, friendly lettering.
- **Visual feel:** Clean, maintained, confident, and creative; restrained borders and minimal framing.

## Page Story
1. **Introduction:** Use “Alex Morgan” as a fictional demo manager, a generated portrait of an adult, a prominent name and role, a short introduction, and “View Work” and “Let’s Talk” buttons. Keep a hint of the next section visible.
2. **Selected work:** Three fictional campaigns with cohesive visual examples for social posts, campaign goals, and clearly labeled illustrative results. Clicking a campaign opens its fuller story.
3. **Services:** Social strategy, content creation, community management, and reporting, presented in a clean, unframed arrangement.
4. **About:** A short fictional background and a personal, approachable presentation using the demo portrait.
5. **Contact:** A polished demo inquiry form with name, email, and message. Validate entries and show an explicit demo confirmation; do not pretend to send messages.

Use a small “Demo portfolio” label and identify campaign results as samples. Do not invent real client endorsements, working contact details, or verified achievements.

## 3D Experience
- Place glossy coral hearts, dimensional message shapes, and a sourced phone model around the portrait in the full-width opening scene—not inside a separate preview box.
- Use slow floating motion and gentle pointer-following rotation. Clicking a heart gives a brief visual response.
- Keep objects away from text and buttons so the page remains easy to read and use.
- Support touch interaction and reduced motion. Provide an attractive static fallback if 3D cannot load.
- Keep the portrait photographic, not a 3D avatar.

## Technical Details
- Build the first page at `/` using the existing TanStack Start structure.
- Use React Three Fiber and Three.js for the interactive scene, mounted only in the browser. Read the relevant 3D Games & Experiences guidance before implementing scene setup, model sourcing, motion, and interaction.
- Define the chosen palette as semantic design tokens and load Outfit and Figtree through page-head font links.
- Store generated portrait and campaign imagery in project assets. Source and validate a suitable freely licensed phone model before referencing it.
- Use reusable page sections and the project’s design-system controls, with distinct page title, description, and social-sharing metadata.
- No accounts, paid integrations, or message-delivery service are required for this demo.

## Verification
- Check the page on desktop and phone-sized screens for readability, spacing, and unobstructed controls.
- Confirm the actual 3D scene renders, animates, and responds to interaction; inspect browser errors and asset loading.
- Test navigation, campaign details, contact validation, demo confirmation, and reduced-motion behavior.

## Scope
This is a finished-looking interactive demo, not a live client portfolio. The name, portrait, campaign content, and results are fictional and can be replaced later.