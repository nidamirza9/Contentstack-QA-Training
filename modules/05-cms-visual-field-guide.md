# Contentstack CMS — visual field guide for QA

**Time:** 40 minutes  
**Source:** Official screenshots from [Contentstack Docs](https://www.contentstack.com/docs). Open the same screens in your trial stack.

Use this page to learn **what each label and button means for testers**. Do not memorize the marketing names — memorize what you must check.

---

## 1. Content Models — create a content type

**Where:** left menu **Content Models** → **+ New Content Type** → **Create New**

![Official Contentstack: Create New Content Type modal](official/create-content-type.png)

| Label on screen | What QA must know |
| --- | --- |
| **Name** | What editors see (safe to change) |
| **Unique ID** | What APIs and tests use (`product`, `landing_page`). Changing this later **breaks** the site |
| **Description** | Optional. Helps editors. Not on the website |
| **Type: Single** | Only one entry (header, site settings) |
| **Type: Multiple** | Many entries (products, articles) |

**QA check:** after save, write down the Unique ID. Testers query that UID, not the Name.

---

## 2. Content Type Builder — the visual content model

**Where:** click the content type title. This is the **schema** (the blank form).

![Official Contentstack: Content Type Builder with fields](official/content-type-builder.png)

| Control | QA meaning |
| --- | --- |
| **Title** field | Always present. Used in Entries list |
| **+ Insert a field** | Adds a new box to the form |
| **Gear / Settings** | Field properties: Mandatory, Unique, Localize, Help text |
| **Display Name** | Editor label (safe to change) |
| **Unique ID** | JSON key (`hero_title`). Never rename after the frontend is wired |
| **Save / Save and Close** | Saves the **schema**, not an entry |

**QA check:** open the gear on `sku`, `slug`, `price`. Confirm **Localize** is off. Confirm **Unique** is on for SKU and slug.

---

## 3. Fields — what each box stores

**Where:** same builder. Official docs show a News Article example.

![Official Contentstack: fields on a content type (Title, URL, Date, Body)](official/about-fields.png)

| Field you will see | Stores | Typical QA test |
| --- | --- | --- |
| Single Line (Title) | Short text | Required? Unique? |
| URL / slug | Path string | CMS does not create the route — the app does |
| Date | Date/time | Timezone on the **site**, not in the CMS |
| Body / JSON RTE | Rich text | Embedded entries need `include_embedded_items[]` |
| File | Image/PDF | **Asset** must be published too |
| Number | Price, sort | Empty vs zero |
| Boolean | Featured | Default false vs unset |
| Reference | Link to another entry | Child must be published on the same environment |
| Modular Blocks | Page sections | Order in CMS = order on page |
| Select | Theme, size | New option must exist in the frontend |

**QA language:** “Field Unique ID `price` is 129 in the entry. Display Name can say Product price.”

---

## 4. Entries list — the content dashboard

**Where:** left menu **Entries**. This is the daily QA screen.

![Official Contentstack: Entries list with filters and publish status](official/entries-list.png)

| Column / filter | What to read |
| --- | --- |
| **Title** | Entry name |
| **Language** | Locale (`en-us`, `fr-fr`) |
| **Content Type** | Which form it uses |
| **Publish Status** | Which **environments** it is live on |
| **Workflow Stage** | Draft / Review / Approved — **not** the same as published |
| **Last Modified** | Who changed it |

![Official Contentstack: entry row actions (Edit, Preview, Publish, Unpublish)](official/entries-list-actions.png)

| Action | QA use |
| --- | --- |
| **Edit** | Open the form |
| **Preview** | Draft in the site iframe — **not** proof of CDA |
| **Publish** | Choose environment + locale |
| **Unpublish** | Must disappear from that environment’s API |
| **Copy** | Creates a new entry — do not copy fixtures into production |

---

## 5. Create Entry — filling the form

**Where:** Entries → **+ New Entry** → pick content type.

![Official Contentstack: Create New Entry — pick a content type](official/create-entry.png)

Then you get the form generated from the content type. Fill Title, URL, body, references. Click **Save** (draft) or **Publish**.

**QA check:** Save only. Staging CDA must still be empty. That proves Save ≠ Publish.

---

## 6. Reference field — why cards go blank

**Where:** inside an entry, a field that **links** another entry (category, author, product).

![Official Contentstack: create/select an entry from a Reference field](official/reference-field.png)

| If you see this | Defect |
| --- | --- |
| Parent published, child still draft | Homepage module empty (CS-CMP-01) |
| API returns only a UID | Missing `include[]=field_uid` (CS-CMP-07) |
| FR entry points to a different category | Reference was localizable (CS-CMP-10) |

**QA check:** publish **child first**, then parent, same environment and locale.

---

## 7. Publish — environments and locales

**Where:** bottom of the entry, or row menu → **Publish**.

![Official Contentstack: Publish Entry — choose environments and languages](official/publish-review.png)

| Label | QA rule |
| --- | --- |
| **Environments** | Tick **staging** only in labs. Production = live |
| **Languages** | Tick the locale you actually tested (`en-us` ≠ `fr-fr`) |
| **Now / Later** | Scheduled publish is not live until the time fires |
| **Send** | This is the action that changes CDA |

![Official Contentstack: Validate and Publish related items](official/publish-validate.png)

**Validate and Publish** lists referenced entries and assets. If a child is not ready, **do not** send the parent alone.

**QA sentence:** “Published version 4 to staging, en-us. Production unchecked.”

---

## 8. Environments — not folders

**Where:** **Settings** → **Environments**

![Official Contentstack: Environments list](official/environments.png)

Each environment is a **publish destination** with its own delivery token.

| Environment | Who uses it |
| --- | --- |
| development | Developers |
| staging | QA + editorial UAT |
| production | Shoppers |

Staging token **never** proves production.

---

## 9. Developer JSON — what the website actually gets

**Where:** entry sidebar **Developer Tools** (if installed) → **JSON View** / **API Details**

![Official Contentstack: API endpoint for the current entry](official/developer-api.png)

![Official Contentstack: JSON view of the entry](official/developer-json.png)

| Tab | QA use |
| --- | --- |
| **API Details** | Copy the CDA URL. Add **environment** and delivery token |
| **JSON View** | This is often **CMA/draft** JSON. Confirm with **CDA** before you sign off the site |

If JSON has the field and the page does not, that is a **frontend mapper** bug (Layer C).

---

## 10. One-page QA walk (do this on every new template)

1. Content Models — Unique IDs stable? Localize flags correct?
2. Entries list — locale + publish status + workflow stage
3. Open entry — required fields, references, assets
4. Publish dialog — staging only, correct locale, validate children
5. CDA / JSON — same values, includes resolved
6. Website — after cache SLA

**Next:** Open the [labeled CMS screens](cms-visual.html) (numbered pins), then [Start here (pictures)](../modules/00-beginner-visual-guide.md) or [Lab setup](../labs/00-lab-setup.md).
