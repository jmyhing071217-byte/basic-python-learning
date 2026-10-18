# 🐍 Python Lab | Interactive Zero-to-Hero Tutorial

A modern, immersive, step-by-step card-based Python learning platform designed for beginners and developers alike. Run Python directly inside your browser with zero installation, interact with real-time code sandboxes, take quizzes, and track your progress offline or online.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Language: Python 3.x](https://img.shields.io/badge/Language-Python%203.x-yellow.svg)](https://www.python.org/)
[![Runtime: Browser / Skulpt](https://img.shields.io/badge/Runtime-In--Browser%20Skulpt-success.svg)](https://skulpt.org/)
[![UI: Tailwind & Glassmorphism](https://img.shields.io/badge/UI-Tailwind%20%26%20Glassmorphism-38bdf8.svg)](https://tailwindcss.com/)
[![Bilingual: EN / 中文](https://img.shields.io/badge/i18n-English%20%7C%20%E4%B8%AD%E6%96%87-purple.svg)](#-internationalization--bilingual-support)

---

## ✨ Key Features & Highlights

- 🌐 **Internationalization & Bilingual Support**:
  - Full, seamless one-click switching between **English** and **Simplified Chinese** (`EN / 中文`).
  - All 15 chapters, quizzes, hints, code explanations, syntax cheat sheet, and IDE tooltips are fully localized.

- 🎨 **Award-Winning UI Craft & Aesthetic System**:
  - **Dynamic Particle Nebula Background**: Smooth ambient video backdrop with chromatic glowing grids and particle flow.
  - **Glassmorphism Pro**: High-contrast, translucent frosted glass cards with specular rim lighting (`inset 0 1px 0 rgba(255,255,255,0.14)`).
  - **Floating Glass Dock**: iOS/macOS-inspired vertical right dock for rapid navigation, code execution, search, and language switching.
  - **Spring Physics**: Organic, responsive transitions with custom cubic-bezier curves and interactive shockwave ripple effects.

- 🧩 **Focused Step-by-Step Card Flow ("One Idea Per Page")**:
  - Each chapter is divided into bite-sized, digestible steps: *Core Concept → Syntax Practice → Common Pitfalls → Coding Challenge → Quiz*.
  - **Stacked Card Mode**: Focus on one concept at a time with smooth segmented pill navigation.
  - **Panoramic Cascade Mode**: Click "Expand All" (`展开全景`) to inspect all steps simultaneously.

- 🚀 **100% Client-Side In-Browser Python Engine**:
  - Powered by **Skulpt JIT**, executing Python code purely within the browser.
  - No Python runtime, local compiler, server, or backend setup required.
  - Full support for standard output (`stdout`), interactive user input (`input()`), and detailed syntax/runtime error tracebacks.

- 💻 **Collapsible IDE Sandbox**:
  - Live code editor with automatic indentation, `Tab` support (4 spaces), and bracket matching.
  - Real-time line numbering and synchronized scrolling.
  - Quick keyboard shortcut: **`Ctrl + Enter`** to run code, **`Ctrl + J`** to toggle/hide the playground.
  - Preset library of classic algorithmic templates (Multiplication table, Fibonacci series, Password validator, Prime sieve, etc.).

- 📝 **Interactive Quizzes & Instant Feedback**:
  - Single-choice self-assessments with instant explanations, answer analysis, and visual celebration confetti upon chapter completion.

- 📖 **Built-in Syntax Cheat Sheet & Spotlight Search**:
  - Press **`Ctrl + K`** to trigger the global command palette and search syntax keywords instantly.
  - Integrated quick-reference manual for built-in functions, slicing formulas, and container methods.

- 📊 **Local Progress Persistence**:
  - Automatic local storage synchronization (`localStorage`) preserves your completed chapters and step states without needing an account.

- 📦 **100% Offline Capable**:
  - All core dependencies (Prism, Tailwind, Skulpt, fonts, video assets) are bundled locally. Runs smoothly with zero internet connection.

---

## 📚 Curriculum (15 Core Chapters)

| # | Chapter Title | Core Topics Covered |
| :---: | :--- | :--- |
| **01** | First Steps & First Line of Code | The Zen of Python, `print()` syntax, comments, and beginner pitfalls |
| **02** | Variables & The Four Primitive Types | Variable concepts, `int` / `float` / `str` / `bool`, and explicit type casting |
| **03** | Arithmetic Operators & Calculations | Floor division `//`, modulo `%`, power `**`, and operator precedence |
| **04** | String Manipulation & Modern f-strings | Slice indexing `[start:end:step]`, string cleaning methods, formatted strings |
| **05** | Conditional Branching & Logic | Comparison operators, Boolean logic (`and`/`or`/`not`), indentation rules, ternary expressions |
| **06** | Loop Control: `for` and `while` | `range()` generators, loop safety, `break` and `continue` control flow |
| **07** | Essential Sequences: Lists (`list`) | Zero-based indexing, mutation (`append`, `pop`, `remove`), slicing, and sorting |
| **08** | List Comprehensions & Advanced Iteration | One-line comprehensions, indexed loops with `enumerate()`, pairing with `zip()` |
| **09** | Tuples (`tuple`) & Sets (`set`) | Tuple immutability, multiple assignment unpacking, set deduplication & math operations |
| **10** | Dictionaries (`dict`): Key-Value Mappings | Key-value lookups, safe fetching with `.get()`, and `.items()` traversal |
| **11** | Function Fundamentals (`def`) | Modularity, arguments vs. parameters, multi-value `return` unpacking |
| **12** | Advanced Functions & Lambdas | Default parameters, `*args` and `**kwargs`, anonymous `lambda` expressions |
| **13** | Exception Handling & Defensive Coding | `try-except-else-finally` blocks, catching specific errors, crash prevention |
| **14** | Object-Oriented Programming (OOP) | Classes and blueprints, `__init__` constructor, instance methods, and `self` |
| **15** | Comprehensive Capstone Project | Password strength analyzer, grade statistics engine, and graduation honors |

---

## 🚀 Getting Started

### Method 1: Double-Click (Zero Setup)
1. Double-click `start.bat` on Windows;
2. Or simply open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local HTTP Server (Optional)
If you prefer serving the files through a local server:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

You can host this project online for free with GitHub Pages:

1. Push this repository to GitHub;
2. Go to your repository **Settings** → **Pages**;
3. Under **Build and deployment > Branch**, select `main` branch and `/ (root)` folder;
4. Click **Save**;
5. In 1–2 minutes, your live site will be ready at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

## 🗂️ Project Structure

```text
basic-python-learning/
├── index.html            # Main single-page interactive app
├── start.bat             # One-click Windows launcher
├── push_to_github.bat    # One-click GitHub push utility
├── README.md             # Project documentation (English)
├── .gitignore            # Git exclusion rules
├── css/
│   ├── prism.min.css     # Syntax highlighting styles
│   └── style.css         # Custom animations, glassmorphism, responsive layout
├── images/
│   ├── background_video.mp4  # Dynamic ambient video background
│   ├── video_frame_0.jpg     # Video poster frame
│   └── video_frame_mid.jpg   # High-resolution fallback backdrop
└── js/
    ├── app.js            # Core interactive logic, UI controller, Skulpt runner
    ├── chapters.js       # 15 chapters content, steps, code snippets, and quizzes
    ├── i18n.js           # Bilingual dictionary & dynamic translation engine
    ├── skulpt.min.js     # In-browser Python compiler/runtime
    ├── skulpt-stdlib.js  # Python standard library modules
    ├── tailwind.js       # Tailwind CSS runtime engine
    └── prism*.js         # Prism syntax highlighter
```

---

## ⌨️ Useful Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| **`Ctrl + Enter`** | Run Python code in Playground |
| **`Ctrl + J`** | Toggle / Show / Hide Playground |
| **`Ctrl + B`** | Open / Close Chapter Outline Sidebar |
| **`Ctrl + K`** | Open Spotlight Command Palette |
| **`ESC`** | Close open modal, sidebar, or dialog |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and share it for educational and personal purposes!
