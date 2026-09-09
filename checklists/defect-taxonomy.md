# Defect taxonomy — Contentstack QA

Classify every bug before you file it. Wrong layer = wrong owner and wasted time.

![If Preview and the site disagree, attach both this CMS view and a CDA snippet](screens/cs-live-preview.png)

---

## Layers

| Code | Layer | Owner (typical) | Evidence required |
| --- | --- | --- | --- |
| A | CMS authoring / workflow / roles / assets | Editor, CMS admin | Entry UID, stage, permissions screenshot |
| B | Delivery / Preview / Release contract | Frontend (query) or CMS admin (publish) | CDA/Preview JSON, env, locale, token type |
| C | App render / cache / routing / format | Frontend, DevOps | HAR or URL + JSON proving field exists |

A ticket may list a **primary** layer and a **secondary** (example: A unpublished ref causing B empty include).

---

## Common codes

| Code | Symptom | First check |
| --- | --- | --- |
| A-REF-UNPUB | Missing module / blank card | Child entry publish state on same env+locale |
| A-ASSET-UNPUB | Broken image | Asset publish queue |
| A-WF-STUCK | Cannot publish | Stage + publish rules + role |
| A-ROLE-PERM | Button missing / API 403 in UI | Role vs locale vs content type |
| A-LOC-PARTIAL | Mixed language on page | Which fields localized and published |
| A-BLOCK-ORDER | Wrong section order | Modular blocks array in CMS |
| B-NOT-PUBLISHED | Site old, Preview new | CDA vs Preview |
| B-WRONG-ENV | “Works on staging” | Token and `environment` param |
| B-WRONG-LOCALE | Wrong language JSON | `locale` + fallback flags |
| B-NO-INCLUDE | IDs in JSON, names missing | `include[]` field UID |
| B-NO-EMBED | RTE embed empty | `include_embedded_items[]` |
| B-RELEASE-PARTIAL | Some items live | Release log vs workflow stage |
| B-SCHEMA-DRIFT | Field missing after merge | Content type UID/field UID |
| C-MAPPER | JSON has field, UI does not | Component mapping |
| C-CACHE | JSON new, HTML old | Webhook, ISR, CDN TTL |
| C-ROUTE | CMS slug ≠ URL | App router, not CMS |
| C-CSLP | Visual Builder edits wrong field | `data-cslp` path |

---

## Severity guide

| Severity | Example |
| --- | --- |
| S1 | Production Release unpublished homepage; checkout content missing on live |
| S2 | Staging campaign page empty due to unpublished ref; production publish rule broken |
| S3 | FR fallback unexpected on one PDP; Visual Builder highlight off by one field |
| S4 | Fixture naming, copy typo in QA only |

---

## Title pattern

```
[Stack][env][locale][layer] short fact
```

Example:

```
[horizon-market][staging][fr-fr][B-NO-INCLUDE] product category is UID; PDP shows blank
```

---

## Template

```
Title:
Layer / code:
Severity:
Stack / env / locale:
Type UID / entry UID / version:
Tokens used (type only, never value): delivery-staging | preview | n/a

Steps:
1.
2.

Expected:
Actual:

CMS evidence:
API evidence (paste redacted JSON):
Site evidence:

Suggested owner:
Workaround:
```
