# Lab 07 — Releases and campaign go-live

**Time:** 75 minutes  
**Layer:** CMS + API  
**Exit:** A Spring Edit landing page ships as one Release on staging; production stays unchanged.

---

## 1. Build campaign content

1. Publish `author` Jordan Hale to staging if not already.
2. Create `landing_page`:
   - Title `[QA-FIXTURE] Spring Edit`
   - Slug `spring-edit`
   - Block hero: heading `The Spring Edit`, CTA Shop now → `/products/linen-overshirt`
   - Block product_grid: reference Linen Overshirt and Canvas Tote (publish tote to staging if needed)
   - Block cta: `Join the list` → `/newsletter`
3. Create `promo_banner` `[QA-FIXTURE] Spring 10%` with a date window and message. Save only.

Do **not** publish the landing page or banner yet.

---

## 2. Assemble Release

1. Releases → Create **QA Spring Edit Staging**.
2. Add:
   - `landing_page` spring-edit — action **Publish** — locale `en-us` (add `fr-fr` if you localized it)
   - `promo_banner` — **Publish**
   - Any unpublished referenced products/assets — **Publish**
3. Do **not** add unrelated products.
4. Deploy the Release to **`staging` only**.

---

## 3. Verify atomic result

Staging CDA:

```http
GET {CDA}/v3/content_types/landing_page/entries
  ?environment=staging
  &query={"slug":"spring-edit"}
  &include[]=sections.product_grid.products
```

(Adjust include path to your modular-block field UIDs.)

**Expected:**

- Landing page present
- Product grid resolves titles
- Banner present if you query `promo_banner`
- Production CDA still has **no** `spring-edit`

If the page exists but product grid is empty, a child was not in the Release or not already live.

---

## 4. Unpublish via Release

1. Create Release **QA Spring Edit Takedown**.
2. Add landing page + banner with action **Unpublish**.
3. Deploy to staging.
4. Staging CDA no longer returns `spring-edit`.
5. Recreate/redeploy a publish Release so Lab 08 still has a page — or leave unpublished if you will rebuild in Lab 08.

---

## 5. Workflow gate (if configured)

Put the landing page in **In Review**, add it to a Release, deploy.

Document: skipped vs failed vs published. That behaviour is what you will explain to a release manager on a real project.

---

## 6. Campaign rehearsal script (copy to client projects)

1. Freeze new edits 30 minutes before deploy.
2. Export Release item list (UID, locale, action).
3. Confirm all references and assets are in the list or already on the target environment.
4. Deploy to staging; wait cache/webhook SLA.
5. Run [acceptance pack](../checklists/qa-acceptance-pack.md) smoke.
6. Only then deploy the **same item set** to production (or a production Release cloned from staging).
7. Production CDA + 3 smoke URLs.
8. Keep a takedown Release ready.

---

## Pass

- [ ] Staging has (or had) `spring-edit` via Release, not ad-hoc publish-all
- [ ] Production never received the campaign during the lab
- [ ] At least one missing-child or unpublish experiment documented

---

**Next:** [Lab 08 — Regression and defects](./lab-08-regression-and-defects.md)
