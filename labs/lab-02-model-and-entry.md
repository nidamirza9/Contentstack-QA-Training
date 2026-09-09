# Lab 02 — Content types and first entries

**Time:** 75 minutes  
**Layer:** CMS  
**Exit:** Horizon Market core types exist; one product entry is saved (not published).

![Official Create New Content Type — set Name, UID, and Multiple](official/create-content-type.png)

![Official Content Type Builder — add fields with +, then open the gear for Unique ID](official/content-type-builder.png)

![Official field properties — Display Name vs Unique ID](official/about-fields.png)

---

## 1. Build content types

Create these **multiple** types. Keep UIDs exactly as written.

### `category`

| Field | Type | UID | Localize | Required |
| --- | --- | --- | --- | --- |
| Title | Single line | `title` | Yes | Yes |
| Slug | Single line | `slug` | No | Yes |

### `author`

| Field | Type | UID | Localize | Required |
| --- | --- | --- | --- | --- |
| Title | Single line | `title` | Yes | Yes |
| Bio | Multi line | `bio` | Yes | No |
| Photo | File | `photo` | No | No |

### `product`

| Field | Type | UID | Localize | Required |
| --- | --- | --- | --- | --- |
| Title | Single line | `title` | Yes | Yes |
| Slug | Single line (unique) | `slug` | No | Yes |
| SKU | Single line (unique) | `sku` | No | Yes |
| Price | Number | `price` | No | Yes |
| Description | JSON RTE | `description` | Yes | No |
| Hero image | File | `hero_image` | No | No |
| Category | Reference → `category` | `category` | No | Yes |
| Related products | Reference → `product` (multiple) | `related_products` | No | No |
| Featured | Boolean | `featured` | No | No |
| Fixture | Boolean | `is_fixture` | No | No |

### `landing_page`

| Field | Type | UID | Notes |
| --- | --- | --- | --- |
| Title | Single line | `title` | Localize |
| Slug | Single line unique | `slug` | Not localize |
| Sections | Modular blocks | `sections` | Blocks below |

**Blocks**

1. `hero` — `heading` (single), `subheading` (single), `background_image` (file), `cta_label`, `cta_url`
2. `product_grid` — `heading`, `products` (reference multiple → product)
3. `cta` — `heading`, `button_text`, `button_url`
4. `rich_text` — `body` (JSON RTE)

If you cannot create a global SEO field yet, skip it. Do not block the lab.

---

![Official entry editor — Save is not Publish; use JSON view to confirm field Unique IDs](official/developer-json.png)

## 2. Create entries (save only)

1. Category: Title `Apparel`, slug `apparel`. Note UID.
2. Author: `Jordan Hale`. Upload any photo. **Publish the asset** if the UI asks; do not publish the author entry yet.
3. Product: Title `[QA-FIXTURE] Linen Overshirt`, slug `linen-overshirt`, SKU `HM-OSH-001`, price `129`, category Apparel, featured `true`, is_fixture `true`. Add one paragraph in Description.
4. Leave `related_products` empty for now.

Record in `notes/lab-uids.md`:

```
category.apparel =
author.jordan =
product.linen-overshirt =
```

---

## 3. Negative authoring checks

| Action | Expected |
| --- | --- |
| Save product without slug | Validation error |
| Second product with SKU `HM-OSH-001` | Unique error |
| Change field **label** Title → Product name | UID `title` unchanged |
| Do not publish any entry | CDA still empty (Lab 04 will prove) |

---

## 4. Pass

- [ ] Types match the UID table
- [ ] Product saved; version ≥ 1
- [ ] No entry published to `production`
- [ ] UIDs written down

---

**Next:** [Lab 03 — Environments and publish](./lab-03-environments-and-publish.md)
