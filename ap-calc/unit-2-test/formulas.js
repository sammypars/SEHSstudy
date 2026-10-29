/* =====================================================================
   Formula sheet (button on every page) and the memorization drill.
   SHEET: sections of [prompt, answer] rows. In "memorize mode" the
   answers are covered until tapped.
   DRILL: [prompt, correct, wrong, wrong, wrong] for flashcards and
   quick-fire. First answer is the correct one.
   ===================================================================== */
const SHEET = [
  { h: "Rates of change", rows: [
    [M`Average rate of change on $[a,b]$`, M`$\dfrac{f(b)-f(a)}{b-a}$ (slope of the secant line)`],
    [M`Instantaneous rate of change at $x=a$`, M`$f'(a)$, the slope of the tangent line`],
    [M`Limit definition of $f'(x)$`, M`$\displaystyle f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$`],
    [M`Limit definition of $f'(a)$ (other form)`, M`$\displaystyle f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$`],
    [M`Estimate $f'(c)$ from a table`, M`Use the two closest points around $c$: $\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$`],
    [M`Units of $f'(t)$`, M`(units of $f$) per (unit of $t$)`],
    [M`Notation`, M`$f'(x)$ (Lagrange), $\dfrac{dy}{dx}$ (Leibniz), $y'$`],
  ]},
  { h: "Tangent & normal lines", rows: [
    [M`Tangent line at $x=a$`, M`$y-f(a)=f'(a)(x-a)$`],
    [M`Normal line slope`, M`$-\dfrac{1}{f'(a)}$ (opposite reciprocal)`],
    [M`Horizontal tangent`, M`$f'(x)=0$`],
    [M`Parallel lines / perpendicular lines`, M`Same slope / opposite reciprocal slopes`],
  ]},
  { h: "Continuity & differentiability", rows: [
    [M`$f$ is continuous at $c$ if`, M`$\displaystyle\lim_{x\to c}f(x)$ exists, $f(c)$ exists, and $\displaystyle\lim_{x\to c}f(x)=f(c)$`],
    [M`$f$ is differentiable at $c$ if`, M`$f$ is continuous at $c$ AND the left and right slopes approach the same value`],
    [M`Not differentiable at`, M`discontinuities, corners/cusps, vertical tangents (and endpoints)`],
    [M`Which way does it go?`, M`Differentiable ⇒ continuous. Continuous does NOT ⇒ differentiable.`],
    [M`Local linearity`, M`Zoom in on a differentiable point and the graph looks like its tangent line`],
  ]},
  { h: "Basic rules", rows: [
    [M`$\dfrac{d}{dx}[c]$`, M`$0$`],
    [M`Power rule $\dfrac{d}{dx}[x^n]$`, M`$nx^{n-1}$ (rewrite $\frac1{x^n}=x^{-n}$, $\sqrt[m]{x^n}=x^{n/m}$ first)`],
    [M`$\dfrac{d}{dx}[cf(x)]$`, M`$cf'(x)$`],
    [M`$\dfrac{d}{dx}[f(x)\pm g(x)]$`, M`$f'(x)\pm g'(x)$`],
    [M`$\dfrac{d}{dx}\sqrt x$`, M`$\dfrac{1}{2\sqrt x}$`],
    [M`$\dfrac{d}{dx}\dfrac1x$`, M`$-\dfrac{1}{x^2}$`],
  ]},
  { h: "Product & quotient rules", rows: [
    [M`Product rule $(uv)'$`, M`$u'v+uv'$`],
    [M`Quotient rule $\left(\dfrac uv\right)'$`, M`$\dfrac{vu'-uv'}{v^2}$ ("low d-high minus high d-low, over low squared")`],
  ]},
  { h: "Special functions", rows: [
    [M`$\dfrac{d}{dx}\sin x$`, M`$\cos x$`],
    [M`$\dfrac{d}{dx}\cos x$`, M`$-\sin x$`],
    [M`$\dfrac{d}{dx}\tan x$`, M`$\sec^2x$`],
    [M`$\dfrac{d}{dx}\cot x$`, M`$-\csc^2x$`],
    [M`$\dfrac{d}{dx}\sec x$`, M`$\sec x\tan x$`],
    [M`$\dfrac{d}{dx}\csc x$`, M`$-\csc x\cot x$`],
    [M`$\dfrac{d}{dx}e^x$`, M`$e^x$`],
    [M`$\dfrac{d}{dx}\ln x$`, M`$\dfrac1x$`],
    [M`Memory trick`, M`All the "co-" functions ($\cos,\cot,\csc$) have a minus sign`],
  ]},
  { h: "Unit circle values", rows: [
    [M`$\sin\frac\pi6,\ \cos\frac\pi6,\ \tan\frac\pi6$`, M`$\frac12,\ \frac{\sqrt3}2,\ \frac{1}{\sqrt3}$`],
    [M`$\sin\frac\pi4,\ \cos\frac\pi4,\ \tan\frac\pi4$`, M`$\frac{\sqrt2}2,\ \frac{\sqrt2}2,\ 1$`],
    [M`$\sin\frac\pi3,\ \cos\frac\pi3,\ \tan\frac\pi3$`, M`$\frac{\sqrt3}2,\ \frac12,\ \sqrt3$`],
    [M`$\sin\frac\pi2,\ \cos\frac\pi2$`, M`$1,\ 0$`],
    [M`$\sin\pi,\ \cos\pi$`, M`$0,\ -1$`],
    [M`$\sec x,\ \csc x,\ \cot x$`, M`$\dfrac1{\cos x},\ \dfrac1{\sin x},\ \dfrac{\cos x}{\sin x}$`],
  ]},
  { h: "Calculator tips", rows: [
    [M`Mode`, M`Radians`],
    [M`Rounding on the AP exam`, M`3 decimal places`],
    [M`Find $f'(a)$`, M`Numerical derivative $\frac{d}{dx}$ at $x=a$`],
  ]},
];

const DRILL = [
  [M`$\dfrac{d}{dx}\sin x$`, M`$\cos x$`, M`$-\cos x$`, M`$-\sin x$`, M`$\sec^2x$`],
  [M`$\dfrac{d}{dx}\cos x$`, M`$-\sin x$`, M`$\sin x$`, M`$-\cos x$`, M`$\csc^2 x$`],
  [M`$\dfrac{d}{dx}\tan x$`, M`$\sec^2x$`, M`$-\csc^2x$`, M`$\sec x\tan x$`, M`$\tan^2x$`],
  [M`$\dfrac{d}{dx}\cot x$`, M`$-\csc^2x$`, M`$\csc^2x$`, M`$-\csc x\cot x$`, M`$-\sec^2x$`],
  [M`$\dfrac{d}{dx}\sec x$`, M`$\sec x\tan x$`, M`$-\csc x\cot x$`, M`$\sec^2x$`, M`$-\sec x\tan x$`],
  [M`$\dfrac{d}{dx}\csc x$`, M`$-\csc x\cot x$`, M`$\csc x\cot x$`, M`$-\csc^2x$`, M`$-\sec x\tan x$`],
  [M`$\dfrac{d}{dx}e^x$`, M`$e^x$`, M`$xe^{x-1}$`, M`$e^{x-1}$`, M`$\ln x$`],
  [M`$\dfrac{d}{dx}\ln x$`, M`$\dfrac1x$`, M`$e^x$`, M`$\dfrac{1}{\ln x}$`, M`$x\ln x-x$`],
  [M`$\dfrac{d}{dx}x^n$`, M`$nx^{n-1}$`, M`$x^{n-1}$`, M`$nx^{n}$`, M`$(n-1)x^{n}$`],
  [M`$\dfrac{d}{dx}[c]$ ($c$ a constant)`, M`$0$`, M`$c$`, M`$1$`, M`$cx$`],
  [M`$\dfrac{d}{dx}\sqrt x$`, M`$\dfrac1{2\sqrt x}$`, M`$\dfrac{\sqrt x}{2}$`, M`$\dfrac{2}{\sqrt x}$`, M`$\frac32x^{3/2}$`],
  [M`$\dfrac{d}{dx}\dfrac1x$`, M`$-\dfrac1{x^2}$`, M`$\dfrac1{x^2}$`, M`$\ln x$`, M`$-\dfrac1x$`],
  [M`Product rule $(uv)'$`, M`$u'v+uv'$`, M`$u'v'$`, M`$u'v-uv'$`, M`$\dfrac{u'v-uv'}{v^2}$`],
  [M`Quotient rule $\left(\dfrac uv\right)'$`, M`$\dfrac{vu'-uv'}{v^2}$`, M`$\dfrac{uv'-vu'}{v^2}$`, M`$\dfrac{u'}{v'}$`, M`$\dfrac{vu'+uv'}{v^2}$`],
  [M`Limit definition of $f'(x)$`, M`$\displaystyle\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$`, M`$\dfrac{f(b)-f(a)}{b-a}$`, M`$\displaystyle\lim_{h\to0}\big(f(x+h)-f(x)\big)$`, M`$\displaystyle\lim_{h\to0}\frac{f(x+h)+f(x)}{h}$`],
  [M`$f'(a)$ using $x\to a$`, M`$\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$`, M`$\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x+a}$`, M`$\displaystyle\lim_{x\to a}\frac{f(a)-f(x)}{x-a}$`, M`$\displaystyle\lim_{x\to 0}\frac{f(x)-f(a)}{x-a}$`],
  [M`Average rate of change on $[a,b]$`, M`$\dfrac{f(b)-f(a)}{b-a}$`, M`$\dfrac{f'(b)-f'(a)}{b-a}$`, M`$\dfrac{b-a}{f(b)-f(a)}$`, M`$\dfrac{f(b)+f(a)}{2}$`],
  [M`Tangent line to $f$ at $x=a$`, M`$y-f(a)=f'(a)(x-a)$`, M`$y-a=f'(a)(x-f(a))$`, M`$y-f(a)=f'(x)(x-a)$`, M`$y-f'(a)=f(a)(x-a)$`],
  [M`Slope of the normal line at $x=a$`, M`$-\dfrac{1}{f'(a)}$`, M`$\dfrac{1}{f'(a)}$`, M`$-f'(a)$`, M`$f'(a)$`],
  [M`Which does NOT break differentiability?`, M`a horizontal tangent`, M`a corner`, M`a vertical tangent`, M`a jump`],
  [M`Differentiable at $c$ ⇒ ?`, M`continuous at $c$`, M`$f'(c)=0$`, M`$f(c)\neq0$`, M`a corner at $c$`],
  [M`Units of $V'(t)$ if $V$ is gallons and $t$ is hours`, M`gallons per hour`, M`gallons`, M`hours per gallon`, M`gallons per hour²`],
  [M`$\sec\frac\pi3$`, M`$2$`, M`$\frac12$`, M`$\frac{2}{\sqrt3}$`, M`$\sqrt3$`],
  [M`$\tan\frac\pi3$`, M`$\sqrt3$`, M`$\frac1{\sqrt3}$`, M`$1$`, M`$\frac{\sqrt3}2$`],
  [M`$\cos\frac{2\pi}3$`, M`$-\frac12$`, M`$\frac12$`, M`$-\frac{\sqrt3}2$`, M`$\frac{\sqrt3}2$`],
  [M`$\csc\frac\pi6$`, M`$2$`, M`$\frac12$`, M`$\frac2{\sqrt3}$`, M`$\sqrt3$`],
  [M`$\sec^2\frac\pi4$`, M`$2$`, M`$\sqrt2$`, M`$1$`, M`$\frac12$`],
  [M`$\cot\frac\pi4$`, M`$1$`, M`$0$`, M`$\sqrt3$`, M`$-1$`],
];
