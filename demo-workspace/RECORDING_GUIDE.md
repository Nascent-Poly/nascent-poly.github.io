# Launchpad Screen Recording — Command Sequence

## Pre-recording Setup

1. **Open VS Code** with *only* the `demo-workspace` folder  
   - `File > Open Folder > demo-workspace`
2. **Open these tabs** (left to right): `app.ts`, `userService.ts`, `helpers.ts`
3. **Put cursor** on line 27 of `app.ts` (the `app.start()` line)
4. **Theme**: use a dark theme with good contrast (default Dark+ is fine)
5. **Zoom**: `Ctrl+=` twice so text is large enough on video
6. **Close sidebar** so the editor is front-and-center
7. **Clear terminal** if one is open

---

## Recording Sequence

Invoke Launchpad with **Ctrl+Shift+.** for each command below.  
After each command, pause ~1 second so the status bar result is visible.

### Scene 1 — Everyday Commands (show breadth)

| # | Type this | What it does | What viewer sees |
|---|-----------|--------------|------------------|
| 1 | `open a file` | Opens Quick Open picker | File picker appears |
| 2 | `save this file` | Saves current editor | Status bar: ✓ Save File |
| 3 | `toggle the terminal` | Shows/hides terminal panel | Terminal slides up |
| 4 | `close the terminal` | Hides terminal again | Terminal slides down |

### Scene 2 — Natural Language (show filler-word tolerance)

| # | Type this | What it does | Visual |
|---|-----------|--------------|--------|
| 5 | `go to the definition` | Go to Definition | Jumps to definition (cursor on `UserService` in app.ts first) |
| 6 | `show me all the references` | Find All References | References panel opens |
| 7 | `can you format this file please` | Format Document | Code reformats |
| 8 | `I want to search my code` | Find in Files | Search sidebar opens |

### Scene 3 — Git Workflow (show real developer flow)

| # | Type this | What it does | Visual |
|---|-----------|--------------|--------|
| 9 | `check git status` | Opens Source Control | SCM sidebar opens |
| 10 | `stage everything` | Stage All Changes | Files get staged |
| 11 | `commit my changes` | Git Commit | Commit input appears |
| 12 | `push to remote` | Git Push | Push executes |

### Scene 4 — Compound Commands (the wow factor)

| # | Type this | What it does | Visual |
|---|-----------|--------------|--------|
| 13 | `format and save` | Format Document → Save File | Both execute; status bar shows chain |
| 14 | `commit and push` | Git Commit → Git Push | Two-step git workflow in one phrase |
| 15 | `close other editors and toggle sidebar` | Close Others → Toggle Sidebar | Cleans up workspace in one command |

### Scene 5 — Typo Tolerance (show it handles mistakes)

| # | Type this | What it does | Visual |
|---|-----------|--------------|--------|
| 16 | `formatt this file` | Format Document | Works despite typo! |
| 17 | `toogle terminal` | Toggle Terminal | Works despite typo! |
| 18 | `comit changes` | Git Commit | Works despite typo! |

### Scene 6 — Editor Layout & Settings

| # | Type this | What it does | Visual |
|---|-----------|--------------|--------|
| 19 | `split the editor` | Split Editor Right | Editor splits |
| 20 | `toggle zen mode` | Enter Zen Mode | Fullscreen writing mode |
| 21 | `toggle zen mode` | Exit Zen Mode | Back to normal |
| 22 | `change the theme` | Theme Picker | Color theme list appears |

### Scene 7 — Voice Commands (the killer feature)

Invoke Launchpad by voice with **Ctrl+Shift+/**

| # | Say this | What it does | What viewer sees |
|---|----------|--------------|------------------|
| 23 | "run my tests" | Voice panel → transcribes → Run All Tests | Mic UI → text appears → command runs |
| 24 | "commit and push" | Compound voice command | Two commands in sequence from speech |
| 25 | "format this file" | Format Document via voice | Code reformats, status: ✓ 🎤 Format Document |
| 26 | "open the terminal" | Toggle Terminal via voice | Terminal opens from spoken command |

### Scene 8 — Trace Mode (show the engine)

For this scene, use **Ctrl+Shift+P** → `Launchpad: Run with Trace`  
(or bind `launchpad.runWithTrace` to a shortcut)

| # | Type this | What it does | Visual |
|---|-----------|--------------|--------|
| 27 | `run my tests` | Shows ranked results with confidence % | Quick Pick with top 8 results |
| 28 | `debug this thing` | Shows `debug_code` at top with % | Ranked alternatives visible |

### Scene 9 — Voice Trace Mode

Use **Ctrl+Shift+P** → `Launchpad: Voice Command (with trace)`

| # | Say this | What it does | Visual |
|---|----------|--------------|--------|
| 29 | "search my code" | Voice → transcription → ranked results | Quick Pick shows Voice: "search my code" |
| 30 | "toggle sidebar" | Voice → trace with candidates | Shows confidence scores for voice input |

### Scene 10 — Visual Configurator (Simple Mode)

Open with **Ctrl+Shift+P** → `Launchpad: Configure`

| # | Action | What it does | What viewer sees |
|---|--------|--------------|------------------|
| 31 | Open Configurator | Shows Simple mode by default | Clean UI with "Get Started", "My Shortcuts", "My Workflows" tabs |
| 32 | Click "Get Started" tab | Shows preset packs grid | 6 themed presets with icons and descriptions |
| 33 | Click "Load Preset" on Space Command Center | Loads 18 commands + 4 macros | Status bar: ✓ Loaded "Space Command Center" |
| 34 | Click "My Shortcuts" tab | Shows loaded shortcuts | Each shortcut has a dropdown picker (not raw command IDs) |
| 35 | Click "My Workflows" tab | Shows loaded macros | Visual action blocks with icons: ▶️ Run an action, 📂 Open folder |
| 36 | Click "+ Open" on any workflow | Adds an Open step | 📂 block appears with path input |
| 37 | Toggle to **Pro** mode (top-right) | Switches to advanced UI | Raw command IDs, all 7 action types, Built-in Intents tab appears |
| 38 | Click "Save Configuration" | Persists to VS Code settings | Status: ✓ Saved |

### Scene 11 — Action Runner (one-word workspace launcher)

Pre-configure this macro in settings.json before recording:
```json
"launchpad.macros": {
    "my app": [
        { "action": "open", "path": "C:/path/to/demo-workspace" },
        { "action": "command", "command": "workbench.action.terminal.new" },
        { "action": "delay", "ms": 500 },
        { "action": "command", "command": "workbench.action.quickOpen" }
    ]
}
```

| # | Type this | What it does | Visual |
|---|-----------|--------------|--------|
| 39 | `my app` | Opens folder + terminal + Quick Open | Full workspace setup in one phrase |
| 40 | `clean desk` | Closes editors + clears terminal + Zen | Workspace resets to clean state |

### Scene 12 — Script Generator

| # | Type this | What it does | Visual |
|---|-----------|--------------|--------|
| 41 | `create a flask server` | Generates complete Flask app file | File picker → app.py appears with full Flask code |
| 42 | `write a dockerfile` | Generates production Dockerfile | Dockerfile appears with multi-stage build |
| 43 | Open Command Palette → "Launchpad: Browse Templates" | Shows categorized template catalog | Quick Pick: Backend, Frontend, DevOps, Testing categories |

---

## Suggested File Positions for Key Commands

- **"go to the definition"**: Put cursor on `UserService` in `app.ts` line 1 import
- **"show me all the references"**: Cursor on `Config` in `app.ts` line 3
- **"format this file"**: Open `helpers.ts` (it has enough code to see formatting)
- **"add a breakpoint"**: Open `app.ts`, cursor on line 30 (`app.start()`)
- **"comment this code"**: Select 2-3 lines in `userService.ts` first

---

## Status Bar Cheat Sheet

After each command, the status bar (bottom-right) shows:
```
✓ Format Document (89%)          ← single command
✓ Commit changes → Push commits  ← compound command
✓ Macro: deploy                  ← user macro
$(rocket) Launchpad: ???         ← failed classification
```

This is what makes the recording satisfying — viewers see the
confidence percentage for every command.

---

## What NOT to Demo

- Don't type gibberish (it'll show "???" — bad look)
- Don't type exact VS Code command names (`editor.action.formatDocument`) — that defeats the point
- Don't rush — let each result be visible for 1+ second
- Don't demo macros/custom commands unless you've set them up in settings.json
- For the Configurator scene, make sure to show **both** Simple and Pro mode — the mode toggle is the key differentiator

---

## Timing Target

- Scenes 1–6: ~50 seconds (2–3 sec per command)
- Scenes 7–9 (voice + trace): ~25 seconds
- Scene 10 (configurator): ~30 seconds
- Scenes 11–12 (actions + scripts): ~20 seconds
- **Total: ~125 seconds** — good for a full feature walkthrough
- **Short cut (Scenes 1–6 + 11)**: ~65 seconds for Reddit/Twitter
