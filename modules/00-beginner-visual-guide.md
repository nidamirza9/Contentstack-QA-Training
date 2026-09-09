# Start here — Contentstack in simple pictures

**Time:** 25 minutes  
**For:** first-day testers who have never used a headless CMS

Read this page before Module 01. Each picture is one idea. Then you will see the same idea again as a real CMS screenshot in the labs.

---

## 1. What is Contentstack?

Contentstack is a **headless CMS**. That means:

- Editors type content in Contentstack (forms, not a finished website).
- The website is a **separate** app. It asks Contentstack for JSON and draws the page.

![Old CMS keeps content and the website in one box. Headless CMS stores content and sends JSON to any channel.](diagrams/headless.svg)

**In the real CMS you open:** your stack (project). Left menu: Entries, Assets, Releases, Settings.

![Stack home — this is the project container](screens/cs-stack-home.png)

---

## 2. QA checks three places, not one screen

If the homepage looks empty, do not stop at a screenshot of the site.

1. **CMS** — is the entry saved, published, and are references filled?
2. **API** — does staging JSON show the new values?
3. **Website** — does the app map those fields after cache time?

![Layer A CMS, Layer B API, Layer C website. A bug can sit in any box.](diagrams/three-layers.svg)

---

## 3. Content type vs entry (form vs filled form)

- **Content type** = the blank form (`product` has title, slug, sku, price).
- **Entry** = one product you filled in (Linen Overshirt).

![Content type is the form. Entry is one filled form.](diagrams/type-vs-entry.svg)

**In the real CMS:** Content Models (the form) vs Entries (the data).

![Product content type builder — field UIDs are the API names](screens/cs-content-type-builder.png)

---

## 4. Save vs publish vs production

- **Save** = draft. Shoppers never see this.
- **Publish to staging** = QA can see it on the staging API and staging site.
- **Publish to production** = live. QA usually must not do this.

![Save → publish staging → UAT → production](diagrams/save-vs-publish.svg)

![Always uncheck production in the publish dialog during labs](screens/cs-publish-dialog.png)

Always say: *I published version 4 to staging, en-us* — not “I published it.”

---

## 5. Three keys (tokens)

Think of tokens as door keys.

![Delivery = shopper site. Preview = drafts. Management = writes. Never mix them.](diagrams/tokens.svg)

**In the real CMS:** Settings → Tokens. Create `cda-staging` and `cda-production`.

![Delivery tokens are scoped to one environment](screens/cs-tokens.png)

---

## 6. Languages: translate some fields, share others

- Translate: title, description.
- Do **not** translate: SKU, price, slug (unless the project says so).
- If German has no translation, the site can **fall back** to English.

![en-us master, fr-fr translated, de-de falls back to English](diagrams/fallback.svg)

![Settings → Languages — set fallback to en-us](screens/cs-languages.png)

---

## 7. Why a card is blank: missing include

A product **points** at a category. The API returns only an ID unless you ask it to **include** the category fields.

![Without include you get a UID. With include=category you get Apparel.](diagrams/include.svg)

![Same idea in Postman / CDA](screens/cs-cda-include.png)

---

## 8. A campaign is a box of items (Release)

If you publish the landing page but forget the products or images, the hero or grid is empty. Put **parents + children + assets** in the same Release. Deploy **staging first**.

![Release must include landing page, products, and images](diagrams/release.svg)

![CMS Releases screen](screens/cs-releases.png)

---

## 9. Preview is not the live site

Live Preview can show a **draft**. The Delivery API shows only **published** content. If QA signs off in Preview only, staging can still be old.

![Split view: draft in Preview, old title on CDA](screens/cs-live-preview.png)

---

## Remember these five sentences

1. Contentstack stores content. The website draws it.
2. Save ≠ publish. Staging ≠ production.
3. Approved in workflow is not live.
4. Delivery token proves what shoppers get.
5. Empty module? Check unpublished reference, missing include, or cache.

**Next:** [Module 01](./01-headless-cms-and-contentstack.md) or [Lab setup](../labs/00-lab-setup.md).
