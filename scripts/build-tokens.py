"""Turns the Figma variables export (tokens.json) into src/styles/tokens.css.
Names mirror Figma: text/neutral/base -> --text-neutral-base, Page/page-padding-l -> --page-padding-l."""
import json, re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
t = json.loads((root / "scripts/tokens.json").read_text())
def css(name):
    n = name.lower().replace("textsize/", "text-size/")
    n = re.sub(r"^(page|component|spacing)/", "", n) if not n.startswith("spacing/") or "/spacing-" in n else n
    return "--" + n.replace("/", "-")
def px(v): return f"{v}px" if v else "0"
out = ["/* Generated from Figma variables by scripts/build-tokens.py. Edit tokens.json, not this file. */", ""]
sem = t["Semantics"]["v"]
out.append(":root, .theme-light {")
out += [f"  {css(k)}: {v[0]};" for k, v in sem.items()]
out.append("}\n.theme-dark {")
out += [f"  {css(k)}: {v[1]};" for k, v in sem.items()]
out.append("}\n\n:root {")
out += [f"  {css(k)}: {px(v[0])};" for k, v in t["Spacing"]["v"].items()]
out.append("  --radius-4: 4px; --radius-8: 8px; --radius-12: 12px; --radius-16: 16px; --radius-24: 24px; --radius-32: 32px; --radius-full: 999px;")
out.append("  --font-primary: 'Schibsted Grotesk', system-ui, sans-serif;")
out.append("  --font-secondary: 'Instrument Serif', Georgia, serif;")
out.append("}")
resp = t["Responsive"]["v"]
modes = [(None, 0), ("(max-width: 1279px)", 1), ("(max-width: 1023px)", 2), ("(max-width: 767px)", 3)]
for mq, i in modes:
    body = [f"  {css(k)}: {px(v[i])};" for k, v in resp.items() if i == 0 or v[i] != v[i - 1]]
    if not body: continue
    if mq: out.append(f"\n/* {['Desktop','Laptop','Tablet','Mobile'][i]} */\n@media {mq} {{\n :root {{")
    else: out.append("\n/* Desktop (default) */\n:root {")
    out += body
    out.append(" }\n}" if mq else "}")
(root / "src/styles/tokens.css").write_text("\n".join(out) + "\n")
print("ok", len(out))
