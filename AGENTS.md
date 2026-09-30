<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Fadewell experience on the index route with in-page anchors, because the requested site is one continuous landing page.
- Use semantic colors and reusable presentation rules in `src/styles.css`, because the brand's dark palette must stay consistent across sections.
- Pre-bundle homepage UI dependencies in Vite, because late dependency optimization can replace React modules in an open preview and blank the page.
