import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cmsVisualBody } from "./cms_visual.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HTML_DIR = path.join(ROOT, "html");
const HOME_PATH = path.join(HTML_DIR, "index.html");
const CANVAS_PATH =
  "C:\\Users\\nmirza.HZI\\.cursor\\projects\\c-Users-nmirza-HZI-OneDrive-Horizontal-Integration-Inc-Documents-CNE-GSE-Contentstack-Learning\\canvases\\qa-training-summary.canvas.tsx";
const LAUNCHER_PATH = path.join(ROOT, "Contentstack-QA-Training.html");

const NAV = [
  ["home", "Home", "index.html"],
  ["beginner", "Start here (pictures)", "beginner.html"],
  ["visual", "CMS screens (labeled)", "cms-visual.html"],
  ["paths", "Full paths", "paths.html"],
  ["summary", "Training summary", "summary.html"],
  ["group", "Modules"],
  ["m05", "05 · CMS visual guide", "modules/05-cms-visual.html"],
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
  ["beginner", "modules/00-beginner-visual-guide.md", "beginner.html", "Start here — pictures", "Home / Start here", ["index.html", "Home"], ["cms-visual.html", "CMS screens"]],
  ["m05", "modules/05-cms-visual-field-guide.md", "modules/05-cms-visual.html", "Module 05 — CMS visual guide", "Home / Modules / 05", ["cms-visual.html", "Labeled screens"], ["modules/01-boundaries.html", "Module 01"]],
  ["summary", "TRAINING-SUMMARY.md", "summary.html", "Training summary", "Home / Training summary", ["beginner.html", "Start here"], ["modules/01-boundaries.html", "Module 01"]],
  ["m01", "modules/01-headless-cms-and-contentstack.md", "modules/01-boundaries.html", "Module 01 — Boundaries", "Home / Modules / 01", ["beginner.html", "Start here"], ["modules/02-model-publish.html", "Module 02"]],
  ["m02", "modules/02-content-model-authoring-publish.md", "modules/02-model-publish.html", "Module 02 — Model and publish", "Home / Modules / 02", ["modules/01-boundaries.html", "Module 01"], ["modules/03-apis-releases.html", "Module 03"]],
  ["m03", "modules/03-apis-preview-releases.md", "modules/03-apis-releases.html", "Module 03 — APIs and releases", "Home / Modules / 03", ["modules/02-model-publish.html", "Module 02"], ["modules/04-qa-strategy.html", "Module 04"]],
  ["m04", "modules/04-qa-strategy-real-projects.md", "modules/04-qa-strategy.html", "Module 04 — QA strategy", "Home / Modules / 04", ["modules/03-apis-releases.html", "Module 03"], ["labs/00-setup.html", "Lab setup"]],
  ["labs", "labs/README.md", "labs/index.html", "Hands-on labs", "Home / Labs", ["modules/04-qa-strategy.html", "Module 04"], ["labs/00-setup.html", "Lab setup"]],
  ["l00", "labs/00-lab-setup.md", "labs/00-setup.html", "Lab 00 — Setup", "Home / Labs / 00", ["labs/index.html", "Lab index"], ["labs/01-orientation.html", "Lab 01"]],
  ["l01", "labs/lab-01-stack-orientation.md", "labs/01-orientation.html", "Lab 01 — Stack orientation", "Home / Labs / 01", ["labs/00-setup.html", "Lab setup"], ["labs/02-model-entry.html", "Lab 02"]],
  ["l02", "labs/lab-02-model-and-entry.md", "labs/02-model-entry.html", "Lab 02 — Model and entry", "Home / Labs / 02", ["labs/01-orientation.html", "Lab 01"], ["labs/03-publish.html", "Lab 03"]],
  ["l03", "labs/lab-03-environments-and-publish.md", "labs/03-publish.html", "Lab 03 — Publish", "Home / Labs / 03", ["labs/02-model-entry.html", "Lab 02"], ["labs/04-delivery-api.html", "Lab 04"]],
  ["l04", "labs/lab-04-delivery-api.md", "labs/04-delivery-api.html", "Lab 04 — Delivery API", "Home / Labs / 04", ["labs/03-publish.html", "Lab 03"], ["labs/05-workflow-preview.html", "Lab 05"]],
  ["l05", "labs/lab-05-workflow-roles-preview.md", "labs/05-workflow-preview.html", "Lab 05 — Workflow and preview", "Home / Labs / 05", ["labs/04-delivery-api.html", "Lab 04"], ["labs/06-localization.html", "Lab 06"]],
  ["l06", "labs/lab-06-localization.md", "labs/06-localization.html", "Lab 06 — Localization", "Home / Labs / 06", ["labs/05-workflow-preview.html", "Lab 05"], ["labs/07-releases.html", "Lab 07"]],
  ["l07", "labs/lab-07-releases-and-campaign.md", "labs/07-releases.html", "Lab 07 — Releases", "Home / Labs / 07", ["labs/06-localization.html", "Lab 06"], ["labs/08-defects.html", "Lab 08"]],
  ["l08", "labs/lab-08-regression-and-defects.md", "labs/08-defects.html", "Lab 08 — Defects", "Home / Labs / 08", ["labs/07-releases.html", "Lab 07"], ["checklists/acceptance.html", "Acceptance pack"]],
  ["acc", "checklists/qa-acceptance-pack.md", "checklists/acceptance.html", "Acceptance pack", "Home / Checklists / Acceptance", ["labs/08-defects.html", "Lab 08"], ["checklists/test-cases.html", "Test cases"]],
  ["tc", "checklists/sample-test-cases.md", "checklists/test-cases.html", "Sample test cases", "Home / Checklists / Test cases", ["checklists/acceptance.html", "Acceptance pack"], ["checklists/defects.html", "Defect taxonomy"]],
  ["def", "checklists/defect-taxonomy.md", "checklists/defects.html", "Defect taxonomy", "Home / Checklists / Defects", ["checklists/test-cases.html", "Test cases"], ["issues/component-template-qa.html", "Component issues"]],
  ["issues", "checklists/component-template-qa-issues.md", "issues/component-template-qa.html", "Component and template QA issues", "Home / Real project issues", ["checklists/defects.html", "Defect taxonomy"], ["index.html", "Home"]],
];

const LINK_MAP = [
  [/\.\/modules\/01-headless-cms-and-contentstack\.md/g, "modules/01-boundaries.html"],
  [/\.\/modules\/02-content-model-authoring-publish\.md/g, "modules/02-model-publish.html"],
  [/\.\/modules\/03-apis-preview-releases\.md/g, "modules/03-apis-releases.html"],
  [/\.\/modules\/04-qa-strategy-real-projects\.md/g, "modules/04-qa-strategy.html"],
  [/\.\/labs\/00-lab-setup\.md/g, "labs/00-setup.html"],
  [/\.\.\/labs\/00-lab-setup\.md/g, "labs/00-setup.html"],
  [/\.\.\/labs\/lab-01-stack-orientation\.md#knowledge-check-answers/g, "labs/01-orientation.html#knowledge-check-answers"],
  [/\.\.\/labs\/lab-01-stack-orientation\.md/g, "labs/01-orientation.html"],
  [/\.\/02-content-model-authoring-publish\.md/g, "modules/02-model-publish.html"],
  [/\.\/03-apis-preview-releases\.md/g, "modules/03-apis-releases.html"],
  [/\.\/04-qa-strategy-real-projects\.md/g, "modules/04-qa-strategy.html"],
  [/\.\/lab-01-stack-orientation\.md/g, "labs/01-orientation.html"],
  [/\.\/lab-02-model-and-entry\.md/g, "labs/02-model-entry.html"],
  [/\.\/lab-03-environments-and-publish\.md/g, "labs/03-publish.html"],
  [/\.\/lab-04-delivery-api\.md/g, "labs/04-delivery-api.html"],
  [/\.\/lab-05-workflow-roles-preview\.md/g, "labs/05-workflow-preview.html"],
  [/\.\/lab-06-localization\.md/g, "labs/06-localization.html"],
  [/\.\/lab-07-releases-and-campaign\.md/g, "labs/07-releases.html"],
  [/\.\/lab-08-regression-and-defects\.md/g, "labs/08-defects.html"],
  [/\.\.\/checklists\/qa-acceptance-pack\.md/g, "checklists/acceptance.html"],
  [/\.\.\/checklists\/defect-taxonomy\.md/g, "checklists/defects.html"],
  [/\.\/defect-taxonomy\.md/g, "checklists/defects.html"],
  [/\.\/sample-test-cases\.md/g, "checklists/test-cases.html"],
  [/\.\.\/labs\/lab-08-regression-and-defects\.md/g, "labs/08-defects.html"],
  [/\.\.\/TRAINING-SUMMARY\.md/g, "summary.html"],
  [/\.\/TRAINING-SUMMARY\.md/g, "summary.html"],
  [/\.\/01-headless-cms-and-contentstack\.md/g, "modules/01-boundaries.html"],
  [/\.\/00-lab-setup\.md/g, "labs/00-setup.html"],
  [/\.\.\/modules\/00-beginner-visual-guide\.md/g, "beginner.html"],
  [/\.\/05-cms-visual-field-guide\.md/g, "modules/05-cms-visual.html"],
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
  return text
    .replace(/\(screens\//g, "(assets/screens/")
    .replace(/\(diagrams\//g, "(assets/diagrams/")
    .replace(/\(official\//g, "(assets/official/");
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

const SITE_BRAND = {
  name: "Nida Mirza",
  headline:
    "QA Engineer | Manual & Automation Testing | Selenium | API & Performance Testing | AI-Assisted QA",
  tagline:
    "ISTQB-certified QA Engineer · Manual & Automation · AI-Assisted QA",
  email: "mirzanida58@gmail.com",
  github: "https://github.com/nidamirza9",
  about: "about.html",
  linkedin: "https://www.linkedin.com/in/nida-mirza/",
  portfolio: "https://nidamirza9.github.io/nidaportfolio/",
  motto: "Empowering QA professionals through Contentstack & testing knowledge",
};

const VERIFY_SCRIPT = `<script>
(function () {
  // #region agent log
  function send(hypothesisId, message, data) {
    fetch("http://127.0.0.1:7875/ingest/75a583e4-9943-4931-8a1b-f2e9dd49713f", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "ac4729" },
      body: JSON.stringify({
        sessionId: "ac4729",
        runId: "about-resume-test",
        hypothesisId: hypothesisId,
        location: location.pathname,
        message: message,
        data: data,
        timestamp: Date.now(),
      }),
    }).catch(function () {});
  }
  // #endregion
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  window.addEventListener("load", function () {
    var pager = document.querySelector(".pager");
    var links = pager ? Array.prototype.map.call(pager.querySelectorAll("a"), function (a) {
      return { text: (a.textContent || "").trim(), href: a.getAttribute("href"), abs: a.href };
    }) : [];
    var header = document.querySelector(".site-header");
    var footer = document.querySelector(".site-footer");
    var logoWrap = document.querySelector(".footer-logo-wrap");
    var logo = document.querySelector(".footer-logo");
    var brandText = document.querySelector(".footer-brand-text");
    var footerAlign = null;
    if (logoWrap && brandText && logo) {
      var lr = logoWrap.getBoundingClientRect();
      var tr = brandText.getBoundingClientRect();
      footerAlign = {
        hasWrap: true,
        deltaCenterY: (lr.top + lr.height / 2) - (tr.top + tr.height / 2),
        flexDirection: getComputedStyle(logoWrap.parentElement).flexDirection,
        transform: getComputedStyle(logo).transform,
      };
    }
    var activeNav = document.querySelector(".nav a.active");
    var mainEl = document.querySelector(".main");
    var layoutEl = document.querySelector(".layout");
    var mainBox = mainEl ? mainEl.getBoundingClientRect() : null;
    var layoutBox = layoutEl ? layoutEl.getBoundingClientRect() : null;
    var mainCs = mainEl ? getComputedStyle(mainEl) : null;
    var headerLinks = header
      ? Array.prototype.map.call(header.querySelectorAll(".header-links a"), function (a) {
          return (a.textContent || "").trim().replace(/\\s+/g, " ");
        })
      : [];
    var favicon = document.querySelector('link[rel="icon"]');
    var aboutMarkers = {
      hasHeadline: !!document.querySelector(".about-headline"),
      hasSummary: !!document.querySelector("#professional-summary"),
      hasExperience: !!document.querySelector("#experience"),
      hasProjects: !!document.querySelector("#projects"),
      hasSkills: !!document.querySelector("#skills"),
      email: (document.querySelector('a[href^="mailto:"]') || {}).href || null,
    };
    // #region agent log
    send("A1", "about-resume-check", {
      href: location.href,
      headerLinks: headerLinks,
      faviconHref: favicon ? favicon.getAttribute("href") : null,
      aboutMarkers: aboutMarkers,
      hasHeader: !!header,
      hasFooter: !!footer,
      footerAlign: footerAlign,
      activeNav: activeNav
        ? { text: (activeNav.textContent || "").trim(), href: activeNav.getAttribute("href") }
        : null,
      pagerLeft: links[0] || null,
      pagerRight: links[1] || null,
      main: mainBox && mainCs
        ? {
            width: Math.round(mainBox.width),
            maxWidth: mainCs.maxWidth,
            paddingRight: mainCs.paddingRight,
            rightGutter: layoutBox ? Math.round(layoutBox.right - mainBox.right) : null,
          }
        : null,
      viewport: { w: window.innerWidth, h: window.innerHeight },
      navOpen: !!(nav && nav.classList.contains("is-open")),
    });
    // #endregion
  });
})();
</script>`;

function depthPrefix(dest) {
  const parts = String(dest || "")
    .replace(/\\/g, "/")
    .split("/")
    .filter(Boolean);
  const depth = Math.max(0, parts.length - 1);
  return "../".repeat(depth);
}

function cssHref(dest) {
  return `${depthPrefix(dest)}assets/app.css`;
}

function rootHref(dest, target) {
  if (!target) return target;
  if (/^(https?:|\/\/|#|mailto:)/i.test(target)) return target;
  const cleaned = target.replace(/^\.\//, "").replace(/^(\.\.\/)+/, "");
  return `${depthPrefix(dest)}${cleaned}`;
}

/** Prefix root-relative href/src so nested pages work without relying on <base>. */
function prefixRootRefs(html, dest) {
  const p = depthPrefix(dest);
  if (!p) return html;
  return html.replace(/(href|src)="([^"]+)"/g, (full, attr, url) => {
    if (/^(https?:|\/\/|#|mailto:|data:)/i.test(url)) return full;
    if (url.startsWith("../") || url.startsWith("/")) return full;
    return `${attr}="${p}${url}"`;
  });
}

function faviconLinks(dest) {
  const icon = `${depthPrefix(dest)}assets/brand/nida-logo.png`;
  return `<link rel="icon" href="${icon}" type="image/png" sizes="32x32">
  <link rel="icon" href="${icon}" type="image/png" sizes="192x192">
  <link rel="apple-touch-icon" href="${icon}">`;
}

function siteHeader(dest) {
  const prefix = depthPrefix(dest);
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="header-inner">
    <a class="header-brand" href="${prefix}index.html">
      <span class="header-logo-wrap"><img src="${prefix}assets/brand/nida-logo.png" alt="" width="44" height="44"></span>
      <span>
        <strong>Contentstack QA Training</strong>
        <em>by ${esc(SITE_BRAND.name)} · ISTQB Certified</em>
      </span>
    </a>
    <nav class="header-links" aria-label="Quick access">
      <a href="${prefix}summary.html">Summary</a>
      <a href="${prefix}about.html">About Me</a>
      <a class="header-ext" href="${SITE_BRAND.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </nav>
  </div>
</header>`;
}

function siteFooter(dest) {
  const prefix = depthPrefix(dest);
  return `<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="footer-logo-wrap"><img class="footer-logo" src="${prefix}assets/brand/nida-logo.png" alt="Nida Mirza logo" width="56" height="56"></span>
      <div class="footer-brand-text">
        <strong>${esc(SITE_BRAND.name)}</strong>
        <p>${esc(SITE_BRAND.tagline)}</p>
      </div>
    </div>
    <nav class="footer-links" aria-label="Author links">
      <a href="${prefix}about.html">About Me</a>
      <a href="${SITE_BRAND.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="${SITE_BRAND.portfolio}" target="_blank" rel="noopener noreferrer">Portfolio</a>
      <a href="${SITE_BRAND.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
    <p class="footer-copy">© 2026 ${esc(SITE_BRAND.name)}. All rights reserved. | ${esc(SITE_BRAND.motto)}</p>
  </div>
</footer>`;
}

function renderNav(active, dest) {
  const prefix = depthPrefix(dest);
  const items = [
    `<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Course menu</button>`,
    `<nav class="nav" id="site-nav">`,
    `<div class="nav-title">Course outline</div>`,
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
  ${faviconLinks(dest)}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${cssHref(dest)}">
</head>
<body>
  ${siteHeader(dest)}
  <div class="layout">
    ${renderNav(id, dest)}
    <main class="main" id="main">
      <div class="crumb">${esc(crumb)}</div>
      ${prefixRootRefs(body, dest)}
      <div class="pager">
        <a href="${rootHref(dest, prev[0])}">← ${esc(prev[1])}</a>
        <a href="${rootHref(dest, next[0])}">${esc(next[1])} →</a>
      </div>
    </main>
  </div>
  ${siteFooter(dest)}
  ${VERIFY_SCRIPT}
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
  ${faviconLinks("index.html")}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/app.css">
</head>
<body>
  ${siteHeader("index.html")}
  <div class="layout">
    ${renderNav("home", "index.html")}
    <main class="main" id="main">
      <section class="hero">
        <p class="eyebrow">Hands-on Contentstack training for QA</p>
        <h1>Contentstack QA tester training</h1>
        <p class="meta">Learn the real CMS UI, prove content on Delivery API, then sign off the website. Built by ${esc(SITE_BRAND.name)} for Horizon Market labs.</p>
        <div class="hero-actions">
          <a class="btn primary" href="cms-visual.html">Open CMS screens</a>
          <a class="btn" href="beginner.html">Start here (pictures)</a>
          <a class="btn" href="labs/00-setup.html">Lab setup</a>
        </div>
      </section>
      <div class="quick-strip" aria-label="Quick access">
        <a href="cms-visual.html"><strong>CMS screens</strong><span>Labeled fields &amp; dashboard</span></a>
        <a href="beginner.html"><strong>Beginner guide</strong><span>Simple pictures first</span></a>
        <a href="modules/01-boundaries.html"><strong>Module 01</strong><span>CMS / API / app layers</span></a>
        <a href="issues/component-template-qa.html"><strong>41 defects</strong><span>Component / template UAT</span></a>
      </div>
      <div class="layers" aria-label="Three QA layers">
        <div class="layer a"><span>Layer A</span><strong>CMS</strong><em>Editor fills a form and publishes</em></div>
        <div class="layer b"><span>Layer B</span><strong>API (JSON)</strong><em>Published to one environment + locale</em></div>
        <div class="layer c"><span>Layer C</span><strong>Website / app</strong><em>Renders that JSON after cache</em></div>
      </div>
      <p class="meta">A bug can sit in any box. Check all three.</p>
      <figure class="shot labeled">
        <div class="shot-frame">
          <img src="assets/official/entries-list.png" alt="Official Contentstack Entries list — QA dashboard">
          <span class="pin" style="left:16%;top:5%">1</span>
          <span class="pin" style="left:84%;top:12%">2</span>
          <span class="pin" style="left:16%;top:42%">3</span>
          <span class="pin" style="left:76%;top:42%">4</span>
        </div>
        <ol class="legend">
          <li><b>1.</b> <strong>Entries</strong> — this is the content dashboard (not the marketing Dashboard).</li>
          <li><b>2.</b> <strong>Language</strong> — locale you are viewing (<code>en-us</code> ≠ <code>fr-fr</code>).</li>
          <li><b>3.</b> <strong>Title + Entry ID</strong> — copy the <code>blt…</code> id for CDA.</li>
          <li><b>4.</b> <strong>Publish Status</strong> — which environments are live. Draft is not published.</li>
        </ol>
      </figure>
      <div class="card-row">
        <div class="stat"><b>4 days</b><span>Concept + labs</span></div>
        <div class="stat"><b>8 labs</b><span>On a real stack</span></div>
        <div class="stat"><b>3 layers</b><span>CMS / API / app</span></div>
        <div class="stat"><b>30 cases</b><span>Reusable test IDs</span></div>
      </div>
      <div class="callout">
        <strong>New to Contentstack?</strong> Open <a href="cms-visual.html">CMS screens (labeled)</a> to learn every field and button on the real UI.
        Then <a href="beginner.html">Start here (pictures)</a>. Do not skip API labs.
      </div>
      <h2>Open these pages</h2>
      <div class="tile-grid">
        <a class="tile" href="cms-visual.html"><strong>CMS screens (labeled)</strong><span>Official Contentstack UI — fields, content model, dashboard, publish</span></a>
        <a class="tile" href="beginner.html"><strong>Start here (pictures)</strong><span>Simple diagrams for new learners — read this first</span></a>
        <a class="tile" href="summary.html"><strong>Training summary</strong><span>Outcomes, ownership, syllabus, definition of done</span></a>
        <a class="tile" href="modules/01-boundaries.html"><strong>Module 01</strong><span>Headless CMS and Contentstack boundaries</span></a>
        <a class="tile" href="labs/00-setup.html"><strong>Lab setup</strong><span>Create the Horizon Market sandbox stack</span></a>
        <a class="tile" href="checklists/acceptance.html"><strong>Acceptance pack</strong><span>Use on the first real project go-live</span></a>
        <a class="tile" href="issues/component-template-qa.html"><strong>Component / template issues</strong><span>41 real project defects when UAT-ing blocks and page templates</span></a>
        <a class="tile" href="paths.html"><strong>Full paths</strong><span>Copy-paste locations for every HTML file and the canvas</span></a>
      </div>
      <h2>How QA on Contentstack is different</h2>
      <p>Editors type in Contentstack. The website is a separate app that fetches JSON. A perfect CMS screen can still fail on the live site.</p>
      <figure class="shot"><img src="assets/diagrams/headless.svg" alt="Coupled vs headless"></figure>
      <figure class="shot"><img src="assets/diagrams/save-vs-publish.svg" alt="Save versus publish"></figure>
      <h2>Recommended path</h2>
      <ol>
        <li><a href="cms-visual.html">CMS screens (labeled)</a> — learn the real UI first</li>
        <li><a href="summary.html">Training summary</a> — 30–40 minutes</li>
        <li>Modules 01–05 — about 1 day</li>
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
  ${siteFooter("index.html")}
  ${VERIFY_SCRIPT}
</body>
</html>
`;
}

function cmsVisualHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CMS screens (labeled) · Contentstack QA</title>
  ${faviconLinks("cms-visual.html")}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/app.css">
</head>
<body>
  ${siteHeader("cms-visual.html")}
  <div class="layout">
    ${renderNav("visual", "cms-visual.html")}
    <main class="main" id="main">
      ${cmsVisualBody()}
      <div class="pager">
        <a href="beginner.html">← Start here (pictures)</a>
        <a href="paths.html">Full paths →</a>
      </div>
    </main>
  </div>
  ${siteFooter("cms-visual.html")}
  ${VERIFY_SCRIPT}
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
const visualDest = path.join(HTML_DIR, "cms-visual.html");
fs.writeFileSync(visualDest, cmsVisualHtml(), "utf8");
console.log("wrote", visualDest);

const allFiles = [
  ["Launcher (double-click this first)", LAUNCHER_PATH],
  ["HTML home", HOME_PATH],
  ["CMS visual guide (labeled)", path.join(HTML_DIR, "cms-visual.html")],
  ["Training summary", path.join(HTML_DIR, "summary.html")],
  ["Module 01", path.join(HTML_DIR, "modules", "01-boundaries.html")],
  ["Module 05 CMS visual", path.join(HTML_DIR, "modules", "05-cms-visual.html")],
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
  ["Official Contentstack screenshots", path.join(HTML_DIR, "assets", "official")],
  ["Canvas (keep in Cursor)", CANVAS_PATH],
];

const pathsPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Full paths · Contentstack QA</title>
  ${faviconLinks("paths.html")}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/app.css">
</head>
<body>
  ${siteHeader("paths.html")}
  <div class="layout">
    ${renderNav("paths", "paths.html")}
    <main class="main" id="main">
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
  ${siteFooter("paths.html")}
  ${VERIFY_SCRIPT}
</body>
</html>
`;
const pathsDest = path.join(HTML_DIR, "paths.html");
fs.writeFileSync(pathsDest, pathsPage, "utf8");
console.log("wrote", pathsDest);

function aboutHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Me · ${esc(SITE_BRAND.name)}</title>
  ${faviconLinks("about.html")}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/app.css">
</head>
<body>
  ${siteHeader("about.html")}
  <div class="layout">
    ${renderNav("home", "about.html")}
    <main class="main about-page" id="main">
      <section class="about-hero">
        <p class="eyebrow">About Me</p>
        <h1>${esc(SITE_BRAND.name)}</h1>
        <p class="about-headline">${esc(SITE_BRAND.headline)}</p>
        <div class="about-contacts">
          <a href="mailto:${esc(SITE_BRAND.email)}">${esc(SITE_BRAND.email)}</a>
          <a href="${SITE_BRAND.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="${SITE_BRAND.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="${SITE_BRAND.portfolio}" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>
      </section>

      <section id="professional-summary" class="resume-section">
        <h2>Professional summary</h2>
        <p>ISTQB-certified QA Engineer with 4.5+ years testing scalable, user-facing web applications in Agile/Scrum environments for global clients across the US, UK, and UAE. Skilled in manual, API, cross-browser, accessibility (WCAG), and performance testing, with hands-on automation using Selenium WebDriver and TestNG and load testing using Apache JMeter.</p>
        <p>Builds custom QA tools with Claude AI and Cursor to speed up testing and improve accuracy — with a track record of cutting regression cycles and post-release defects. Using AI tools has helped reduce workload by 25% and fasten testing processes.</p>
      </section>

      <section id="experience" class="resume-section">
        <h2>Professional experience</h2>
        <article class="job">
          <header>
            <h3>QA Engineer — Horizontal Digital</h3>
            <p class="job-dates">Jan 2024 – Present</p>
          </header>
          <ul>
            <li>Collaborate within Agile teams on requirement reviews, sprint planning, and retrospectives to align on deliverables.</li>
            <li>Execute end-to-end website QA, identifying and documenting defects using industry-standard bug tracking tools.</li>
            <li>Introduced Selenium WebDriver automation, reducing regression testing time by 20%.</li>
            <li>Led 10+ training programs upskilling the team on QA best practices, while partnering directly with clients across the US, UAE, and UK.</li>
          </ul>
        </article>
        <article class="job">
          <header>
            <h3>Associate QA Engineer — Horizontal Digital</h3>
            <p class="job-dates">Jun 2022 – Dec 2023</p>
          </header>
          <ul>
            <li>Performed manual and automated testing (functional, regression, UI, cross-browser) for large-scale projects, including Cadence Bank.</li>
            <li>Led WCAG accessibility testing and Sitecore personalization testing to improve compliance and user experience.</li>
            <li>Logged 100+ defects in JIRA, contributing to a 15% reduction in post-release bugs.</li>
          </ul>
        </article>
        <article class="job">
          <header>
            <h3>QA Intern — Horizontal Digital</h3>
            <p class="job-dates">Jan 2022 – Jun 2022</p>
          </header>
          <ul>
            <li>Supported manual testing, defect tracking, and test documentation using JIRA and QMetry.</li>
          </ul>
        </article>
      </section>

      <section id="projects" class="resume-section">
        <h2>Projects</h2>
        <article class="job">
          <header>
            <h3>Tutorials Ninja E-Commerce — Hybrid Automation Framework</h3>
            <p class="job-dates">Java · Selenium WebDriver · TestNG · Maven</p>
          </header>
          <p class="project-link"><a href="https://github.com/nidamirza9/tutorialsninjaHybridFramework" target="_blank" rel="noopener noreferrer">github.com/nidamirza9/tutorialsninjaHybridFramework</a></p>
          <ul>
            <li>Built a hybrid automation framework using the Page Object Model with a shared Base Class for WebDriver setup.</li>
            <li>Added data-driven and cross-browser testing (Chrome, Firefox, Edge), with Extent Reports and Log4j for reporting.</li>
          </ul>
        </article>
        <article class="job">
          <header>
            <h3>AI-Powered QA Extensions — Built with Claude AI &amp; Cursor</h3>
          </header>
          <ul>
            <li><strong>Redirection Testing Extension</strong> — flags broken links and unexpected redirects. <a href="https://github.com/nidamirza9/404-finder-extension" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><strong>SEO Testing Extension</strong> — audits titles, meta descriptions, and tags. <a href="https://github.com/nidamirza9/seo-meta-extension" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><strong>UI Validator &amp; Content Comparator</strong> — compares UI and content across builds. <a href="https://github.com/nidamirza9/ui-compare-extension" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><strong>AI-Assisted Automation Demo</strong> — AI-assisted test script generation and code review in Cursor. <a href="https://github.com/nidamirza9/ai-cursor-demo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </article>
      </section>

      <section id="skills" class="resume-section">
        <h2>Core skills</h2>
        <div class="skills-grid">
          <div>
            <h3>Testing</h3>
            <p>Manual, Regression, Smoke &amp; Sanity, Functional, End-to-End, UAT, Cross-Browser, Cross-Platform (BrowserStack &amp; LambdaTest)</p>
          </div>
          <div>
            <h3>Automation &amp; API</h3>
            <p>Selenium WebDriver, TestNG, Maven, Page Object Model (POM), Data-Driven Testing, Postman</p>
          </div>
          <div>
            <h3>Performance &amp; AI tools</h3>
            <p>Apache JMeter, Claude AI, Cursor</p>
          </div>
          <div>
            <h3>QA tools &amp; languages</h3>
            <p>JIRA, Confluence, QMetry, Sitecore CMS, Contentstack, Git, Jenkins, Java, Python, HTML/CSS/JavaScript</p>
          </div>
          <div>
            <h3>Practices</h3>
            <p>Agile/Scrum, Test Case Design, Defect Management, Accessibility (WCAG), A/B Testing (CRO)</p>
          </div>
        </div>
      </section>

      <section id="education" class="resume-section">
        <h2>Education, certifications &amp; achievements</h2>
        <p><strong>Computer Engineering (BE)</strong> — Madhuben &amp; Bhanubhai Patel Institute of Technology · 2018–2022 · CGPA: 9.02/10</p>
        <p>ISTQB Foundation Level · Python for Data Science (University of Michigan, Coursera) · Java Certification (HackerRank) · Generative AI (Google)</p>
        <ul>
          <li>“Raise the BAR Award” for defect identification and mentoring excellence</li>
          <li>Mentored 20+ ISTQB aspirants with a 100% first-attempt pass rate</li>
        </ul>
      </section>

      <div class="pager">
        <a href="index.html">← Home</a>
        <a href="summary.html">Training summary →</a>
      </div>
    </main>
  </div>
  ${siteFooter("about.html")}
  ${VERIFY_SCRIPT}
</body>
</html>
`;
}

const aboutDest = path.join(HTML_DIR, "about.html");
fs.writeFileSync(aboutDest, aboutHtml(), "utf8");
console.log("wrote", aboutDest);

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
