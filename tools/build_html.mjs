import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HTML_DIR = path.join(ROOT, "html");
const HOME_PATH = path.join(HTML_DIR, "index.html");
const CANVAS_PATH =
  "C:\\Users\\nmirza.HZI\\.cursor\\projects\\c-Users-nmirza-HZI-OneDrive-Horizontal-Integration-Inc-Documents-CNE-GSE-Contentstack-Learning\\canvases\\qa-training-summary.canvas.tsx";
const LAUNCHER_PATH = path.join(ROOT, "Contentstack-QA-Training.html");

const NAV = [
  ["home", "Home", "index.html"],
  ["paths", "Full paths", "paths.html"],
  ["summary", "Training summary", "summary.html"],
  ["group", "Modules"],
  ["m01", "01 · Boundaries", "modules/01-boundaries.html"],
  ["m02", "02 · Model & publish", "modules/02-model-publish.html"],
  ["m03", "03 · APIs & releases", "modules/03-apis-releases.html"],
  ["m04", "04 · QA strategy", "modules/04-qa-strategy.html"],
  ["group", "Labs"],
  ["labs", "Lab index", "labs/index.html"],
  ["l00", "00 · Setup", "labs/00-setup.html"],
  ["l01", "01 · Stack orientation", "labs/01-orientation.html"],
  ["l02", "02 · Model and entry", "labs/02-model-entry.html"],
  ["l03", "03 · Publish", "labs/03-publish.html"],
  ["l04", "04 · Delivery API", "labs/04-delivery-api.html"],
  ["l05", "05 · Workflow & preview", "labs/05-workflow-preview.html"],
  ["l06", "06 · Localization", "labs/06-localization.html"],
  ["l07", "07 · Releases", "labs/07-releases.html"],
  ["l08", "08 · Defects", "labs/08-defects.html"],
  ["group", "Checklists"],
  ["acc", "Acceptance pack", "checklists/acceptance.html"],
  ["tc", "Sample test cases", "checklists/test-cases.html"],
  ["def", "Defect taxonomy", "checklists/defects.html"],
  ["issues", "Component / template issues", "issues/component-template-qa.html"],
];

const PAGES = [
  ["summary", "TRAINING-SUMMARY.md", "summary.html", "Training summary", "Home / Training summary", ["index.html", "Home"], ["modules/01-boundaries.html", "Module 01"]],
  ["m01", "modules/01-headless-cms-and-contentstack.md", "modules/01-boundaries.html", "Module 01 — Boundaries", "Home / Modules / 01", ["../summary.html", "Training summary"], ["02-model-publish.html", "Module 02"]],
  ["m02", "modules/02-content-model-authoring-publish.md", "modules/02-model-publish.html", "Module 02 — Model and publish", "Home / Modules / 02", ["01-boundaries.html", "Module 01"], ["03-apis-releases.html", "Module 03"]],
  ["m03", "modules/03-apis-preview-releases.md", "modules/03-apis-releases.html", "Module 03 — APIs and releases", "Home / Modules / 03", ["02-model-publish.html", "Module 02"], ["04-qa-strategy.html", "Module 04"]],
  ["m04", "modules/04-qa-strategy-real-projects.md", "modules/04-qa-strategy.html", "Module 04 — QA strategy", "Home / Modules / 04", ["03-apis-releases.html", "Module 03"], ["../labs/00-setup.html", "Lab setup"]],
  ["labs", "labs/README.md", "labs/index.html", "Hands-on labs", "Home / Labs", ["../modules/04-qa-strategy.html", "Module 04"], ["00-setup.html", "Lab setup"]],
  ["l00", "labs/00-lab-setup.md", "labs/00-setup.html", "Lab 00 — Setup", "Home / Labs / 00", ["index.html", "Lab index"], ["01-orientation.html", "Lab 01"]],
  ["l01", "labs/lab-01-stack-orientation.md", "labs/01-orientation.html", "Lab 01 — Stack orientation", "Home / Labs / 01", ["00-setup.html", "Lab setup"], ["02-model-entry.html", "Lab 02"]],
  ["l02", "labs/lab-02-model-and-entry.md", "labs/02-model-entry.html", "Lab 02 — Model and entry", "Home / Labs / 02", ["01-orientation.html", "Lab 01"], ["03-publish.html", "Lab 03"]],
  ["l03", "labs/lab-03-environments-and-publish.md", "labs/03-publish.html", "Lab 03 — Publish", "Home / Labs / 03", ["02-model-entry.html", "Lab 02"], ["04-delivery-api.html", "Lab 04"]],
  ["l04", "labs/lab-04-delivery-api.md", "labs/04-delivery-api.html", "Lab 04 — Delivery API", "Home / Labs / 04", ["03-publish.html", "Lab 03"], ["05-workflow-preview.html", "Lab 05"]],
  ["l05", "labs/lab-05-workflow-roles-preview.md", "labs/05-workflow-preview.html", "Lab 05 — Workflow and preview", "Home / Labs / 05", ["04-delivery-api.html", "Lab 04"], ["06-localization.html", "Lab 06"]],
  ["l06", "labs/lab-06-localization.md", "labs/06-localization.html", "Lab 06 — Localization", "Home / Labs / 06", ["05-workflow-preview.html", "Lab 05"], ["07-releases.html", "Lab 07"]],
  ["l07", "labs/lab-07-releases-and-campaign.md", "labs/07-releases.html", "Lab 07 — Releases", "Home / Labs / 07", ["06-localization.html", "Lab 06"], ["08-defects.html", "Lab 08"]],
  ["l08", "labs/lab-08-regression-and-defects.md", "labs/08-defects.html", "Lab 08 — Defects", "Home / Labs / 08", ["07-releases.html", "Lab 07"], ["../checklists/acceptance.html", "Acceptance pack"]],
  ["acc", "checklists/qa-acceptance-pack.md", "checklists/acceptance.html", "Acceptance pack", "Home / Checklists / Acceptance", ["../labs/08-defects.html", "Lab 08"], ["test-cases.html", "Test cases"]],
  ["tc", "checklists/sample-test-cases.md", "checklists/test-cases.html", "Sample test cases", "Home / Checklists / Test cases", ["acceptance.html", "Acceptance pack"], ["defects.html", "Defect taxonomy"]],
  ["def", "checklists/defect-taxonomy.md", "checklists/defects.html", "Defect taxonomy", "Home / Checklists / Defects", ["test-cases.html", "Test cases"], ["../issues/component-template-qa.html", "Component issues"]],
  ["issues", "checklists/component-template-qa-issues.md", "issues/component-template-qa.html", "Component and template QA issues", "Home / Real project issues", ["../checklists/defects.html", "Defect taxonomy"], ["../index.html", "Home"]],
];

const LINK_MAP = [
  [/\.\/modules\/01-headless-cms-and-contentstack\.md/g, "modules/01-boundaries.html"],
  [/\.\/modules\/02-content-model-authoring-publish\.md/g, "modules/02-model-publish.html"],
  [/\.\/modules\/03-apis-preview-releases\.md/g, "modules/03-apis-releases.html"],
  [/\.\/modules\/04-qa-strategy-real-projects\.md/g, "modules/04-qa-strategy.html"],
  [/\.\/labs\/00-lab-setup\.md/g, "labs/00-setup.html"],
  [/\.\.\/labs\/00-lab-setup\.md/g, "../labs/00-setup.html"],
  [/\.\.\/labs\/lab-01-stack-orientation\.md#knowledge-check-answers/g, "../labs/01-orientation.html#knowledge-check-answers"],
  [/\.\.\/labs\/lab-01-stack-orientation\.md/g, "../labs/01-orientation.html"],
  [/\.\/02-content-model-authoring-publish\.md/g, "02-model-publish.html"],
  [/\.\/03-apis-preview-releases\.md/g, "03-apis-releases.html"],
  [/\.\/04-qa-strategy-real-projects\.md/g, "04-qa-strategy.html"],
  [/\.\/lab-01-stack-orientation\.md/g, "01-orientation.html"],
  [/\.\/lab-02-model-and-entry\.md/g, "02-model-entry.html"],
  [/\.\/lab-03-environments-and-publish\.md/g, "03-publish.html"],
  [/\.\/lab-04-delivery-api\.md/g, "04-delivery-api.html"],
  [/\.\/lab-05-workflow-roles-preview\.md/g, "05-workflow-preview.html"],
  [/\.\/lab-06-localization\.md/g, "06-localization.html"],
  [/\.\/lab-07-releases-and-campaign\.md/g, "07-releases.html"],
  [/\.\/lab-08-regression-and-defects\.md/g, "08-defects.html"],
  [/\.\.\/checklists\/qa-acceptance-pack\.md/g, "../checklists/acceptance.html"],
  [/\.\.\/checklists\/defect-taxonomy\.md/g, "../checklists/defects.html"],
  [/\.\/defect-taxonomy\.md/g, "../checklists/defects.html"],
  [/\.\/sample-test-cases\.md/g, "../checklists/test-cases.html"],
  [/\.\.\/labs\/lab-08-regression-and-defects\.md/g, "../labs/08-defects.html"],
  [/\.\.\/TRAINING-SUMMARY\.md/g, "../summary.html"],
  [/\.\/TRAINING-SUMMARY\.md/g, "summary.html"],
  [/\.\/00-lab-setup\.md/g, "00-setup.html"],
];

function esc(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function rewriteLinks(text, dest) {
  for (const [re, to] of LINK_MAP) text = text.replace(re, to);
  const shot = dest.includes("/") ? "../assets/screens/" : "assets/screens/";
  return text.replace(/\(screens\//g, `(${shot}`);
}

function inline(text) {
  let s = esc(text);
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return s;
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function mdToHtml(md) {
  const lines = md.replaceAll("\r\n", "\n").split("\n");
  const out = [];
  let i = 0;
  let inUl = false;
  let inOl = false;
  let inNestedUl = false;

  const closeNested = () => {
    if (inNestedUl) {
      out.push("</ul>");
      inNestedUl = false;
    }
  };

  const close = () => {
    closeNested();
    if (inUl) {
      out.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      out.push("</ol>");
      inOl = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("```")) {
      close();
      const fence = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        fence.push(lines[i]);
        i += 1;
      }
      i += 1;
      out.push(`<pre><code>${esc(fence.join("\n"))}</code></pre>`);
      continue;
    }
    if (/^\|.+\|$/.test(line) && i + 1 < lines.length && /^\|[\s:|-]+\|$/.test(lines[i + 1])) {
      close();
      const headers = line.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      i += 2;
      const rows = [];
      while (i < lines.length && /^\|.+\|$/.test(lines[i])) {
        rows.push(lines[i].replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
        i += 1;
      }
      const thead = headers.map((h) => `<th>${inline(h)}</th>`).join("");
      const tbody = rows
        .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
        .join("");
      out.push(`<table><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table>`);
      continue;
    }
    if (line.startsWith("# ")) {
      close();
      out.push(`<h1>${inline(line.slice(2))}</h1>`);
    } else if (line.startsWith("## ")) {
      close();
      out.push(`<h2 id="${slugify(line.slice(3))}">${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("### ")) {
      close();
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
    } else if (/^!\[([^\]]*)\]\(([^)]+)\)/.test(line.trim())) {
      close();
      const m = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      out.push(
        `<figure class="shot"><img src="${esc(m[2])}" alt="${esc(m[1])}" loading="lazy"><figcaption>${inline(m[1])}</figcaption></figure>`,
      );
    } else if (/^\s+-\s/.test(line)) {
      if (inOl && !inNestedUl) {
        out.push("<ul>");
        inNestedUl = true;
      } else if (!inUl && !inNestedUl) {
        close();
        out.push("<ul>");
        inUl = true;
      }
      out.push(`<li>${inline(line.replace(/^\s+-\s/, ""))}</li>`);
    } else if (/^- \[[ xX]\] /.test(line)) {
      if (!inUl) {
        close();
        out.push("<ul>");
        inUl = true;
      }
      out.push(`<li>${inline(line.replace(/^- \[[ xX]\] /, ""))}</li>`);
    } else if (line.startsWith("- ")) {
      closeNested();
      if (!inUl) {
        close();
        out.push("<ul>");
        inUl = true;
      }
      out.push(`<li>${inline(line.slice(2))}</li>`);
    } else if (/^\d+\. /.test(line)) {
      closeNested();
      if (!inOl) {
        close();
        out.push("<ol>");
        inOl = true;
      }
      out.push(`<li>${inline(line.replace(/^\d+\. /, ""))}</li>`);
    } else if (line.trim() === "") {
      close();
    } else {
      close();
      out.push(`<p>${inline(line)}</p>`);
    }
    i += 1;
  }
  close();
  return out.join("\n");
}

function cssHref(dest) {
  return dest.includes("/") ? "../assets/app.css" : "assets/app.css";
}

function navPrefix(dest) {
  return dest.includes("/") ? "../" : "";
}

function renderNav(active, dest) {
  const prefix = navPrefix(dest);
  const items = [
    `<nav class="nav">`,
    `<a class="brand" href="${prefix}index.html">Contentstack QA Training</a>`,
    `<div class="tag">Horizon Market · offline HTML</div>`,
    `<ul>`,
  ];
  for (const row of NAV) {
    if (row[0] === "group") {
      items.push(`<li class="group">${esc(row[1])}</li>`);
      continue;
    }
    const [id, label, href] = row;
    const cls = id === active ? ' class="active"' : "";
    items.push(`<li><a${cls} href="${prefix}${href}">${esc(label)}</a></li>`);
  }
  items.push("</ul></nav>");
  return items.join("\n");
}

function wrap(page, body) {
  const [id, , dest, title, crumb, prev, next] = page;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} · Contentstack QA</title>
  <link rel="stylesheet" href="${cssHref(dest)}">
</head>
<body>
  <div class="layout">
    ${renderNav(id, dest)}
    <main class="main">
      <div class="crumb">${esc(crumb)}</div>
      ${body}
      <div class="pager">
        <a href="${prev[0]}">← ${esc(prev[1])}</a>
        <a href="${next[0]}">${esc(next[1])} →</a>
      </div>
    </main>
  </div>
</body>
</html>
`;
}

function homeHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contentstack QA tester training</title>
  <link rel="stylesheet" href="assets/app.css">
</head>
<body>
  <div class="layout">
    ${renderNav("home", "index.html")}
    <main class="main">
      <div class="crumb">Contentstack Learning / HTML</div>
      <h1>Contentstack QA tester training</h1>
      <p class="meta">Hands-on pack for testers on real Contentstack projects. Open this file in any browser. No server required. Each chapter includes a Contentstack-style CMS screenshot so you can match the real UI.</p>
      <figure class="shot"><img src="assets/screens/cs-stack-home.png" alt="Horizon Market QA stack home" loading="lazy"><figcaption>Horizon Market QA stack home — Entries, Assets, Releases, environments</figcaption></figure>
      <div class="card-row">
        <div class="stat"><b>4 days</b><span>Concept + labs</span></div>
        <div class="stat"><b>8 labs</b><span>On a real stack</span></div>
        <div class="stat"><b>3 layers</b><span>CMS / API / app</span></div>
        <div class="stat"><b>30 cases</b><span>Reusable test IDs</span></div>
      </div>
      <div class="callout">
        <strong>Start here.</strong> Read the training summary, then Module 01, then Lab setup.
        Do not skip API labs. Most production defects are published-vs-draft, environment, locale, or unresolved references.
      </div>
      <h2>Open these pages</h2>
      <div class="tile-grid">
        <a class="tile" href="summary.html"><strong>Training summary</strong><span>Outcomes, ownership, syllabus, definition of done</span></a>
        <a class="tile" href="modules/01-boundaries.html"><strong>Module 01</strong><span>Headless CMS and Contentstack boundaries</span></a>
        <a class="tile" href="labs/00-setup.html"><strong>Lab setup</strong><span>Create the Horizon Market sandbox stack</span></a>
        <a class="tile" href="checklists/acceptance.html"><strong>Acceptance pack</strong><span>Use on the first real project go-live</span></a>
        <a class="tile" href="issues/component-template-qa.html"><strong>Component / template issues</strong><span>41 real project defects when UAT-ing blocks and page templates</span></a>
        <a class="tile" href="paths.html"><strong>Full paths</strong><span>Copy-paste locations for every HTML file and the canvas</span></a>
      </div>
      <h2>How QA on Contentstack is different</h2>
      <p>Contentstack is a headless CMS. Editors create structured content. A website or app fetches published JSON and renders it. CMS preview is not the live site unless Live Preview is built.</p>
      <pre><code>Editor action in Contentstack
        ↓
Published JSON on CDA / GraphQL (per environment + locale)
        ↓
Frontend / app rendering + cache + personalization</code></pre>
      <h2>Recommended path</h2>
      <ol>
        <li><a href="summary.html">Training summary</a> — 30–40 minutes</li>
        <li>Modules 01–04 — about 1 day</li>
        <li>Labs 00–08 on a trial stack — 2–3 days</li>
        <li>Checklists on the first client project</li>
        <li><a href="issues/component-template-qa.html">Component / template QA issues</a> — use during template UAT</li>
      </ol>
      <h2>Horizon Market sandbox</h2>
      <table>
        <thead><tr><th>Item</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Stack</td><td><code>horizon-market-qa</code></td></tr>
          <tr><td>Environments</td><td><code>development</code>, <code>staging</code>, <code>production</code></td></tr>
          <tr><td>Locales</td><td><code>en-us</code> (master), <code>fr-fr</code>, <code>de-de</code></td></tr>
          <tr><td>Workflow</td><td>Draft → In Review → Approved → Published</td></tr>
          <tr><td>QA role</td><td>Read all content; publish to <code>staging</code> only</td></tr>
        </tbody>
      </table>
      <div class="callout warn">
        <strong>Token rule.</strong> Delivery token proves published site JSON. Preview token proves drafts.
        Management token is for writes only — never in the browser or a repo.
      </div>
      <h2>Full local paths</h2>
      <p>Double-click the launcher or paste a path into File Explorer / Chrome.</p>
      <p>HTML home</p>
      <div class="pathbox">${esc(HOME_PATH)}</div>
      <p>One-click launcher</p>
      <div class="pathbox">${esc(LAUNCHER_PATH)}</div>
      <p>Canvas (keep open beside chat in Cursor)</p>
      <div class="pathbox">${esc(CANVAS_PATH)}</div>
    </main>
  </div>
</body>
</html>
`;
}

fs.mkdirSync(path.join(HTML_DIR, "modules"), { recursive: true });
fs.mkdirSync(path.join(HTML_DIR, "labs"), { recursive: true });
fs.mkdirSync(path.join(HTML_DIR, "checklists"), { recursive: true });
fs.mkdirSync(path.join(HTML_DIR, "issues"), { recursive: true });

for (const page of PAGES) {
  const src = fs.readFileSync(path.join(ROOT, page[1]), "utf8");
  const body = mdToHtml(rewriteLinks(src, page[2]));
  const dest = path.join(HTML_DIR, page[2]);
  fs.writeFileSync(dest, wrap(page, body), "utf8");
  console.log("wrote", dest);
}

fs.writeFileSync(HOME_PATH, homeHtml(), "utf8");
console.log("wrote", HOME_PATH);

const allFiles = [
  ["Launcher (double-click this first)", LAUNCHER_PATH],
  ["HTML home", HOME_PATH],
  ["Training summary", path.join(HTML_DIR, "summary.html")],
  ["Module 01", path.join(HTML_DIR, "modules", "01-boundaries.html")],
  ["Module 02", path.join(HTML_DIR, "modules", "02-model-publish.html")],
  ["Module 03", path.join(HTML_DIR, "modules", "03-apis-releases.html")],
  ["Module 04", path.join(HTML_DIR, "modules", "04-qa-strategy.html")],
  ["Lab index", path.join(HTML_DIR, "labs", "index.html")],
  ["Lab 00 Setup", path.join(HTML_DIR, "labs", "00-setup.html")],
  ["Lab 01", path.join(HTML_DIR, "labs", "01-orientation.html")],
  ["Lab 02", path.join(HTML_DIR, "labs", "02-model-entry.html")],
  ["Lab 03", path.join(HTML_DIR, "labs", "03-publish.html")],
  ["Lab 04", path.join(HTML_DIR, "labs", "04-delivery-api.html")],
  ["Lab 05", path.join(HTML_DIR, "labs", "05-workflow-preview.html")],
  ["Lab 06", path.join(HTML_DIR, "labs", "06-localization.html")],
  ["Lab 07", path.join(HTML_DIR, "labs", "07-releases.html")],
  ["Lab 08", path.join(HTML_DIR, "labs", "08-defects.html")],
  ["Acceptance pack", path.join(HTML_DIR, "checklists", "acceptance.html")],
  ["Test cases", path.join(HTML_DIR, "checklists", "test-cases.html")],
  ["Defect taxonomy", path.join(HTML_DIR, "checklists", "defects.html")],
  ["Component / template issues", path.join(HTML_DIR, "issues", "component-template-qa.html")],
  ["Stylesheet", path.join(HTML_DIR, "assets", "app.css")],
  ["CMS screenshots folder", path.join(HTML_DIR, "assets", "screens")],
  ["Canvas (keep in Cursor)", CANVAS_PATH],
];

const pathsPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Full paths · Contentstack QA</title>
  <link rel="stylesheet" href="assets/app.css">
</head>
<body>
  <div class="layout">
    ${renderNav("home", "index.html")}
    <main class="main">
      <div class="crumb">Home / Full paths</div>
      <h1>Full paths — open without hunting</h1>
      <p class="meta">Paste any path into File Explorer, Chrome address bar, or Cursor Quick Open.</p>
      <div class="callout">
        Fastest start: double-click the launcher, or open the HTML home in Chrome.
      </div>
      ${allFiles
        .map(
          ([label, p]) =>
            `<h3>${esc(label)}</h3><div class="pathbox">${esc(p)}</div>`,
        )
        .join("\n")}
      <div class="pager">
        <a href="index.html">← Home</a>
        <a href="summary.html">Training summary →</a>
      </div>
    </main>
  </div>
</body>
</html>
`;
const pathsDest = path.join(HTML_DIR, "paths.html");
fs.writeFileSync(pathsDest, pathsPage, "utf8");
console.log("wrote", pathsDest);

fs.writeFileSync(
  LAUNCHER_PATH,
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=html/index.html">
  <title>Open Contentstack QA Training</title>
  <style>
    body { font-family: Segoe UI, sans-serif; padding: 48px; background: #f4f1ea; color: #1c1914; }
    a { color: #0f4c5c; }
    code { word-break: break-all; }
  </style>
</head>
<body>
  <h1>Contentstack QA tester training</h1>
  <p>If this page does not open automatically, use this link:</p>
  <p><a href="html/index.html">Open HTML training home</a></p>
  <p><code>${esc(HOME_PATH)}</code></p>
</body>
</html>
`,
  "utf8",
);
console.log("wrote", LAUNCHER_PATH);
