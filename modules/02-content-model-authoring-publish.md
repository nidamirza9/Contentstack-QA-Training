# Module 02 — Content Model, Authoring, and Publish

**Time:** 4 hours  
**Goal:** Read a content type like a contract, author clean entries, and publish without leaking to production.

![Content type builder for product — field UIDs, types, and Localize this field](screens/cs-content-type-builder.png)

![Content type is the blank form. Entry is one filled form.](diagrams/type-vs-entry.svg)

![Save is not publish. Staging is not production.](diagrams/save-vs-publish.svg)

---

## 1. Content type = API contract

A content type defines:

- **Display name** (what editors see)
- **UID** (what APIs and tests use — example: `product`, `landing_page`)
- **Fields**, each with a **field UID**, data type, validations, and “Localize this field”
- **Options**: single vs multiple, title field, taxonomy, workflow assignment

QA must treat a field UID change as a **breaking change**. The frontend and automated tests key off UIDs, not labels.

When testers review a new type, ask:

- Is the title field unique enough for editors to find entries?
- Are SKUs, dates, and references **non-localizable** unless there is a real per-locale reason?
- Are reusable things **References**, and page-only layout **Modular Blocks**?
- Are there required fields that editors cannot know at draft time? (That causes workflow deadlock.)

---

## 2. Field types QA must recognize

| Field | Typical use | QA watch-outs |
| --- | --- | --- |
| Single Line Text | Title, slug, SKU, CTA label | Unique slug; URL-safe slug vs pretty title |
| Multi Line Text | Short description, meta description | Newlines vs HTML |
| Number | Price, sort order | Zero vs empty; locale decimal in the **app** |
| Boolean | Featured, fixture flag | Default false vs unset |
| Date / DateTime | Event start, embargo | Timezone; stored UTC vs displayed local |
| Select / Radio / Checkbox | Theme, size | New option not handled by frontend |
| File | Image, PDF | Asset published? alt text? dimensions? |
| Link | CTA URL + title | Relative vs absolute; locale path |
| Group | Address, SEO block | Multiple groups: order matters |
| Modular Blocks | Landing page sections | Block order, empty optional inner fields |
| Reference | Author, category, related products | Unpublished or deleted target; need `include[]` |
| JSON RTE | Article body | Embedded entries/assets need `include_embedded_items[]` |
| HTML RTE | Legacy rich text | Raw HTML XSS / script if app is careless |
| Markdown | Docs-like body | Renderer differences |
| Extension / custom | Color picker, DAM | Value shape vs frontend mapper |
| Taxonomy | Region, audience | Filter queries; unpublished terms |

![Landing page modular blocks — hero, product grid, CTA; order in the CMS is the order on the site](screens/cs-modular-blocks.png)

### Reference vs Modular Blocks

| | Reference | Modular Blocks |
| --- | --- | --- |
| Data lives | Separate entries | Inline on the parent |
| Reuse | Yes | No |
| API | UID unless `include[]` | Always inline |
| QA focus | Target published in same environment + locale | Order, allowed block types, missing inner required fields |

A classic production bug: homepage references a `promo_banner` that is still draft. CDA omits or returns an incomplete reference. The site looks “randomly empty.”

---

## 3. Global fields and taxonomies

**Global fields** are reusable schemas (SEO, CTA, address). Editing a global field changes every content type that includes it. Regression scope is **all consumers**, not one type.

**Taxonomies** classify entries (region, campaign, product family). QA should test listing pages that filter by taxonomy and confirm unpublished entries do not appear.

---

## 4. Assets

![Assets library — publish the file to staging; a new upload is not live until the asset is published](screens/cs-assets.png)

Assets have their own publish lifecycle.

Test:

1. Upload image, do **not** publish asset, publish the entry → site image 404 or broken transform.
2. Replace an asset file and republish → CDN may still serve the old file until cache expires or URL changes.
3. Image transforms (`?width=800&format=webp`) are **URL features**, not CMS preview features. Verify the app’s transform string.

---

![Entry editor for Linen Overshirt — Save is not Publish; workflow still Draft](screens/cs-entry-editor.png)

## 5. Entries, versions, and save vs publish

- **Save** creates a new version. It does **not** change CDA.
- **Publish** copies a specific version to selected environments and locales.
- You can publish an older version (rollback).
- Unpublish removes the entry from that environment’s CDA; the entry still exists as a draft.

QA language that prevents confusion:

> “Version 7 is saved. Version 6 is published on production `en-us`. Version 7 is published on staging `en-us` only.”

---

## 6. Environments and promotion

Recommended stack for Horizon Market (and most client stacks):

| Environment | Purpose | Who publishes |
| --- | --- | --- |
| `development` | Dev integration | Developers / automation |
| `staging` | QA + editorial UAT | QA, lead editor |
| `production` | Live channels | Publisher role / Release |

Publish rules should block the Editor role from production. QA verifies the **negative** case: editor clicks Publish → production is not in the allowed list, or the action fails.

---

## 7. Single content types vs multiple

A **single** content type allows one entry (site settings, header nav). QA must not create a second entry and must test that the app always fetches that UID or `find` with a unique query.

A **multiple** type (articles, products) needs list queries, pagination (`skip` / `limit`), and sort.

---

## 8. Branches (schema, not git for entries)

Branches let developers change content types without breaking editors on main.

QA on a branch:

- Validate the new/changed fields on the branch delivery token if the app is pointed there.
- After **merge to main**, re-run contract tests on main `staging`.
- Environments are shared; do not assume a branch has a private production.

---

## 9. Horizon Market model (memorize this)

```
author (multiple)
  title, bio, photo, locale: bio+title localizable

category (multiple)
  title, slug  — slug non-localizable

product (multiple)
  title (loc), slug (unique, non-loc), sku (non-loc)
  price (number, non-loc), description (JSON RTE, loc)
  hero_image (file), category (ref), related_products (ref, multiple)
  featured (boolean)

article (multiple)
  title, slug, excerpt, body (JSON RTE)
  author (ref), products_mentioned (ref, multiple)
  publish_date

landing_page (multiple)
  title, slug
  sections (modular blocks: hero, product_grid, cta, rich_text)
  seo (global field)

promo_banner (multiple)
  name, message (loc), image, target_url, active_from, active_to

site_settings (single)
  site_name, default_seo, footer_links
```

Workflow on `product`, `article`, `landing_page`, `promo_banner`:  
`Draft → In Review → Approved → Published`

---

## 10. Knowledge check

1. Why is changing a field **label** safer than changing a field **UID**?
2. A landing page looks empty. The hero block exists in the CMS. Give two Layer B causes and one Layer A cause.
3. Editor replaced a product image. Production still shows the old image. List three possible causes.

---

**Next:** [Module 03 — APIs, preview, releases](./03-apis-preview-releases.md)
