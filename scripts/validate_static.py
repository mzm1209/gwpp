from html.parser import HTMLParser
from pathlib import Path

class Parser(HTMLParser):
    def error(self, message):
        raise AssertionError(message)

root = Path(__file__).resolve().parents[1]
for relative in ["index.html", "src/main.js", "src/styles.css"]:
    path = root / relative
    assert path.exists(), f"Missing {relative}"
    assert path.read_text(encoding="utf-8").strip(), f"Empty {relative}"

Parser().feed((root / "index.html").read_text(encoding="utf-8"))
js = (root / "src/main.js").read_text(encoding="utf-8")
for page in ["list", "create", "profile", "results", "detail", "export"]:
    assert f"{page}: ()" in js, f"Missing page renderer: {page}"
for keyword in ["人工确认", "岗位画像", "培养建议", "导出", "匹配分"]:
    assert keyword in js, f"Missing required keyword: {keyword}"
print("Static prototype files validated")
