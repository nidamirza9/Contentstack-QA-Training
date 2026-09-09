# Contentstack Headless CMS — QA Tester Training Pack

Hands-on learning material for QA testers who will test **real Contentstack projects**: content models, editorial workflows, publish/preview, Delivery APIs, localization, releases, and frontend rendering.

**Public course (GitHub Pages):** https://nidamirza9.github.io/Contentstack-QA-Training/html/

**Public course (Vercel):** https://contentstack-qa-training.vercel.app/html/

**Component / template QA issues (GitHub Pages):** https://nidamirza9.github.io/Contentstack-QA-Training/html/issues/component-template-qa.html

**Component / template QA issues (Vercel):** https://contentstack-qa-training.vercel.app/html/issues/component-template-qa.html

**GitHub repo:** https://github.com/nidamirza9/Contentstack-QA-Training

**Open the HTML course locally (browser, no server):**  
`C:\Users\nmirza.HZI\OneDrive - Horizontal Integration Inc\Documents\CNE+GSE\Contentstack-Learning\Contentstack-QA-Training.html`

**HTML home:**  
`C:\Users\nmirza.HZI\OneDrive - Horizontal Integration Inc\Documents\CNE+GSE\Contentstack-Learning\html\index.html`

**Canvas (keep beside chat):**  
`C:\Users\nmirza.HZI\.cursor\projects\c-Users-nmirza-HZI-OneDrive-Horizontal-Integration-Inc-Documents-CNE-GSE-Contentstack-Learning\canvases\qa-training-summary.canvas.tsx`

**All paths on one page:** [html/paths.html](./html/paths.html)

Markdown source remains in this repo: [TRAINING-SUMMARY.md](./TRAINING-SUMMARY.md)

---

## Who this is for

QA testers, SDETs, and test leads joining a Contentstack delivery. You do **not** need to be a CMS developer. You do need to verify that content authored in Contentstack is correct in the **CMS**, in the **APIs**, and on the **site/app**.

## How to use this pack

1. Read the [training summary](./TRAINING-SUMMARY.md) (30–40 minutes).
2. Complete modules 01–04 in order (about 1 day of reading).
3. Run labs 01–08 on a trial or sandbox stack (about 2–3 days).
4. Use the checklists on the first real project.

Do not skip the API labs. Most production Contentstack defects are **published vs draft**, **environment**, **locale/fallback**, or **unresolved references** — not UI-only bugs.

## Folder map

| Path | Purpose |
| --- | --- |
| [TRAINING-SUMMARY.md](./TRAINING-SUMMARY.md) | Outcomes, syllabus, QA ownership, project readiness |
| [modules/](./modules/) | Concept lessons |
| [labs/](./labs/) | Hands-on exercises on a real stack |
| [checklists/](./checklists/) | Acceptance pack, test cases, defect taxonomy, [component/template issues](./checklists/component-template-qa-issues.md) |
| [html/](./html/) | Browser-ready HTML site (same content) |
| [Contentstack-QA-Training.html](./Contentstack-QA-Training.html) | Double-click launcher into `html/index.html` |

## Running example: Horizon Market

All labs use one fictional brand, **Horizon Market** — a multi-locale lifestyle catalog with articles, products, and campaign landing pages.

| Item | Value |
| --- | --- |
| Stack | `horizon-market-qa` |
| Environments | `development`, `staging`, `production` |
| Locales | `en-us` (master), `fr-fr`, `de-de` |
| Workflow | Draft → In Review → Approved → Published |
| QA role | Read all content; publish to `staging` only |

## Official references

- [Contentstack Docs](https://www.contentstack.com/docs)
- [Contentstack Academy](https://www.contentstack.com/academy)
- [Content Delivery API](https://www.contentstack.com/docs/developers/apis/content-delivery-api)
- [Content Management API](https://www.contentstack.com/docs/developers/apis/content-management-api)
- [Preview API](https://www.contentstack.com/docs/headless-cms/preview-api)
- [Environments](https://www.contentstack.com/docs/headless-cms/about-environments)
