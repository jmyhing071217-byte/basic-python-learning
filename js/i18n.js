/**
 * PYTHON LAB - INTERNATIONALIZATION & BILINGUAL DATA MODULE (i18n)
 */

const CHAPTERS_DATA_EN = [
  {
    "id": "chap-1",
    "number": "01",
    "icon": "🚀",
    "title": "First Look at Python & First Line of Code",
    "category": "Getting Started",
    "badge": "Essential Beginner",
    "summary": "Understand Python's core philosophy, dissect the print() function, and master syntax rules and commenting practices.",
    "steps": [
      {
        "title": "1. What is Python?",
        "type": "concept",
        "tag": "Core Philosophy",
        "content": "\n          <div class=\"space-y-4\">\n            <p class=\"text-sm leading-relaxed text-slate-700 dark:text-slate-300\">\n              <strong>Python</strong> is an elegant, high-level programming language designed to be read and written like natural English. Its core philosophy (<em>The Zen of Python</em>) emphasizes that <strong>\"Beautiful is better than ugly, explicit is better than implicit, simple is better than complex.\"</strong>\n            </p>\n            <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-3\">\n              <div class=\"p-4 rounded-2xl bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20\">\n                <div class=\"text-sky-500 font-bold mb-1 flex items-center gap-2 text-sm\">\n                  <span class=\"w-2 h-2 rounded-full bg-sky-500\"></span> Intuitive Syntax\n                </div>\n                <p class=\"text-xs text-slate-600 dark:text-slate-400 leading-relaxed\">No cumbersome semicolons or curly braces required. Code reads like prose, offering the smoothest learning curve.</p>\n              </div>\n              <div class=\"p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent border border-indigo-500/20\">\n                <div class=\"text-indigo-400 font-bold mb-1 flex items-center gap-2 text-sm\">\n                  <span class=\"w-2 h-2 rounded-full bg-indigo-400\"></span> Massive Ecosystem\n                </div>\n                <p class=\"text-xs text-slate-600 dark:text-slate-400 leading-relaxed\">The premier choice across Artificial Intelligence, LLMs, data visualization, and automation engineering.</p>\n              </div>\n              <div class=\"p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20\">\n                <div class=\"text-amber-400 font-bold mb-1 flex items-center gap-2 text-sm\">\n                  <span class=\"w-2 h-2 rounded-full bg-amber-400\"></span> Cross-Platform\n                </div>\n                <p class=\"text-xs text-slate-600 dark:text-slate-400 leading-relaxed\">Write once, run seamlessly on Windows, macOS, Linux servers, and embedded devices.</p>\n              </div>\n            </div>\n          </div>\n        "
      },
      {
        "title": "2. Deep Dive into print()",
        "type": "code",
        "tag": "Syntax Breakdown",
        "content": "\n          <p class=\"text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3\">\n            To output content in Python, invoke the built-in function <code>print(...)</code>. Here is an anatomical visual diagram of its structure:\n          </p>\n\n          <div class=\"p-4 rounded-xl bg-slate-900 border border-slate-800 my-3 text-xs font-mono\">\n            <div class=\"flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-slate-200 py-1\">\n              <span class=\"px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/40 text-blue-400 font-bold\">print</span>\n              <span class=\"text-slate-500 font-bold text-base\">(</span>\n              <span class=\"px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300\">\"Hello, Python!\"</span>\n              <span class=\"text-slate-500 font-bold\">,</span>\n              <span class=\"px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300\">2026</span>\n              <span class=\"text-slate-500 font-bold text-base\">)</span>\n            </div>\n            <div class=\"grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800 text-[11px] text-center text-slate-400\">\n              <div><span class=\"text-blue-400\">▲</span> Built-in Function Name</div>\n              <div><span class=\"text-emerald-400\">▲</span> String Literal (paired quotes)</div>\n              <div><span class=\"text-amber-400\">▲</span> Numeric Argument (comma separated)</div>\n            </div>\n          </div>\n        ",
        "codeExample": "# Print classic greeting\nprint(\"Hello, World!\")\nprint(\"Welcome to the Python Geek Universe!\")\n\n# Multiple arguments are separated by spaces automatically\nprint(\"Welcome to\", \"Python\", 2026)",
        "explanation": "Click [▶ Send to Playground & Run] to inspect real-time execution in the console on the right!"
      },
      {
        "title": "3. Punctuation Rules & Gotcha Guide",
        "type": "pitfall",
        "tag": "Gotcha Guide",
        "content": "\n          <div class=\"space-y-3\">\n            <div class=\"p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80\">\n              <h4 class=\"font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2\">📝 Commenting Guide</h4>\n              <ul class=\"text-xs space-y-1.5 text-slate-600 dark:text-slate-300\">\n                <li>• <strong>Single-line comment</strong>: Prefix with <code>#</code>. Comments are for developers; the computer skips them.</li>\n                <li>• <strong>Multi-line docstring</strong>: Enclose with triple single quotes <code>'''</code> or triple double quotes <code>\"\"\"</code>.</li>\n              </ul>\n            </div>\n            <div class=\"p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60\">\n              <h4 class=\"font-bold text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2\">⚠️ Top Beginner Gotchas</h4>\n              <ul class=\"text-xs space-y-1.5 text-rose-800 dark:text-rose-300\">\n                <li>• <strong>ASCII Character Requirement</strong>: All syntax symbols (<code>\"</code>, <code>()</code>, <code>,</code>) must be standard half-width English ASCII! Full-width characters cause a <code>SyntaxError</code>.</li>\n                <li>• <strong>Strict Case Sensitivity</strong>: Python is strictly case-sensitive. Writing <code>Print()</code> triggers a <code>NameError</code>; it must be lowercase <code>print()</code>.</li>\n              </ul>\n            </div>\n          </div>\n        "
      },
      {
        "title": "4. Mini Code Challenge",
        "type": "challenge",
        "tag": "Hands-on Challenge",
        "content": "\n          <p class=\"text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-2\">\n            Try it yourself! Print your personal programmer ID card to the console:\n          </p>\n          <div class=\"p-3 rounded-lg bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/40 text-xs text-sky-900 dark:text-sky-300 mb-3\">\n            <strong>Challenge Goal</strong>: Print three lines: 1) System title, 2) Nickname, 3) 2026 goal slogan.\n          </div>\n        ",
        "codeExample": "# Task: Print your Geek ID card\nprint(\"=== Python Lab Developer ID ===\")\nprint(\"Coder:\", \"Cyber Explorer\")\nprint(\"Mission:\", \"Master Python in 2026!\")",
        "explanation": "Try modifying the arguments and run the code to verify your custom badge in the terminal!"
      },
      {
        "title": "5. Knowledge Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "Which of the following print() statements will execute correctly in Python 3 without syntax errors?",
            "options": [
              "Print(\"Hello\")",
              "print(\"Hello\", 2026)",
              "print(\"Hello\" 2026)",
              "print（\"Hello\"）"
            ],
            "answerIndex": 1,
            "explanation": "Python is case-sensitive (cannot use uppercase Print), requires commas between multiple arguments, and requires standard half-width English parentheses."
          },
          {
            "question": "Regarding comments in Python code, which of the following is correct?",
            "options": [
              "Single-line comments start with //",
              "Single-line comments start with # and are ignored by the computer",
              "Comments significantly slow down Python code execution",
              "Inline comments on the same line as code are not permitted"
            ],
            "answerIndex": 1,
            "explanation": "Python uses # for single-line comments. The interpreter automatically skips them, with zero negative performance overhead."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-2",
    "number": "02",
    "icon": "🔢",
    "title": "Variables & The 4 Core Data Types",
    "category": "Getting Started",
    "badge": "Foundational Core",
    "summary": "Master variable assignment as memory pointers, examine int, float, str, and bool, and understand type casting.",
    "steps": [
      {
        "title": "1. Variables as Memory Pointers",
        "type": "concept",
        "tag": "Under the Hood",
        "content": "\n          <div class=\"space-y-4\">\n            <p class=\"text-sm leading-relaxed text-slate-700 dark:text-slate-300\">\n              In Python, variables are <strong>NOT static boxes</strong> holding data. Instead, they act as <strong>sticky labels (memory pointers)</strong> referencing objects stored in memory.\n            </p>\n            <div class=\"p-4 rounded-xl bg-slate-900 border border-slate-800 my-2 text-xs font-mono\">\n              <div class=\"flex items-center justify-center gap-3 text-slate-200 py-1\">\n                <span class=\"px-3 py-1 rounded bg-sky-500/20 text-sky-400 font-bold border border-sky-500/40\">score</span>\n                <span class=\"text-slate-400\">── points to ──▶</span>\n                <span class=\"px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40\">100 (int in Heap Memory)</span>\n              </div>\n            </div>\n            <p class=\"text-xs text-slate-400 leading-relaxed\">\n              When you reassign <code>score = \"Pass\"</code>, the label is simply retargeted to point to a new string object <code>\"Pass\"</code>.\n            </p>\n          </div>\n        "
      },
      {
        "title": "2. The 4 Fundamental Data Types",
        "type": "concept",
        "tag": "Type Matrix",
        "content": "\n          <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-xs\">\n            <div class=\"p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/20\">\n              <div class=\"font-bold text-sky-400 mb-1\">1. Integer (int)</div>\n              <p class=\"text-slate-300\">Whole numbers with unlimited precision: <code>age = 18</code>, <code>-42</code></p>\n            </div>\n            <div class=\"p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20\">\n              <div class=\"font-bold text-purple-400 mb-1\">2. Float (float)</div>\n              <p class=\"text-slate-300\">Floating-point numbers with decimal parts: <code>pi = 3.14159</code></p>\n            </div>\n            <div class=\"p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20\">\n              <div class=\"font-bold text-emerald-400 mb-1\">3. String (str)</div>\n              <p class=\"text-slate-300\">Text characters in quotes: <code>msg = \"Hello Python\"</code></p>\n            </div>\n            <div class=\"p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20\">\n              <div class=\"font-bold text-amber-400 mb-1\">4. Boolean (bool)</div>\n              <p class=\"text-slate-300\">Logical truth states (capitalized): <code>is_active = True</code> / <code>False</code></p>\n            </div>\n          </div>\n        "
      },
      {
        "title": "3. Type Conversion (Type Casting)",
        "type": "code",
        "tag": "Hands-on Code",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Use built-in constructors <code>int()</code>, <code>float()</code>, <code>str()</code>, and <code>bool()</code> to cast between types:\n          </p>\n        ",
        "codeExample": "# Type inspection & casting\nage = 18\nprint(\"Original age:\", age, type(age))\n\n# Cast int to string\nage_str = str(age)\nprint(\"String representation:\", age_str, type(age_str))\n\n# Cast string to float\npi = float(\"3.14159\")\nprint(\"Calculated circle perimeter factor:\", pi * 2)\n\n# Truthiness rules: 0, \"\", None evaluate to False; non-empty values are True\nprint(\"bool(0):\", bool(0))\nprint(\"bool('Hello'):\", bool(\"Hello\"))",
        "explanation": "Type casting is essential when parsing user input or reading structured API payloads!"
      },
      {
        "title": "4. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "What will print(type(True), type(\"100\")) output in Python?",
            "options": [
              "<class 'bool'> <class 'str'>",
              "<class 'bool'> <class 'int'>",
              "<class 'int'> <class 'str'>",
              "<class 'str'> <class 'bool'>"
            ],
            "answerIndex": 0,
            "explanation": "True is a boolean (<class 'bool'>), while \"100\" enclosed in quotation marks is a string (<class 'str'>)."
          },
          {
            "question": "After executing x = \"20\" + \"26\", what is the value of x?",
            "options": [
              "46",
              "\"2026\"",
              "Raises a TypeError",
              "2026 (numeric)"
            ],
            "answerIndex": 1,
            "explanation": "When two strings are combined with +, text concatenation is performed, resulting in \"2026\" rather than mathematical addition 46."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-3",
    "number": "03",
    "icon": "➕",
    "title": "Arithmetic Operators & Calculations",
    "category": "Getting Started",
    "badge": "Practical & Essential",
    "summary": "Master addition, subtraction, multiplication, division, integer floor division //, modulo %, and power **.",
    "steps": [
      {
        "title": "1. Arithmetic Operators Overview",
        "type": "concept",
        "tag": "Operator Guide",
        "content": "\n          <div class=\"grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-2 text-xs font-mono\">\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200\">\n              <span class=\"text-sky-400 font-bold\">+  -</span> Addition & Subtraction\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200\">\n              <span class=\"text-sky-400 font-bold\">*  /</span> Multiply & Division (float)\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200\">\n              <span class=\"text-amber-400 font-bold\">//</span> Floor division (integer trunc)\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200\">\n              <span class=\"text-amber-400 font-bold\">%</span> Modulo (remainder)\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200\">\n              <span class=\"text-emerald-400 font-bold\">**</span> Exponentiation (power)\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200\">\n              <span class=\"text-purple-400 font-bold\">( )</span> Priority grouping\n            </div>\n          </div>\n        "
      },
      {
        "title": "2. Compound Assignment & Precedence",
        "type": "code",
        "tag": "Code Practice",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Compound operators like <code>+=</code> and <code>*=</code> streamline state updates:\n          </p>\n        ",
        "codeExample": "# Compound arithmetic assignment\nscore = 10\nscore += 5   # score = score + 5 (15)\nscore *= 2   # score = score * 2 (30)\nprint(\"Updated score:\", score)\n\n# Division vs Floor Division vs Modulo\nprint(\"True division 7 / 2 =\", 7 / 2)       # 3.5\nprint(\"Floor division 7 // 2 =\", 7 // 2)    # 3\nprint(\"Modulo 7 % 2 =\", 7 % 2)              # 1\nprint(\"Power 2 ** 8 =\", 2 ** 8)             # 256",
        "explanation": "Remember that division / always produces a float in Python 3, even if it divides evenly!"
      },
      {
        "title": "3. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "In Python, what is the evaluated result of 10 // 3 + 10 % 3?",
            "options": [
              "4",
              "4.33",
              "3",
              "1"
            ],
            "answerIndex": 0,
            "explanation": "10 // 3 evaluates to 3 (floor division), and 10 % 3 evaluates to 1 (remainder). Thus 3 + 1 = 4."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-4",
    "number": "04",
    "icon": "🔤",
    "title": "Strings & Modern f-string Formatting",
    "category": "Getting Started",
    "badge": "Developer Superpower",
    "summary": "Master string slicing [start:end:step] with bidirectional indexing, and master modern f-string formatting.",
    "steps": [
      {
        "title": "1. Modern f-string Formatting",
        "type": "concept",
        "tag": "Formatting Magic",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Since Python 3.6, <strong>f-strings</strong> are the standard and fastest way to format strings:\n          </p>\n          <div class=\"p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono\">\n            <span class=\"text-amber-400 font-bold\">f</span><span class=\"text-emerald-300\">\"User: </span><span class=\"text-sky-400\">{name}</span><span class=\"text-emerald-300\">, Score: </span><span class=\"text-sky-400\">{score:.2f}</span><span class=\"text-emerald-300\">\"</span>\n          </div>\n        "
      },
      {
        "title": "2. String Slicing & Bidirectional Indexing",
        "type": "concept",
        "tag": "Slicing Blueprint",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-2\">\n            Every string in Python supports both positive (left-to-right) and negative (right-to-left) index rulers:\n          </p>\n          <div class=\"p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-center overflow-x-auto my-3\">\n            <div class=\"grid grid-cols-6 gap-1 text-sky-400 font-bold mb-1\">\n              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>\n            </div>\n            <div class=\"grid grid-cols-6 gap-1 text-white text-base font-extrabold bg-white/10 py-1.5 rounded-lg mb-1\">\n              <span>P</span><span>Y</span><span>T</span><span>H</span><span>O</span><span>N</span>\n            </div>\n            <div class=\"grid grid-cols-6 gap-1 text-amber-400 font-bold\">\n              <span>-6</span><span>-5</span><span>-4</span><span>-3</span><span>-2</span><span>-1</span>\n            </div>\n          </div>\n          <p class=\"text-xs text-slate-400\">\n            Slicing rule: <code>s[start:end:step]</code> (start inclusive, end exclusive). <code>s[::-1]</code> reverses the string!\n          </p>\n        "
      },
      {
        "title": "3. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "Given s = \"PYTHON\", what will print(s[1:4], s[::-1]) output?",
            "options": [
              "YTH and NOHTYP",
              "YTHO and NOHTYP",
              "PYT and PYTHON",
              "THO and NOHTYP"
            ],
            "answerIndex": 0,
            "explanation": "s[1:4] slices indices 1, 2, 3 -> \"YTH\". s[::-1] with a step of -1 traverses backwards, producing \"NOHTYP\"."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-5",
    "number": "05",
    "icon": "⚖️",
    "title": "Conditional Branching & Logic",
    "category": "Control Flow",
    "badge": "Logic Core",
    "summary": "Understand Python's indent-based code blocks, nested if-elif-else branches, and one-line ternary expressions.",
    "steps": [
      {
        "title": "1. Core if-elif-else Branching",
        "type": "concept",
        "tag": "Logic Control",
        "content": "\n          <div class=\"space-y-3 text-xs sm:text-sm text-slate-300\">\n            <p>Python uses <strong>4-space indentation</strong> to delineate code blocks instead of curly braces <code>{}</code>.</p>\n            <div class=\"p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200\">\n              <div><span class=\"text-purple-400 font-bold\">if</span> condition_1:</div>\n              <div class=\"pl-4 text-slate-400\"># Action 1</div>\n              <div><span class=\"text-purple-400 font-bold\">elif</span> condition_2:</div>\n              <div class=\"pl-4 text-slate-400\"># Action 2</div>\n              <div><span class=\"text-purple-400 font-bold\">else</span>:</div>\n              <div class=\"pl-4 text-slate-400\"># Fallback action</div>\n            </div>\n          </div>\n        "
      },
      {
        "title": "2. Elegant Ternary Conditional Expression",
        "type": "code",
        "tag": "Pythonic Style",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            One-line conditional expressions (ternary operators) keep variable assignments compact:\n          </p>\n        ",
        "codeExample": "score = 85\n\n# Traditional if-elif-else block\nif score >= 90:\n    grade = \"A (Excellent)\"\nelif score >= 80:\n    grade = \"B (Good)\"\nelif score >= 60:\n    grade = \"C (Pass)\"\nelse:\n    grade = \"F (Fail)\"\n\nprint(f\"Score: {score} -> Grade: {grade}\")\n\n# Pythonic one-line ternary operator\nstatus = \"Passed\" if score >= 60 else \"Retake Needed\"\nprint(\"Status:\", status)",
        "explanation": "Ternary syntax is: [value_if_true] if [condition] else [value_if_false]."
      },
      {
        "title": "3. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "Which of the following statements regarding Python indentation and conditions is FALSE?",
            "options": [
              "Python uses indentation (typically 4 spaces) rather than curly braces {} to delineate code blocks.",
              "You must write a colon : at the end of if, elif, and else lines.",
              "Python uses && and || instead of and and or for compound logical evaluation.",
              "In a ternary expression x if cond else y, x is returned when cond evaluates to True."
            ],
            "answerIndex": 2,
            "explanation": "Python uses lowercase keywords 'and', 'or', 'not' for boolean logic, NOT C-style '&&' or '||'."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-6",
    "number": "06",
    "icon": "🔄",
    "title": "Loops: for and while",
    "category": "Control Flow",
    "badge": "Automation Tool",
    "summary": "Master range() steps, prevent infinite while loops, and control execution with break and continue.",
    "steps": [
      {
        "title": "1. for Loop with range() Sequences",
        "type": "concept",
        "tag": "Loop Basics",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            The <code>range(start, stop, step)</code> generator produces arithmetic progressions on-demand without memory overhead.\n          </p>\n          <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-slate-200\">\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800\">\n              <code>range(5)</code><br><span class=\"text-slate-400\">0, 1, 2, 3, 4</span>\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800\">\n              <code>range(1, 6)</code><br><span class=\"text-slate-400\">1, 2, 3, 4, 5</span>\n            </div>\n            <div class=\"p-3 rounded-xl bg-slate-900 border border-slate-800\">\n              <code>range(0, 10, 2)</code><br><span class=\"text-slate-400\">0, 2, 4, 6, 8</span>\n            </div>\n          </div>\n        "
      },
      {
        "title": "2. Flow Control with break and continue",
        "type": "code",
        "tag": "Flow Control",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            <code>break</code> immediately terminates the loop, while <code>continue</code> skips the rest of the current iteration.\n          </p>\n        ",
        "codeExample": "# Countdown using range\nprint(\"Count down:\")\nfor i in range(5, 0, -1):\n    print(f\"T-minus {i}...\")\n\n# break & continue in action\nprint(\"\\nScanning numbers from 1 to 10:\")\nfor num in range(1, 11):\n    if num % 2 == 0:\n        continue  # Skip even numbers\n    if num > 7:\n        break     # Stop loop when exceeding 7\n    print(\"Found odd number:\", num)",
        "explanation": "Always ensure while loop conditions can eventually become False to prevent infinite execution!"
      },
      {
        "title": "3. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "How many times will print(i) execute in for i in range(2, 8, 2): print(i)?",
            "options": [
              "3 times (2, 4, 6)",
              "4 times (2, 4, 6, 8)",
              "2 times (2, 4)",
              "6 times"
            ],
            "answerIndex": 0,
            "explanation": "range(2, 8, 2) starts at 2, increments by 2, and stops strictly before 8, yielding [2, 4, 6] (3 times)."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-7",
    "number": "07",
    "icon": "📋",
    "title": "Core Sequences: Lists (List)",
    "category": "Data Structures",
    "badge": "Most Widely Used",
    "summary": "Explore contiguous list storage in memory, and master append, pop, sort, and slicing operations.",
    "steps": [
      {
        "title": "1. List CRUD Operations & Common Methods",
        "type": "code",
        "tag": "List Essentials",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Lists are mutable, ordered sequences that can store heterogeneous data types:\n          </p>\n        ",
        "codeExample": "# Comprehensive List Demo\nskills = [\"Python\", \"JavaScript\", \"SQL\"]\nprint(\"Initial list:\", skills)\n\n# Append & Insert\nskills.append(\"Docker\")\nskills.insert(1, \"TypeScript\")\nprint(\"After additions:\", skills)\n\n# Pop & Remove\nremoved = skills.pop()\nprint(f\"Popped item: {removed}, Remaining: {skills}\")\n\n# Sorting & Reverse\nscores = [88, 95, 62, 74, 100]\nscores.sort(reverse=True)\nprint(\"Sorted scores (high to low):\", scores)",
        "explanation": "append() adds items to the tail in O(1) time complexity."
      },
      {
        "title": "2. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "Given nums = [1, 2, 3], what will len(nums) be after executing nums.append([4, 5])?",
            "options": [
              "4",
              "5",
              "3",
              "Raises a TypeError"
            ],
            "answerIndex": 0,
            "explanation": "append() inserts its argument as a single object. Thus nums becomes [1, 2, 3, [4, 5]] with a length of 4. Use extend() to unpack and append elements."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-8",
    "number": "08",
    "icon": "⚡",
    "title": "List Comprehensions & Advanced Iteration",
    "category": "Data Structures",
    "badge": "Advanced Productivity",
    "summary": "Experience true Pythonic code: filter and transform in a single line, and master enumerate and zip.",
    "steps": [
      {
        "title": "1. List Comprehensions, enumerate & zip",
        "type": "code",
        "tag": "Pythonic Superpower",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            List comprehensions replace verbose multi-line loops with elegant single-line declarative syntax:\n          </p>\n        ",
        "codeExample": "# List comprehension: squares of even numbers from 1 to 10\nevens_squared = [x**2 for x in range(1, 11) if x % 2 == 0]\nprint(\"Squares of evens:\", evens_squared)\n\n# enumerate & zip in action\nlanguages = [\"Python\", \"Rust\", \"Go\"]\nfor rank, lang in enumerate(languages, start=1):\n    print(f\"Top {rank}: {lang}\")\n\nnames = [\"Alice\", \"Bob\", \"Charlie\"]\nscores = [95, 88, 92]\nfor name, score in zip(names, scores):\n    print(f\"Student: {name} | Score: {score}\")",
        "explanation": "List comprehensions are evaluated in C-speed within the interpreter, making them both cleaner and faster!"
      },
      {
        "title": "2. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "What is the evaluated output of [x * 2 for x in range(5) if x % 2 != 0]?",
            "options": [
              "[2, 6]",
              "[0, 2, 4]",
              "[1, 3]",
              "[2, 4, 6]"
            ],
            "answerIndex": 0,
            "explanation": "range(5) produces 0, 1, 2, 3, 4. Elements matching x % 2 != 0 are 1 and 3. Multiplying each by 2 yields [2, 6]."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-9",
    "number": "09",
    "icon": "🔒",
    "title": "Tuples (Tuple) & Sets (Set)",
    "category": "Data Structures",
    "badge": "Immutability & Deduplication",
    "summary": "Understand tuple immutability and unpacking, and master set deduplication and mathematical set operations.",
    "steps": [
      {
        "title": "1. Tuples vs Sets: Use Cases & Syntax",
        "type": "code",
        "tag": "Comparison & Methods",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Tuples are immutable records, while Sets are unordered collections of unique elements:\n          </p>\n        ",
        "codeExample": "# Tuple unpacking (read-only safety)\npoint = (10, 20)\nx, y = point\nprint(f\"Coordinates: X={x}, Y={y}\")\n\n# Set deduplication\nraw_ids = [101, 102, 101, 103, 102, 104]\nunique_ids = set(raw_ids)\nprint(\"Unique IDs:\", unique_ids)\n\n# Set algebra operations\nset_a = {\"Python\", \"Java\", \"C++\"}\nset_b = {\"Python\", \"Go\", \"Rust\"}\nprint(\"Intersection (both):\", set_a & set_b)\nprint(\"Union (all):\", set_a | set_b)\nprint(\"Difference (A only):\", set_a - set_b)",
        "explanation": "Because tuples are immutable, they can serve as dictionary keys, whereas lists and sets cannot."
      },
      {
        "title": "2. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "Which of the following operations on tuples or sets will trigger a TypeError?",
            "options": [
              "t = (1, 2, 3); t[0] = 99",
              "s = {1, 2, 3}; s.add(4)",
              "t = (1, 2, 3); print(t[0])",
              "s = set([1, 2, 2, 3])"
            ],
            "answerIndex": 0,
            "explanation": "Tuples are immutable. Attempting index assignment t[0] = 99 raises TypeError: 'tuple' object does not support item assignment."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-10",
    "number": "10",
    "icon": "🗺️",
    "title": "Dictionaries (Dict): Key-Value Mappings",
    "category": "Data Structures",
    "badge": "Data Backbone",
    "summary": "High-speed hash lookups, safe lookups with .get(), and dict comprehensions.",
    "steps": [
      {
        "title": "1. Dictionary Creation & Safe Lookup",
        "type": "code",
        "tag": "Dict Operations",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Dictionaries store associative key-value pairs with O(1) average lookup performance:\n          </p>\n        ",
        "codeExample": "# Dictionary lookup & safe .get() pattern\nuser_profile = {\n    \"username\": \"cyber_coder\",\n    \"role\": \"FullStack Engineer\",\n    \"level\": 42\n}\n\n# Safe lookup with default fallback avoids KeyError\navatar = user_profile.get(\"avatar_url\", \"https://default-avatar.png\")\nprint(\"User Role:\", user_profile[\"role\"])\nprint(\"Avatar:\", avatar)\n\n# Iterate key-value pairs\nprint(\"\\nUser Metadata:\")\nfor key, value in user_profile.items():\n    print(f\"  {key}: {value}\")",
        "explanation": "Always prefer .get(key, default) over dict[key] when looking up optional fields to prevent KeyError crashes."
      },
      {
        "title": "2. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "Given d = {\"a\": 1}, what will res = d.get(\"b\", 0) evaluate to?",
            "options": [
              "0",
              "None",
              "Raises a KeyError",
              "{\"b\": 0}"
            ],
            "answerIndex": 0,
            "explanation": "dict.get(key, default) safely returns the fallback default value (0) when the requested key is absent."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-11",
    "number": "11",
    "icon": "📦",
    "title": "Functions (def) & Modular Reuse",
    "category": "Project Organization",
    "badge": "Refactoring Core",
    "summary": "Encapsulate logic with def, understand parameters and arguments, return values, and tuple unpacking.",
    "steps": [
      {
        "title": "1. Function Definition & Return Values",
        "type": "code",
        "tag": "Function Architecture",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Functions eliminate duplicate code and create clean modular abstraction layers:\n          </p>\n        ",
        "codeExample": "# Function with multiple return values\ndef calculate_stats(numbers):\n    \"\"\"Calculate total sum, mean average, and maximum of a sequence.\"\"\"\n    total = sum(numbers)\n    avg = round(total / len(numbers), 2)\n    max_val = max(numbers)\n    return total, avg, max_val\n\ndata = [88, 92, 79, 95, 100]\ns_total, s_avg, s_max = calculate_stats(data)\nprint(f\"Scores Stats -> Total: {s_total}, Average: {s_avg}, Max: {s_max}\")",
        "explanation": "Returning multiple comma-separated values in Python automatically packs them as a tuple for elegant multi-variable unpacking."
      },
      {
        "title": "2. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "In Python, what does a function return if execution finishes without encountering an explicit return statement?",
            "options": [
              "None",
              "0",
              "False",
              "\"\" (empty string)"
            ],
            "answerIndex": 0,
            "explanation": "In Python, functions without an explicit return statement implicitly return None."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-12",
    "number": "12",
    "icon": "🎯",
    "title": "Advanced Functions: *args, **kwargs & Lambdas",
    "category": "Project Organization",
    "badge": "Advanced Techniques",
    "summary": "Default arguments, variable-length *args and **kwargs, lambda functions, and custom sorting.",
    "steps": [
      {
        "title": "1. *args, **kwargs & Lambda Expressions",
        "type": "code",
        "tag": "Dynamic Arguments",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            <code>*args</code> captures variable positional arguments as a tuple, while <code>**kwargs</code> captures keyword arguments as a dictionary:\n          </p>\n        ",
        "codeExample": "# *args and **kwargs flexible handler\ndef log_event(event_name, *tags, **metadata):\n    print(f\"[EVENT] {event_name}\")\n    print(f\"  Tags: {tags}\")\n    print(f\"  Metadata: {metadata}\")\n\nlog_event(\"UserLogin\", \"security\", \"web\", ip=\"192.168.1.1\", status=\"OK\")\n\n# Lambda for custom sorting\nstudents = [\n    {\"name\": \"Alice\", \"score\": 92},\n    {\"name\": \"Bob\", \"score\": 78},\n    {\"name\": \"Charlie\", \"score\": 99}\n]\nstudents.sort(key=lambda s: s[\"score\"], reverse=True)\nprint(\"\\nSorted students by score:\")\nfor s in students:\n    print(f\"  {s['name']}: {s['score']}\")",
        "explanation": "Lambdas are concise anonymous functions suited for callbacks, sorting keys, and map/filter transformations."
      },
      {
        "title": "2. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "In a function definition def foo(*args, **kwargs):, what are the types of parameters args and kwargs?",
            "options": [
              "tuple and dict",
              "list and dict",
              "tuple and set",
              "list and tuple"
            ],
            "answerIndex": 0,
            "explanation": "*args collects variable positional arguments into a tuple, while **kwargs collects keyword arguments into a dict."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-13",
    "number": "13",
    "icon": "🛡️",
    "title": "Exception Handling & Defensive Programming",
    "category": "Project Organization",
    "badge": "Robust Code",
    "summary": "Gracefully handle runtime errors with try-except-else-finally to prevent unexpected crashes.",
    "steps": [
      {
        "title": "1. try-except Fault Tolerance Architecture",
        "type": "code",
        "tag": "Defensive Coding",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Gracefully catch errors and execute fallback routines without aborting execution:\n          </p>\n        ",
        "codeExample": "# Robust division calculation\ndef safe_divide(a, b):\n    try:\n        val1 = float(a)\n        val2 = float(b)\n        res = val1 / val2\n    except ValueError:\n        return \"Error: Both arguments must be numeric!\"\n    except ZeroDivisionError:\n        return \"Error: Division by zero is undefined!\"\n    else:\n        return f\"Success: {val1} / {val2} = {round(res, 4)}\"\n    finally:\n        print(\"  [CleanUp] Operation attempt completed.\")\n\nprint(safe_divide(\"10\", \"2\"))\nprint(safe_divide(\"10\", \"0\"))\nprint(safe_divide(\"ten\", \"2\"))",
        "explanation": "The else block executes only if no exception occurred; finally always executes regardless of error conditions."
      },
      {
        "title": "2. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "In a try...except...finally construct, under what condition does the finally block execute?",
            "options": [
              "Always 100% executes, whether an exception occurred or not",
              "Only when an exception occurs",
              "Only when NO exception occurs",
              "Only when an unhandled exception occurs"
            ],
            "answerIndex": 0,
            "explanation": "The finally block provides the ultimate cleanup guarantee and will always execute whether try succeeded or failed."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-14",
    "number": "14",
    "icon": "🧱",
    "title": "Object-Oriented Programming (OOP)",
    "category": "Advanced Features",
    "badge": "Architecture Pillar",
    "summary": "Understand classes as blueprints, master __init__ constructor methods and the self parameter.",
    "steps": [
      {
        "title": "1. Class Definition & Object Instantiation",
        "type": "code",
        "tag": "OOP Blueprint",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Classes are blueprints that bind related data attributes and behaviors together:\n          </p>\n        ",
        "codeExample": "# Object-Oriented Hero Class\nclass CyberHero:\n    def __init__(self, name, skill, power=100):\n        self.name = name\n        self.skill = skill\n        self.power = power\n\n    def cast_skill(self):\n        return f\"⚡ {self.name} unleashes [{self.skill}]! Power: {self.power}\"\n\n    def level_up(self, boost=20):\n        self.power += boost\n        return f\"🌟 {self.name} leveled up to {self.power}!\"\n\nhero = CyberHero(\"Sparky\", \"Quantum Surge\", power=120)\nprint(hero.cast_skill())\nprint(hero.level_up(30))\nprint(hero.cast_skill())",
        "explanation": "self is the explicit reference to the current object instance being manipulated."
      },
      {
        "title": "2. Checkpoint Quiz",
        "type": "quiz",
        "tag": "Checkpoint Quiz",
        "quizzes": [
          {
            "question": "In Python class methods, what is the role of the first parameter (conventionally named self)?",
            "options": [
              "Refers to the specific object instance currently being invoked",
              "Refers to the Class blueprint itself",
              "Refers to the global namespace",
              "A required reserved Python keyword"
            ],
            "answerIndex": 0,
            "explanation": "self represents the current concrete instance object, allowing methods to read and write attributes belonging to that instance."
          }
        ]
      }
    ]
  },
  {
    "id": "chap-15",
    "number": "15",
    "icon": "🏆",
    "title": "Capstone Project: Real-World Mastery",
    "category": "Practical Projects",
    "badge": "Mastery Level",
    "summary": "Bring it all together! Build a password security strength analyzer and a student grade reporting system.",
    "steps": [
      {
        "title": "1. Password Security Strength Analyzer",
        "type": "code",
        "tag": "Capstone Project",
        "content": "\n          <p class=\"text-xs sm:text-sm text-slate-300 mb-3\">\n            Combine conditional checks, list comprehensions, dictionary mappings, and string functions into a production-ready utility:\n          </p>\n        ",
        "codeExample": "# Capstone Project: Password Strength Analyzer\ndef analyze_password(password):\n    criteria = {\n        \"Length >= 8\": len(password) >= 8,\n        \"Contains Digit\": any(c.isdigit() for c in password),\n        \"Contains Uppercase\": any(c.isupper() for c in password),\n        \"Contains Lowercase\": any(c.islower() for c in password),\n        \"Contains Special Symbol\": any(c in \"!@#$%^&*()-_+=\" for c in password)\n    }\n\n    score = sum(criteria.values())\n    levels = {\n        5: \"⭐⭐⭐⭐⭐ Fortress (Unbreakable)\",\n        4: \"⭐⭐⭐⭐ Strong (Recommended)\",\n        3: \"⭐⭐⭐ Moderate (Acceptable)\",\n        2: \"⭐⭐ Weak (Needs Improvement)\",\n        1: \"⭐ Extremely Dangerous\"\n    }\n    rating = levels.get(score, \"Hazardous\")\n\n    print(f\"Inspecting password: '{password}'\")\n    for check, passed in criteria.items():\n        status = \"✔ Passed\" if passed else \"✖ Failed\"\n        print(f\"  [{status}] {check}\")\n    print(f\"Security Rating: {rating}\\n\")\n    return score\n\nanalyze_password(\"Python2026!\")\nanalyze_password(\"weak123\")",
        "explanation": "Congratulations! You have written an end-to-end Python inspection tool using idiomatic practices!"
      },
      {
        "title": "2. Grand Mastery Achievement & Certificate",
        "type": "concept",
        "tag": "Certificate of Mastery",
        "content": "\n          <div class=\"p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-sky-500/10 to-indigo-500/15 border border-amber-400/30 text-center space-y-4\">\n            <div class=\"text-4xl\">🎓 🏆 🚀</div>\n            <h3 class=\"text-xl font-black text-amber-300\">Congratulations on Conquering Python Lab!</h3>\n            <p class=\"text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed\">\n              You have successfully traversed all 15 core chapters, from fundamental syntax to object-oriented architecture and capstone applications. You are now equipped with solid programming intuition and skills!\n            </p>\n            <div class=\"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold text-xs\">\n              <span>🌟 Verified Python Lab Master 2026</span>\n            </div>\n          </div>\n        "
      }
    ]
  }
];

const CODE_SNIPPETS_EN = {
  "hello": {
    "name": "👋 Hello World Greeting",
    "code": "# Welcome to Python Lab Interactive Playground!\nname = \"Cyber Explorer\"\nprint(f\"Hello, {name}!\")\nprint(\"🌟 Stay curious and enjoy the pure joy of coding!\")"
  },
  "pwd_checker": {
    "name": "🛡️ Password Strength Inspector",
    "code": "# Password security assessment\ndef check_pwd(pwd):\n    score = sum([\n        len(pwd) >= 8,\n        any(c.isdigit() for c in pwd),\n        any(c.isupper() for c in pwd),\n        any(c.islower() for c in pwd)\n    ])\n    return {4: \"Fortress\", 3: \"Strong\", 2: \"Moderate\", 1: \"Weak\"}.get(score, \"Hazardous\")\n\nprint(\"Strength Score:\", check_pwd(\"PyMaster2026!\"))"
  },
  "multiplication": {
    "name": "📐 Multiplication Table",
    "code": "# Classic Multiplication Table\nprint(\"=== 9x9 Multiplication Table ===\")\nfor i in range(1, 10):\n    for j in range(1, i + 1):\n        print(f\"{j}×{i}={i*j:<2}\", end=\"  \")\n    print()"
  },
  "fibonacci": {
    "name": "🔢 Fibonacci Sequence Generator",
    "code": "# First 15 numbers of Fibonacci Sequence\ndef fib(n):\n    a, b = 0, 1\n    res = []\n    for _ in range(n):\n        res.append(a)\n        a, b = b, a + b\n    return res\n\nprint(fib(15))"
  }
};

const CHEATSHEET_DATA = {
  "zh": {
    "title": "Python 核心语法极速备忘录",
    "sections": [
      {
        "title": "高频内置函数",
        "color": "text-sky-400",
        "items": [
          [
            "print(...)",
            "控制台输出"
          ],
          [
            "len(seq)",
            "序列长度"
          ],
          [
            "type(x)",
            "查看对象类型"
          ],
          [
            "range(start, stop)",
            "数值序列生成"
          ],
          [
            "sum(iter)",
            "快速总和求算"
          ],
          [
            "round(val, n)",
            "保留 n 位小数"
          ],
          [
            "max() / min()",
            "极值计算"
          ],
          [
            "sorted(iter)",
            "返回全新排好序的列表"
          ]
        ]
      },
      {
        "title": "字符串与切片魔法",
        "color": "text-amber-400",
        "items": [
          [
            "s[0]",
            "提取首个字符"
          ],
          [
            "s[-1]",
            "提取末尾字符"
          ],
          [
            "s[0:3]",
            "前 3 个字符（含头不含尾）"
          ],
          [
            "s[::-1]",
            "字符串一秒逆序倒装"
          ],
          [
            "s.strip()",
            "消除首尾空白"
          ],
          [
            "s.split(\",\")",
            "按逗号分割为列表"
          ],
          [
            "f\"{var:.2f}\"",
            "f-string 浮点格式化"
          ],
          [
            "s.replace(a, b)",
            "替换子串"
          ]
        ]
      },
      {
        "title": "列表与字典高频操作",
        "color": "text-emerald-400",
        "items": [
          [
            "lst.append(x)",
            "追加元素到末尾"
          ],
          [
            "lst.pop()",
            "弹出末尾元素"
          ],
          [
            "dict.get(k, default)",
            "防崩安全查值"
          ],
          [
            "dict.items()",
            "遍历键值对"
          ],
          [
            "set(lst)",
            "列表一键去重"
          ],
          [
            "[x**2 for x in lst]",
            "优雅列表推导式"
          ]
        ]
      }
    ]
  },
  "en": {
    "title": "Python Core Syntax Quick Reference",
    "sections": [
      {
        "title": "Essential Built-in Functions",
        "color": "text-sky-400",
        "items": [
          [
            "print(...)",
            "Console output stream"
          ],
          [
            "len(seq)",
            "Length of sequence"
          ],
          [
            "type(x)",
            "Inspect object type"
          ],
          [
            "range(start, stop)",
            "Generate numeric range"
          ],
          [
            "sum(iter)",
            "Compute sum of iterable"
          ],
          [
            "round(val, n)",
            "Round to n decimals"
          ],
          [
            "max() / min()",
            "Extreme value lookup"
          ],
          [
            "sorted(iter)",
            "Return new sorted list"
          ]
        ]
      },
      {
        "title": "String Slicing & Formatting",
        "color": "text-amber-400",
        "items": [
          [
            "s[0]",
            "First character"
          ],
          [
            "s[-1]",
            "Last character"
          ],
          [
            "s[0:3]",
            "First 3 characters (exclusive)"
          ],
          [
            "s[::-1]",
            "Reverse string instantly"
          ],
          [
            "s.strip()",
            "Strip surrounding whitespace"
          ],
          [
            "s.split(\",\")",
            "Split string into list"
          ],
          [
            "f\"{var:.2f}\"",
            "f-string float formatting"
          ],
          [
            "s.replace(a, b)",
            "Replace substring"
          ]
        ]
      },
      {
        "title": "List & Dict Operations",
        "color": "text-emerald-400",
        "items": [
          [
            "lst.append(x)",
            "Append element to tail"
          ],
          [
            "lst.pop()",
            "Pop last element"
          ],
          [
            "dict.get(k, default)",
            "Safe lookup without KeyError"
          ],
          [
            "dict.items()",
            "Iterate key-value pairs"
          ],
          [
            "set(lst)",
            "Deduplicate list elements"
          ],
          [
            "[x**2 for x in lst]",
            "List comprehension"
          ]
        ]
      }
    ]
  }
};

const I18N_STRINGS = {
  "zh": {
    "lang_toggle_btn": "English",
    "lang_toggle_title": "切换到英文版 / Switch to English",
    "rail_lang_tooltip": "🌐 切换为英文版 (Switch to English)",
    "search_input_placeholder": "搜索语法知识点...",
    "sidebar_filter_placeholder": "章节实时过滤...",
    "palette_placeholder": "输入关键词跳转章节、知识点、代码挑战...",
    "sidebar_title": "📚 课程关卡大纲",
    "sidebar_badge": "15 章节",
    "sidebar_toggle_title": "展开课程关卡大纲 (Ctrl+B)",
    "sidebar_close_title": "收起大纲 (ESC 或 Ctrl+B)",
    "sidebar_esc_hint": "按 ESC 或点击空白收起",
    "sidebar_reset_btn": "重置进度",
    "sidebar_empty": "无匹配章节，按 ESC 退出",
    "palette_empty": "无匹配结果，换个关键词试试",
    "playground_btn_hide": "💻 隐藏演练场",
    "playground_btn_show": "💻 展开演练场",
    "playground_toggle_title": "切换代码演练场显示/隐藏 (快捷键: Ctrl+J)",
    "tab_tutorial": "📖 教程",
    "tab_playground": "💻 演练场",
    "back_to_tutorial": "← 返回教程",
    "run_btn_text": "运行代码",
    "run_status_ready": "就绪",
    "run_status_running": "⚡ 运行中...",
    "run_status_done": "执行完成",
    "clear_terminal_btn": "清空输出",
    "clear_editor_title": "清空当前代码",
    "terminal_waiting": "等待执行... 点击【运行代码】或按 Ctrl+Enter 查看实时结果。",
    "editor_placeholder": "# 在此编写或修改 Python 代码...",
    "preset_select_default": "📂 预设代码范例...",
    "dock_run_title": "⚡ 运行代码 (Ctrl+Enter)",
    "dock_playground_title": "💻 显隐演练场 (Ctrl+J)",
    "dock_search_title": "🔍 全局检索 (Ctrl+K)",
    "dock_cheat_title": "📖 语法速查宝典",
    "dock_video_title": "✨ 动态背景微粒流光调节",
    "dock_progress_mastered": "关已掌握",
    "dock_progress_reset_hint": "点击可重置进度",
    "deck_expand_btn": "展开卡片",
    "deck_collapse_btn": "单步专注",
    "deck_expand_tooltip": "展开全部步骤 (自由滑动浏览)",
    "deck_collapse_tooltip": "收起为单步专注卡片",
    "step_prev": "← 上一步",
    "step_next": "下一步 →",
    "step_copy": "复制",
    "step_copied": "已复制！",
    "step_fill_playground": "▶ 填入演练场并运行",
    "step_mark_mastered": "标记已掌握 ✓",
    "step_already_mastered": "已掌握 ✓",
    "quiz_submit": "提交答案",
    "quiz_select_alert": "请先选择一个答案选项！",
    "quiz_correct": "回答正确！🎉",
    "quiz_incorrect": "回答有误，再仔细想想~",
    "quiz_explanation_header": "🔍 深度解析：",
    "inertia_cue_next": "继续滑动切换下一步 →",
    "inertia_cue_prev": "← 向上滑动返回上一步",
    "cheatsheet_got_it": "我知道了",
    "reset_confirm": "确定要清空全部 15 个章节的学习进度吗？",
    "reset_toast": "进度已重置！",
    "toast_lang_switched": "🌐 已切换为中文！",
    "video_resumed": "▶ 动态星云微粒背景已恢复播放",
    "video_vivid": "✨ 动态微粒已切换为【高亮沉浸】模式！",
    "video_paused": "⏸ 动态背景已暂停",
    "code_copied_toast": "代码已成功复制到剪贴板！"
  },
  "en": {
    "lang_toggle_btn": "中文",
    "lang_toggle_title": "Switch to Chinese / 切换为中文",
    "rail_lang_tooltip": "🌐 Switch to Chinese / 切换为中文",
    "search_input_placeholder": "Search syntax & concepts...",
    "sidebar_filter_placeholder": "Filter chapters in real time...",
    "palette_placeholder": "Type keywords to jump to chapters, syntax, challenges...",
    "sidebar_title": "📚 Course Outline",
    "sidebar_badge": "15 Chapters",
    "sidebar_toggle_title": "Open Course Outline (Ctrl+B)",
    "sidebar_close_title": "Collapse Outline (ESC or Ctrl+B)",
    "sidebar_esc_hint": "Press ESC or click backdrop to close",
    "sidebar_reset_btn": "Reset Progress",
    "sidebar_empty": "No matching chapters found. Press ESC to exit",
    "palette_empty": "No matching results. Try another keyword",
    "playground_btn_hide": "💻 Hide Playground",
    "playground_btn_show": "💻 Show Playground",
    "playground_toggle_title": "Toggle Code Playground (Ctrl+J)",
    "tab_tutorial": "📖 Tutorial",
    "tab_playground": "💻 Playground",
    "back_to_tutorial": "← Back to Tutorial",
    "run_btn_text": "Run Code",
    "run_status_ready": "Ready",
    "run_status_running": "⚡ Running...",
    "run_status_done": "Completed",
    "clear_terminal_btn": "Clear Output",
    "clear_editor_title": "Clear current code",
    "terminal_waiting": "Waiting for execution... Click [Run Code] or press Ctrl+Enter to run.",
    "editor_placeholder": "# Write or modify Python code here...",
    "preset_select_default": "📂 Preset Snippets...",
    "dock_run_title": "⚡ Run Code (Ctrl+Enter)",
    "dock_playground_title": "💻 Toggle Playground (Ctrl+J)",
    "dock_search_title": "🔍 Global Search (Ctrl+K)",
    "dock_cheat_title": "📖 Syntax Cheatsheet",
    "dock_video_title": "✨ Particle Nebula Ambient Controls",
    "dock_progress_mastered": "levels mastered",
    "dock_progress_reset_hint": "Click to reset progress",
    "deck_expand_btn": "Expand Cards",
    "deck_collapse_btn": "Step Focus",
    "deck_expand_tooltip": "Expand all steps (smooth scroll)",
    "deck_collapse_tooltip": "Collapse into single focused step",
    "step_prev": "← Previous",
    "step_next": "Next →",
    "step_copy": "Copy",
    "step_copied": "Copied!",
    "step_fill_playground": "▶ Send to Playground & Run",
    "step_mark_mastered": "Mark Mastered ✓",
    "step_already_mastered": "Mastered ✓",
    "quiz_submit": "Submit Answer",
    "quiz_select_alert": "Please select an answer first!",
    "quiz_correct": "Correct! 🎉",
    "quiz_incorrect": "Not quite, give it another thought~",
    "quiz_explanation_header": "🔍 Explanation:",
    "inertia_cue_next": "Scroll to proceed to next step →",
    "inertia_cue_prev": "← Scroll up to return to previous step",
    "cheatsheet_got_it": "Got it",
    "reset_confirm": "Are you sure you want to reset learning progress for all 15 chapters?",
    "reset_toast": "Progress has been reset!",
    "toast_lang_switched": "🌐 Switched to English!",
    "video_resumed": "▶ Dynamic background video resumed",
    "video_vivid": "✨ Particle background set to [Immersive Vivid] mode!",
    "video_paused": "⏸ Particle background paused",
    "code_copied_toast": "Code copied to clipboard successfully!"
  }
};

function t(key) {
  const lang = (window.AppState && window.AppState.lang) || localStorage.getItem("pylab_lang") || "zh";
  const dict = I18N_STRINGS[lang] || I18N_STRINGS["zh"];
  return dict[key] !== undefined ? dict[key] : (I18N_STRINGS["zh"][key] || key);
}

window.CHAPTERS_DATA_EN = CHAPTERS_DATA_EN;
window.CODE_SNIPPETS_EN = CODE_SNIPPETS_EN;
window.CHEATSHEET_DATA = CHEATSHEET_DATA;
window.I18N_STRINGS = I18N_STRINGS;
window.t = t;
