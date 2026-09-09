# QA acceptance pack — Contentstack project

Use on every sprint, campaign, and “QA is unblocked” gate. Copy into ADO/Jira as needed.

![Confirm environment and token before you sign off](screens/cs-environments.png)

---

## A. Stack access (once per project)

- [ ] Region and app URL documented
- [ ] Staging delivery token in secret store (not chat)
- [ ] Production delivery token available to QA for **read** proof
- [ ] Preview token for UAT environment
- [ ] Role: QA can publish staging, cannot publish production (or exception documented)
- [ ] Locales + fallback tree written down
- [ ] Webhook list + owner + expected SLA (rebuild / ISR)

---

## B. Content type / schema change

- [ ] Field UIDs listed (added / removed / renamed)
- [ ] Localize flags reviewed (SKU, date, refs default non-localizable)
- [ ] Fixture CDA JSON updated
- [ ] GraphQL field names still resolve
- [ ] Global field consumers listed and spot-checked
- [ ] Branch merged to main and **main staging** retested

---

## C. Entry / page acceptance

- [ ] Required fields populated; no `lorem` / `TODO` on the target environment
- [ ] Slug unique and matches the app route convention
- [ ] All references published on the **same** environment + locale
- [ ] Assets published; alt/title present if the model has them
- [ ] Modular block order matches the brief
- [ ] Workflow stage allows publish
- [ ] Version number recorded
- [ ] Unpublished / outdated related entries removed from refs

---

## D. API proof

- [ ] CDA REST (correct environment + locale) matches CMS published version
- [ ] `include[]` used for every reference the page renders
- [ ] JSON RTE embeds resolved if the page uses them
- [ ] Production CDA checked only when the ticket claims production
- [ ] Preview API / Live Preview checked for draft-only tickets
- [ ] Tokens redacted in attachments

---

## E. Channel / site

- [ ] Template mapping: every required JSON field visible or intentionally hidden
- [ ] Images load (correct transform)
- [ ] Cache / webhook SLA waited
- [ ] 404 for unpublished slug
- [ ] Visual Builder field mapping (if in scope)

---

## F. Localization

- [ ] Requested locales published
- [ ] Fallback behaviour accepted by the business
- [ ] Non-localizable fields identical
- [ ] No mixed-language leftovers in RTE
- [ ] App formats dates/currency for the locale (Layer C)

---

## G. Release / go-live

- [ ] Item list reviewed (parents + children + assets + locales)
- [ ] Staging rehearsal passed
- [ ] Takedown / rollback plan exists
- [ ] Production smoke: CDA + 3 URLs
- [ ] Search index / secondary channels updated if webhooks exist

---

## H. Sign-off

| Role | Name | Date | Result |
| --- | --- | --- | --- |
| QA | | | Pass / Blocked |
| Editor | | | |
| Developer | | | |

Blocker UIDs:
