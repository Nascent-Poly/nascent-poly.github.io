# Launchpad Demo Video — Reddit Showcase

## Details

- **Target length**: 60–75 seconds (Reddit sweet spot — under 1.5 min)
- **Format**: Screen recording with text overlays, no voiceover needed (Reddit autoplay is muted)
- **Resolution**: 1920×1080, export as MP4 (Reddit native) + GIF (for embedded posts)
- **Tool**: OBS Studio or ScreenToGif (both free, Windows)
- **Music**: None (keeps it clean, Reddit plays muted anyway)

---

## Recording Setup

1. Open VS Code with a **clean, visually appealing project** open (a simple TypeScript or Python file)
2. Use a **dark theme** — Default Dark+ or One Dark Pro
3. **Font size**: bump to 16–18px so it's readable in compressed video
4. **Close all panels** except the editor — clean workspace
5. Resize VS Code window to ~1280×720 within screen (leaves room for borders)
6. **Activate Pro** beforehand — status bar should show "Launchpad Pro"

---

## Script (Scene by Scene)

### SCENE 1 — Hook (0:00–0:05)
**Text overlay**: "What if VS Code understood plain English?"
- Blank editor, cursor blinking.

### SCENE 2 — First command (0:05–0:12)
- Press `Ctrl+Shift+.` — Launchpad input box appears
- Type: **"open terminal"**
- Terminal opens instantly
- **Text overlay**: "open terminal → Toggle Terminal (97%)"

### SCENE 3 — Git workflow (0:12–0:22)
- Press `Ctrl+Shift+.`
- Type: **"commit my changes"**
- Git commit dialog fires
- **Text overlay**: "commit my changes → Git: Commit (95%)"
- Press `Ctrl+Shift+.` again
- Type: **"push"**
- Git push fires
- **Text overlay**: "push → Git: Push (98%)"

### SCENE 4 — Compound command (0:22–0:30)
- Press `Ctrl+Shift+.`
- Type: **"format and save"**
- Document formats, then saves — two actions in sequence
- **Text overlay**: "Compound commands — 'and' chains actions"

### SCENE 5 — Typo tolerance (0:30–0:38)
- Press `Ctrl+Shift+.`
- Type: **"comit changse"** (intentional typos)
- Still matches → Git: Commit
- **Text overlay**: "Typos? No problem."

### SCENE 6 — Voice command ⭐ PRO (0:38–0:46)
- Press `Ctrl+Shift+/` — mic indicator appears in status bar
- Say: **"run my tests"**
- Transcription appears, test runner fires
- **Text overlay**: "🎤 Voice commands — just speak. [PRO]"

### SCENE 7 — Speed flex (0:46–0:52)
- Rapid fire 3 commands back-to-back:
  1. **"toggle sidebar"** → sidebar hides
  2. **"zen mode"** → zen mode activates
  3. **"toggle zen mode"** → zen mode exits
- **Text overlay**: "Sub-3ms. Every time."

### SCENE 8 — Closer (0:52–1:05)
- **Text overlay** (centered, large):
  ```
  Launchpad
  195 commands. Sub-3ms. 100% offline.
  No AI. No API keys. No telemetry.
  
  Free on VS Code Marketplace
  Pro: voice, configurator, scripts & more
  ```
- Hold for 3 seconds
- **Text overlay** (smaller, below): `nascentpoly.com/pro`

---

## Reddit Post Template

### r/vscode

**Title**: I built a VS Code extension that runs commands from plain English — no AI, no cloud, sub-3ms

**Body**:
```
I got tired of searching the command palette for things like 
"workbench.action.terminal.toggleTerminal" when I just want 
to open a terminal.

So I built Launchpad — type what you want in plain English 
and it runs the right VS Code command. Instantly.

- 195 intents (files, git, testing, debugging, editing, themes, etc.)
- Sub-3ms classification — faster than your keyboard debounce
- 100% offline — no API keys, no cloud calls, no telemetry
- Compound commands — "format and save" runs both
- Handles typos — "comit changse" still works

Free tier has everything above. Pro adds voice commands (speak 
instead of type), a visual configurator, script generator, 
and more — starting at $4.99/mo.

Video demo above. Free on the marketplace:
https://marketplace.visualstudio.com/items?itemName=NascentPoly.launchpad-command-palette

Full command reference: https://www.nascentpoly.com/guide.html
Pro details: https://www.nascentpoly.com/pro

Happy to answer any questions about the architecture or 
implementation.
```

### r/programming

**Title**: I classified 195 VS Code commands with a local NLP engine in <3ms — no LLM, no cloud

**Body**:
```
Built a deterministic natural-language classifier that maps 
plain English to VS Code commands. The entire scoring pipeline 
runs locally in under 3 milliseconds.

No GPT. No API calls. No internet required. Zero telemetry.

The engine uses a multi-lane scoring pipeline with fuzzy 
trigram matching, synonym expansion, and compound command 
splitting. It handles typos, natural variations, and chains 
like "format and save" (executes both sequentially).

195 intents covering the full VS Code surface: files, git, 
testing, debugging, editing, navigation, themes, terminals, etc.

Demo video above. It's a free VS Code extension:
https://marketplace.visualstudio.com/items?itemName=NascentPoly.launchpad-command-palette

Source architecture questions welcome.
```

---

## Recording Tips

- **Record at 30fps** — smooth enough, small file size
- **Pause 0.5s between keystrokes** when typing in Launchpad input — makes it readable
- **Don't rush** — viewers need time to read text overlays
- **Crop out the taskbar** if possible
- **GIF version**: Use gifski or ScreenToGif to export. Keep under 15MB for Reddit inline.
- For the **typo scene**, type slowly so viewers can see the misspelling before it resolves

## Text Overlay Style

- Font: Inter or system sans-serif
- Color: white with slight drop shadow
- Position: bottom-center or top-right corner
- Background: semi-transparent dark bar (rgba(0,0,0,0.6))
- Keep duration: 3–4 seconds per overlay
