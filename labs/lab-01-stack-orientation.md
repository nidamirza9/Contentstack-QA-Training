# Lab 01 — Stack orientation

**Time:** 30 minutes  
**Layer:** CMS  
**Exit:** You can name every primitive in *this* stack and find tokens without guessing.

---

## Tasks

1. Open the stack dashboard. Write down: stack name, API key (last 6 chars only in notes), region.
2. Open **Content Models**. List existing types (empty is fine).
3. Open **Entries**, **Assets**, **Releases**, **Publish Queue**.
4. Settings → Environments. Confirm `development`, `staging`, `production`.
5. Settings → Languages. Draw the fallback tree: `fr-fr` → `en-us`, `de-de` → `en-us`.
6. Settings → Tokens. Identify which token is delivery vs management. Do not paste full secrets into Slack or tickets.
7. Settings → Users & Roles. Note your role.
8. If Webhooks exist, open one and note the events (entry.publish, etc.).

## Evidence to capture

- Screenshot of Environments list
- Screenshot of Languages + fallback
- One-line note: “I will prove production with the production delivery token only”

## Pass

You can answer: Where do I publish? Which token reads that publish? Who is allowed to publish production?

## Knowledge check answers (Module 01)

1. Preview can use Preview API / unpublished data, or a different environment, or the app cache. The live site uses published CDA.
2. Stack, content type, entry, asset, environment.
3. Production **delivery** token against CDA (REST or GraphQL).
4. No. Approved is a workflow stage. Published is an environment+locale action.
5. The app / CDN. The CMS may store a slug string only.

---

**Next:** [Lab 02 — Model and entry](./lab-02-model-and-entry.md)
