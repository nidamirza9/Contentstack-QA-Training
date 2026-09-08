"""Build offline HTML training pages from markdown sources."""
from __future__ import annotations

import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML_DIR = ROOT / "html"

NAV = [
    ("home", "Home", "index.html"),
    ("summary", "Training summary", "summary.html"),
    None,
    ("group", "Modules"),
    ("m01", "01 · Boundaries", "modules/01-boundaries.html"),
    ("m02", "02 · Model & publish", "modules/02-model-publish.html"),
    ("m03", "03 · APIs & releases", "modules/03-apis-releases.html"),
    ("m04", "04 · QA strategy", "modules/04-qa-strategy.html"),
    None,
    ("group", "Labs"),
    ("labs", "Lab index", "labs/index.html"),
    ("l00", "00 · Setup", "labs/00-setup.html"),
    ("l01", "01 · Stack orientation", "labs/01-orientation.html"),
    ("l02", "02 · Model and entry", "labs/02-model-entry.html"),
    ("l03", "03 · Publish", "labs/03-publish.html"),
    ("l04", "04 · Delivery API", "labs/04-delivery-api.html"),
    ("l05", "05 · Workflow & preview", "labs/05-workflow-preview.html"),
    ("l06", "06 · Localization", "labs/06-localization.html"),
    ("l07", "07 · Releases", "labs/07-releases.html"),
    ("l08", "08 · Defects", "labs/08-defects.html"),
    None,
    ("group", "Checklists"),
    ("acc", "Acceptance pack", "checklists/acceptance.html"),
    ("tc", "Sample test cases", "checklists/test-cases.html"),
    ("def", "Defect taxonomy", "checklists/defects.html"),
]

PAGES = [
    {
        "id": "summary",
        "src": "TRAINING-SUMMARY.md",
        "dest": "summary.html",
        "title": "Training summary",
        "crumb": "Home / Training summary",
        "prev": ("index.html", "Home"),
        "next": ("modules/01-boundaries.html", "Module 01"),
    },
    {
        "id": "m01",
        "src": "modules/01-headless-cms-and-contentstack.md",
        "dest": "modules/01-boundaries.html",
        "title": "Module 01 — Boundaries",
        "crumb": "Home / Modules / 01",
        "prev": ("../summary.html", "Training summary"),
        "next": ("02-model-publish.html", "Module 02"),
    },
    {
        "id": "m02",
        "src": "modules/02-content-model-authoring-publish.md",
        "dest": "modules/02-model-publish.html",
        "title": "Module 02 — Model and publish",
        "crumb": "Home / Modules / 02",
        "prev": ("01-boundaries.html", "Module 01"),
        "next": ("03-apis-releases.html", "Module 03"),
    },
    {
        "id": "m03",
        "src": "modules/03-apis-preview-releases.md",
        "dest": "modules/03-apis-releases.html",
        "title": "Module 03 — APIs and releases",
        "crumb": "Home / Modules / 03",
        "prev": ("02-model-publish.html", "Module 02"),
        "next": ("04-qa-strategy.html", "Module 04"),
    },
    {
        "id": "m04",
        "src": "modules/04-qa-strategy-real-projects.md",
        "dest": "modules/04-qa-strategy.html",
        "title": "Module 04 — QA strategy",
        "crumb": "Home / Modules / 04",
        "prev": ("03-apis-releases.html", "Module 03"),
        "next": ("../labs/00-setup.html", "Lab setup"),
    },
    {
        "id": "labs",
        "src": "labs/README.md",
        "dest": "labs/index.html",
        "title": "Hands-on labs",
        "crumb": "Home / Labs",
        "prev": ("../modules/04-qa-strategy.html", "Module 04"),
        "next": ("00-setup.html", "Lab setup"),
    },
    {
        "id": "l00",
        "src": "labs/00-lab-setup.md",
        "dest": "labs/00-setup.html",
        "title": "Lab 00 — Setup",
        "crumb": "Home / Labs / 00",
        "prev": ("index.html", "Lab index"),
        "next": ("01-orientation.html", "Lab 01"),
    },
    {
        "id": "l01",
        "src": "labs/lab-01-stack-orientation.md",
        "dest": "labs/01-orientation.html",
        "title": "Lab 01 — Stack orientation",
        "crumb": "Home / Labs / 01",
        "prev": ("00-setup.html", "Lab setup"),
        "next": ("02-model-entry.html", "Lab 02"),
    },
    {
        "id": "l02",
        "src": "labs/lab-02-model-and-entry.md",
        "dest": "labs/02-model-entry.html",
        "title": "Lab 02 — Model and entry",
        "crumb": "Home / Labs / 02",
        "prev": ("01-orientation.html", "Lab 01"),
        "next": ("03-publish.html", "Lab 03"),
    },
    {
        "id": "l03",
        "src": "labs/lab-03-environments-and-publish.md",
        "dest": "labs/03-publish.html",
        "title": "Lab 03 — Publish",
        "crumb": "Home / Labs / 03",
        "prev": ("02-model-entry.html", "Lab 02"),
        "next": ("04-delivery-api.html", "Lab 04"),
    },
    {
        "id": "l04",
        "src": "labs/lab-04-delivery-api.md",
        "dest": "labs/04-delivery-api.html",
        "title": "Lab 04 — Delivery API",
        "crumb": "Home / Labs / 04",
        "prev": ("03-publish.html", "Lab 03"),
        "next": ("05-workflow-preview.html", "Lab 05"),
    },
    {
        "id": "l05",
        "src": "labs/lab-05-workflow-roles-preview.md",
        "dest": "labs/05-workflow-preview.html",
        "title": "Lab 05 — Workflow and preview",
        "crumb": "Home / Labs / 05",
        "prev": ("04-delivery-api.html", "Lab 04"),
        "next": ("06-localization.html", "Lab 06"),
    },
    {
        "id": "l06",
        "src": "labs/lab-06-localization.md",
        "dest": "labs/06-localization.html",
        "title": "Lab 06 — Localization",
        "crumb": "Home / Labs / 06",
        "prev": ("05-workflow-preview.html", "Lab 05"),
        "next": ("07-releases.html", "Lab 07"),
    },
    {
        "id": "l07",
        "src": "labs/lab-07-releases-and-campaign.md",
        "dest": "labs/07-releases.html",
        "title": "Lab 07 — Releases",
        "crumb": "Home / Labs / 07",
        "prev": ("06-localization.html", "Lab 06"),
        "next": ("08-defects.html", "Lab 08"),
    },
    {
        "id": "l08",
        "src": "labs/lab-08-regression-and-defects.md",
        "dest": "labs/08-defects.html",
        "title": "Lab 08 — Defects",
        "crumb": "Home / Labs / 08",
        "prev": ("07-releases.html", "Lab 07"),
        "next": ("../checklists/acceptance.html", "Acceptance pack"),
    },
    {
        "id": "acc",
        "src": "checklists/qa-acceptance-pack.md",
        "dest": "checklists/acceptance.html",
        "title": "Acceptance pack",
        "crumb": "Home / Checklists / Acceptance",
        "prev": ("../labs/08-defects.html", "Lab 08"),
        "next": ("test-cases.html", "Test cases"),
    },
    {
        "id": "tc",
        "src": "checklists/sample-test-cases.md",
        "dest": "checklists/test-cases.html",
        "title": "Sample test cases",
        "crumb": "Home / Checklists / Test cases",
        "prev": ("acceptance.html", "Acceptance pack"),
        "next": ("defects.html", "Defect taxonomy"),
    },
    {
        "id": "def",
        "src": "checklists/defect-taxonomy.md",
        "dest": "checklists/defects.html",
        "title": "Defect taxonomy",
        "crumb": "Home / Checklists / Defects",
        "prev": ("test-cases.html", "Test cases"),
        "next": ("../index.html", "Home"),
    },
]

MD_HREF = [
    (r"\./modules/01-headless-cms-and-contentstack\.md", "modules/01-boundaries.html"),
    (r"\./modules/02-content-model-authoring-publish\.md", "modules/02-model-publish.html"),
    (r"\./modules/03-apis-preview-releases\.md", "modules/03-apis-releases.html"),
    (r"\./modules/04-qa-strategy-real-projects\.md", "modules/04-qa-strategy.html"),
    (r"\./labs/00-lab-setup\.md", "labs/00-setup.html"),
    (r"\./labs/lab-01-stack-orientation\.md", "labs/01-orientation.html"),
    (r"\./labs/lab-08-regression-and-defects\.md", "labs/08-defects.html"),
    (r"\./TRAINING-SUMMARY\.md", "summary.html"),
    (r"\./checklists/", "checklists/"),
    (r"\.\./labs/00-lab-setup\.md", "../labs/00-setup.html"),
    (r"\.\./labs/lab-01-stack-orientation\.md", "01-orientation.html"),
    (r"\./02-content-model-authoring-publish\.md", "02-model-publish.html"),
    (r"\./03-apis-preview-releases\.md", "03-apis-releases.html"),
    (r"\./04-qa-strategy-real-projects\.md", "04-qa-strategy.html"),
    (r"\.\./labs/lab-01-stack-orientation\.md#knowledge-check-answers", "../labs/01-orientation.html#knowledge-check-answers"),
    (r"\./lab-01-stack-orientation\.md", "01-orientation.html"),
    (r"\./lab-02-model-and-entry\.md", "02-model-entry.html"),
    (r"\./lab-03-environments-and-publish\.md", "03-publish.html"),
    (r"\./lab-04-delivery-api\.md", "04-delivery-api.html"),
    (r"\./lab-05-workflow-roles-preview\.md", "05-workflow-preview.html"),
    (r"\./lab-06-localization\.md", "06-localization.html"),
    (r"\./lab-07-releases-and-campaign\.md", "07-releases.html"),
    (r"\./lab-08-regression-and-defects\.md", "08-defects.html"),
    (r"\.\./checklists/qa-acceptance-pack\.md", "../checklists/acceptance.html"),
    (r"\.\./checklists/defect-taxonomy\.md", "../checklists/defects.html"),
    (r"\.\./TRAINING-SUMMARY\.md", "../summary.html"),
    (r"\.\./checklists/", "../checklists/"),
    (r"\./00-lab-setup\.md", "00-setup.html"),
]


def rewrite_md_links(text: str, dest: str) -> str:
    for pattern, target in MD_HREF:
        text = re.sub(pattern, target, text)
    if dest.startswith("modules/") or dest.startswith("labs/") or dest.startswith("checklists/"):
        text = text.replace("](modules/", "](../modules/")
        text = text.replace("](labs/", "](../labs/")
        if dest.startswith("checklists/"):
            pass
        elif dest.startswith("labs/"):
            text = text.replace("](checklists/", "](../checklists/")
            text = text.replace("](summary.html)", "](../summary.html)")
        elif dest.startswith("modules/"):
            text = text.replace("](labs/", "](../labs/")
            text = text.replace("](checklists/", "](../checklists/")
    return text


def inline(text: str) -> str:
    text = html.escape(text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', text)
    return text


def md_to_html(md: str) -> str:
    lines = md.replace("\r\n", "\n").split("\n")
    out: list[str] = []
    i = 0
    in_ul = False
    in_ol = False

    def close_lists() -> None:
        nonlocal in_ul, in_ol
        if in_ul:
            out.append("</ul>")
            in_ul = False
        if in_ol:
            out.append("</ol>")
            in_ol = False

    while i < len(lines):
        line = lines[i]
        if line.startswith("```"):
            close_lists()
            fence: list[str] = []
            i += 1
            while i < len(lines) and not lines[i].startswith("```"):
                fence.append(lines[i])
                i += 1
            i += 1
            out.append("<pre><code>" + html.escape("\n".join(fence)) + "</code></pre>")
            continue
        if re.match(r"^\|.+\|$", line) and i + 1 < len(lines) and re.match(r"^\|[\s:|-]+\|$", lines[i + 1]):
            close_lists()
            headers = [c.strip() for c in line.strip("|").split("|")]
            i += 2
            rows: list[list[str]] = []
            while i < len(lines) and re.match(r"^\|.+\|$", lines[i]):
                rows.append([c.strip() for c in lines[i].strip("|").split("|")])
                i += 1
            thead = "".join(f"<th>{inline(h)}</th>" for h in headers)
            body = []
            for row in rows:
                body.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in row) + "</tr>")
            out.append(f"<table><thead><tr>{thead}</tr></thead><tbody>{''.join(body)}</tbody></table>")
            continue
        if line.startswith("# "):
            close_lists()
            out.append(f"<h1>{inline(line[2:])}</h1>")
        elif line.startswith("## "):
            close_lists()
            slug = re.sub(r"[^a-z0-9]+", "-", line[3:].lower()).strip("-")
            out.append(f'<h2 id="{slug}">{inline(line[3:])}</h2>')
        elif line.startswith("### "):
            close_lists()
            out.append(f"<h3>{inline(line[4:])}</h3>")
        elif line.strip() == "---":
            close_lists()
            out.append("<hr>")
        elif re.match(r"^- \[.\] ", line):
            if not in_ul:
                close_lists()
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{inline(line[6:])}</li>")
        elif line.startswith("- "):
            if not in_ul:
                close_lists()
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{inline(line[2:])}</li>")
        elif re.match(r"^\d+\. ", line):
            if not in_ol:
                close_lists()
                out.append("<ol>")
                in_ol = True
            out.append(f"<li>{inline(re.sub(r'^\d+\. ', '', line))}</li>")
        elif line.strip() == "":
            close_lists()
        else:
            close_lists()
            out.append(f"<p>{inline(line)}</p>")
        i += 1
    close_lists()
    return "\n".join(out)


def css_href(dest: str) -> str:
    return "../assets/app.css" if "/" in dest else "assets/app.css"


def nav_prefix(dest: str) -> str:
    return "../" if "/" in dest else ""


def render_nav(active: str, dest: str) -> str:
    prefix = nav_prefix(dest)
    chunks = ['<nav class="nav">', '<a class="brand" href="' + prefix + 'index.html">Contentstack QA Training</a>',
              '<div class="tag">Horizon Market · offline HTML</div>']
    chunks.append("<ul>")
    for item in NAV:
        if item is None:
            continue
        kind, label, *rest = item
        if kind == "group":
            chunks.append(f'<li class="group">{html.escape(label)}</li>')
            continue
        href = prefix + rest[0]
        cls = ' class="active"' if kind == active else ""
        chunks.append(f'<li><a{cls} href="{href}">{html.escape(label)}</a></li>')
    chunks.append("</ul></nav>")
    return "\n".join(chunks)


def wrap(page: dict, body: str) -> str:
    dest = page["dest"]
    prev_href, prev_label = page["prev"]
    next_href, next_label = page["next"]
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(page["title"])} · Contentstack QA</title>
  <link rel="stylesheet" href="{css_href(dest)}">
</head>
<body>
  <div class="layout">
    {render_nav(page["id"], dest)}
    <main class="main">
      <div class="crumb">{html.escape(page["crumb"])}</div>
      {body}
      <div class="pager">
        <a href="{prev_href}">← {html.escape(prev_label)}</a>
        <a href="{next_href}">{html.escape(next_label)} →</a>
      </div>
    </main>
  </div>
</body>
</html>
"""


HOME = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contentstack QA tester training</title>
  <link rel="stylesheet" href="assets/app.css">
</head>
<body>
  <div class="layout">
    __NAV__
    <main class="main">
      <div class="crumb">Contentstack Learning / HTML</div>
      <h1>Contentstack QA tester training</h1>
      <p class="meta">Hands-on pack for testers on real Contentstack projects. Open this file in any browser. No server required.</p>

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

      <h2>Open these files</h2>
      <div class="tile-grid">
        <a class="tile" href="summary.html"><strong>Training summary</strong><span>Outcomes, ownership, syllabus, definition of done</span></a>
        <a class="tile" href="modules/01-boundaries.html"><strong>Module 01</strong><span>Headless CMS and Contentstack boundaries</span></a>
        <a class="tile" href="labs/00-setup.html"><strong>Lab setup</strong><span>Create the Horizon Market sandbox stack</span></a>
        <a class="tile" href="checklists/acceptance.html"><strong>Acceptance pack</strong><span>Use on the first real project go-live</span></a>
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
      <p>Double-click the home file, or paste a path into File Explorer / Chrome.</p>
      <div class="pathbox">__HOME_PATH__</div>
      <p>Canvas (keep open beside chat in Cursor):</p>
      <div class="pathbox">__CANVAS_PATH__</div>
    </main>
  </div>
</body>
</html>
"""


def main() -> None:
    HTML_DIR.mkdir(parents=True, exist_ok=True)
    (HTML_DIR / "modules").mkdir(exist_ok=True)
    (HTML_DIR / "labs").mkdir(exist_ok=True)
    (HTML_DIR / "checklists").mkdir(exist_ok=True)

    for page in PAGES:
        raw = (ROOT / page["src"]).read_text(encoding="utf-8")
        raw = rewrite_md_links(raw, page["dest"])
        body = md_to_html(raw)
        dest = HTML_DIR / page["dest"]
        dest.write_text(wrap(page, body), encoding="utf-8")
        print(f"wrote {dest}")

    home_path = HTML_DIR / "index.html"
    canvas = Path(
        r"C:\Users\nmirza.HZI\.cursor\projects\c-Users-nmirza-HZI-OneDrive-Horizontal-Integration-Inc-Documents-CNE-GSE-Contentstack-Learning\canvases\qa-training-summary.canvas.tsx"
    )
    nav = render_nav("home", "index.html")
    home = HOME.replace("__NAV__", nav).replace("__HOME_PATH__", str(home_path)).replace(
        "__CANVAS_PATH__", str(canvas)
    )
    home_path.write_text(home, encoding="utf-8")
    print(f"wrote {home_path}")

    launcher = ROOT / "Contentstack-QA-Training.html"
    launcher.write_text(
        f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=html/index.html">
  <title>Open Contentstack QA Training</title>
  <style>
    body {{ font-family: Segoe UI, sans-serif; padding: 48px; background: #f4f1ea; color: #1c1914; }}
    a {{ color: #0f4c5c; }}
  </style>
</head>
<body>
  <h1>Contentstack QA tester training</h1>
  <p>If this page does not redirect, open:</p>
  <p><a href="html/index.html">html/index.html</a></p>
  <p><code>{home_path}</code></p>
</body>
</html>
""",
        encoding="utf-8",
    )
    print(f"wrote {launcher}")


if __name__ == "__main__":
    main()
