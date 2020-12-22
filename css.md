
# CSS -

## Table Of Content :
* [CSS Units](#css-units)
* [CSS Selectors](#css-selectors)
* [Pseudo Classes](#pseudo-classes)
* [Pseudo Elements](#pseudo-elements)
* [Fonts](#fonts)
* [Text Formatting](#text-formatting)
* [Display and Layout](#display-and-layout)
* [Sizing and Content](#sizing-and-content)
* [Links](#links)
* [Lists](#lists)
* [Tables](#tables)
* [Border](#border)
* [Outline](#outline)
* [Shadow](#shadow)
* [Background](#background)
* [Background Gradient Linear](#background-gradient-linear)
* [Background Gradient Radial](#background-gradient-radial)
* [Multiple Background](#multiple-background)
* [Media Queries](#media-queries)
* [Multi Columns](#multi-columns)
* [Flexbox](#flexbox)
* [Grid View](#grid-view)
* [CSS Filters](#css-filters)
* [Transitions](#transitions)
* [Transformation 2D](#transformation-2d)
* [Transform 3D](#transform-3d)
* [Animation](#animation)


<br>


## CSS Units

| Absolute Lengths |
| --- |
| `cm` - centimeters |
| `mm` - millimeters |
| `in` - inches (1in = 96px = 2.54cm) |
| `px` - pixels (1px = 1/96th of 1in) |
| `pt` - points (1pt = 1/72 of 1in) |
| `pc` - picas (1pc = 12 pt) |


| Relative Lengths |
| --- |
| `em` - Relative to the font-size of the element (2em means 2 times the size of the current font) |
| `ex` - Relative to the x-height of the current font (rarely used) |
| `ch` - Relative to width of the "0" (zero) |
| `rem` - Relative to font-size of the root element |
| `vw` - Relative to 1% of the width of the viewport |
| `vh` - Relative to 1% of the height of the viewport |
| `vmin` - Relative to 1% of viewport's smaller dimension |
| `vmax` - Relative to 1% of viewport's larger dimension |
| `%` - Relative to the parent element |



## CSS Selectors

- Class : `.class-name , a.class-name , div.a`
- Id : `#id-name` (id is unique within page)
- Universal : `*`
- Grouping : `element, tag`


### Combinators :
- Descendant (space) : selects all descendants elements. `.class a`
- Child ( > ) :  selects all children elements. `div > p`
- Adjacent Sibling (+) : selects all adjacent siblings (placed immediately after) elements. `div + p`
- General Sibling (\~) : selects all siblings elements. `div ~ p`


### Attributes :

- `[ attribute=value ]` : `a [target="_blank"]` or `input[type=text/password/number]`
- `[attribute~="value"]` : select elements with attribute value containing specified word `[title~="flower"]`
- `[attribute|="value"]` : select elements with specified attribute starting with specified value `[class|="top"]`
- `[attribute^="value"]` : select elements whose attribute value begins with specified value `[class^="top"]`
- `[attribute$="value"]` : select elements whose attribute value ends with specified value `[class$="test"]`
- `[attribute*="value"] ` : select elements whose attribute value contains specified value `[class*="to"]`



## Pseudo Classes
*Selects all with pseudo-class.*

**Pseudo Class :**
first-child, last-child, hover, active, link, visited, focus, checked, disabled, enabled, empty, required, target, invalid, not(element)

**Syntax :**
```
selector : pseudo-class {
    property: value;
}
```

Ex :
```
div:hover {
    color: red;
}
```


## Pseudo Elements
*Selects & Inserts content with pseudo-element.*

**Pseudo Element :** after,before,first-letter,first-line,selection

**Syntax :**
```
selector :: pseudo-element {
    property: value;
}
```

Ex :
```
p :: before {
	content: "before p";
	color: red;
}
```



## Fonts

| Properties |
| --- |
| `color: color-name/hexdec/rgb(,,)/rgb(%,%,%, opacity)` |
| `font-family: font-name , generic-family-name` |
| `font-size: small/medium/large/x-large/absolute/relative/value` |
| `font-style: italic/normal/oblique` |
| `font-weight: lighter/bold/bolder/100-900` |
| `font-variant: normal/small-caps` |
| `font-stretch: normal/condensed/ultra-condensed/extra-condensed/semi-condensed/expanded/semi-expanded/extra-expanded/ultra-expanded` |

> font: style variant weight color-name font-name


### Font-Face Rules :

**Syntax :**
```
@font-face { 
    font-family: font-name;
    src: url('font-name.otf');
    font-stretch: condensed;
    font-style: italic;
    font-weight: 400;
}
tag/selector {
   font-family: font-name;
}
```

Ex :
```
@font-face {
    font-family: UbuntuCondensed;
    src: url(ubuntucondensed.ttf);
}
div {
    font-family: UbuntuCondensed;
}
```



## Text Formatting

| Properties |
| --- |
| `text-align: left/right/center/justify` |
| `vertical-align: top/right/center/justify` |
| `text-decoration: none/inherit/overline/underline/line-through/blink` |
| `text-indent: value` |
| `text-transform: capitalize/uppercase/lowercase/none` |
| `text-spacing: normal/inherit/value` |
| `text-overflow: clip/ellipsis/string/initial/inherit` |
| `word-spacing: normal/inherit/value` |
| `white-spacing: normal/inherit/nowrap/pre/pre-line/pre-wrap/nowrap` |
| `letter-spacing:normal/value` |
| `line-height: auto/value` |
| `direction: ltr/rtl` |
| `text-justify: auto/inter-word/inter-character/none/initial/inherit` |
| `text-align-last: auto/left/right/center/justifstart/end/initial/inherit` |



## Display and Layout

| Properties |
| --- |
| `z-index: low/high/integer` |
| `display: block/inline/flex/none` |
| `visibility: hidden/visible/collapse` |
| `position: static/fixed/relative/absolute/sticky` |
| `top/bottom/left/right: value` |
| `margin: value/auto/inherit` |
| `margin-top/bottom/left/right: value` |
| `padding: value/inherit` |
| `padding-top/bottom/left/right: value` |



## Sizing and Content

| Properties |
| --- |
| `height: value/auto/initial/inherit` |
| `width: value/auto/initial/inherit` |
| `min-width: auto/value` |
| `max-width: auto/value` |
| `min-height: auto/value` |
| `max-height: auto/value` |
| `box-sizing: border-box/content-box/initial/inherit` |
| `resize: none/both/horizontal/vertical/initial/inherit` |
| `word-wrap: normal/break-word` |
| `text-overflow: clip/ellipsis` |
| `word-break: break-all/keep-all/break-word` |
| `writing-mode: horizontal-tb/vertical-rl/vertical-lr` |
| `float: left/right/center/none/initial/inherit` |
| `clear: left/right/both/none/initial/inherit` |
| `overflow: visible/scroll/hidden/auto` |
| `overflow-x/y: auto/scroll` |
| `object-fit: fill/contain/cover/none/scale-down` (for image) |



## Link

```
a: link/visited/hower/active/a:focus {
   color: color-name;
}
```

```
a: link {
    text-decoration: none;
    border:none;
    out-line:none;
}
```



## List

| Properties |
| --- |
| `list-style-type: cirle/square/lower-alpha/disc/decimal/upper-roman` |
| `list-style-image: url("name.jpg")` |
| `list-style-position: inside/outside` |
| `marker-offset: value` |

> list-style: list-style-type list-style-position none



## Table

| Properties |
| --- |
| `border-collapse: separate` |
| `border-spacing: value value` |
| `caption-side: top/bottom/left/right` |
| `empty-cell: show/hide/inherit` |
| `table-layout: auto/fixed/inherit` |



## Border

| Properties |
| --- |
| `border-style: solid/dotted/dashed/double/groove/ridge/inset/outset/hidden/none` |
| `border-width: value` |
| `border-color: blue` |
| `border-bottom/top/left/right-color: value` |
| `border-bottom/top/left/right-style: value` |
| `border-bottom/top/left/right-width: value` |
| `border-radius: value` |
| `border-radius: top-left top-right bottom-right bottom-left` |
| `border-radius: top bottom` |
| `border-top-left-radius: value` |
| `border-top-right-radius: value` |
| `border-bottom-right-radius: value` |
| `border-bottom-left-radius: value` |
| `border-image-source: url()` |
| `border-image-slice: +integer` |
| `border-image-width: value` |
| `border-image-repeat: round/repeat/stretched` |

> border: value style color-name



## Outline

| Properties |
| --- |
| `outline-width: thin/medium/thick` |
| `outline-width: value` |
| `outline-style: solid/dotted/dashed/double/groove/ridge/inset/outset/hidden/none` |
| `outline-color: value` |
| `outline-offset: value/initial/inherit` |

> outline:  value style color-name



## Shadow

| Properties |
| --- |
| `text-shadow: X Y / X Y color / X Y blur color / X Y spread color` *(multiple seperate by comma)* |
| `box-shadow: X Y color / X Y blur spread color` |
| `box-shadow: inset (X Y color)`  (inner shadow) |



## Background

| Properties |
| --- |
| `background-color: hexdec/color-name/rgb(,,)` |
| `background-image: url("name.png")` |
| `background-repeat: repeat-x/repeat-y/no-repeat` |
| `background-attachment: fixed/scroll` |
| `background-size: width height /auto` |
| `background-size: contain/cover` |
| `background-clip: border-box/padding-box/content-box` |



----



## Background Gradient Linear

| Properties |
| --- |
| `background: linear-gradient(90deg)` |
| `background: linear-gradient(color, color)` |
| `background: linear-gradient(color %, color value)` |
| `background: linear-gradient(to left/right/top/bottom/bottom right, color, color)` |
| `background: linear-gradient(x-deg, color)` |
| `background: repeating-linear-gradient(color, color value)` |



## Background Gradient Radial

| Properties |
| --- |
| `background: radial-gradient(top/bottom/left/right ,cirlce/ellipse ,color-stop)` |
| `background: radial-gradient(color, color)` |
| `background: radial-gradient(color %, value)` |
| `background: radial-gradient(left/right/top/bottom, color, color)` |
| `background: radial-gradient(shape, color, color)` |



## Multiple Background

| Properties |
| --- |
| `background-image: url(img.png), url(img.jpg)` |
| `background-position: right bottom, left top` |
| `background-repeat: repeat/no-repeat/repeat-x/repeat-y` |
| `background-size: contain/cover/auto/initial/inherit` |
| `background-clip: border-box/padding-box/content-box` |

> background: background-image background-position background-repeat

*(comma seperate multiple)*



## Media Queries

**Media-Types :** all/print/screen/speech

**Media-Features :** width/resolution/overflow-inline/overflow-block/orientation/aspect-ratio/height/min-width/min-resolution/min-height/min-aspect-ratio/max-width/max-resolution/max-height/max-aspect-ratio

**Syntax :**
```
@media media-types and ( media-features ) {
    property: value;
}
```


Ex :
```
@media screen and (min-width: 480px){
    body{
        background-color: lightgreen;
    }
}
```

```
@media screen and (max-width: 600px){
    div.example{
        display: none;
    }
}
```



## Multi Columns

| Properties |
| --- |
| `column-count: n-count` |
| `column-gap: value` |
| `column-rule-style: solid/dotted/dashed/double/groove/ridge/inset/outset/hidden/none/initial/inherit` |
| `column-rule-width: value` |
| `column-rule-color: color-name/hex/rgb` |
| `column-span: all/none/initial/inherit` |
| `column-width: value` |
| `column-fill: auto/balance/initial/inherit` |

> column: column-rule-width column-count

> column-rule: column-rule-width column-rule-style column-rule-color



## Flexbox

**Note : should be `display: flex`**


| Flex Container Properties |
| --- |
| `flex-direction: column/row/column-reverse/row-reverse` |
| `flex-wrap: wrap/no-wrap/wrap-reverse` |
| `justify-content: center/flex-start/flex-end/space-around/space-between` |
| `align-items: center/flex-start/flex-end/stretch/baseline` |
| `align-content: center/flex-start/flex-end/space-around/space-between/stretch` |

> flex-flow: flex-direction flex-wrap


| Flex Items Properties |
| --- |
| `order: +integer` (flex item order) |
| `flex-grow: +integer` (how much item grows relatively) |
| `flex-shrink: +integer` (how much item shrinks relatively) |
| `flex-basis: value` (specify initial length) |
| `align-self: center/flex-start/flex-end/stretch/baseline` |

> flex: flex-grow flex-shrink flex-basis



## Grid View

**Note : should be `display: grid/inline-grid`**


| Properties |
| --- |
| `justify-content: space-evenly/space-around/space-between/center/start/end` |
| `align-content: center/space-evenly/space-between/space-around/start/end` |
| `grid-column-gap: value` |
| `grid-row-gap: value` |
| `grid-gap: col-value row-value / both` |
| `grid-column-start: int-start-line` |
| `grid-column-end: int-end-line` |
| `grid-row-start: int-start-line` |
| `grid-row-end: int-end-line` |
| `grid-template-columns: auto auto auto auto` (same 4 column) |
| `grid-template-rows: value value` (same 2 rows) |
| `grid-area: grid-name` |

> grid-column: start / end

> grid-row: start / end

> grid-area: row-start / column-start / row-end / column-end



## CSS Filters

| Opacity |
| --- |
| `opacity : 0.0-1.0` |


| Transparency |
| --- |
| `rgba(R,G,B, opacity)` |
| `hsl(hue,saturation,lightness)` |
| `hsla(hue,saturation,lightness,alpha)` (alpha=0.1-1.0) |


| Filter Properties |
| --- |
| `filter: blur( radius value )` |
| `filter: brightness(% / no)` |
| `filter: contrast(% / no)` |
| `filter: drop-shadow(X Y offset color)` |
| `filter: grayscale(%)` |
| `filter: hue-rotate(deg)` |
| `filter: invert(%)` |
| `filter: opacity(%)` |
| `filter: saturate(% / no)` |
| `filter: sepia(%)` |

> filter: blur hue-rotate()

Ex :
`blur(5px) hue-rotate(180deg)`



## Transitions

| Properties |
| --- |
| `transition-property: tag/element` |
| `transition-duration: sec` |
| `transition-timing-function: linear/ease/ease-in/ease-out/ease-in-out/cubuc-bezier(0,0,1,1)` |
| `transition-delay: sec` |

> transition: transition-property transition-duration transition-timing-function transition-delay

*(comma seperate multiple)*


Ex : *trigger When div elements width changes*
```
div {
    width: 100px;
    height: 100px;
    transition: width 2s;
    transition-timing-function: ease;
}
div:hover {
    width: 300px;
}

```

Ex : *transition with transform*
```
div {
    width: 100px;
    height: 100px;
    transition: width 2s, height 2s, transform 2s;
}
div:hover {
    width: 300px;
    height: 300px;
    transform: rotate(180deg);
}
```



## Transformation 2D

| Properties |
| --- |
| `transform: translate(x-width,y-height)` |
| `transform: rotate(deg)` |
| `transform: scale(X-width,y-height)` |
| `transform: scaleX(x-width)` |
| `transform: scaleY(y-height)` |
| `transform: skew(deg)` |
| `transform: skewX(deg)` |
| `transform: skewY(deg)` |
| `transform: none` |
| `transform-origin: X% Y%` |
| `transform: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )` |

> transform: rotate(45deg) translate(100px)

*Comma seperate muliple*


Ex :
```
div {
    width: 200px;
    height: 100px;
    transform: scale(2,3);
}
```



## Transform 3D

| Properties |
| --- |
| `transform: rotateX(deg)` |
| `transform: rotateY(deg)` |
| `transform: rotateZ(deg)` |
| `transform: rotate3d(x,y,z,deg)` |
| `transform: translateX(x)` |
| `transform: translateY(y)` |
| `transform: translateZ(z)` |
| `transform: translate3d(x,y,z)` |
| `transform: scaleX(x)` |
| `transform: scaleY(y)` |
| `transform: scaleZ(z)` |
| `transform: scale3d(x,y,z)` |
| `transform-style: flat/preserve-3d/initial/inherit` |
| `perspective: value` |
| `backface-visibility: visible/hidden/initial/inherit` |
| `perspective-origin: x-axis (left/center/right/length/%) / y-axis (top/center/bottom/length/%) / initial/inheritet` |


Ex :
```
div {
    height: 150px;
    width: 150px;
    transform-style: preserve-3d;
    transform: rotateX(45deg);
    perspective: 100px;
    perspective-origin: -90%;  
}
```



## Animation

**Syntax :**
```
@keyframes animation-name {
    from { property-from-change; }
    to { property-to-change; }
}
```

| Animation Properties |
| --- |
| `animation-name: animation-name` |
| `animation-duration: sec` |
| `animation-timing-function: linear/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)` |
| `animation-delay: sec` |
| `animation-iteration-count: n-count/infinite` |
| `animation-direction: normal/reverse/alternate/alternate-reverse` |
| `animation-fill-mode: none/forwards/backwards/both` |
| `animation-play-state: paused/running/initial/inherit` |

> animation: anim-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction


Ex : *change bg-color when animation is 25% complete, 50% complete & animation is 100% complete*
```
@keyframe anim-1 {
    0%  { background-color: red; }
    50%  { background-color: yellow; }
    70%  { background-color: blue; }
    100% { background-color: green;
}
div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: anim-1;
    animation-duration: 4s;
}
```

Ex : *change bg-color from red to green*
```
@keyframes anim-2 {
    from { background-color: red; }
    to { background-color: green; }
}
div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: anim-2;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-timing-function: ease;
    animation-iteration-count: 5;
    animation-direction: alternate-reverse;
}
```
