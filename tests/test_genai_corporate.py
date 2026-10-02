"""
Corporate training deployability test — durable collateral
Ensures every HTML training asset is production-grade, correctly aligned,
branded GenAI Coaching × AI Accelerator Hub (black/white/gold veranda), and
contains deployable resources per section.
"""
import pathlib, re, os

CORE_FILES = [
  "BaseCamp1-EnvironmentSetup/1_Python.html",
  "BaseCamp1-EnvironmentSetup/2_VS_Code.html",
  "BaseCamp1-EnvironmentSetup/3_api_keys.html",
  "BaseCamp1-EnvironmentSetup/4_llm_api_keys.html",
  "BaseCamp1-EnvironmentSetup/5_aws_account.html",
  "BaseCamp1-EnvironmentSetup/6_github_account.html",
  "BaseCamp1-EnvironmentSetup/7_claude_code_opencode.html",
  "BaseCamp1-EnvironmentSetup/7_claude_code_opencode_new.html",
  "BaseCamp1-EnvironmentSetup/8_supabase_account.html",
  "BaseCamp1-EnvironmentSetup/9_llm_settings.html",
  "BaseCamp1/4a_Virtual_Environment.html",
  "BaseCamp1/5_Git_Concept.html",
  "BaseCamp2-PythonRefresher/1_python_refresher.html",
  "BaseCamp2-PythonRefresher/1_python.html",
  "BaseCamp2-PythonRefresher/1_python_slides.html",
  "BaseCamp2-PythonRefresher/2_python_refresher.html",
  "BaseCamp2-PythonRefresher/2_python.html",
  "BaseCamp2-PythonRefresher/2_python_slides.html",
  "BaseCamp3-FullStack/1_fastapi.html",
  "BaseCamp3-FullStack/2_UI.html",
  "BaseCamp3-FullStack/app_idea_blueprint.html",
  "BaseCamp3-FullStack/code/calculator_frontend/index.html",
  "Week1-CodeAssistants/1_opencode_introduction.html",
  "Week1-CodeAssistants/2_full_stack.html",
  "BaseCamp1-EnvironmentSetup/Archive/4a_Virtual_Environment.html",
  "BaseCamp1-EnvironmentSetup/Archive/5_Git_Concept.html",
]

def test_corporate_files_exist():
    for f in CORE_FILES:
        assert pathlib.Path(f).exists(), f"Missing {f}"

def test_no_outskill_branding():
    for f in CORE_FILES:
        txt = pathlib.Path(f).read_text(encoding="utf-8")
        assert "Outskill" not in txt, f"Outskill remains in {f}"
        assert "Growth School" not in txt, f"Growth School remains in {f}"
        assert "#002726" not in txt, f"Old teal #002726 remains in {f}"
        assert "#33C375" not in txt and "#33c375" not in txt.lower(), f"Old green remains in {f}"

def test_genai_ai_accelerator_branding():
    for f in CORE_FILES:
        txt = pathlib.Path(f).read_text(encoding="utf-8")
        assert "GenAI Coaching" in txt, f"Missing GenAI Coaching in {f}"
        assert "AI Accelerator Hub" in txt, f"Missing AI Accelerator Hub in {f}"
        assert "theme-color" in txt and "#0A0A0A" in txt, f"Missing black theme-color in {f}"
        assert "genai-coaching-emblem" in txt, f"Missing emblem in {f}"

def test_production_grade_head():
    for f in CORE_FILES:
        txt = pathlib.Path(f).read_text(encoding="utf-8")
        assert txt.lstrip().lower().startswith("<!doctype"), f"Missing doctype {f}"
        assert 'lang="en"' in txt, f"Missing lang {f}"
        assert 'name="viewport"' in txt, f"Missing viewport {f}"
        assert "<title>" in txt, f"Missing title {f}"

def test_segregated_navigation():
    for f in CORE_FILES:
        txt = pathlib.Path(f).read_text(encoding="utf-8")
        assert "genai-nav-top" in txt, f"Missing top nav {f}"
        assert "genai-nav-bottom" in txt, f"Missing bottom nav {f}"
        # ensure top is black bar, bottom is white card (via CSS existence is enough, but check both present)
        assert txt.count("genai-nav-top") >= 1
        assert txt.count("genai-nav-bottom") >= 1

def test_alignment_and_resources():
    for f in CORE_FILES:
        txt = pathlib.Path(f).read_text(encoding="utf-8")
        # alignment: main tag present
        assert "<main" in txt, f"Missing <main> in {f}"
        # calculator is standalone app — allow header instead of sidebar/layout
        if "calculator_frontend" in f:
            assert 'class="genai-nav-top"' in txt
            continue
        # others should have layout or slide-main for slides
        assert ('class="layout"' in txt or 'class="slide-main"' in txt or 'slide-stage' in txt), f"Missing layout wrapper in {f}"
        # production deployable resources: at least one training resource per file
        has_resource = any(x in txt for x in ["code-block","data-table","checklist","callout","genai-quiz","Elite Lab"])
        assert has_resource, f"No training resource in {f}"
        # each section count >=1
        assert txt.count("<section") >= 1, f"No sections in {f}"

def test_assets_exist():
    # check that referenced assets actually exist
    for f in CORE_FILES:
        txt = pathlib.Path(f).read_text(encoding="utf-8")
        for m in re.findall(r'href="assets/([^"]+)"', txt):
            base = os.path.dirname(f)
            target = os.path.join(base, "assets", m)
            # calculator has its own local assets now
            assert os.path.exists(target), f"Missing asset {target} referenced in {f}"

def test_color_system_gold_veranda():
    # ensure CSS files are gold/black/white, not teal/green
    for css in [
        "BaseCamp1-EnvironmentSetup/assets/style.css",
        "BaseCamp2-PythonRefresher/assets/style.css",
        "BaseCamp3-FullStack/assets/style.css",
        "Week1-CodeAssistants/assets/style.css",
    ]:
        txt = pathlib.Path(css).read_text()
        assert "#C9A86A" in txt, f"Gold #C9A86A missing in {css}"
        assert "#0A0A0A" in txt, f"Black #0A0A0A missing in {css}"
        assert "#002726" not in txt, f"Old teal still in {css}"
