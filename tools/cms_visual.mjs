/**
 * Labeled official Contentstack UI guide for QA.
 * Screenshots are from Contentstack Docs (vendor documentation images).
 */

function pin(n, left, top) {
  return `<span class="pin" style="left:${left}%;top:${top}%">${n}</span>`;
}

function labeled(src, alt, pins, items) {
  return `<figure class="shot labeled">
  <div class="shot-frame">
    <img src="${src}" alt="${alt}" loading="lazy">
    ${pins}
  </div>
  <ol class="legend">
    ${items.map((t, i) => `<li><b>${i + 1}.</b> ${t}</li>`).join("\n    ")}
  </ol>
</figure>`;
}

export function cmsVisualBody() {
  return `
      <div class="crumb">Home / CMS visual field guide</div>
      <h1>Contentstack CMS — labeled screens for QA</h1>
      <p class="meta">Official Contentstack UI. Each red number is a control testers must be able to name. Screenshots from <a href="https://www.contentstack.com/docs">Contentstack Docs</a>.</p>
      <div class="callout">
        <strong>How to use this page.</strong> Open the same screen in your trial stack. Point at each number and say the QA sentence out loud.
      </div>

      <h2 id="nav">1. Top navigation — where you are</h2>
      <p>Every official screenshot uses this bar. Learn the names before you click anything.</p>
      ${labeled(
        "assets/official/create-content-type.png",
        "Content Models with Create New Content Type modal",
        pin(1, 8, 5) + pin(2, 18, 5) + pin(3, 28, 5) + pin(4, 40, 5) + pin(5, 52, 5) + pin(6, 64, 5) + pin(7, 50, 36) + pin(8, 50, 48) + pin(9, 42, 68) + pin(10, 62, 86),
        [
          "<strong>Dashboard</strong> — activity overview. Not the Entries list.",
          "<strong>Entries</strong> — filled content. This is the daily QA dashboard.",
          "<strong>Assets</strong> — images/PDFs. They have their own publish lifecycle.",
          "<strong>Content Models</strong> — blank forms (schema). Changing Unique ID here breaks the site.",
          "<strong>Visual Experience</strong> — Visual Builder / canvas. Looks like the website. It is <em>not</em> proof of Delivery API.",
          "<strong>Publish Queue / Releases / Settings</strong> — jobs, campaign boxes, environments, tokens, languages.",
          "<strong>Name</strong> — editor label. Safe to change later.",
          "<strong>UID</strong> — API name. Docs say: cannot be changed once saved. Testers query this, not the Name.",
          "<strong>Type Single vs Multiple</strong> — Single = one entry (header, homepage). Multiple = many (products, articles).",
          "<strong>Save and proceed</strong> — opens the Content Type Builder. Does not create an entry.",
        ],
      )}
      <div class="qa-box"><strong>QA sentence:</strong> “Content type Name is Product, UID is <code>product</code>, Type is Multiple.”</div>

      <h2 id="builder">2. Content Type Builder — the visual content model</h2>
      <p>This is the <strong>blank form</strong>. You are not writing a product yet. You are deciding which boxes the form will have.</p>
      ${labeled(
        "assets/official/content-type-builder.png",
        "Empty Content Type Builder for Sample",
        pin(1, 22, 16) + pin(2, 48, 16) + pin(3, 72, 16) + pin(4, 50, 32) + pin(5, 50, 42) + pin(6, 78, 92),
        [
          "<strong>Back</strong> — returns to the Content Types list.",
          "<strong>Content type title</strong> (Sample) — click the gear beside it for type-level settings.",
          "<strong>Field Visibility Rules</strong> — hide/show fields from other field values. High bug area in UAT.",
          "<strong>Title</strong> — default field. Always exists. Used as the name in the Entries list.",
          "<strong>+ Insert a field</strong> — hover under Title and click plus. This adds SKU, price, reference, modular blocks, and so on.",
          "<strong>Save / Save and Close</strong> — saves the <em>schema</em>, not an entry. The website does not change.",
        ],
      )}
      <div class="qa-box"><strong>QA sentence:</strong> “I saved the content type. No entry exists yet. CDA is still empty.”</div>

      <h2 id="fields">3. Fields — Display Name vs Unique ID</h2>
      <p>Official News Article example. The purple box is <strong>field properties</strong> (the gear).</p>
      ${labeled(
        "assets/official/about-fields.png",
        "News Article fields with Rich Text Editor Properties",
        pin(1, 28, 28) + pin(2, 28, 38) + pin(3, 28, 48) + pin(4, 28, 58) + pin(5, 72, 36) + pin(6, 72, 48) + pin(7, 72, 60) + pin(8, 80, 92),
        [
          "<strong>Title</strong> — Single Line Textbox. Default field. Display name for the entry.",
          "<strong>URL</strong> — default path field. CMS does not create the website route; the app does.",
          "<strong>Date</strong> — date/time. Timezone is usually an <em>app</em> concern.",
          "<strong>Body</strong> — Rich Text / JSON RTE. Highlighted because its properties are open.",
          "<strong>Display Name</strong> = <code>Body</code> — what editors see. Safe to rename.",
          "<strong>Unique ID</strong> = <code>body</code> — JSON key. Frontend and tests use this. Never rename after wiring.",
          "<strong>Instruction / Help text</strong> — editor hints. Not shown on the shopper site.",
          "<strong>Save</strong> — still schema only. Open the gear on every field and check Mandatory, Unique, and Localize.",
        ],
      )}
      <table>
        <thead><tr><th>Property testers open</th><th>What to check</th></tr></thead>
        <tbody>
          <tr><td>Mandatory</td><td>Can editors save a draft without it? Required-too-early causes workflow deadlock.</td></tr>
          <tr><td>Unique</td><td>SKU and slug usually on. Duplicate SKU is a defect.</td></tr>
          <tr><td>Localize this field</td><td>On for title/body. Off for sku, price, slug unless the project says otherwise.</td></tr>
          <tr><td>Multiple</td><td>List fields. Empty list vs missing key in JSON.</td></tr>
          <tr><td>Default value</td><td>Boolean default false vs unset.</td></tr>
        </tbody>
      </table>
      <div class="qa-box"><strong>QA language:</strong> “Field Unique ID <code>price</code> is 129. Display Name can say Product price. I do not file bugs on the label.”</div>

      <h2 id="dashboard">4. Entries list — the content dashboard</h2>
      <p>Left menu <strong>Entries</strong>. This is where QA spends most of the day. It is not the marketing Dashboard.</p>
      ${labeled(
        "assets/official/entries-list.png",
        "Entries list with publish status and languages",
        pin(1, 16, 5) + pin(2, 84, 12) + pin(3, 92, 12) + pin(4, 16, 42) + pin(5, 32, 42) + pin(6, 48, 42) + pin(7, 62, 42) + pin(8, 76, 42),
        [
          "<strong>Entries</strong> in the top nav — you are on the content dashboard.",
          "<strong>Language</strong> — locale of the list (<code>en-us</code> is not <code>fr-fr</code>).",
          "<strong>+ New Entry</strong> — creates a filled form from a content type.",
          "<strong>Title</strong> — entry name. Search and defects use this plus Entry UID.",
          "<strong>Entry ID</strong> — <code>blt…</code>. Copy this when you call CDA.",
          "<strong>Content Type</strong> — which form it uses (Article, Product).",
          "<strong>Version / Draft tag</strong> — unsaved or newer than published. Draft ≠ live.",
          "<strong>Publish Status</strong> — which <em>environments</em> it is on (preview, production). Workflow stage is a different column.",
        ],
      )}
      ${labeled(
        "assets/official/entries-list-actions.png",
        "Entries list with locale dropdown and environment dots",
        pin(1, 88, 14) + pin(2, 10, 42) + pin(3, 68, 48) + pin(4, 92, 14) + pin(5, 50, 8),
        [
          "<strong>Locale dropdown</strong> — English (M) = master. Switch to French/German to test translations.",
          "<strong>Content Type Views</strong> — filter to Article, Home Page, CTA. Use this before you say “it is missing.”",
          "<strong>Publish Status dots</strong> — green next to preview/production means published there. No dot = not on that environment.",
          "<strong>+ New Entry</strong> — same as above.",
          "<strong>Stack + branch</strong> (Compass Starter / main) — confirm you are not in the wrong stack before you file a bug.",
        ],
      )}
      <div class="qa-box"><strong>QA sentence:</strong> “Entry <em>Linen Overshirt</em>, UID copied, locale en-us, published to staging, not production, workflow still In Review.”</div>

      <h2 id="create-entry">5. Create Entry — pick the form, then fill it</h2>
      ${labeled(
        "assets/official/create-entry.png",
        "Select Content Type after New Entry",
        pin(1, 88, 22) + pin(2, 50, 48) + pin(3, 62, 72) + pin(4, 70, 38),
        [
          "<strong>+ New Entry</strong> opened this modal.",
          "<strong>Select Content Type</strong> — you are picking the blank form (Sample), not typing the product yet.",
          "<strong>Proceed</strong> — opens the entry editor (Title, URL, body, references).",
          "<strong>Publish Status on existing rows</strong> — “Not Published” means Save happened, CDA is still empty.",
        ],
      )}
      ${labeled(
        "assets/official/reference-field.png",
        "Create new Entry — choose Docs Article",
        pin(1, 50, 42) + pin(2, 62, 78),
        [
          "<strong>Content type dropdown</strong> — another Create Entry dialog (Docs Article). Same idea: pick the schema first.",
          "<strong>Create</strong> — opens the editor. After save, this is still a draft until you Publish.",
        ],
      )}
      <div class="qa-box"><strong>Lab proof:</strong> Save only. Staging CDA must stay empty. That is how you prove Save ≠ Publish.</div>

      <h2 id="entry-json">6. Entry editor + Developer JSON</h2>
      <p>This is the <strong>filled form</strong> plus the JSON the website will map. Visual Experience / Preview can look “right” while this JSON is still old.</p>
      ${labeled(
        "assets/official/developer-api.png",
        "Home entry with Developer Tools API Details",
        pin(1, 22, 28) + pin(2, 38, 22) + pin(3, 78, 22) + pin(4, 28, 42) + pin(5, 28, 54) + pin(6, 28, 66) + pin(7, 86, 40) + pin(8, 86, 55) + pin(9, 62, 92) + pin(10, 80, 92),
        [
          "<strong>Content Types &gt; Home</strong> — single-type entry (one Home).",
          "<strong>Widgets / Visual Experience</strong> — canvas edit. Treat as Preview, not CDA.",
          "<strong>Locale</strong> — English - United States. Always write the locale in the defect.",
          "<strong>Title (required)</strong> — Display Name. JSON key is usually <code>title</code>.",
          "<strong>URL (required)</strong> — <code>/home</code>. App routing, not a CMS page.",
          "<strong>Body</strong> — rich/long text. Same value must appear in JSON <code>body</code>.",
          "<strong>Developer Tools → API Details</strong> — copy the CDA URL. Add environment + delivery token yourself.",
          "<strong>Get this entry / Get all entries</strong> — QA evidence. Do not sign off the site from Preview only.",
          "<strong>Save</strong> — new version, still draft for CDA.",
          "<strong>Publish</strong> — choose environment + locale. This is the action that changes the shopper API.",
        ],
      )}
      ${labeled(
        "assets/official/developer-json.png",
        "Same Home entry with JSON view open",
        pin(1, 28, 42) + pin(2, 28, 54) + pin(3, 86, 38) + pin(4, 86, 55) + pin(5, 86, 70),
        [
          "<strong>Title field value</strong> Home — must match JSON <code>title</code>.",
          "<strong>URL field</strong> /home — must match JSON <code>url</code>.",
          "<strong>JSON view tab</strong> — Layer B evidence. If JSON is right and the page is wrong, that is a frontend mapper bug (Layer C).",
          "<strong>Keys testers quote</strong> — <code>title</code>, <code>url</code>, <code>body</code>, <code>locale: en-us</code>, <code>_version</code>.",
          "<strong>uid / publish_details</strong> — system fields. Use uid in CDA. publish_details tells you environment + time.",
        ],
      )}
      <div class="callout warn"><strong>Warning.</strong> JSON view is often CMA/draft JSON. Confirm the same values on <strong>CDA</strong> with the staging delivery token before you pass the website.</div>

      <h2 id="publish">7. Publish — environments, locales, children</h2>
      ${labeled(
        "assets/official/publish-review.png",
        "Publish Review modal",
        pin(1, 28, 14) + pin(2, 22, 22) + pin(3, 38, 22) + pin(4, 28, 48) + pin(5, 72, 48) + pin(6, 62, 88) + pin(7, 82, 88),
        [
          "<strong>Publish Review</strong> — last screen before content can appear on an environment.",
          "<strong>Environments: 1</strong> — hover/open this. Labs: staging only. Production = live shoppers.",
          "<strong>Languages: 1</strong> — must match the locale you tested.",
          "<strong>Version</strong> — “Version 8” is what you publish. Say the version number in the bug.",
          "<strong>Workflow Status</strong> — editorial stage (Test / Draft / Approved). Approved is still not live.",
          "<strong>Validate and Publish</strong> — checks referenced entries and assets.",
          "<strong>Send All References</strong> — parent + children. Sending the parent alone causes empty cards (CS-CMP-01).",
        ],
      )}
      ${labeled(
        "assets/official/publish-validate.png",
        "Validate Items — Publish Now",
        pin(1, 50, 20) + pin(2, 28, 48) + pin(3, 62, 48) + pin(4, 82, 88),
        [
          "<strong>Validation complete</strong> — mandatory fields and references passed. Still check the environment list.",
          "<strong>Locale + Version</strong> — English - United States (M) | Version 8.",
          "<strong>Publish Ready = Yes</strong> — if No, expand “Show more” for the failing child or asset.",
          "<strong>Publish Now</strong> — this is the click that changes CDA. Not Save. Not workflow Approved.",
        ],
      )}
      <div class="qa-box"><strong>QA sentence:</strong> “Published version 4 to staging, en-us. Production unchecked. Child category and hero asset included.”</div>

      <h2 id="environments">8. Environments — not folders</h2>
      ${labeled(
        "assets/official/environments.png",
        "Contentstack environments flow",
        pin(1, 50, 8) + pin(2, 18, 58) + pin(3, 50, 58) + pin(4, 82, 58) + pin(5, 82, 88),
        [
          "<strong>CMS</strong> — where you Save. Shoppers never see this by default.",
          "<strong>Development</strong> — developers. Own delivery token.",
          "<strong>Staging</strong> — QA + editorial UAT. Your usual publish target.",
          "<strong>Production</strong> — live. Staging token never proves production.",
          "<strong>End users</strong> — only content published to production (and fetched by the production app).",
        ],
      )}
      <p>In the real CMS this list lives at <strong>Settings → Environments</strong>. Each row is a publish destination, not a folder of drafts.</p>

      <h2 id="visual">9. Visual Experience vs Delivery API</h2>
      <p>The top nav item <strong>Visual Experience</strong> (and “Edit in Visual Builder” on an entry) is a canvas that can show <em>drafts</em>.</p>
      <div class="learn">
        <div>
          <strong>Visual Experience / Preview</strong>
          Draft or latest saved fields in an iframe. Good for layout. Not Layer B proof.
        </div>
        <div>
          <strong>Developer Tools + CDA</strong>
          Published JSON for one environment + locale. This is what the website is allowed to render.
        </div>
      </div>
      <div class="qa-box"><strong>Defect pattern:</strong> “Looks fine in Visual Experience, staging site is old” → you signed off Preview, not CDA.</div>

      <h2 id="walk">10. One-page QA walk (every new template)</h2>
      <ol>
        <li>Content Models — Unique IDs stable? Localize / Mandatory / Unique correct?</li>
        <li>Entries list — locale, publish status dots, workflow stage, version</li>
        <li>Open entry — required fields, references, assets</li>
        <li>Publish Review — staging only, correct locale, validate children</li>
        <li>Developer JSON + CDA — same values, <code>include[]</code> resolved</li>
        <li>Website — after cache SLA</li>
      </ol>
      <p class="attr">Images © Contentstack Docs, used here to train testers to read the real UI.</p>
`;
}
