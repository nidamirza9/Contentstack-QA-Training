# Lab 03 — Environments, assets, and publish

**Time:** 45 minutes  
**Layer:** CMS + (light) API  
**Exit:** Product is on staging only; production CDA does not return it.

![Publish dialog — staging checked, production unchecked](screens/cs-publish-dialog.png)

---

## 1. Publish dependencies first

Order matters.

1. Publish asset `hero_image` (and author photo) to **staging**.
2. Publish `category` Apparel to **staging** (`en-us`).
3. Publish `product` Linen Overshirt to **staging** (`en-us`) only.  
   Do **not** select `production`.

If the UI lets you select all environments, that is a **role/publish-rule defect** on a real project. On a personal trial you may be Admin — still uncheck production.

---

## 2. Prove it

Use staging token:

```http
GET {CDA}/v3/content_types/product/entries?environment=staging&query={"slug":"linen-overshirt"}
```

Expected: 1 entry; `title` contains Linen Overshirt.

Use production token:

```http
GET {CDA}/v3/content_types/product/entries?environment=production&query={"slug":"linen-overshirt"}
```

Expected: 0 entries.

If production returns the product, you published to production. Unpublish from production and re-test.

---

## 3. Version drill

1. Edit title to `[QA-FIXTURE] Linen Overshirt (v2)` and **Save** (do not publish).
2. Repeat staging CDA. Expected: **old** title still published.
3. Open Live Preview or Preview API if configured — expected: v2 title.
4. Publish v2 to staging. CDA now shows v2.
5. In Versions, publish the previous version back to staging (rollback). CDA shows v1 title again.

---

![Publish the hero image asset to staging as well as the entry](screens/cs-assets.png)

## 4. Asset drill

1. Replace `hero_image` with a visually different file.
2. Publish the **entry** but not the new asset (if the UI allows).
3. Note broken or old image behaviour — this is a standard defect pattern.
4. Publish the new asset to staging and confirm CDA `hero_image.url` changes or cache-busts.

---

## 5. Unpublish

1. Unpublish the product from staging.
2. Staging CDA query returns 0.
3. Re-publish to staging so later labs still have data.

---

## Pass

- [ ] Staging CDA hit, production miss (then restored)
- [ ] Save ≠ publish demonstrated
- [ ] Rollback via versions demonstrated
- [ ] Notes updated with current published version

---

**Next:** [Lab 04 — Delivery API](./lab-04-delivery-api.md)
