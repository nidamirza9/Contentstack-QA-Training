# Module 04 — QA Strategy on Real Contentstack Projects

**Time:** 2 hours  
**Goal:** Plan tests the way a delivery team actually ships: model change, content UAT, campaign, localization, regression.

![Horizon Review workflow — Draft → In Review → Approved → Published. Approved is not live.](screens/cs-workflow.png)

---

## 1. Test strategy in one page

| Layer | Technique | When |
| --- | --- | --- |
| Content type schema | Contract snapshot of CDA/GraphQL schema or sample JSON | Every merge of a branch or type edit |
| Entry rules | Manual + required-field / workflow negative tests | New type or workflow |
| Delivery JSON | REST/GraphQL assertions in CI against fixture UIDs | Every pipeline |
| Preview | Scripted Playwright only for high-value paths | Preview or Visual Builder change |
| Channel UI | Functional + visual on staging | Every content template |
| Campaign | Release rehearsal on staging, then production window | Every coordinated go-live |
| Localization | Fallback matrix + app formatting | New locale or localized field |
| Roles | Negative publish / language tests | New role or publish rule |

Do **not** automate the entire Contentstack UI. It is slow and brittle. Automate the **JSON contract** and a thin set of authoring E2E paths.

---

## 2. Fixture-entry strategy

Create entries that CI and humans both use:

- Prefix title with `[QA-FIXTURE]`
- Boolean field `is_fixture` = true (add it to types you test)
- Never use fixtures for real campaigns
- Store UIDs in the test repo (`fixtures/horizon-market.json`)
- Optional: snapshot CDA JSON and diff it in CI (schema drift)

If editors “helpfully” edit fixtures, contract tests fail. Protect with role exceptions or a dedicated QA content type folder convention.

---

## 3. Story templates QA should demand

Bad story:

> As an editor I can add a product so it shows on the site.

Good acceptance criteria (copy this):

1. Editor can create `product` with required fields; SKU and slug unique.
2. Save does not appear on any CDA environment.
3. Publish to `staging` + `en-us` makes CDA return the entry with `category` resolved.
4. `production` CDA still 404 / empty for that UID.
5. Staging PDP shows title, price, image, category name.
6. Unpublish from staging removes CDA + PDP (after cache SLA).
7. `fr-fr` without localization falls back per stack rules; SKU stays identical.

If a story has no environment or locale, send it back.

---

## 4. Risk-based coverage

| Risk | Why it ships broken | Minimum tests |
| --- | --- | --- |
| Unpublished reference | Homepage empty | Publish parent, leave child draft |
| Locale fallback | FR site shows EN legal copy | Matrix in Lab 06 |
| Modular block order | Legal disclaimer above fold | Reorder blocks, check JSON array + UI |
| Global field change | SEO title vanishes on 40 types | One consumer per type after change |
| Asset not in Release | Campaign image 404 | Release without asset vs with asset |
| Workflow skip | Legal-unreviewed content live | Role cannot publish from In Review |
| Branch merge | Field UID renamed | Contract test fail = block merge |
| Webhook fail | ISR never runs | Failed webhook + stale HTML |
| Cache | “I published 2 minutes ago” | Document SLA; do not file before SLA |
| GraphQL vs REST mapper | App uses one, QA tested the other | Dual-check once per template |

---

## 5. Roles QA must impersonate

Ask for these users on the sandbox and on the project:

| Persona | Typical permissions | Tests |
| --- | --- | --- |
| Author | Create/update entries, no production publish | Cannot publish prod |
| Reviewer | Workflow In Review → Approved | Cannot edit after Approved if configured |
| Translator | Specific locales only; not master | Cannot change `en-us` |
| Publisher | Production + Releases | Happy path go-live |
| QA | Read all; publish staging | Your daily user |
| Developer | Content types, tokens, branches | Out of scope for content UAT |

File permission defects with **role name**, not “I could not click Publish.”

---

## 6. Collaboration pattern that works

```
Editor authors  →  QA checks CMS + staging CDA + staging site
Developer fixes mapper / include[] / preview SDK
Publisher runs Release after QA sign-off
QA re-checks production CDA + smoke (not full regression)
```

Stand-up language:

- “Blocked on unpublished `author` uid `blt…` for article X”
- “Staging CDA good; production webhook 502 since 14:10”
- “Visual Builder `data-cslp` on hero CTA points at `title` not `cta_label`”

---

## 7. First-week plan on a client stack

**Day 1:** Get stack access, region, three tokens (delivery staging, delivery production read-only test, preview). Map content types to site templates. List locales and fallback.

**Day 2:** Walk one happy-path entry per major type. Capture fixture UIDs. Import sample CDA JSON into the test repo.

**Day 3:** Negative tests: unpublished ref, wrong locale, role publish, empty modular block.

**Day 4:** Preview vs site, one Release rehearsal, webhook/cache SLA written in Confluence/ADO.

**Day 5:** Sign the [acceptance pack](../checklists/qa-acceptance-pack.md) for “QA is unblocked.”

---

## 8. What “done” looks like for a content ticket

- [ ] Entry UIDs and versions recorded
- [ ] Environments and locales listed
- [ ] Staging CDA JSON attached (sensitive tokens redacted)
- [ ] Production CDA checked if the ticket claims live
- [ ] Site/app screenshot **after** cache SLA
- [ ] References and assets published
- [ ] Workflow stage matches publish rules
- [ ] No fixture or test copy on production

---

**Next:** [Lab setup](../labs/00-lab-setup.md)
