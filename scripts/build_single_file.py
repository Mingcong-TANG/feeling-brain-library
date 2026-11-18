#!/usr/bin/env python3
"""Bundle the site into one self-contained HTML file (dist/index.html).

Useful for sharing the module as a single file or uploading it to a page host that
does not serve folders. Inlines the stylesheet and every local script.
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
html = (ROOT / "index.html").read_text(encoding="utf-8")
html = re.sub(r'<link rel="stylesheet" href="(assets/[^"]+)">',
              lambda m: "<style>\n" + (ROOT / m.group(1)).read_text(encoding="utf-8") + "</style>", html)
html = re.sub(r'<script src="((?:data|assets)/[^"]+)"></script>',
              lambda m: "<script>\n" + (ROOT / m.group(1)).read_text(encoding="utf-8").replace("</script", "<\\/script") + "\n</script>", html)
out = ROOT / "dist" / "index.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print(f"wrote {out} ({len(html) // 1024} KB)")
