# Nirmal Francis Xavier — Personal Portfolio

Personal website for my work in data science, machine learning, credit risk, supply chain analytics, and operations research. I am pursuing an MS in Computer Science at Georgia Tech, with graduation expected in December 2026.

Intended GitHub Pages address: https://meetnfx.github.io/

The page includes experience at RELEX Solutions, Protium Finance, Cushman & Wakefield, General Mills, and Tata Steel; education; a co-authored publication; selected academic and industry projects; technical skills; interests; and contact links.

Featured Georgia Tech projects cover out-of-stock grocery recommendations, climate-based crop prediction, and image captioning with LSTMs, attention, and Transformers.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Portfolio content, navigation, metadata, and links |
| `styles.css` | Responsive layout, typography, colors, and components |
| `script.js` | Mobile menu, keyboard dismissal, and current footer year |
| `assets/portrait.jpeg` | Profile photograph |
| `assets/cooking/` | Cooking photo gallery |
| `assets/movies/` | Small movie posters |
| `assets/books/` | Book cover thumbnails |
| `docs/NirmalFrancisXavier_DS.pdf` | Downloadable data science resume |

This is a static HTML/CSS/JavaScript website. No build step or package installation is required.

## Preview locally

Open `index.html` in a browser. All styles, scripts, photographs, and resume links use relative paths and work locally. Check both desktop and narrow mobile layouts when changing the page.

## Publish on GitHub Pages

1. Push the website files, including `assets/` and `docs/`, to the `meetnfx.github.io` repository.
2. In the repository's **Settings → Pages**, select **Deploy from a branch**.
3. Select the branch containing the website and **/(root)**, then save.
4. When deployment finishes, open https://meetnfx.github.io/ and check navigation, the portrait, and the resume download.

See [GitHub's Pages setup documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for hosting details.

## Update content

- Edit the relevant section in `index.html`. Keep section IDs synchronized with navigation links.
- Replace the public data science resume in `docs/` when updating it. Preserve its filename or update its links in `index.html`.
- Replace `assets/portrait.jpeg` to change the photograph.
- Adjust the CSS variables in `styles.css` to change the theme.
