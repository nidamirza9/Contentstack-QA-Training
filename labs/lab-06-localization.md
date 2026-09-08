# Lab 06 — Localization and fallback

**Time:** 60 minutes  
**Layer:** CMS + API  
**Exit:** You can predict CDA output for `en-us`, localized `fr-fr`, and unlocalized `de-de`.

Use `[QA-FIXTURE] Linen Overshirt` (published on staging).

---

## 1. Confirm field localization

On `product`:

- Localizable: `title`, `description`
- Not localizable: `slug`, `sku`, `price`, `category`, `hero_image`

If `category` was accidentally localizable, that is a **modeling defect**. Do not “fix” a client model in labs without asking; on Horizon Market, correct it.

---

## 2. Localize French

1. Open the product. Switch language to **French - France**.
2. The UI shows inherited `en-us` values until you localize.
3. Localize `title` to `Surchemise en lin`.
4. Leave `description` **unlocalized** (still inheriting) **or** localize it — pick one and write it down.
5. Do **not** change SKU (field should be disabled).
6. Publish the **French** entry to staging.

---

## 3. API matrix

Call CDA with staging token:

| locale | include_fallback | Expected title | Expected SKU |
| --- | --- | --- | --- |
| `en-us` | n/a | Linen Overshirt (or current EN) | `HM-OSH-001` |
| `fr-fr` | default | `Surchemise en lin` | `HM-OSH-001` |
| `de-de` | on | English title (fallback) | `HM-OSH-001` |
| `de-de` | off | Empty / missing localized entry (document actual) | — |

```http
GET {CDA}/v3/content_types/product/entries
  ?environment=staging
  &locale=fr-fr
  &query={"slug":"linen-overshirt"}
```

```http
GET {CDA}/v3/content_types/product/entries
  ?environment=staging
  &locale=de-de
  &include_fallback=true
  &query={"slug":"linen-overshirt"}
```

---

## 4. Non-localizable integrity

1. Change EN price to `139` and publish EN staging.
2. Fetch `fr-fr`. Price must be `139`, not the old price.
3. If FR still shows `129`, you localized price by mistake or published the wrong locale.

---

## 5. Reference locale trap

1. Localize category title to `Habillement` on `fr-fr` and publish category FR to staging.
2. Fetch product `fr-fr` with `include[]=category`.
3. Expected category title: `Habillement` if the reference resolves in the requested locale.
4. If you had made `category` localizable on the product and pointed FR at a different category, you would have a silent data bug. Confirm the field is **not** localizable.

---

## 6. App-layer note (no app required)

Dates, currency symbols, and RTL are **usually app concerns**. CMS stores `129` and `en-us`. File “€ not shown on FR site” as Layer C unless the CMS was supposed to store a formatted string (bad model).

---

## Pass

- [ ] Matrix filled with real responses
- [ ] SKU identical across locales
- [ ] DE fallback behaviour documented
- [ ] Price change propagated to FR

---

**Next:** [Lab 07 — Releases and campaign](./lab-07-releases-and-campaign.md)
