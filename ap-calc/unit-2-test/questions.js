/* =====================================================================
   AP Calc Unit 2 multiple choice bank.
   Q(topic, question, [correct, wrong, wrong, wrong], explanation, extra)
   - The FIRST option is always the correct one; options are shuffled on screen.
   - Math goes between $...$ (KaTeX). Strings use M`...` so backslashes stay literal.
   - extra: { g: graph spec (see plot.js), tb: table rows, calc: true }
   ===================================================================== */
const M = String.raw;

const TOPICS = {
  "2.1": "Average vs. instantaneous rate of change",
  "2.2": "Limit definition & derivative notation",
  "2.3": "Tangent lines & calculator derivatives",
  "2.4": "Differentiability and continuity",
  "2.5": "Power rule",
  "2.6": "Constant, sum & difference rules",
  "2.7": "sin, cos, eˣ and ln x",
  "2.8": "Product rule",
  "2.9": "Quotient rule",
  "2.10": "tan, cot, sec, csc",
};

/* ---------- shared graphs ---------- */
const G_PARAB = {
  x: [-2, 4], y: [-3, 4],
  pieces: [{ fn: (x) => (x - 1) ** 2 - 2, a: -2.2, b: 4.2 }, { dot: [[-1, 2], [3, 2]] }, { text: "f(x)", at: [3.3, 3.4] }],
  desc: "Graph of the parabola f(x) = (x−1)² − 2, passing through (−1, 2), (1, −2) and (3, 2).",
};
const G_CUBIC = {
  x: [-4, 4], y: [-4, 4],
  pieces: [{ fn: (x) => (x ** 3 - 9 * x) / 4, a: -4, b: 4 }, { text: "f(x)", at: [2.6, 3.4] }],
  desc: "Graph of f(x) = (x³ − 9x)/4: rises to a peak near x = −1.73, falls through the origin to a low point near x = 1.73, then rises steeply. f(−3) = 0, f(0) = 0, f(3) = 0.",
};
const G_DIFF = {
  x: [-6, 7], y: [-3, 5], u: 28,
  pieces: [
    { seg: [[-6, -1], [-4, 3], [1, -2]] },
    { fn: (x) => 2 + Math.cbrt((8 * (x - 4)) / 3), a: 1, b: 7, n: 600 },
    { dot: [[-6, -1], [-1, 2], [1, -2], [7, 4]] },
    { open: [[-1, 0], [1, 0]] },
    { text: "f(x)", at: [5.2, 4.3] },
  ],
  desc: "Graph of f on [−6, 7]: a segment from (−6, −1) up to (−4, 3), then a segment with slope −1 down to (1, −2), except there is a hole at (−1, 0) and a filled point at (−1, 2). At x = 1 the graph jumps: f(1) = −2, and a new curve starts at an open circle at (1, 0) and rises like a cube-root curve with a vertical tangent at (4, 2), ending at (7, 4).",
};
const G_HPRIME = {
  x: [-4, 4], y: [-3, 2], u: 32,
  pieces: [{ seg: [[-4, -2], [-1, 1], [2, 1], [4, -3]] }, { dot: [[-4, -2], [4, -3]] }, { text: "h′(x)", at: [-3.6, 1.3] }],
  desc: "Graph of h′(x), the DERIVATIVE of h, made of segments: from (−4, −2) to (−1, 1), flat from (−1, 1) to (2, 1), then down to (4, −3).",
};
const G_FG = {
  x: [-1, 6], y: [-1, 6], u: 34,
  pieces: [
    { seg: [[-1, 4], [2, 1], [6, 5]] },
    { seg: [[-1, 0], [3, 4], [6, 1]], c: 1 },
    { dot: [[-1, 4], [6, 5]] },
    { dot: [[-1, 0], [6, 1]], c: 1 },
    { text: "f", at: [5.3, 5.3] },
    { text: "g", at: [3.1, 4.6], c: 1 },
  ],
  desc: "Graphs of f and g made of segments. f goes from (−1, 4) down to (2, 1) (slope −1), then up to (6, 5) (slope 1). g goes from (−1, 0) up to (3, 4) (slope 1), then down to (6, 1) (slope −1).",
};
const G_ABS = {
  x: [-1, 8], y: [-1, 5], u: 30,
  pieces: [{ fn: (x) => Math.abs(x - 4), a: -1, b: 8 }, { text: "h(x) = |x − 4|", at: [4.6, 4.5] }],
  desc: "Graph of h(x) = |x − 4|, a V shape with its point at (4, 0).",
};
const G_SECANT = {
  x: [-1, 5], y: [-1, 9], u: 26,
  pieces: [
    { fn: (x) => 0.5 * x * x, a: -1, b: 5 },
    { dash: [[-1, -2], [5, 10]], c: 2 },
    { dot: [[0, 0], [4, 8]] },
    { text: "f(x)", at: [2.8, 6] },
  ],
  desc: "Graph of f(x) = x²/2 with a dashed line drawn through the two points (0, 0) and (4, 8) on the curve.",
};

/* ---------- shared tables ---------- */
const T_W = [["t \\text{ (min)}", 0, 2, 5, 10], ["W(t)\\ (^\\circ F)", 30, 38, 44, 62]];
const T_EST = [["x", 0, 2, 6, 7], ["h(x)", 1, -5, 3, 2]];
const T_H = [["x", -2, 0, 1, 3], ["h(x)", 3, 4, -5, 0], ["h'(x)", 0, 2, -4, 2]];
const T_G2 = [["x", -4, -1, 1, 7], ["g(x)", 1, 2, -3, 0], ["g'(x)", 5, -4, 2, -1], ["g''(x)", 2, 6, 3, -5]];
const T_F3 = [["x", -3, 0, 1, 5], ["f(x)", 2, -4, 6, 3], ["f'(x)", 0, 5, -2, 7], ["f''(x)", 9, 3, 4, 2]];
const T_Q = [["x", 7], ["f(x)", -5], ["f'(x)", 3], ["g(x)", 2], ["g'(x)", -3]];
const T_AB = [["t", -4], ["a(t)", 2], ["a'(t)", -3], ["b(t)", -4], ["b'(t)", 1]];

const BANK = [];
function Q(t, q, o, e, x) { BANK.push(Object.assign({ t, q, o, e }, x || {})); }

/* =============================== 2.1 =============================== */
Q("2.1", M`What is the average rate of change of $f(x)=x^2-3x$ on the interval $[1,4]$?`,
  [M`$2$`, M`$6$`, M`$5$`, M`$-2$`],
  M`AROC $=\dfrac{f(4)-f(1)}{4-1}=\dfrac{4-(-2)}{3}=2$. ($5$ is $f'(4)$, the instantaneous rate at $x=4$, not the average.)`);
Q("2.1", M`Find the average rate of change of $f(x)=\sqrt{2x+3}$ over $[3,11]$.`,
  [M`$\dfrac14$`, M`$2$`, M`$4$`, M`$\dfrac12$`],
  M`$\dfrac{f(11)-f(3)}{11-3}=\dfrac{\sqrt{25}-\sqrt9}{8}=\dfrac{5-3}{8}=\dfrac14$.`);
Q("2.1", M`Use the graph of $f$. What is the average rate of change of $f$ on $[-1,3]$?`,
  [M`$0$`, M`$2$`, M`$-2$`, M`$\dfrac12$`],
  M`Both points have the same height: $f(-1)=2$ and $f(3)=2$. So $\dfrac{2-2}{3-(-1)}=0$. A zero average rate means the secant line is horizontal, even though the graph goes down and back up.`,
  { g: G_PARAB });
Q("2.1", M`The temperature of a drink, $W(t)$, is recorded in the table. What is the average rate of change of $W$ over $2\le t\le 10$?`,
  [M`$3\ ^\circ F$ per minute`, M`$24\ ^\circ F$ per minute`, M`$3.2\ ^\circ F$ per minute`, M`$4\ ^\circ F$ per minute`],
  M`$\dfrac{W(10)-W(2)}{10-2}=\dfrac{62-38}{8}=3$ degrees per minute. $3.2$ used $t=0$ instead of $t=2$; $24$ forgot to divide.`,
  { tb: T_W });
Q("2.1", M`The average rate of change of $f$ on $[a,b]$ is the slope of the`,
  [M`secant line through $(a,f(a))$ and $(b,f(b))$`, M`tangent line at $x=a$`, M`tangent line at $x=\frac{a+b}{2}$`, M`line through the points $(a,b)$ and $(0,0)$`],
  M`AROC $=\dfrac{\Delta y}{\Delta x}=\dfrac{f(b)-f(a)}{b-a}$: the slope of the line through the two endpoints on the graph (a secant line). A tangent-line slope is the instantaneous rate.`);
Q("2.1", M`Which expression gives the instantaneous rate of change of $f$ at $x=a$?`,
  [M`$\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$`, M`$\dfrac{f(b)-f(a)}{b-a}$`, M`$\displaystyle\lim_{h\to0}\big(f(a+h)-f(a)\big)$`, M`$\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x+a}$`],
  M`Instantaneous rate = slope of the tangent line = the limit of the average rate as the interval shrinks to zero. The other "official" form is $\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$ (minus, not plus).`);
Q("2.1", M`An object's position is $s(t)=t^3$ meters at time $t$ seconds. What is its average velocity from $t=1$ to $t=3$?`,
  [M`$13$ m/s`, M`$26$ m/s`, M`$12$ m/s`, M`$9$ m/s`],
  M`$\dfrac{s(3)-s(1)}{3-1}=\dfrac{27-1}{2}=13$. ($12$ is $s'(2)$, the instantaneous rate at the midpoint, which is not the same thing.)`);
Q("2.1", M`The graph shows $f(x)=\frac{x^2}{2}$ and a dashed line through $(0,0)$ and $(4,8)$. The slope of the dashed line represents`,
  [M`the average rate of change of $f$ on $[0,4]$, which is $2$`, M`$f'(4)$, which is $2$`, M`$f'(0)$, which is $0$`, M`the average rate of change of $f$ on $[0,4]$, which is $8$`],
  M`A line through two points on the curve is a secant line, so its slope is the AROC: $\dfrac{8-0}{4-0}=2$. Note $f'(4)=4$, not $2$.`,
  { g: G_SECANT });
Q("2.1", M`For $f(x)=x^2$, which is greater: the average rate of change on $[1,3]$ or the instantaneous rate of change at $x=3$?`,
  [M`The instantaneous rate at $x=3$ (it is $6$; the average is $4$)`, M`The average rate on $[1,3]$ (it is $6$; the instantaneous is $4$)`, M`They are equal`, M`Cannot be determined`],
  M`AROC $=\dfrac{9-1}{2}=4$. Instantaneous: $f'(x)=2x$, so $f'(3)=6$. The graph is getting steeper, so the slope at the right end beats the average.`);

/* =============================== 2.2 =============================== */
Q("2.2", M`$\displaystyle\lim_{h\to0}\frac{(3+h)^2-9}{h}=$`,
  [M`$6$`, M`$9$`, M`$0$`, M`does not exist`],
  M`This is the limit definition of $f'(3)$ for $f(x)=x^2$. $f'(x)=2x$, so $f'(3)=6$. (Expanding: $\frac{6h+h^2}{h}=6+h\to6$.)`);
Q("2.2", M`$\displaystyle\lim_{x\to e}\frac{x^3-e^3}{x-e}$ is`,
  [M`$3e^2$`, M`$0$`, M`$e^3$`, M`does not exist`],
  M`Match $\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}=f'(a)$ with $f(x)=x^3$ and $a=e$. $f'(x)=3x^2$, so the limit is $3e^2$.`);
Q("2.2", M`$\displaystyle\lim_{h\to0}\frac{\sqrt{25+h}-5}{h}$ is`,
  [M`$\dfrac1{10}$`, M`$0$`, M`$5$`, M`$\dfrac15$`],
  M`It is $f'(25)$ for $f(x)=\sqrt x$. $f'(x)=\dfrac1{2\sqrt x}$, so $f'(25)=\dfrac1{2\cdot5}=\dfrac1{10}$.`);
Q("2.2", M`$\displaystyle\lim_{h\to0}\frac{(2+h)^4-16}{h}=$`,
  [M`$32$`, M`$16$`, M`$8$`, M`$4$`],
  M`$f(x)=x^4$ at $x=2$: $f'(x)=4x^3$, so $f'(2)=4\cdot8=32$.`);
Q("2.2", M`Let $f'(x)=\displaystyle\lim_{h\to0}\frac{(x+h)^2-x^2}{h}$. For what value of $x$ does $f'(x)=4$?`,
  [M`$2$`, M`$4$`, M`$-4$`, M`$1$`],
  M`The limit is the derivative of $x^2$, which is $2x$. Set $2x=4$, so $x=2$.`);
Q("2.2", M`Using the limit definition on $f(x)=x^2-5x$, a student gets to $\displaystyle\lim_{h\to0}\frac{2xh+h^2-5h}{h}$. What is $f'(x)$?`,
  [M`$2x-5$`, M`$2x+h-5$`, M`$2x$`, M`$x^2-5$`],
  M`Factor out $h$ and cancel: $\lim_{h\to0}(2x+h-5)$. Then plug in $h=0$: $f'(x)=2x-5$. Leaving the $h$ in is a classic mistake.`);
Q("2.2", M`Using the limit definition, the derivative of $f(x)=\dfrac1{x-2}$ is`,
  [M`$-\dfrac1{(x-2)^2}$`, M`$\dfrac1{(x-2)^2}$`, M`$-\dfrac1{x-2}$`, M`$\ln|x-2|$`],
  M`Common denominator: $\dfrac{(x-2)-(x+h-2)}{h(x+h-2)(x-2)}=\dfrac{-h}{h(x+h-2)(x-2)}\to\dfrac{-1}{(x-2)^2}$.`);
Q("2.2", M`Using the limit definition, the derivative of $y=\sqrt{5x+2}$ is`,
  [M`$\dfrac5{2\sqrt{5x+2}}$`, M`$\dfrac1{2\sqrt{5x+2}}$`, M`$\dfrac{5}{\sqrt{5x+2}}$`, M`$\dfrac52\sqrt{5x+2}$`],
  M`Multiply by the conjugate: the numerator becomes $5h$, which leaves $\dfrac{5}{\sqrt{5(x+h)+2}+\sqrt{5x+2}}\to\dfrac{5}{2\sqrt{5x+2}}$.`);
Q("2.2", M`$V(t)$ is the number of gallons of water in a tank $t$ minutes after noon. What does $V'(5)=-3$ mean?`,
  [M`At 12:05, the amount of water is decreasing at 3 gallons per minute.`, M`At 12:05, there are 3 gallons of water in the tank.`, M`During the first 5 minutes, the tank lost 3 gallons.`, M`At 12:05, the amount of water is increasing at 3 gallons per minute.`],
  M`A derivative is an instantaneous rate: units are (output units) per (input unit). Negative means decreasing. "During the first 5 minutes" describes an average/total change, not $V'(5)$.`);
Q("2.2", M`$P(t)$ is a town's population, in thousands of people, $t$ years after 2020. What are the units of $P'(t)$?`,
  [M`thousands of people per year`, M`thousands of people`, M`years per thousand people`, M`people`],
  M`Units of a derivative are (units of output) ÷ (units of input): thousands of people per year.`);
Q("2.2", M`$C(t)$ is the number of championships a coach has won, $t$ years after 2002. Which is the best meaning of $C(12)=3$ and $C'(12)=0.4$?`,
  [M`By 2014 the coach had won 3 titles, and in 2014 the coach was winning titles at a rate of 0.4 per year.`, M`In 2014 the coach won 3 titles and 0.4 games.`, M`By 2014 the coach had won 0.4 titles, increasing at 3 per year.`, M`The coach won 3 titles in the 12 years, an average of 0.4 per year.`],
  M`$C(12)$ is the amount (titles by year 12, i.e. 2014). $C'(12)$ is the rate at that moment, titles per year.`);
Q("2.2", M`Use the graph of $f$. Order $f'(-3)$, $f'(0)$ and $f'(2)$ from least to greatest.`,
  [M`$f'(0)\lt f'(2)\lt f'(-3)$`, M`$f'(-3)\lt f'(0)\lt f'(2)$`, M`$f'(2)\lt f'(0)\lt f'(-3)$`, M`$f'(0)\lt f'(-3)\lt f'(2)$`],
  M`Read slopes, not heights. At $x=0$ the graph is going down (negative slope). At $x=2$ it is going up gently. At $x=-3$ it is going up steeply. (Exactly: $f'(0)=-2.25$, $f'(2)=0.75$, $f'(-3)=4.5$.)`,
  { g: G_CUBIC });
Q("2.2", M`Use the graph of $f$. At about which $x$-value is $f'(x)=0$?`,
  [M`$x\approx1.7$`, M`$x=0$`, M`$x=3$`, M`$x=-3$`],
  M`$f'(x)=0$ where the tangent line is horizontal: at the top and bottom of the bumps ($x\approx\pm1.7$). At $x=0,\pm3$ the graph crosses the $x$-axis, which is $f(x)=0$, not $f'(x)=0$.`,
  { g: G_CUBIC });
Q("2.2", M`Which of these is NOT notation for the derivative of $y=f(x)$?`,
  [M`$\dfrac{\Delta y}{\Delta x}$`, M`$f'(x)$`, M`$\dfrac{dy}{dx}$`, M`$y'$`],
  M`$f'(x)$ is Lagrange notation, $\frac{dy}{dx}$ is Leibniz notation, and $y'$ is also used. $\frac{\Delta y}{\Delta x}$ is the average rate of change (a slope between two points).`);
Q("2.2", M`Use the table to estimate $h'(4)$.`,
  [M`$2$`, M`$8$`, M`$\dfrac12$`, M`$-2$`],
  M`$x=4$ is between $2$ and $6$, so use those values: $h'(4)\approx\dfrac{h(6)-h(2)}{6-2}=\dfrac{3-(-5)}{4}=2$.`,
  { tb: T_EST });
Q("2.2", M`Use the table to estimate $h'(1)$.`,
  [M`$-3$`, M`$-6$`, M`$3$`, M`$-\dfrac13$`],
  M`Use the closest points on each side, $x=0$ and $x=2$: $\dfrac{-5-1}{2-0}=-3$.`,
  { tb: T_EST });

/* =============================== 2.3 =============================== */
Q("2.3", M`$f(4)=7$ and $f'(4)=2$. Which is an equation of the line tangent to $f$ at $x=4$?`,
  [M`$y-7=2(x-4)$`, M`$y-4=2(x-7)$`, M`$y-7=4(x-2)$`, M`$y-2=7(x-4)$`],
  M`Point $(4,f(4))=(4,7)$, slope $f'(4)=2$. Point-slope: $y-y_1=m(x-x_1)$.`);
Q("2.3", M`$g(x)=x^2-3x+5$. Which is an equation of the line tangent to $g$ at $x=-1$?`,
  [M`$y-9=-5(x+1)$`, M`$y-9=-5(x-1)$`, M`$y+1=-5(x-9)$`, M`$y-9=(2x-3)(x+1)$`],
  M`Point: $g(-1)=1+3+5=9$. Slope: $g'(x)=2x-3$, so $g'(-1)=-5$. The slope must be a NUMBER, not $g'(x)$.`);
Q("2.3", M`Using the table, which is the line tangent to $h$ at $x=-2$?`,
  [M`$y=3$`, M`$x=-2$`, M`$y=0$`, M`$y-3=-2(x+2)$`],
  M`$h(-2)=3$ and $h'(-2)=0$: $y-3=0(x+2)$, which is the horizontal line $y=3$.`,
  { tb: T_H });
Q("2.3", M`Using the table, which is the line tangent to $h$ at $x=1$?`,
  [M`$y+5=-4(x-1)$`, M`$y-5=-4(x-1)$`, M`$y+4=-5(x-1)$`, M`$y-1=-4(x+5)$`],
  M`Point $(1,-5)$, slope $h'(1)=-4$: $y-(-5)=-4(x-1)$.`,
  { tb: T_H });
Q("2.3", M`Use the line tangent to $h$ at $x=1$ (table) to approximate $h(1.1)$.`,
  [M`$-5.4$`, M`$-4.6$`, M`$-5.1$`, M`$-4.4$`],
  M`Tangent line: $y=-5-4(x-1)$. At $x=1.1$: $y=-5-4(0.1)=-5.4$. Near the point of tangency, the tangent line is a good stand-in for the function (local linearity).`,
  { tb: T_H });
Q("2.3", M`Calculator: if $h(x)=\ln(x^3+11)$, then $h'(-1)\approx$`,
  [M`$0.300$`, M`$2.303$`, M`$-0.300$`, M`$0.273$`],
  M`Use the calculator's numerical derivative ($\frac{d}{dx}$ at $x=-1$). $2.303$ is $h(-1)=\ln10$, the value instead of the slope.`, { calc: true });
Q("2.3", M`Calculator: if $k(x)=\dfrac{\sqrt{3x+8}}{1.2x+e^x}$, then $k'(-2)\approx$`,
  [M`$-0.837$`, M`$-1.744$`, M`$0.837$`, M`$-0.127$`],
  M`Numerical derivative at $x=-2$ gives $-0.837$. ($-0.127$ is $k'(\pi)$.) Always round/truncate to 3 decimals on the AP exam.`, { calc: true });
Q("2.3", M`Calculator: the line tangent to $p(x)=\ln(x^2+7)$ at $x=e^2$ is`,
  [M`$y-4.121=0.240(x-e^2)$`, M`$y-4.121=0.240(x-2)$`, M`$y-0.240=4.121(x-e^2)$`, M`$y-61.598=0.240(x-e^2)$`],
  M`$p(e^2)=\ln(e^4+7)\approx4.121$ and $p'(e^2)\approx0.240$. The $x$-value in the equation is still $e^2$, not $2$.`, { calc: true });
Q("2.3", M`Calculator: which is an equation of the line tangent to $f(x)=x^6-x^4$ at the point where $f'(x)=-1$?`,
  [M`$y=-x-1.031$`, M`$y=-x-0.836$`, M`$y=-x+0.836$`, M`$y=-x+1.031$`],
  M`$f'(x)=6x^5-4x^3$. Solve $6x^5-4x^3=-1$ on the calculator: $x\approx-0.934$, and $f(-0.934)\approx-0.098$. Then $y+0.098=-1(x+0.934)$, so $y=-x-1.031$.`, { calc: true });
Q("2.3", M`At which $x$-values is the line tangent to $f(x)=x^3-12x$ horizontal?`,
  [M`$x=\pm2$`, M`$x=0$ only`, M`$x=\pm2\sqrt3$`, M`$x=\pm4$`],
  M`Horizontal tangent means slope $0$: $f'(x)=3x^2-12=0$, so $x^2=4$. ($\pm2\sqrt3$ are where $f(x)=0$.)`);
Q("2.3", M`The line tangent to $y=x^3$ at $(3,27)$ crosses the $x$-axis at`,
  [M`$x=2$`, M`$x=3$`, M`$x=1$`, M`$x=-24$`],
  M`Slope $=3(3)^2=27$, so the line is $y-27=27(x-3)$. Set $y=0$: $-27=27(x-3)$, so $x-3=-1$ and $x=2$.`);
Q("2.3", M`$f'(x)=\dfrac1x$ and $f(2)=5$. The line tangent to $f$ at $x=2$ is`,
  [M`$y=\frac12x+4$`, M`$y=\frac12x+5$`, M`$y=\frac12x-\frac12$`, M`$y=\frac15x+5$`],
  M`Point $(2,5)$, slope $f'(2)=\frac12$. $y-5=\frac12(x-2)\Rightarrow y=\frac12x-1+5=\frac12x+4$.`);
Q("2.3", M`Calculator: $f(x)=2.3\sin(x^2-3x+7)-5$. What is $f'(0)$?`,
  [M`$-5.202$`, M`$-3.489$`, M`$5.202$`, M`$-0.661$`],
  M`Type the function and take $\frac{d}{dx}$ at $x=0$ (radian mode!): about $-5.202$.`, { calc: true });

/* =============================== 2.4 =============================== */
Q("2.4", M`The graph of $f$ is shown on $[-6,7]$. At which $x$-values in $(-6,7)$ is $f$ NOT differentiable?`,
  [M`$-4,\ -1,\ 1,\ 4$`, M`$-1$ and $1$ only`, M`$-4$ and $4$ only`, M`$-4,\ -1$ and $1$ only`],
  M`Look for the three failures: discontinuities ($x=-1$ hole, $x=1$ jump), sharp corners ($x=-4$) and vertical tangents ($x=4$).`,
  { g: G_DIFF });
Q("2.4", M`For the graph of $f$ shown, where is $f$ continuous but NOT differentiable?`,
  [M`$x=-4$ and $x=4$`, M`$x=-1$ and $x=1$`, M`$x=4$ only`, M`nowhere`],
  M`At $x=-4$ (corner) and $x=4$ (vertical tangent) you can draw through without lifting your pencil, but the slope doesn't exist. Continuity does not guarantee differentiability.`,
  { g: G_DIFF });
Q("2.4", M`Using the graph of $f$, what is $f'(-2)$?`,
  [M`$-1$`, M`$1$`, M`$1.5$`, M`does not exist`],
  M`At $x=-2$ the graph is on the segment from $(-4,3)$ to $(1,-2)$: slope $\frac{-2-3}{1-(-4)}=-1$. (The hole at $x=-1$ doesn't affect $x=-2$.)`,
  { g: G_DIFF });
Q("2.4", M`Using the graph of $f$, what is $f'(-5)$?`,
  [M`$2$`, M`$1$`, M`$-1$`, M`$\frac12$`],
  M`The first segment goes from $(-6,-1)$ to $(-4,3)$: slope $\frac{3-(-1)}{2}=2$.`,
  { g: G_DIFF });
Q("2.4", M`Using the graph of $f$, which type of discontinuity is at $x=-1$?`,
  [M`removable (a hole)`, M`jump`, M`infinite (vertical asymptote)`, M`there is no discontinuity at $x=-1$`],
  M`$\lim_{x\to-1}f(x)=0$ from both sides, but $f(-1)=2$, so the limit exists but doesn't equal the value: removable. The jump is at $x=1$.`,
  { g: G_DIFF });
Q("2.4", M`For a function $f$ to be differentiable at $x=c$, which two things must be true?`,
  [M`$f$ is continuous at $c$, and the slopes from the left and right approach the same value`, M`$f(c)$ exists, and $\lim_{x\to c}f(x)$ exists`, M`$f$ is continuous at $c$, and $f(c)\neq0$`, M`$f'(c)>0$ and $f$ is continuous at $c$`],
  M`Differentiable means $f'(c)$ exists: the graph must be continuous AND the left- and right-hand slopes must match (no corner, cusp, or vertical tangent).`);
Q("2.4", M`If $g$ is differentiable at $x=c$, which must be true?<br>I. $g$ is continuous at $x=c$.<br>II. $\lim_{x\to c}g(x)$ exists.<br>III. $\lim_{x\to c}\frac{g(x)-g(c)}{x-c}$ exists.`,
  [M`I, II, and III`, M`I only`, M`I and II only`, M`III only`],
  M`Differentiability implies continuity (I), continuity includes the limit existing (II), and III is the definition of $g'(c)$, which exists because $g$ is differentiable.`);
Q("2.4", M`Let $h(x)=|x-4|$. Which statements are true?<br>I. $h$ is continuous at $x=4$.<br>II. $h$ is differentiable at $x=4$.<br>III. $h$ has an absolute minimum at $x=4$.`,
  [M`I and III only`, M`I only`, M`II only`, M`I, II and III`],
  M`$|x-4|$ is a V shifted right 4. It's connected (continuous) with its lowest point at $x=4$, but the sharp corner means no derivative there.`,
  { g: G_ABS });
Q("2.4", M`$f$ is continuous on $[a,b]$ but not differentiable at some $c$ with $a\lt c\lt b$. Which could be true?`,
  [M`The graph of $f$ has a cusp at $x=c$.`, M`$x=c$ is a vertical asymptote of $f$.`, M`$\lim_{x\to c}f(x)\neq f(c)$`, M`$f(c)$ is undefined.`],
  M`The other three would make $f$ discontinuous at $c$, but we're told $f$ is continuous. A cusp/corner is continuous but not differentiable.`);
Q("2.4", M`$f$ is differentiable with $f(2)=5$ and $f'(2)=7$. Which statement could be FALSE?`,
  [M`$\displaystyle\lim_{x\to2}f'(x)=7$`, M`$\displaystyle\lim_{x\to2}f(x)=5$`, M`$\displaystyle\lim_{x\to2}\frac{f(x)-5}{x-2}=7$`, M`$\displaystyle\lim_{h\to0}\frac{f(2+h)-5}{h}=7$`],
  M`Differentiable ⇒ continuous, so $\lim f(x)=f(2)=5$. The two difference quotients are just definitions of $f'(2)=7$. But nothing says $f'$ itself is continuous, so $\lim_{x\to2}f'(x)$ might not be $7$.`);
Q("2.4", M`$f(x)=\begin{cases}x^2, & x\le1\\ 2x-1, & x>1\end{cases}$. At $x=1$, $f$ is`,
  [M`continuous and differentiable`, M`continuous but not differentiable`, M`differentiable but not continuous`, M`neither continuous nor differentiable`],
  M`Values: $1^2=1$ and $2(1)-1=1$, so continuous. Slopes: $2x\to2$ and $2$, they match, so differentiable. (Differentiable but not continuous is impossible.)`);
Q("2.4", M`$f(x)=\begin{cases}ax^2+1, & x\le1\\ bx+3, & x>1\end{cases}$ is differentiable at $x=1$. Find $a$ and $b$.`,
  [M`$a=-2,\ b=-4$`, M`$a=2,\ b=4$`, M`$a=-2,\ b=4$`, M`$a=1,\ b=-1$`],
  M`Continuity: $a+1=b+3$. Matching slopes: $2a=b$. Substitute: $a+1=2a+3\Rightarrow a=-2$, so $b=-4$.`);
Q("2.4", M`$g$ is defined on the closed interval $[-1,10]$. What is $g'(-1)$?`,
  [M`does not exist (endpoints aren't differentiable)`, M`$0$`, M`$g(-1)$`, M`It depends on the formula for $g$`],
  M`A derivative needs a two-sided limit, and there is no graph to the left of an endpoint. That's why AP questions ask about the OPEN interval $(a,b)$.`);
Q("2.4", M`The graph of $h'$ (the derivative of $h$) is shown. What is $h''(3)$?`,
  [M`$-2$`, M`$-1$`, M`$1$`, M`does not exist`],
  M`$h''$ is the slope of the $h'$ graph. At $x=3$ we're on the segment from $(2,1)$ to $(4,-3)$: slope $\frac{-4}{2}=-2$. ($-1$ is the height, $h'(3)$.)`,
  { g: G_HPRIME });
Q("2.4", M`Using the graph of $h'$, where does $h''(x)$ fail to exist on $(-4,4)$?`,
  [M`$x=-1$ and $x=2$`, M`$x=-2$`, M`$x=-1$ only`, M`$h''$ exists everywhere`],
  M`$h''$ is the slope of $h'$, which doesn't exist at the corners of the $h'$ graph: $x=-1$ and $x=2$.`,
  { g: G_HPRIME });
Q("2.4", M`Using the graph of $h'$, what is $h''(0)$?`,
  [M`$0$`, M`$1$`, M`$-1$`, M`does not exist`],
  M`On $(-1,2)$ the $h'$ graph is flat, so its slope is $0$. Careful: $h'(0)=1$ is the HEIGHT of the graph.`,
  { g: G_HPRIME });
Q("2.4", M`"Local linearity" means that if a function is differentiable at a point,`,
  [M`zooming in on the graph near that point makes it look like a straight line`, M`the function is a linear function`, M`the graph has no curves anywhere`, M`the tangent line crosses the graph exactly once`],
  M`Zoom in far enough on a differentiable function and it looks like its tangent line. Zoom in on a corner and it still looks like a corner, which is why corners aren't differentiable.`);

/* =============================== 2.5 =============================== */
Q("2.5", M`If $f(x)=\dfrac{3}{2x^4}$, then $f'(x)=$`,
  [M`$-\dfrac{6}{x^5}$`, M`$\dfrac{3}{8x^3}$`, M`$-\dfrac{12}{x^3}$`, M`$-\dfrac{6}{x^3}$`],
  M`Rewrite: $\frac32x^{-4}$. Power rule: $\frac32(-4)x^{-5}=-6x^{-5}=-\dfrac6{x^5}$. Don't take the derivative of the denominator by itself.`);
Q("2.5", M`If $g(x)=\dfrac{4}{\sqrt x}$, then $g'(x)=$`,
  [M`$-\dfrac{2}{\sqrt{x^3}}$`, M`$\dfrac{2}{\sqrt x}$`, M`$-\dfrac{2}{\sqrt x}$`, M`$-8\sqrt x$`],
  M`$4x^{-1/2}\to4\cdot(-\tfrac12)x^{-3/2}=-2x^{-3/2}=-\dfrac2{\sqrt{x^3}}$.`);
Q("2.5", M`If $f(x)=\pi^3$, then $f'(x)=$`,
  [M`$0$`, M`$3\pi^2$`, M`$\pi^3$`, M`$3\pi^2x$`],
  M`$\pi^3$ is just a number (about $31$). The derivative of any constant is $0$. The power rule needs $x$ in the base.`);
Q("2.5", M`If $f(x)=e^2$, then $f'(x)=$`,
  [M`$0$`, M`$e^2$`, M`$2e$`, M`$2e^x$`],
  M`$e^2\approx7.39$ is a constant, so its derivative is $0$. (Don't confuse with $e^x$.)`);
Q("2.5", M`If $h(x)=\sqrt{x^5}$, then $h'(x)=$`,
  [M`$\dfrac52x^{3/2}$`, M`$\dfrac{5}{2\sqrt{x^5}}$`, M`$5x^{3/2}$`, M`$\dfrac52x^{7/2}$`],
  M`$\sqrt{x^5}=x^{5/2}$. Bring down $\frac52$ and subtract 1: $\frac52x^{3/2}=\frac{5\sqrt{x^3}}2$.`);
Q("2.5", M`If $f(x)=\dfrac{x^4}{6}$, then $f'(3)=$`,
  [M`$18$`, M`$\dfrac{27}{2}$`, M`$54$`, M`$\dfrac{81}{6}$`],
  M`$f'(x)=\frac46x^3=\frac23x^3$. $f'(3)=\frac23\cdot27=18$.`);
Q("2.5", M`If $g(x)=\dfrac{2}{\sqrt[5]{x^3}}$, then $g'(x)=$`,
  [M`$-\dfrac65x^{-8/5}$`, M`$-\dfrac65x^{-2/5}$`, M`$\dfrac{10}{3}x^{2/5}$`, M`$-\dfrac{6}{5}x^{8/5}$`],
  M`$2x^{-3/5}\to2\cdot(-\tfrac35)x^{-3/5-1}=-\frac65x^{-8/5}$.`);
Q("2.5", M`$f(x)=\dfrac1{x^2}-\dfrac2{x^3}+3x-7$. What is $f'(1)$?`,
  [M`$7$`, M`$-5$`, M`$3$`, M`$1$`],
  M`$f(x)=x^{-2}-2x^{-3}+3x-7$, so $f'(x)=-2x^{-3}+6x^{-4}+3$. At $x=1$: $-2+6+3=7$.`);
Q("2.5", M`$\displaystyle\lim_{h\to0}\frac{(x+h)^5-x^5}{h}=$`,
  [M`$5x^4$`, M`$x^5$`, M`$5x^5$`, M`$0$`],
  M`This is the limit definition of the derivative of $x^5$; the power rule gives $5x^4$.`);
Q("2.5", M`The power rule $\frac{d}{dx}x^n=nx^{n-1}$ can be used directly when`,
  [M`$x$ is the base and the exponent is a constant`, M`the exponent contains $x$, like $2^x$`, M`the function is a quotient of any two functions`, M`$x$ is inside a square root with other terms, like $\sqrt{x^2+1}$`],
  M`Power rule: base is $x$, power is a number. Rewrite $\frac1x$ as $x^{-1}$ and $\sqrt x$ as $x^{1/2}$ first. $2^x$ and $\sqrt{x^2+1}$ need other rules.`);
Q("2.5", M`If $h(x)=\dfrac{4\sqrt x}{3}$, then $h'(x)=$`,
  [M`$\dfrac{2}{3\sqrt x}$`, M`$\dfrac{4}{3\sqrt x}$`, M`$\dfrac{2\sqrt x}{3}$`, M`$\dfrac{8}{3}x^{3/2}$`],
  M`$\frac43x^{1/2}\to\frac43\cdot\frac12x^{-1/2}=\frac23x^{-1/2}=\dfrac2{3\sqrt x}$.`);
Q("2.5", M`If $y=\sqrt[3]{x}-\dfrac1{\sqrt[4]{x}}$, then $\dfrac{dy}{dx}=$`,
  [M`$\frac13x^{-2/3}+\frac14x^{-5/4}$`, M`$\frac13x^{-2/3}-\frac14x^{-5/4}$`, M`$\frac13x^{2/3}+\frac14x^{-3/4}$`, M`$3x^{2}+4x^{-5}$`],
  M`$x^{1/3}-x^{-1/4}$. Derivative: $\frac13x^{-2/3}-(-\frac14)x^{-5/4}=\frac13x^{-2/3}+\frac14x^{-5/4}$. Minus times minus is plus.`);

/* =============================== 2.6 =============================== */
Q("2.6", M`$g(x)=2x^5+\dfrac{b}{x^2}$, where $b$ is a constant. If $g'(2)=180$, then $b=$`,
  [M`$-80$`, M`$80$`, M`$20$`, M`$-40$`],
  M`$g'(x)=10x^4-2bx^{-3}$. $g'(2)=160-\frac{2b}{8}=160-\frac b4=180$, so $-\frac b4=20$ and $b=-80$.`);
Q("2.6", M`If $f(x)=(3x-4)(2x+1)$, then $f'(x)=$`,
  [M`$12x-5$`, M`$6$`, M`$12x+5$`, M`$6x^2-5x-4$`],
  M`Multiply out first: $6x^2-5x-4$. Then $f'(x)=12x-5$. (Multiplying the two derivatives, $3\cdot2=6$, is NOT allowed.)`);
Q("2.6", M`If $f(x)=\dfrac{2x^3-4x+5}{7}$, then $f'(x)=$`,
  [M`$\dfrac{6x^2-4}{7}$`, M`$\dfrac{6x^2-4+5}{7}$`, M`$\dfrac{6x^2-4}{49}$`, M`$6x^2-4$`],
  M`Dividing by $7$ is a constant multiple of $\frac17$; keep it and differentiate term by term. The $5$ becomes $0$.`);
Q("2.6", M`An equation of the line tangent to $g(x)=3x^2-4x$ at $x=-3$ is`,
  [M`$y-39=-22(x+3)$`, M`$y-39=-22(x-3)$`, M`$y-15=-22(x+3)$`, M`$y-39=14(x+3)$`],
  M`$g(-3)=27+12=39$. $g'(x)=6x-4$, so $g'(-3)=-22$.`);
Q("2.6", M`An equation of the line tangent to $g(x)=\dfrac6x-\dfrac9{x^2}$ at $x=-3$ is`,
  [M`$y+3=-\frac43(x+3)$`, M`$y+3=\frac43(x+3)$`, M`$y-3=-\frac43(x+3)$`, M`$y+3=-\frac23(x+3)$`],
  M`$g(-3)=-2-1=-3$. $g'(x)=-6x^{-2}+18x^{-3}$, so $g'(-3)=-\frac69+\frac{18}{-27}=-\frac23-\frac23=-\frac43$.`);
Q("2.6", M`$f(x)=\dfrac{x^2}{4}$ and $g(x)=-\dfrac12x+2$. At what point on $f$ is the tangent line perpendicular to the graph of $g$?`,
  [M`$(4,4)$`, M`$(-1,\tfrac14)$`, M`$(2,1)$`, M`$(1,\tfrac14)$`],
  M`Perpendicular slopes are opposite reciprocals: $g$ has slope $-\frac12$, so we need slope $2$. $f'(x)=\frac x2=2\Rightarrow x=4$, $f(4)=4$.`);
Q("2.6", M`$\displaystyle\lim_{h\to0}\frac{\left[3(x+h)^2+\frac2{x+h}\right]-\left[3x^2+\frac2x\right]}{h}=$`,
  [M`$6x-\dfrac2{x^2}$`, M`$6x+\dfrac2{x^2}$`, M`$x^3+\dfrac2x$`, M`does not exist`],
  M`It's the derivative of $f(x)=3x^2+2x^{-1}$: $6x-2x^{-2}$.`);
Q("2.6", M`Where does $f(x)=x^3-6x^2+9x+1$ have horizontal tangent lines?`,
  [M`$x=1$ and $x=3$`, M`$x=0$ and $x=3$`, M`$x=-1$ and $x=-3$`, M`$x=2$ only`],
  M`$f'(x)=3x^2-12x+9=3(x-1)(x-3)=0$.`);
Q("2.6", M`If $f(x)=x^3-3x$, at which $x$-values is the slope of the tangent line equal to $9$?`,
  [M`$x=\pm2$`, M`$x=2$ only`, M`$x=\pm\sqrt3$`, M`$x=3$`],
  M`$3x^2-3=9\Rightarrow x^2=4\Rightarrow x=\pm2$.`);
Q("2.6", M`$\dfrac{d}{dx}\left[\dfrac{x}{3}-\dfrac{x^2}{4}+\dfrac56\right]=$`,
  [M`$\dfrac13-\dfrac x2$`, M`$\dfrac13-\dfrac x2+\dfrac56$`, M`$\dfrac x3-\dfrac x2$`, M`$1-2x$`],
  M`$\frac13x-\frac14x^2+\frac56\to\frac13-\frac24x+0=\frac13-\frac12x$.`);
Q("2.6", M`If $f(x)=\dfrac1{\pi^3}+\dfrac{2x}{5}-\dfrac{5}{x^4}+7$, then $f'(x)=$`,
  [M`$\dfrac25+\dfrac{20}{x^5}$`, M`$\dfrac25-\dfrac{20}{x^5}$`, M`$-\dfrac3{\pi^4}+\dfrac25+\dfrac{20}{x^5}$`, M`$\dfrac25+\dfrac{20}{x^3}$`],
  M`$\frac1{\pi^3}$ and $7$ are constants (derivative $0$). $-5x^{-4}\to20x^{-5}$.`);

/* =============================== 2.7 =============================== */
Q("2.7", M`$\dfrac{d}{dx}\big[\ln x-\cos x\big]=$`,
  [M`$\dfrac1x+\sin x$`, M`$\dfrac1x-\sin x$`, M`$\dfrac1x+\cos x$`, M`$e^x+\sin x$`],
  M`$\frac{d}{dx}\ln x=\frac1x$ and $\frac{d}{dx}\cos x=-\sin x$, so $-\cos x\to-(-\sin x)=+\sin x$.`);
Q("2.7", M`If $f(x)=e^x-x^2+7$, then $f'(x)=$`,
  [M`$e^x-2x$`, M`$xe^{x-1}-2x$`, M`$e^x-2x+7$`, M`$e^x-x$`],
  M`$e^x$ is its own derivative. (Don't use the power rule on $e^x$: the exponent is the variable.)`);
Q("2.7", M`If $f(x)=\ln(\pi)+e^3-x^3$, then $f'(x)=$`,
  [M`$-3x^2$`, M`$\dfrac1\pi+3e^2-3x^2$`, M`$\dfrac1\pi+e^3-3x^2$`, M`$-3x^2+e^3$`],
  M`$\ln\pi\approx1.145$ and $e^3\approx20.09$ are constants, derivative $0$.`);
Q("2.7", M`If $f(x)=x\sin(2)+2x^{-5}$, then $f'(x)=$`,
  [M`$\sin2-10x^{-6}$`, M`$\sin x+x\cos x-10x^{-6}$`, M`$\cos2-10x^{-6}$`, M`$2\cos2-10x^{-4}$`],
  M`$\sin(2)\approx0.909$ is a number, so $x\sin2$ is just (number)$\cdot x$ with derivative $\sin2$.`);
Q("2.7", M`What is the slope of the line tangent to $y=2\ln x$ at $x=8$?`,
  [M`$\dfrac14$`, M`$\dfrac18$`, M`$\dfrac1{16}$`, M`$2\ln8$`],
  M`$y'=\frac2x$, so at $x=8$ the slope is $\frac28=\frac14$.`);
Q("2.7", M`$\displaystyle\lim_{h\to0}\frac{\ln(3+h)-\ln3}{h}=$`,
  [M`$\dfrac13$`, M`$\ln3$`, M`$1$`, M`does not exist`],
  M`It's $f'(3)$ for $f(x)=\ln x$. $f'(x)=\frac1x$, so $\frac13$.`);
Q("2.7", M`$\displaystyle\lim_{h\to0}\frac{\cos\left(\frac\pi6+h\right)-\cos\left(\frac\pi6\right)}{h}=$`,
  [M`$-\dfrac12$`, M`$\dfrac12$`, M`$-\dfrac{\sqrt3}2$`, M`$0$`],
  M`It's the derivative of $\cos x$ at $\frac\pi6$: $-\sin\frac\pi6=-\frac12$.`);
Q("2.7", M`If $f(x)=\sin x$, then $\displaystyle\lim_{x\to\pi}\frac{f(\pi)-f(x)}{x-\pi}=$`,
  [M`$1$`, M`$-1$`, M`$0$`, M`$\pi$`],
  M`Careful: the numerator is backwards. $\frac{f(\pi)-f(x)}{x-\pi}=-\frac{f(x)-f(\pi)}{x-\pi}\to-f'(\pi)=-\cos\pi=-(-1)=1$.`);
Q("2.7", M`Calculator: line $L$ is tangent to $y=2\sin x$ at $(k,2\sin k)$, where $0\lt k\lt 2\pi$. For what $k$ does $L$ pass through the origin?`,
  [M`$4.493$`, M`$1.571$`, M`$4.712$`, M`$3.141$`],
  M`Tangent: $y-2\sin k=2\cos k(x-k)$. Plug in $(0,0)$: $-2\sin k=-2k\cos k$. Graph both sides and intersect: $k\approx4.493$.`, { calc: true });
Q("2.7", M`$m(x)=-4\ln x-\sqrt x$. Find $m'(9)$.`,
  [M`$-\dfrac{11}{18}$`, M`$-\dfrac49-\dfrac13$`, M`$\dfrac{11}{18}$`, M`$-\dfrac{5}{18}$`],
  M`$m'(x)=-\frac4x-\frac1{2\sqrt x}$. $m'(9)=-\frac49-\frac16=-\frac{8}{18}-\frac3{18}=-\frac{11}{18}$.`);
Q("2.7", M`If $q(x)=e^3-x^e+e^x$, then $q'(x)=$`,
  [M`$-ex^{e-1}+e^x$`, M`$3e^2-ex^{e-1}+e^x$`, M`$-x^e+e^x$`, M`$-ex^{e-1}+xe^{x-1}$`],
  M`$e^3$: constant → $0$. $x^e$: base $x$, constant power → power rule $ex^{e-1}$. $e^x$: stays $e^x$.`);
Q("2.7", M`The line tangent to $y=e^x$ at $x=0$ is`,
  [M`$y=x+1$`, M`$y=x$`, M`$y=ex+1$`, M`$y=1$`],
  M`Point $(0,e^0)=(0,1)$, slope $e^0=1$: $y-1=1(x-0)$.`);
Q("2.7", M`Using the graphs of $f$ and $g$, let $r(x)=2\cos x-3f(x)$. What is $r'(0)$?`,
  [M`$3$`, M`$-3$`, M`$5$`, M`$-1$`],
  M`$r'(x)=-2\sin x-3f'(x)$. $f'(0)$ is the slope of $f$ on $(-1,2)$, which is $-1$. So $r'(0)=0-3(-1)=3$.`,
  { g: G_FG });
Q("2.7", M`If $h(x)=\dfrac{e^x}{5}-2\ln x$, then $h'(x)=$`,
  [M`$\dfrac{e^x}5-\dfrac2x$`, M`$\dfrac{e^x}5-2x$`, M`$e^x-\dfrac2x$`, M`$\dfrac{xe^{x-1}}5-\dfrac2x$`],
  M`$\frac15$ is a constant multiple; the derivative of $e^x$ is $e^x$; the derivative of $\ln x$ is $\frac1x$.`);

/* =============================== 2.8 =============================== */
Q("2.8", M`If $f(x)=x^2\sin x$, then $f'(x)=$`,
  [M`$2x\sin x+x^2\cos x$`, M`$2x\cos x$`, M`$2x\sin x-x^2\cos x$`, M`$x^2\cos x$`],
  M`Product rule $(uv)'=u'v+uv'$ with $u=x^2$, $v=\sin x$. Multiplying the derivatives ($2x\cos x$) is the classic mistake.`);
Q("2.8", M`If $g(x)=x^3\ln x$, then $g'(x)=$`,
  [M`$3x^2\ln x+x^2$`, M`$3x^2\cdot\dfrac1x$`, M`$3x^2\ln x+x^3$`, M`$3x^2+\dfrac1x$`],
  M`$3x^2\ln x+x^3\cdot\frac1x=3x^2\ln x+x^2$.`);
Q("2.8", M`$f(x)=(3x^2-2)(4x+7)$. Which is $f'(x)$?`,
  [M`$36x^2+42x-8$`, M`$24x$`, M`$12x^2+42x-8$`, M`$36x^2+42x+8$`],
  M`Product rule: $6x(4x+7)+(3x^2-2)(4)=24x^2+42x+12x^2-8=36x^2+42x-8$. Notice $f'\neq g'h'$ (that gives $24x$).`);
Q("2.8", M`If $h(x)=\cos x\sqrt x$, then $h'(x)=$`,
  [M`$-\sqrt x\sin x+\dfrac{\cos x}{2\sqrt x}$`, M`$-\dfrac{\sin x}{2\sqrt x}$`, M`$\sqrt x\sin x+\dfrac{\cos x}{2\sqrt x}$`, M`$-\sqrt x\sin x+\dfrac{\cos x}{\sqrt x}$`],
  M`$(\cos x)'\sqrt x+\cos x(\sqrt x)'=-\sin x\sqrt x+\cos x\cdot\frac12x^{-1/2}$.`);
Q("2.8", M`If $f(x)=x-2e^x\cos x$, then $f'(x)=$`,
  [M`$1-2e^x(\cos x-\sin x)$`, M`$1+2e^x\sin x$`, M`$1-2e^x(\cos x+\sin x)$`, M`$1-2e^x\cos x+2\sin x$`],
  M`Product rule on $2e^x\cos x$: $2e^x\cos x+2e^x(-\sin x)$. Subtracting all of it: $1-2e^x\cos x+2e^x\sin x=1-2e^x(\cos x-\sin x)$.`);
Q("2.8", M`Using the table, if $h(x)=4xf(x)$, then $h'(1)=$`,
  [M`$16$`, M`$-8$`, M`$24$`, M`$32$`],
  M`$h'(x)=4f(x)+4xf'(x)$. $h'(1)=4(6)+4(1)(-2)=24-8=16$.`,
  { tb: T_F3 });
Q("2.8", M`Using the table, if $k(x)=3\sin x\cdot f(x)$, then $k'(0)=$`,
  [M`$-12$`, M`$15$`, M`$3$`, M`$0$`],
  M`$k'(x)=3\cos x\,f(x)+3\sin x\,f'(x)$. $k'(0)=3(1)(-4)+3(0)(5)=-12$.`,
  { tb: T_F3 });
Q("2.8", M`Using the table, if $p(x)=e^xf(x)-f'(x)(x^2-x)$, then $p'(5)=$`,
  [M`$10e^5-103$`, M`$10e^5-63$`, M`$3e^5-103$`, M`$10e^5-40$`],
  M`$p'(x)=e^xf(x)+e^xf'(x)-[f''(x)(x^2-x)+f'(x)(2x-1)]$. At 5: $3e^5+7e^5-[2(20)+7(9)]=10e^5-103$.`,
  { tb: T_F3 });
Q("2.8", M`Using the table, if $h(x)=x^2g(x)$, then $h'(-4)=$`,
  [M`$72$`, M`$88$`, M`$-8$`, M`$-40$`],
  M`$h'(x)=2xg(x)+x^2g'(x)$. $h'(-4)=2(-4)(1)+16(5)=-8+80=72$.`,
  { tb: T_G2 });
Q("2.8", M`Using the table, if $p(x)=g(x)g'(x)$, then $p'(-1)=$`,
  [M`$28$`, M`$-8$`, M`$4$`, M`$12$`],
  M`$p'(x)=g'(x)g'(x)+g(x)g''(x)$. $p'(-1)=(-4)(-4)+(2)(6)=16+12=28$.`,
  { tb: T_G2 });
Q("2.8", M`Using the table, if $f(x)=x\ln x-g(x)$, then $f'(1)=$`,
  [M`$-1$`, M`$-2$`, M`$1$`, M`$3$`],
  M`$f'(x)=\ln x+x\cdot\frac1x-g'(x)=\ln x+1-g'(x)$. $f'(1)=0+1-2=-1$.`,
  { tb: T_G2 });
Q("2.8", M`Using the table, if $k(x)=2\cos x\cdot g'(x)$, then $k'(7)=$`,
  [M`$2\sin7-10\cos7$`, M`$-2\sin7-10\cos7$`, M`$2\sin7+10\cos7$`, M`$-10\cos7$`],
  M`$k'(x)=-2\sin x\,g'(x)+2\cos x\,g''(x)$. $k'(7)=-2\sin7(-1)+2\cos7(-5)=2\sin7-10\cos7$.`,
  { tb: T_G2 });
Q("2.8", M`Using the graphs of $f$ and $g$, if $P(x)=f(x)g(x)$, what is $P'(5)$?`,
  [M`$-2$`, M`$6$`, M`$-1$`, M`$2$`],
  M`$f(5)=4,\ f'(5)=1$ and $g(5)=2,\ g'(5)=-1$. $P'(5)=f'g+fg'=(1)(2)+(4)(-1)=-2$.`,
  { g: G_FG });
Q("2.8", M`Using the graphs of $f$ and $g$, if $P(x)=f(x)g(x)$, what is $P'(0)$?`,
  [M`$2$`, M`$-1$`, M`$4$`, M`$-2$`],
  M`$f(0)=3,\ f'(0)=-1,\ g(0)=1,\ g'(0)=1$. $P'(0)=(-1)(1)+(3)(1)=2$.`,
  { g: G_FG });
Q("2.8", M`Using the graphs of $f$ and $g$, if $P(x)=f(x)g(x)$, what is $P'(2)$?`,
  [M`does not exist`, M`$0$`, M`$-2$`, M`$4$`],
  M`$f$ has a sharp corner at $x=2$: its slope is $-1$ on the left and $1$ on the right, so $f'(2)$ doesn't exist. Using each side gives $P'=-2$ vs $4$, so $P'(2)$ does not exist.`,
  { g: G_FG });
Q("2.8", M`$p(x)=-3\cos(x)k(x)+4x$, with $k(0)=1$ and $k'(0)=2$. The line tangent to $p$ at $x=0$ is`,
  [M`$y+3=-2x$`, M`$y-3=-2x$`, M`$y+3=4x$`, M`$y+3=-6x$`],
  M`$p(0)=-3(1)(1)+0=-3$. $p'(x)=3\sin x\,k(x)-3\cos x\,k'(x)+4$, so $p'(0)=0-6+4=-2$.`);
Q("2.8", M`A student writes $\dfrac{d}{dx}\big[f(x)g(x)\big]=f'(x)g'(x)$. Which is the correct rule?`,
  [M`$f'(x)g(x)+f(x)g'(x)$`, M`$f'(x)g(x)-f(x)g'(x)$`, M`$\dfrac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}$`, M`$f'(x)+g'(x)$`],
  M`Product rule: $(uv)'=u'v+uv'$, "derivative of the first times the second, plus the first times derivative of the second." Only sums split into separate derivatives.`);

/* =============================== 2.9 =============================== */
Q("2.9", M`If $y=\dfrac{5x-2}{x^2+1}$, then $\dfrac{dy}{dx}=$`,
  [M`$\dfrac{-5x^2+4x+5}{(x^2+1)^2}$`, M`$\dfrac{5}{2x}$`, M`$\dfrac{5x^2-4x-5}{(x^2+1)^2}$`, M`$\dfrac{15x^2-4x+5}{(x^2+1)^2}$`],
  M`$\frac{(x^2+1)(5)-(5x-2)(2x)}{(x^2+1)^2}=\frac{5x^2+5-10x^2+4x}{(x^2+1)^2}$. Low d-high minus high d-low; order matters.`);
Q("2.9", M`If $g(x)=\dfrac{\sin x}{x}$, then $g'(x)=$`,
  [M`$\dfrac{x\cos x-\sin x}{x^2}$`, M`$\dfrac{\sin x-x\cos x}{x^2}$`, M`$\cos x$`, M`$\dfrac{x\cos x+\sin x}{x^2}$`],
  M`$\frac{x\cdot\cos x-\sin x\cdot1}{x^2}$. Switching the order in the numerator flips the sign.`);
Q("2.9", M`If $h(x)=\dfrac{4x}{\ln x}$, then $h'(x)=$`,
  [M`$\dfrac{4\ln x-4}{(\ln x)^2}$`, M`$4x^2$`, M`$\dfrac{4-4\ln x}{(\ln x)^2}$`, M`$\dfrac{4\ln x-4x}{(\ln x)^2}$`],
  M`$\frac{\ln x\cdot4-4x\cdot\frac1x}{(\ln x)^2}=\frac{4\ln x-4}{(\ln x)^2}$.`);
Q("2.9", M`If $f(x)=\dfrac{e^x}{4\sin x}$, then $f'(x)=$`,
  [M`$\dfrac{4e^x(\sin x-\cos x)}{(4\sin x)^2}$`, M`$\dfrac{4e^x(\cos x-\sin x)}{(4\sin x)^2}$`, M`$\dfrac{e^x}{4\cos x}$`, M`$\dfrac{4e^x(\sin x+\cos x)}{(4\sin x)^2}$`],
  M`$\frac{4\sin x\cdot e^x-e^x\cdot4\cos x}{(4\sin x)^2}=\frac{4e^x(\sin x-\cos x)}{16\sin^2x}$.`);
Q("2.9", M`If $f(x)=\dfrac{2x+4}{3x+2}$, then $f'(x)=$`,
  [M`$\dfrac{-8}{(3x+2)^2}$`, M`$\dfrac{8}{(3x+2)^2}$`, M`$\dfrac23$`, M`$\dfrac{12x+16}{(3x+2)^2}$`],
  M`$\frac{(3x+2)(2)-(2x+4)(3)}{(3x+2)^2}=\frac{6x+4-6x-12}{(3x+2)^2}=\frac{-8}{(3x+2)^2}$.`);
Q("2.9", M`If $g(x)=\dfrac{x^3+3x^2-x}{x^2}$, then $g'(x)=$`,
  [M`$1+\dfrac1{x^2}$`, M`$1-\dfrac1{x^2}$`, M`$\dfrac{3x^2+6x-1}{2x}$`, M`$x+3-\dfrac1x$`],
  M`Simplify first: $g(x)=x+3-x^{-1}$, so $g'(x)=1+x^{-2}$. Simplifying before the quotient rule saves time.`);
Q("2.9", M`If $f(x)=\dfrac{3x^2-2x+3}{7}$, then $f'(2)=$`,
  [M`$\dfrac{10}{7}$`, M`$\dfrac{10}{49}$`, M`$10$`, M`$\dfrac{11}{7}$`],
  M`Denominator is a constant, so just $\frac17(6x-2)$. At $x=2$: $\frac{10}7$. (Quotient rule works too: $\frac{7(6x-2)-0}{49}$.)`);
Q("2.9", M`Using the table, if $h(x)=\dfrac{5f(x)}{g(x)}$, then $h'(7)=$`,
  [M`$-\dfrac{45}{4}$`, M`$\dfrac{105}{4}$`, M`$-\dfrac{45}{2}$`, M`$-5$`],
  M`$h'=\frac{g\cdot5f'-5f\cdot g'}{g^2}=\frac{2(15)-(-25)(-3)}{4}=\frac{30-75}{4}=-\frac{45}4$.`,
  { tb: T_Q });
Q("2.9", M`Using the table, if $m(x)=\dfrac{g(x)+2}{3f(x)}$, then $m'(7)=$`,
  [M`$\dfrac1{25}$`, M`$-\dfrac1{25}$`, M`$\dfrac{81}{225}$`, M`$-\dfrac15$`],
  M`$m'=\frac{3f\cdot g'-(g+2)\cdot3f'}{(3f)^2}=\frac{(-15)(-3)-(4)(9)}{225}=\frac{45-36}{225}=\frac1{25}$.`,
  { tb: T_Q });
Q("2.9", M`Using the table, if $g(t)=\dfrac{1-a(t)}{2b(t)+3}$, then $g'(-4)=$`,
  [M`$-\dfrac{13}{25}$`, M`$\dfrac{13}{25}$`, M`$-\dfrac{17}{25}$`, M`$-\dfrac{3}{5}$`],
  M`$g'=\frac{(2b+3)(-a')-(1-a)(2b')}{(2b+3)^2}=\frac{(-5)(3)-(-1)(2)}{25}=\frac{-15+2}{25}$.`,
  { tb: T_AB });
Q("2.9", M`An equation of the line tangent to $f(x)=\dfrac{\sin x}{\cos x}$ at $x=\frac\pi3$ is`,
  [M`$y-\sqrt3=4\left(x-\frac\pi3\right)$`, M`$y-\sqrt3=2\left(x-\frac\pi3\right)$`, M`$y-\frac{\sqrt3}2=4\left(x-\frac\pi3\right)$`, M`$y-\sqrt3=\frac14\left(x-\frac\pi3\right)$`],
  M`Quotient rule: $\frac{\cos^2x+\sin^2x}{\cos^2x}=\frac1{\cos^2x}$. At $\frac\pi3$: $\frac1{(1/2)^2}=4$. Point: $\tan\frac\pi3=\sqrt3$.`);
Q("2.9", M`An equation of the line tangent to $g(x)=-\dfrac{2x}{e^x}$ at $x=0$ is`,
  [M`$y=-2x$`, M`$y=2x$`, M`$y=-2x+1$`, M`$y=-2$`],
  M`$g(0)=0$. $g'(x)=-\frac{e^x\cdot2-2xe^x}{e^{2x}}$, so $g'(0)=-\frac{2}{1}=-2$.`);
Q("2.9", M`If $g(x)=\dfrac{\sin x}{3x^2}$, the instantaneous rate of change of $g$ at $x=4$ is`,
  [M`$\dfrac{2\cos4-\sin4}{96}$`, M`$\dfrac{\cos4}{24}$`, M`$\dfrac{2\cos4+\sin4}{96}$`, M`$\dfrac{\sin4-2\cos4}{96}$`],
  M`$g'(x)=\frac{3x^2\cos x-6x\sin x}{9x^4}$. At 4: $\frac{48\cos4-24\sin4}{2304}=\frac{2\cos4-\sin4}{96}$.`);
Q("2.9", M`Using the graphs of $f$ and $g$, if $k(x)=\dfrac{g(x)}{f(x)}$, then $k'(5)=$`,
  [M`$-\dfrac38$`, M`$\dfrac38$`, M`$-1$`, M`$-\dfrac{3}{2}$`],
  M`$f(5)=4,\ f'(5)=1,\ g(5)=2,\ g'(5)=-1$. $k'=\frac{f g'-g f'}{f^2}=\frac{4(-1)-2(1)}{16}=-\frac6{16}=-\frac38$.`,
  { g: G_FG });
Q("2.9", M`Using the graphs of $f$ and $g$, if $h(x)=\dfrac{f(x)}{g(x)}$, then $h'(1)=$`,
  [M`$-1$`, M`$1$`, M`$0$`, M`$-\dfrac12$`],
  M`$f(1)=2,\ f'(1)=-1,\ g(1)=2,\ g'(1)=1$. $h'=\frac{g f'-f g'}{g^2}=\frac{2(-1)-2(1)}{4}=-1$.`,
  { g: G_FG });
Q("2.9", M`Which is the quotient rule for $\left(\dfrac uv\right)'$?`,
  [M`$\dfrac{vu'-uv'}{v^2}$`, M`$\dfrac{uv'-vu'}{v^2}$`, M`$\dfrac{u'}{v'}$`, M`$\dfrac{vu'+uv'}{v^2}$`],
  M`"Low d-high minus high d-low, over the square of what's below." The minus sign makes order matter.`);

/* =============================== 2.10 =============================== */
Q("2.10", M`$\dfrac{d}{dx}\sec x=$`,
  [M`$\sec x\tan x$`, M`$-\csc x\cot x$`, M`$\sec^2x$`, M`$\tan^2 x$`],
  M`Memorize the pairs: $\tan\to\sec^2$, $\sec\to\sec\tan$; the "co" functions get a minus: $\cot\to-\csc^2$, $\csc\to-\csc\cot$.`);
Q("2.10", M`$\dfrac{d}{dx}\cot x=$`,
  [M`$-\csc^2x$`, M`$\csc^2x$`, M`$-\csc x\cot x$`, M`$\sec^2x$`],
  M`All the "co-" derivatives ($\cos$, $\cot$, $\csc$) are negative. $\cot\to-\csc^2$.`);
Q("2.10", M`$\dfrac{d}{dx}\csc x=$`,
  [M`$-\csc x\cot x$`, M`$\csc x\cot x$`, M`$-\csc^2x$`, M`$-\sec x\tan x$`],
  M`$\csc\to-\csc\cot$ (a "co" function, so negative).`);
Q("2.10", M`If $y=5-\csc x$, then $y'=$`,
  [M`$\csc x\cot x$`, M`$-\csc x\cot x$`, M`$\csc^2x$`, M`$5-\csc x\cot x$`],
  M`$-(\csc x)'=-(-\csc x\cot x)=\csc x\cot x$.`);
Q("2.10", M`If $h(x)=2x\tan x$, then $h'(x)=$`,
  [M`$2\tan x+2x\sec^2x$`, M`$2\sec^2x$`, M`$2\tan x+2x\sec x\tan x$`, M`$2x\sec^2x$`],
  M`Product rule: $(2x)'\tan x+2x(\tan x)'=2\tan x+2x\sec^2x$.`);
Q("2.10", M`If $f(x)=3\tan x$, then $f'\left(\frac{2\pi}3\right)=$`,
  [M`$12$`, M`$-12$`, M`$\dfrac34$`, M`$-3\sqrt3$`],
  M`$f'(x)=3\sec^2x=\frac3{\cos^2x}$. $\cos\frac{2\pi}3=-\frac12$, squared is $\frac14$, so $\frac{3}{1/4}=12$.`);
Q("2.10", M`If $f(x)=2\sec x$, then $f'\left(\frac\pi4\right)=$`,
  [M`$2\sqrt2$`, M`$\sqrt2$`, M`$4$`, M`$2$`],
  M`$f'(x)=2\sec x\tan x$. $\sec\frac\pi4=\sqrt2$, $\tan\frac\pi4=1$, so $2\sqrt2$.`);
Q("2.10", M`If $f(x)=x\cot x$, then $f'\left(\frac\pi6\right)=$`,
  [M`$\sqrt3-\dfrac{2\pi}3$`, M`$\sqrt3+\dfrac{2\pi}3$`, M`$\sqrt3-\dfrac{\pi}6$`, M`$-\dfrac{2\pi}3$`],
  M`$f'(x)=\cot x-x\csc^2x$. $\cot\frac\pi6=\sqrt3$ and $\csc^2\frac\pi6=4$, so $\sqrt3-\frac\pi6\cdot4$.`);
Q("2.10", M`$\displaystyle\lim_{h\to0}\frac{\tan\left(\frac\pi3+h\right)-\tan\left(\frac\pi3\right)}{h}=$`,
  [M`$4$`, M`$\sqrt3$`, M`$2$`, M`$0$`],
  M`Derivative of $\tan x$ at $\frac\pi3$: $\sec^2\frac\pi3=2^2=4$.`);
Q("2.10", M`$\displaystyle\lim_{h\to0}\frac{\sec\left(\frac\pi6+h\right)-\sec\left(\frac\pi6\right)}{h}=$`,
  [M`$\dfrac23$`, M`$\dfrac{2}{\sqrt3}$`, M`$\dfrac43$`, M`$\dfrac12$`],
  M`$\sec\frac\pi6\tan\frac\pi6=\frac2{\sqrt3}\cdot\frac1{\sqrt3}=\frac23$.`);
Q("2.10", M`An equation of the NORMAL line to $y=\tan x$ at $x=\frac\pi3$ is`,
  [M`$y-\sqrt3=-\frac14\left(x-\frac\pi3\right)$`, M`$y-\sqrt3=4\left(x-\frac\pi3\right)$`, M`$y-\sqrt3=\frac14\left(x-\frac\pi3\right)$`, M`$y+\sqrt3=-\frac14\left(x-\frac\pi3\right)$`],
  M`Tangent slope is $\sec^2\frac\pi3=4$. The normal line is perpendicular to the tangent, so its slope is the opposite reciprocal, $-\frac14$.`);
Q("2.10", M`For $y=\sec x$ at $x=\pi$, the tangent and normal lines are`,
  [M`tangent $y=-1$, normal $x=\pi$`, M`tangent $x=\pi$, normal $y=-1$`, M`tangent $y=1$, normal $x=\pi$`, M`tangent $y=-x+\pi-1$, normal $y=x-\pi-1$`],
  M`$\sec\pi=-1$ and $y'=\sec\pi\tan\pi=0$. Slope $0$ gives the horizontal tangent $y=-1$; the normal is perpendicular, the vertical line $x=\pi$.`);
Q("2.10", M`If $f(x)=\dfrac1{2\cos x}$, then $f'(x)=$`,
  [M`$\frac12\sec x\tan x$`, M`$-\frac12\sec x\tan x$`, M`$\dfrac{1}{-2\sin x}$`, M`$\frac12\sec^2x$`],
  M`Rewrite as $\frac12\sec x$, then use $\sec\to\sec\tan$.`);
Q("2.10", M`If $g(x)=\dfrac{\cot x}{x}$, then $g'(x)=$`,
  [M`$\dfrac{-x\csc^2x-\cot x}{x^2}$`, M`$\dfrac{x\csc^2x-\cot x}{x^2}$`, M`$-\csc^2x$`, M`$\dfrac{-x\csc^2x+\cot x}{x^2}$`],
  M`$\frac{x(-\csc^2x)-\cot x\cdot1}{x^2}$.`);
Q("2.10", M`Calculator: if $f(x)=3\sec(e^x)$, then $f'(2.5)\approx$`,
  [M`$-15.921$`, M`$15.921$`, M`$-3.418$`, M`$-1.302$`],
  M`Numerical derivative at $x=2.5$ in radian mode.`, { calc: true });
Q("2.10", M`If $y=5x\sec x$, then $\dfrac{dy}{dx}=$`,
  [M`$5\sec x+5x\sec x\tan x$`, M`$5\sec x\tan x$`, M`$5\sec x+5x\sec^2x$`, M`$5x\sec x\tan x$`],
  M`Product rule: $5\cdot\sec x+5x\cdot\sec x\tan x$.`);
