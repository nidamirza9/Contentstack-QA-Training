# Lab 05 — Workflow, roles, and preview

**Time:** 60 minutes  
**Layer:** CMS + Preview  
**Exit:** You can separate workflow stage from publish, and draft from CDA.

![Move the tote through Draft → In Review → Approved, then publish](screens/cs-workflow.png)

---

## 1. Workflow happy path

If Horizon Review is assigned to `product`:

1. Create product `[QA-FIXTURE] Canvas Tote`, SKU `HM-TOTE-001`, slug `canvas-tote`, category Apparel. Save.
2. Stage should be **Draft**. Staging CDA query for slug `canvas-tote` → 0 entries.
3. Send to **In Review**. Still not on CDA.
4. Move to **Approved**. Still not on CDA unless a rule auto-publishes (note it if it does — that is a project decision to test).
5. Publish to **staging** only.
6. Staging CDA returns the tote.

Record: stage at each step vs CDA count.

---

## 2. Role negatives (skip if you are only Admin)

Log in as **HM Author** (or equivalent):

| Attempt | Expected |
| --- | --- |
| Publish tote to production | Denied |
| Edit a production-published legal entry (if you created one) | Denied if field/role restricted |

Log in as **HM Translator FR**:

| Attempt | Expected |
| --- | --- |
| Edit `en-us` title | Denied |
| Edit `fr-fr` title | Allowed |

File any mismatch as a **role defect** with role name + permission screenshot.

---

![Preview shows DRAFT; staging CDA must still show the last published title](screens/cs-live-preview.png)

## 3. Preview vs CDA

1. As QA/Admin, change tote title to `Canvas Tote — DRAFT` and **Save**.
2. Staging CDA still shows the previous published title.
3. Preview API (preview host + `preview_token` header) or Live Preview shows `Canvas Tote — DRAFT`.
4. Publish to staging. CDA catches up.

If Live Preview is not wired to an app, Postman against Preview API is enough for this lab.

Preview REST pattern (region-specific host):

```http
GET {PREVIEW_HOST}/v3/content_types/product/entries/{UID}
  ?environment=staging
  &locale=en-us
```

Headers: `api_key`, `preview_token`.

---

## 4. Publish rules

If you configured “production only from Approved”:

1. Set tote to **In Review**.
2. Attempt production publish.
3. Expected: blocked.
4. Approve, then production publish should work — **immediately unpublish from production** so labs stay clean.

---

## Pass

- [ ] Table of stage vs CDA for tote
- [ ] Draft title not on CDA
- [ ] At least one role negative attempted or explicitly skipped with reason
- [ ] Production left clean (tote unpublished from production)

---

**Next:** [Lab 06 — Localization](./lab-06-localization.md)
