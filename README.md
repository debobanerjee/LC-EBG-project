# LC-EBG project page

A static academic project page inspired by MathSensei and Nerfies. No build step or JavaScript framework is required.

## Preview

Open `index.html` directly, or run `python3 -m http.server 8000` in this directory and visit http://localhost:8000.

## Publish on GitHub Pages

Copy this directory's contents to the root of a website repository. Enable GitHub Pages using the branch containing these files and the root folder as the source. All asset paths are relative, so the page works at either a repository subpath or a domain root.

## Content and updates

- Text, author order, affiliations, and results are from the LC_EBG_ArXiv Overleaf manuscript exported on 2026-10-05.
- `assets/paper.pdf` is that export. Replace it when the paper changes.
- The seven result plot PNGs were rendered from the manuscript's original PDF figures.
- The overview uses the latest supplied `EBG_overview.png`, preserving its aspect ratio. The diagram and illustrative example explain the task; they are not experimental results.
- On desktop, the title, overview figure, and study data cards occupy the opening viewport. Key Contributions follows as a separate section; smaller screens use a flowing layout.
- The code and dataset links point to https://github.com/debobanerjee/LC-EBG.
- No arXiv ID, publication year, or author profile URLs have been invented. The BibTeX is explicitly a manuscript citation; add verified publication metadata when available.
- MultiHop-RAG result captions distinguish oracle-containing LC from open-corpus RAG. QASPER-MP's cited comparison uses the same 11-paper pool.
- Typography uses Google Fonts when online, with local font fallbacks. The rest of the page and figures work offline.

The Poster resource currently uses a placeholder link (`href="#"`). Replace it with the final poster URL when available.

Edit `index.html` for content, `styles.css` for appearance, and `script.js` for the citation copy action.

## Research question structure

All four manuscript RQs appear explicitly, each with its relevant evidence and a takeaway. The QASPER-MP table preserves the answerable-subset comparison and the MultiHop-RAG comparison retains its evidence-access caveat. Added plots are rendered directly from the manuscript PDF figures.
