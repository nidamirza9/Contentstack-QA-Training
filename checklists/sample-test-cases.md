# Sample test cases — Horizon Market

IDs use `HM-QA-##`. Clone and change stack names on a client project.

| ID | Layer | Title | Steps | Expected |
| --- | --- | --- | --- | --- |
| HM-QA-01 | A | Required slug on product | Create product, clear slug, save | Validation error; no entry created |
| HM-QA-02 | A | Unique SKU | Create second product with `HM-OSH-001` | Unique-field error |
| HM-QA-03 | B | Save does not publish | Edit title, save, GET staging CDA | CDA title unchanged |
| HM-QA-04 | B | Staging isolation | Publish product to staging only; GET production CDA | 0 entries |
| HM-QA-05 | B | include field UID | GET product without `include[]=category`; then with | UID only, then `title=Apparel` |
| HM-QA-06 | B | Featured query | Two products, featured true/false; query featured | Only featured returned |
| HM-QA-07 | A | Unpublished reference | Landing page grid refs unpublished product; publish page | Grid missing/empty; CDA ref 404 |
| HM-QA-08 | A | Unpublished asset | Publish entry, unpublish hero asset | Image URL 404 or stale |
| HM-QA-09 | B | Version rollback | Publish v2, publish v1 to staging | CDA matches v1 |
| HM-QA-10 | B | FR localize | Localize title, publish `fr-fr` | `locale=fr-fr` returns FR title; SKU unchanged |
| HM-QA-11 | B | DE fallback | No DE localize; `include_fallback=true` | EN title (or documented fallback) |
| HM-QA-12 | A | Non-localizable price | Change EN price, publish EN | FR CDA price matches |
| HM-QA-13 | A | Workflow vs CDA | Move Draft → In Review, no publish | CDA 0 entries |
| HM-QA-14 | A | Author cannot publish prod | Login Author, publish to production | Denied |
| HM-QA-15 | A | Translator cannot edit master | FR translator edits `en-us` | Denied |
| HM-QA-16 | B | Preview vs CDA | Save draft title; Preview API vs CDA | Preview new; CDA old |
| HM-QA-17 | B | Release atomic | Release with page + products to staging | All present; production unchanged |
| HM-QA-18 | B | Release missing child | Release page only; child draft | Page live, grid broken |
| HM-QA-19 | B | Release unpublish | Takedown Release on staging | Slug gone from CDA |
| HM-QA-20 | B | Workflow blocks Release | Item In Review in Release | Skip or fail per config |
| HM-QA-21 | C | Mapper miss | Field in CDA, not on PDP | Layer C defect |
| HM-QA-22 | C | Cache SLA | Publish, hit site immediately | May be stale until SLA; then updated |
| HM-QA-23 | B | Wrong token | Production token on staging query | 403/empty |
| HM-QA-24 | B | GraphQL parity | Same slug on REST and GraphQL | Same title, sku, price |
| HM-QA-25 | A | Modular order | Reorder hero below CTA; publish | JSON array order + page order match |
| HM-QA-26 | A | Single type | Create second `site_settings` | UI prevents or app breaks — document |
| HM-QA-27 | B | Pagination | `limit=1` on products | One item; `skip=1` different UID |
| HM-QA-28 | C | Slug vs route | Slug `linen-overshirt` | App URL convention matches (Layer C) |
| HM-QA-29 | B | Locale header mix | Entry FR, request `en-us` | EN title, not FR |
| HM-QA-30 | All | Campaign smoke | After Release: CDA + hero + 2 PDPs | All green; tokens not in bugs |

Add automation later for **HM-QA-03, 04, 05, 10, 17** first (highest signal, lowest UI flake).

For component and template UAT on a real project, use [component-template-qa-issues.md](./component-template-qa-issues.md) (`CS-CMP-01` … `CS-CMP-41`).
