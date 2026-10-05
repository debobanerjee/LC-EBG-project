document.getElementById('copy-bibtex').addEventListener('click', async () => {
  const text = document.getElementById('bibtex-code').textContent;
  const status = document.getElementById('copy-status');
  try { await Promise.race([navigator.clipboard.writeText(text), new Promise((_, reject) => setTimeout(() => reject(new Error('Clipboard unavailable')), 1500))]); status.textContent = 'BibTeX copied.'; }
  catch { const selection = window.getSelection(); const range = document.createRange(); range.selectNodeContents(document.getElementById('bibtex-code')); selection.removeAllRanges(); selection.addRange(range); status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.'; }
});

const contentsPanel = document.getElementById('contents-panel');
const compactContents = window.matchMedia('(max-width: 1099px)');
const syncContentsLayout = () => { contentsPanel.open = !compactContents.matches; };
syncContentsLayout();
compactContents.addEventListener('change', syncContentsLayout);
const contentsLinks = [...document.querySelectorAll('.contents-sidebar nav a')];
const contentsTargets = contentsLinks.map(link => document.querySelector(link.getAttribute('href')));
let contentsFramePending = false;
function updateContentsLocation() {
  let current = 0;
  contentsTargets.forEach((target, index) => { if (target && target.getBoundingClientRect().top <= 150) current = index; });
  contentsLinks.forEach((link, index) => { if (index === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  contentsFramePending = false;
}
window.addEventListener('scroll', () => { if (!contentsFramePending) { contentsFramePending = true; requestAnimationFrame(updateContentsLocation); } }, { passive: true });
contentsLinks.forEach(link => link.addEventListener('click', () => { if (compactContents.matches) contentsPanel.open = false; }));
window.addEventListener('load', updateContentsLocation);
updateContentsLocation();


function revealStudyDetails() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;
  let element = target;
  while (element) {
    if (element.tagName === 'DETAILS') element.open = true;
    element = element.parentElement;
  }
}
window.addEventListener('hashchange', revealStudyDetails);
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  const target = document.getElementById(link.getAttribute('href').slice(1));
  let element = target;
  while (element) {
    if (element.tagName === 'DETAILS') element.open = true;
    element = element.parentElement;
  }
}));
revealStudyDetails();
