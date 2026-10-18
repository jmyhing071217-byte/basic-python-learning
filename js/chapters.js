/**
 * Python 交互式通关教程 - 核心课程题库与章节数据 (含高颜值可视化图解)
 */

const CHAPTERS_DATA_ZH = [
  {
    id: "chap-1",
    number: "01",
    icon: "🚀",
    title: "初识 Python 与第一行代码",
    category: "起步入门",
    badge: "零基础必修",
    summary: "理解 Python 的核心哲学，剖析 print() 函数结构，掌握中英文标点避坑法则与注释规范。",
    steps: [
      {
        title: "1. 什么是 Python？",
        type: "concept",
        tag: "核心理念",
        content: `
          <div class="space-y-4">
            <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <strong>Python</strong> 是一门语法极度优美、读写如同日常英语的高级编程语言。其核心哲学（The Zen of Python）强调<strong>“优美胜于丑陋，明了胜于晦涩，简洁胜于复合”</strong>。
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-3">
              <div class="p-4 rounded-2xl bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20">
                <div class="text-sky-500 font-bold mb-1 flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 rounded-full bg-sky-500"></span> 语法极度清晰
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">告别纷繁复杂的大括号与分号，代码即自然语言，新手入坑阻力最小。</p>
              </div>
              <div class="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent border border-indigo-500/20">
                <div class="text-indigo-400 font-bold mb-1 flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 rounded-full bg-indigo-400"></span> 庞大生态圈
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">人工智能、大语言模型开发、自动化脚本、数据可视化领域的一致首选。</p>
              </div>
              <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20">
                <div class="text-amber-400 font-bold mb-1 flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 rounded-full bg-amber-400"></span> 全平台通用
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">编写一次，Windows、macOS、Linux 服务器乃至移动端均可无缝跨平台执行。</p>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "2. print() 函数深度剖析",
        type: "code",
        tag: "语法图解",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            在 Python 中输出内容，只需调用内置函数 <code>print(...)</code>。我们来看它的内部结构图解：
          </p>

          <!-- 视觉语法图解卡片 -->
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 my-3 text-xs font-mono">
            <div class="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-slate-200 py-1">
              <span class="px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/40 text-blue-400 font-bold">print</span>
              <span class="text-slate-500 font-bold text-base">(</span>
              <span class="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">"Hello, Python!"</span>
              <span class="text-slate-500 font-bold">,</span>
              <span class="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300">2026</span>
              <span class="text-slate-500 font-bold text-base">)</span>
            </div>
            <div class="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800 text-[11px] text-center text-slate-400">
              <div><span class="text-blue-400">▲</span> 内置函数名</div>
              <div><span class="text-emerald-400">▲</span> 字符串 (必须用成对引号)</div>
              <div><span class="text-amber-400">▲</span> 数字参数 (多参数逗号隔开)</div>
            </div>
          </div>
        `,
        codeExample: `# 打印经典问候语
print("Hello, World!")
print("你好，欢迎来到 Python 极客世界！")

# 多个参数会自动以空格连接输出
print("欢迎学习", "Python", 2026)`,
        explanation: "点击右上方【▶ 填入演练场并运行】，可以直接在右侧控制台查看实时运行耗时与结果！"
      },
      {
        title: "3. 标点规范与常见报错避坑",
        type: "pitfall",
        tag: "避坑法则",
        content: `
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
              <h4 class="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2">📝 注释用法指南</h4>
              <ul class="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>• <strong>单行注释</strong>：使用 <code>#</code>，注释仅供人类阅读，执行时计算机会自动跳过。</li>
                <li>• <strong>多行注释</strong>：使用三对单引号 <code>'''</code> 或三对双引号 <code>"""</code>。</li>
              </ul>
            </div>
            <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
              <h4 class="font-bold text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2">⚠️ 新手两大顶级雷区</h4>
              <ul class="text-xs space-y-1.5 text-rose-800 dark:text-rose-300">
                <li>• <strong>中文半角/全角混淆</strong>：所有符号（<code>"</code>, <code>()</code>, <code>,</code>）必须处于<strong>英文半角输入法</strong>状态！中文括号 <code>（）</code> 会引发 <code>SyntaxError</code>。</li>
                <li>• <strong>严格大小写敏感</strong>：Python 严谨区分大小写，写成 <code>Print()</code> 会报错 <code>NameError</code>，必须全小写 <code>print()</code>。</li>
              </ul>
            </div>
          </div>
        `,
        codeExample: `# 正确规范写法：纯英文标点，严格全小写
print("标点正确，运行顺畅！")  # 这一行不会报错`
      },
      {
        title: "4. 本节动手挑战",
        type: "challenge",
        tag: "极客挑战",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            点击下方按钮载入代码，在右侧演练场中将其修改为你自己的网名与学习宣言，并运行通过！
          </p>
        `,
        codeExample: `# 挑战：输出你的专属极客宣言
coder = "Python 新星"
start_date = "2026-10-17"
manifesto = "保持好奇，用代码构建未来！"

print("=" * 35)
print(f"学员代号: {coder}")
print(f"启程日期: {start_date}")
print(f"行动誓言: {manifesto}")
print("=" * 35)`,
        explanation: "运行成功后点击下方【下一步】开启随堂测验！"
      },
      {
        title: "5. 随堂知识通关测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "下列哪一行 Python 代码能够正确在终端输出内容且不报错？",
            options: [
              "Print('Hello World')",
              "print('Hello World')",
              "print(Hello World)",
              "print（'Hello World'）"
            ],
            answerIndex: 1,
            explanation: "A 项 Print 首字母大写错误；C 项文字缺少引号；D 项使用了中文全角括号。"
          },
          {
            question: "在 Python 中，单行注释应该以哪个符号开头？",
            options: [
              "// 双斜杠",
              "/* 星号",
              "# 井号",
              "<!-- 尖括号"
            ],
            answerIndex: 2,
            explanation: "Python 使用 # 作为单行注释符号；// 在 Python 中代表整除运算符。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-2",
    number: "02",
    icon: "🔢",
    title: "变量与四大核心数据类型",
    category: "起步入门",
    badge: "基础核心",
    summary: "掌握变量赋值的内存指针原理，透析整数、浮点数、字符串与布尔值，掌握类型转换机制。",
    steps: [
      {
        title: "1. 变量与内存指针本质",
        type: "concept",
        tag: "底层透析",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            在 Python 中，<strong>变量不是储物盒，而是贴在内存对象上的便利贴标签</strong>：
          </p>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 my-3 text-xs font-mono">
            <div class="flex items-center justify-center gap-4 text-slate-200 py-1">
              <span class="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 font-bold">score (变量标签)</span>
              <span class="text-slate-400 font-bold">─── 指向 ───></span>
              <span class="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold">📦 内存值: 100</span>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 mt-2">
            <strong>命名准则：</strong>推荐使用蛇形命名法（如 <code>user_name</code>、<code>total_count</code>），禁止以数字开头，不能使用系统关键字（如 <code>if</code>, <code>def</code>, <code>class</code>）。
          </div>
        `,
        codeExample: `# 声明变量并赋值
user_name = "极客阿强"
age = 22
height = 1.78
is_active = True

print("姓名:", user_name)
print("年龄:", age)
print("身高(m):", height)
print("在线状态:", is_active)`
      },
      {
        title: "2. 四大基本数据类型全景",
        type: "concept",
        tag: "类型矩阵",
        content: `
          <div class="overflow-x-auto my-2">
            <table class="w-full text-left text-xs border-collapse border border-slate-200 dark:border-slate-800 rounded-xl">
              <thead class="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                <tr>
                  <th class="p-2.5 border border-slate-200 dark:border-slate-800">类型名称</th>
                  <th class="p-2.5 border border-slate-200 dark:border-slate-800">标识代号</th>
                  <th class="p-2.5 border border-slate-200 dark:border-slate-800">字面值范例</th>
                  <th class="p-2.5 border border-slate-200 dark:border-slate-800">特点说明</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td class="p-2.5 font-medium">整数 (Integer)</td>
                  <td class="p-2.5 font-mono text-sky-400 font-bold">int</td>
                  <td class="p-2.5 font-mono">100, 0, -50</td>
                  <td class="p-2.5">正负整数与零，无大小限制</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">浮点数 (Float)</td>
                  <td class="p-2.5 font-mono text-sky-400 font-bold">float</td>
                  <td class="p-2.5 font-mono">3.14, -0.01, 2.0</td>
                  <td class="p-2.5">带小数点的实数</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">字符串 (String)</td>
                  <td class="p-2.5 font-mono text-sky-400 font-bold">str</td>
                  <td class="p-2.5 font-mono">"Python", 'AI'</td>
                  <td class="p-2.5">用引号包裹的文字字符</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-medium">布尔值 (Boolean)</td>
                  <td class="p-2.5 font-mono text-sky-400 font-bold">bool</td>
                  <td class="p-2.5 font-mono">True, False</td>
                  <td class="p-2.5">真与假（首字母严格大写）</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        codeExample: `# 使用 type() 实时探测变量的类型
val_int = 42
val_float = 3.14159
val_str = "Code with Passion"
val_bool = True

print(type(val_int))   # <class 'int'>
print(type(val_float)) # <class 'float'>
print(type(val_str))   # <class 'str'>
print(type(val_bool))  # <class 'bool'>`
      },
      {
        title: "3. 类型转换 (Type Casting)",
        type: "code",
        tag: "语法实操",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            字符串与数字不能随意直接相加。通过 <code>int()</code>、<code>float()</code>、<code>str()</code> 可以显式转换类型：
          </p>
        `,
        codeExample: `# 1. 字符串转数字
price_str = "89.5"
price = float(price_str)
print("单价增加 10 元:", price + 10)  # 99.5

# 2. 数字转字符串做拼接
score = 100
msg = "最终成绩为: " + str(score) + " 分"
print(msg)`
      },
      {
        title: "4. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "如果 a = '10'，b = 20，那么表达式 a + str(b) 的计算结果是？",
            options: [
              "30",
              "'1020'",
              "抛出 TypeError 异常",
              "'10 20'"
            ],
            answerIndex: 1,
            explanation: "str(b) 将 20 转为字符串 '20'，两个字符串通过 + 连接拼接成 '1020'。"
          },
          {
            question: "下列哪一个是合法的 Python 变量命名？",
            options: [
              "2nd_score",
              "user-name",
              "class",
              "user_score_2"
            ],
            answerIndex: 3,
            explanation: "变量不能以数字开头（A错），不能有减号（B错），不能用关键字（C错），user_score_2 完全合法。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-3",
    number: "03",
    icon: "➕",
    title: "算术运算符与常用计算",
    category: "起步入门",
    badge: "实用高频",
    summary: "掌握加减乘除、整除 //、取余 % 与幂运算 **，领会结合律与运算优先级。",
    steps: [
      {
        title: "1. 算术运算符全景",
        type: "concept",
        tag: "算术核心",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">特别注意 Python 中区别于其它语言的三个特殊符号：</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-3">
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-sky-400 font-bold font-mono text-sm">/ (除法)</span>
              <p class="text-slate-400 mt-1">永远返回 float 浮点数，即使整除 <code>8 / 2</code> 也是 <code>4.0</code>。</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-amber-400 font-bold font-mono text-sm">// (整除)</span>
              <p class="text-slate-400 mt-1">向下整除，直接扔掉所有小数位（如 <code>19 // 4 = 4</code>）。</p>
            </div>
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span class="text-emerald-400 font-bold font-mono text-sm">% (取余/模)</span>
              <p class="text-slate-400 mt-1">计算余数，判断偶数最常用：<code>n % 2 == 0</code>。</p>
            </div>
          </div>
        `,
        codeExample: `a = 19
b = 4

print("普通除法 a / b =", a / b)   # 4.75
print("向下整除 a // b =", a // b) # 4
print("求取余数 a % b =", a % b)   # 3
print("幂运算 2 ** 8 =", 2 ** 8)   # 256`
      },
      {
        title: "2. 复合赋值与优先级",
        type: "code",
        tag: "运算规则",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            复合赋值操作符 <code>+=</code>、<code>-=</code>、<code>*=</code> 让代码更简洁：
          </p>
        `,
        codeExample: `counter = 100
counter += 20  # 等同于 counter = counter + 20
print("累加后计数:", counter)

# 幂运算的右结合特性 (从右往左算)
print(2 ** 3 ** 2)  # 等价于 2 ** (3 ** 2) = 2 ** 9 = 512`
      },
      {
        title: "3. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "表达式 25 // 4 和 25 % 4 的结果分别是什么？",
            options: [
              "6 和 1",
              "6.25 和 1",
              "1 和 6",
              "6 和 0"
            ],
            answerIndex: 0,
            explanation: "25 除以 4 商是 6 余 1，所以整除 // 结果为 6，取模 % 结果为 1。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-4",
    number: "04",
    icon: "🔤",
    title: "玩转字符串与现代 f-string",
    category: "起步入门",
    badge: "开发利器",
    summary: "掌握切片魔法 [start:end:step] 的正负双向下标尺标，驾驭现代 f-string 格式化。",
    steps: [
      {
        title: "1. 现代 f-string 格式化",
        type: "concept",
        tag: "格式化艺术",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            在 Python 3.6+ 中，字符串前缀 <code>f</code> 可以在大括号 <code>{}</code> 内直接嵌入变量甚至任意计算表达式：
          </p>
        `,
        codeExample: `username = "艾达"
score = 99.456
rank = 1

# f-string: {变量:格式}
print(f"恭喜【{username}】以 {score:.2f} 分荣登排行榜第 {rank} 名！")

# 嵌入运算表达式
price = 120.0
discount = 0.85
print(f"原价 ¥{price}，折后实付 ¥{price * discount:.2f}")`
      },
      {
        title: "2. 字符串双向索引与切片尺标",
        type: "concept",
        tag: "切片尺标图解",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-2">
            字符串支持<strong>正向从 0 开始</strong>以及<strong>反向从 -1 开始</strong>的双向下标：
          </p>

          <!-- 切片标尺可视化 -->
          <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 my-3 font-mono text-center">
            <div class="text-[11px] text-sky-400 font-bold mb-1">字符串切片标尺：s = "PYTHON"</div>
            <div class="flex items-center justify-center gap-1.5 overflow-x-auto py-2">
              <div class="slice-cell bg-slate-800/80 border border-slate-700">
                <span class="text-[10px] text-emerald-400 font-bold">0</span>
                <span class="text-base text-white font-extrabold my-0.5">P</span>
                <span class="text-[10px] text-amber-400 font-bold">-6</span>
              </div>
              <div class="slice-cell bg-slate-800/80 border border-slate-700">
                <span class="text-[10px] text-emerald-400 font-bold">1</span>
                <span class="text-base text-white font-extrabold my-0.5">Y</span>
                <span class="text-[10px] text-amber-400 font-bold">-5</span>
              </div>
              <div class="slice-cell bg-slate-800/80 border border-slate-700">
                <span class="text-[10px] text-emerald-400 font-bold">2</span>
                <span class="text-base text-white font-extrabold my-0.5">T</span>
                <span class="text-[10px] text-amber-400 font-bold">-4</span>
              </div>
              <div class="slice-cell bg-slate-800/80 border border-slate-700">
                <span class="text-[10px] text-emerald-400 font-bold">3</span>
                <span class="text-base text-white font-extrabold my-0.5">H</span>
                <span class="text-[10px] text-amber-400 font-bold">-3</span>
              </div>
              <div class="slice-cell bg-slate-800/80 border border-slate-700">
                <span class="text-[10px] text-emerald-400 font-bold">4</span>
                <span class="text-base text-white font-extrabold my-0.5">O</span>
                <span class="text-[10px] text-amber-400 font-bold">-2</span>
              </div>
              <div class="slice-cell bg-slate-800/80 border border-slate-700">
                <span class="text-[10px] text-emerald-400 font-bold">5</span>
                <span class="text-base text-white font-extrabold my-0.5">N</span>
                <span class="text-[10px] text-amber-400 font-bold">-1</span>
              </div>
            </div>
            <div class="text-[10px] text-slate-500 mt-1">绿色为正向下标 (从0开始) ；黄色为逆向下标 (从-1开始)</div>
          </div>
        `,
        codeExample: `text = "PYTHON"

print("下标 0:", text[0])       # P
print("下标 -1:", text[-1])     # N
print("切片 [1:4]:", text[1:4]) # YTH (含头不含尾)
print("逆序反转 [::-1]:", text[::-1]) # NOHTYP`
      },
      {
        title: "3. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "若 s = 'abcdef'，那么 s[1:4] 的结果是？",
            options: [
              "'abc'",
              "'bcd'",
              "'bcde'",
              "'b'"
            ],
            answerIndex: 1,
            explanation: "切片含头不含尾：取下标 1('b')、2('c')、3('d')，不包含下标 4('e')，结果是 'bcd'。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-5",
    number: "05",
    icon: "⚖️",
    title: "条件分支与逻辑判断",
    category: "流程控制",
    badge: "逻辑核心",
    summary: "理解 Python 灵魂缩进规则，掌握 if-elif-else 嵌套与单行三元表达式。",
    steps: [
      {
        title: "1. 逻辑运算符与 if 分支",
        type: "concept",
        tag: "逻辑基础",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            Python 通过 <strong>4 个空格缩进</strong> 界定分支代码块归属，条件末尾必须写英文冒号 <code>:</code>：
          </p>
        `,
        codeExample: `score = 88

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "D"

print(f"得分 {score} 评级为: {grade}")`
      },
      {
        title: "2. 优雅的单行三元表达式",
        type: "code",
        tag: "代码精简",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            语法：<code>为真时的值 if 条件 else 为假时的值</code>：
          </p>
        `,
        codeExample: `age = 20
status = "已成年" if age >= 18 else "未成年"
print("身份判定:", status)`
      },
      {
        title: "3. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "判断两个变量的值是否相等，应使用什么符号？",
            options: [
              "=",
              "==",
              "===",
              "is_equal"
            ],
            answerIndex: 1,
            explanation: "一个等号 = 是赋值语句，两个等号 == 才是比较两者的值是否相等。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-6",
    number: "06",
    icon: "🔄",
    title: "循环控制：for 与 while",
    category: "流程控制",
    badge: "自动化利器",
    summary: "掌握 range 步长计数器、while 死循环防范，熟练运用 break 与 continue 控制流程。",
    steps: [
      {
        title: "1. for 循环与 range 计数器",
        type: "concept",
        tag: "迭代循环",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            <code>range(start, stop, step)</code> 具有左闭右开特性，是驱动 for 循环最核心的计数器：
          </p>
        `,
        codeExample: `# 1. 基础计数
for i in range(1, 6):
    print(i, end=" ")
print()

# 2. 奇数步长遍历
for odd in range(1, 10, 2):
    print("奇数:", odd)`
      },
      {
        title: "2. break 与 continue 流程刹车",
        type: "code",
        tag: "控制机制",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            <code>continue</code> 跳过当前这一轮直接进入下一轮；<code>break</code> 彻底终止并跳出循环。
          </p>
        `,
        codeExample: `# continue 示例
for n in range(1, 6):
    if n == 3:
        continue  # 跳过 3
    print(n, end=" ")
print()

# break 示例
for n in range(1, 10):
    if n > 5:
        break  # 大于 5 立即退出
    print(n, end=" ")
print()`
      },
      {
        title: "3. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "代码 for i in range(2, 9, 3): print(i, end=' ') 会输出什么？",
            options: [
              "2 5 8",
              "2 5 8 11",
              "2 4 6 8",
              "3 6 9"
            ],
            answerIndex: 0,
            explanation: "从 2 开始，步长为 3：2, 5, 8，下一个 11 超出 9，因此输出 2 5 8。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-7",
    number: "07",
    icon: "📋",
    title: "核心序列：列表 (List)",
    category: "数据容器",
    badge: "使用率第一",
    summary: "剖析列表在内存中的连续存储，掌握 append, pop, sort 等核心增删改查方法。",
    steps: [
      {
        title: "1. 列表常用增删改查",
        type: "code",
        tag: "高频方法",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">列表是可变的有序序列：</p>
        `,
        codeExample: `todos = ["学习Python", "做运动"]

todos.append("阅读半小时")
todos.insert(1, "吃营养午餐")
print("当前待办:", todos)

done = todos.pop()  # 弹出末尾
print("已完成任务:", done)
todos.remove("吃营养午餐")
print("最新清单:", todos)`
      },
      {
        title: "2. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "若 lst = [1, 2, 3]，执行 lst.append([4, 5]) 后，len(lst) 是？",
            options: [
              "5",
              "4",
              "3",
              "报错"
            ],
            answerIndex: 1,
            explanation: "append 将 [4, 5] 作为单一子列表整体追加到末尾，此时元素个数是 4。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-8",
    number: "08",
    icon: "⚡",
    title: "列表推导式与高级迭代技巧",
    category: "数据容器",
    badge: "进阶利器",
    summary: "领略 Pythonic 风格精髓：一行搞定循环与条件过滤，掌握 enumerate 与 zip。",
    steps: [
      {
        title: "1. 列表推导式 (List Comprehension)",
        type: "code",
        tag: "核心语法",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">语法：<code>[表达式 for 变量 in 列表 if 条件]</code>：</p>
        `,
        codeExample: `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 一行生成所有偶数的平方
even_squares = [x ** 2 for x in nums if x % 2 == 0]
print("偶数平方列表:", even_squares)`
      },
      {
        title: "2. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "表达式 [x * 10 for x in [1, 2, 3] if x > 1] 的计算结果是？",
            options: [
              "[10, 20, 30]",
              "[20, 30]",
              "[1, 2, 3]",
              "[20]"
            ],
            answerIndex: 1,
            explanation: "过滤条件 x > 1 排除了 1，剩余 2 和 3，分别乘 10 得到 [20, 30]。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-9",
    number: "09",
    icon: "🔒",
    title: "元组 (Tuple) 与 集合 (Set)",
    category: "数据容器",
    badge: "不可变与去重",
    summary: "理解元组只读安全与多元解包，掌握集合无序去重与数学交并补。",
    steps: [
      {
        title: "1. 元组解包与集合去重",
        type: "code",
        tag: "特性对比",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">元组用 <code>()</code>，集合用 <code>{}</code>：</p>
        `,
        codeExample: `# 元组解包
point = (100, 200)
x, y = point
print(f"坐标解包: x={x}, y={y}")

# 集合天然去重与交集
tags = [1, 2, 2, 3, 3, 3, 4]
print("去重集合:", set(tags))

set_a = {"Python", "SQL"}
set_b = {"Python", "Rust"}
print("共同技术栈 (交集):", set_a & set_b)`
      },
      {
        title: "2. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "执行 len(set([1, 2, 2, 3, 3, 3])) 的结果是多少？",
            options: [
              "6",
              "3",
              "2",
              "1"
            ],
            answerIndex: 1,
            explanation: "集合自动消除重复项，只保留 {1, 2, 3}，其长度为 3。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-10",
    number: "10",
    icon: "🗺️",
    title: "字典 (Dict)：键值对映射",
    category: "数据容器",
    badge: "开发主力",
    summary: "键值映射的高速检索，使用 .get() 防崩技巧，掌握字典推导式。",
    steps: [
      {
        title: "1. 字典创建与安全查询",
        type: "code",
        tag: "语法核心",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">使用 <code>.get()</code> 避免因为 Key 不存在而导致程序闪退：</p>
        `,
        codeExample: `user = {"name": "张三", "role": "admin"}

# 使用 get 安全取值
email = user.get("email", "未绑定邮箱")
print("用户邮箱:", email)

for k, v in user.items():
    print(f"属性 {k} -> {v}")`
      },
      {
        title: "2. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "关于字典的 Key（键），下列哪个类型不能作为键？",
            options: [
              "字符串 'name'",
              "整数 100",
              "元组 (1, 2)",
              "列表 [1, 2]"
            ],
            answerIndex: 3,
            explanation: "字典的 Key 必须是不可变对象，列表是可变对象，无法计算哈希值，不能作为 Key。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-11",
    number: "11",
    icon: "📦",
    title: "函数入门 (def) 与模块化复用",
    category: "工程组织",
    badge: "重构核心",
    summary: "用 def 封装功能，搞懂形参与实参、return 返回值与多返回值解构。",
    steps: [
      {
        title: "1. 函数定义与多返回值",
        type: "code",
        tag: "函数实操",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">通过 <code>return</code> 可以一次性返回多个数据：</p>
        `,
        codeExample: `def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

low, high, avg = get_stats([12, 45, 88, 92, 34])
print(f"最低: {low}, 最高: {high}, 均值: {avg:.1f}")`
      },
      {
        title: "2. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "如果一个函数内部没有写 return，调用后的返回值是？",
            options: [
              "0",
              "False",
              "None",
              "报错"
            ],
            answerIndex: 2,
            explanation: "无明确 return 语句的 Python 函数隐式返回 None。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-12",
    number: "12",
    icon: "🎯",
    title: "函数进阶：参数艺术与匿名函数",
    category: "工程组织",
    badge: "进阶核心",
    summary: "掌握默认参数机制、*args 与 **kwargs 动态参数、匿名函数 lambda 与 sorted 自定义排序。",
    steps: [
      {
        title: "1. *args, **kwargs 与 lambda",
        type: "code",
        tag: "参数艺术",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            <code>*args</code> 接收任意位置参数，<code>**kwargs</code> 接收任意关键字参数：
          </p>
        `,
        codeExample: `# lambda 排序
players = [{"name": "小明", "score": 85}, {"name": "小红", "score": 98}]
players.sort(key=lambda p: p["score"], reverse=True)
print("排名第一:", players[0]["name"])`
      },
      {
        title: "2. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "表达式 (lambda x, y: x * y + 1)(3, 4) 的计算结果是？",
            options: [
              "12",
              "13",
              "7",
              "语法错误"
            ],
            answerIndex: 1,
            explanation: "计算 3 * 4 + 1 = 13。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-13",
    number: "13",
    icon: "🛡️",
    title: "异常捕获与防御性编程",
    category: "工程组织",
    badge: "健壮代码",
    summary: "学会使用 try-except-else-finally 优雅处理错误，杜绝程序崩溃闪退。",
    steps: [
      {
        title: "1. try-except 容错机制",
        type: "code",
        tag: "防御编程",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">优雅捕获指定异常：</p>
        `,
        codeExample: `def safe_convert(val):
    try:
        num = int(val)
        return f"转换成功: {num}"
    except ValueError:
        return "❌ 无法转换为整数"
    finally:
        print("操作已记录日志")

print(safe_convert("123"))
print(safe_convert("abc"))`
      },
      {
        title: "2. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "在 try 结构中，无论是否发生异常都会无条件执行的代码块是？",
            options: [
              "else 块",
              "except 块",
              "finally 块",
              "catch 块"
            ],
            answerIndex: 2,
            explanation: "finally 块无论成败必定在最后执行。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-14",
    number: "14",
    icon: "🧱",
    title: "面向对象编程 (OOP) 初体验",
    category: "高级特性",
    badge: "架构基石",
    summary: "理解类与对象的蓝图比喻，掌握 __init__ 构造方法与 self 的本质。",
    steps: [
      {
        title: "1. 类定义与对象实例化",
        type: "code",
        tag: "OOP 核心",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">Class 是蓝图，Object 是实例：</p>
        `,
        codeExample: `class Robot:
    def __init__(self, name, model):
        self.name = name
        self.model = model
    def say_hi(self):
        return f"🤖 编号 {self.model}: 你好，我是机器人 {self.name}！"

r = Robot("阿尔法", "T-800")
print(r.say_hi())`
      },
      {
        title: "2. 随堂小测验",
        type: "quiz",
        tag: "闯关自测",
        quizzes: [
          {
            question: "类方法中的第一个形参 self 代表什么？",
            options: [
              "类本身",
              "当前被调用的实例对象本身",
              "全局变量",
              "父类"
            ],
            answerIndex: 1,
            explanation: "self 代表当前具体实例对象。"
          }
        ]
      }
    ]
  },
  {
    id: "chap-15",
    number: "15",
    icon: "🏆",
    title: "综合实战案例通关项目",
    category: "实战综合",
    badge: "大显身手",
    summary: "融会贯通！密码安全强度检测器与班级学生成绩综合分析大数据报表。",
    steps: [
      {
        title: "1. 密码安全强度检测器",
        type: "code",
        tag: "实战项目",
        content: `
          <p class="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
            运用字符串方法、逻辑分支与条件推导式检测密码：
          </p>
        `,
        codeExample: `def evaluate_password(pwd):
    criteria = [
        len(pwd) >= 8,
        any(c.isdigit() for c in pwd),
        any(c.isupper() for c in pwd),
        any(c.islower() for c in pwd)
    ]
    score = sum(criteria)
    rating = {4: "极强 🛡️", 3: "良好 🟢", 2: "中等 🟡", 1: "脆弱 🔴"}.get(score, "高危 ⚠️")
    return rating

tests = ["123456", "python2026", "PyMaster#99"]
for p in tests:
    print(f"密码 {p:<14} -> 评级: {evaluate_password(p)}")`
      },
      {
        title: "2. 全通关成就达成",
        type: "concept",
        tag: "荣耀证书",
        content: `
          <div class="p-6 text-center rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-amber-500 text-white shadow-xl space-y-3">
            <div class="text-3xl font-extrabold tracking-tight">🏆 恭喜通关全部 15 个章节！</div>
            <p class="text-xs sm:text-sm text-sky-100 max-w-lg mx-auto leading-relaxed">
              你已经完整构建起 Python 核心语法的知识拼图！从变量、判断、循环，到序列容器、函数与面向对象。
            </p>
            <div class="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-amber-200">
              ⚡ 极客之路已启程：探索 Web、爬虫与大模型吧！
            </div>
          </div>
        `
      }
    ]
  }
];

const CODE_SNIPPETS_ZH = {
  "hello": {
    name: "👋 Hello World 问候",
    code: `# 欢迎来到 Python Lab 交互式演练场！
name = "极客探索者"
print(f"你好，{name}！")
print("🌟 保持好奇，享受编写代码的纯粹乐趣！")`
  },
  "pwd_checker": {
    name: "🛡️ 密码强度分析器",
    code: `# 密码强度检测
def check_pwd(pwd):
    score = sum([
        len(pwd) >= 8,
        any(c.isdigit() for c in pwd),
        any(c.isupper() for c in pwd),
        any(c.islower() for c in pwd)
    ])
    return {4: "极强", 3: "良好", 2: "中等", 1: "弱"}.get(score, "高危")

print("测试强度:", check_pwd("PyMaster2026!"))`
  },
  "multiplication": {
    name: "📐 九九乘法表生成器",
    code: `# 经典九九乘法表
print("=== 九九乘法表 ===")
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j:<2}", end="  ")
    print()`
  },
  "fibonacci": {
    name: "🔢 斐波那契数列生成",
    code: `# 斐波那契数列前 15 项
def fib(n):
    a, b = 0, 1
    res = []
    for _ in range(n):
        res.append(a)
        a, b = b, a + b
    return res

print(fib(15))`
  }
};

let CHAPTERS_DATA = CHAPTERS_DATA_ZH;
let CODE_SNIPPETS = CODE_SNIPPETS_ZH;

window.CHAPTERS_DATA_ZH = CHAPTERS_DATA_ZH;
window.CODE_SNIPPETS_ZH = CODE_SNIPPETS_ZH;
window.CHAPTERS_DATA = CHAPTERS_DATA;
window.CODE_SNIPPETS = CODE_SNIPPETS;

