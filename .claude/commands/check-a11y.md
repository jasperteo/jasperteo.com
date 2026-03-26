Audit $ARGUMENTS for accessibility issues. If no argument is given, audit all files under src/components/ and src/routes/.

Check for:

- Interactive elements missing accessible labels (buttons, links, icons without visible text need aria-label or aria-labelledby)
- Images missing alt text
- Form inputs missing associated labels
- Color contrast (flag any hardcoded colors that may not meet WCAG AA)
- Keyboard navigation — focus styles present (focus-visible), correct tab order, no keyboard traps
- ARIA roles/attributes used correctly and not redundantly
- Landmark regions present (main, nav, etc.) where appropriate
- Motion — check if animations respect prefers-reduced-motion

For each issue, include the file path with line number, the WCAG criterion it violates, and a concrete fix.
