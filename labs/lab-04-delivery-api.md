# Lab 04 — Delivery API (REST + GraphQL)

**Time:** 60 minutes  
**Layer:** API  
**Exit:** You can resolve references, explain a UID-only response, and query by slug.

Requires Lab 03 product published to staging.

![Prove the product on staging CDA with include[]=category](screens/cs-cda-include.png)

---

## 1. Baseline without includes

```http
GET {CDA}/v3/content_types/product/entries/{PRODUCT_UID}
  ?environment=staging
  &locale=en-us
```

Headers: `api_key`, `access_token` = staging delivery token.

**Observe:** `category` is likely a UID string (or a small object without title). Screenshot or save JSON as `notes/product-no-include.json`.

---

## 2. Resolve references

```http
GET {CDA}/v3/content_types/product/entries/{PRODUCT_UID}
  ?environment=staging
  &locale=en-us
  &include[]=category
  &include[]=related_products
```

**Expected:** `category.title` is `Apparel`.

Wrong on purpose: `include[]=categories` (content type UID, not field UID).  
**Expected:** category still unresolved. Remember this defect comment: “include uses field UID.”

---

## 3. Query and pagination

```http
GET {CDA}/v3/content_types/product/entries
  ?environment=staging
  &query={"featured":true}
  &limit=10
```

Create a second product, featured `false`, publish to staging. Featured query must not return it.

---

## 4. GraphQL CDA

POST to your region GraphQL host with the **same** staging delivery token.

```graphql
query {
  all_product(locale: "en-us", where: { slug: "linen-overshirt" }) {
    items {
      title
      sku
      price
      category { title slug }
    }
  }
}
```

Field names follow your schema (sometimes `categoryConnection`). Use GraphiQL in the stack if the query fails — that is part of the lab.

**Expected:** same title/SKU as REST.

---

## 5. Embedded RTE (if you embedded a category or product in Description)

```http
GET {CDA}/v3/content_types/product/entries/{PRODUCT_UID}
  ?environment=staging
  &include[]=category
  &include_embedded_items[]=description
```

Without the embed param, embedded items are UIDs only. With it, `_embedded_items` (or equivalent) is populated.

---

## 6. Token mix-up (negative)

Call staging URL with the **production** delivery token (or omit `environment`).

**Expected:** 403 / empty / error. Document the exact status. This is how leaked-token bugs present.

---

## Pass

- [ ] Before/after include JSON saved
- [ ] Featured query excludes the non-featured product
- [ ] GraphQL and REST agree on title and SKU
- [ ] You can explain include field UID vs content type UID

---

**Next:** [Lab 05 — Workflow, roles, preview](./lab-05-workflow-roles-preview.md)
