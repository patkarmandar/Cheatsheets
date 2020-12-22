
# Bootstrap 4 -

## Table Of Content :
* [Container Classes](#container-classes)
* [Jumbotron Classes](#jumbotron-classes)
* [Heading Classes](#heading-classes)
* [Typography Classes](#typography-classes)
* [Float and Clearfix](#float-and-clearfix)
* [Height and Width](#height-and-width)
* [Margin and Padding](#margin-and-padding)
* [Vertical Align](#vertical-align)
* [Visibility](#visibility)
* [Position](#position)
* [Display Element](#display-element)
* [Color Classes](#color-classes)
* [Screenreaders](#screenreaders)
* [Responsive Embeds](#responsive-embeds)
* [Border](#border)
* [Shadow](#shadow)
* [Tables Classes](#tables-classes)
* [Image Classes](#image-classes)
* [Alert Box Classes](#alert-box-classes)
* [Button Classes](#button-classes)
* [Badges](#badges)
* [Spinners](#spinners)
* [Pagination](#pagination)
* [List Groups](#list-groups)
* [Cards](#cards)
* [Dropdown](#dropdown)
* [Collapse](#collapse)
* [Navs](#navs)
* [Navbar](#navbar)
* [Carousel](#carousel)
* [Modal](#modal)
* [Tooltip](#tooltip)
* [Popover](#popover)
* [Toast](#toast)
* [Scrollspy](#scrollspy)
* [Forms](#forms)
* [Form Inputs](#form-inputs)
* [Input Group](#input-group)
* [Custom Forms](#custom-forms)
* [Grid](#grid)



<br>



## Container Classes

- `container` : add to `<div>` for fixed width container
- `container-fluid` : add to `<div>` for full width container
- `container-sm/md/lg/xl` : add to `<div>` for responive containers

Ex :
```
<div class="container"> ... </div>
```



## Jumbotron Classes

- `jumbotron` : add to `<div>` for indicate big grey box for calling extra attention
- `jumbotron-fluid` : add to `<div>` for full-width jumbotron without rounded borders

Ex :
```
<div class="jumbotron">
    <h1>Bootstrap Tutorial</h1>
    <p>Bootstrap is the most popular HTML, CSS...</p>
</div>

<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1>Bootstrap Tutorial</h1>
        <p>Bootstrap is the most popular HTML, CSS...</p>
    </div>
</div>
```



## Heading Classes

- `display-1/2/3/4` : define header for element

Ex :
```
<h1 class="display-1">Display 1</h1>
```



## Typography Classes

### Font Style :
- `font-weight-bold` : bold text
- `font-weight-bolder` : bolder text
- `font-italic` : italic text
- `font-weight-light` : light text
- `font-weight-lighter` : lighter text
- `font-weight-normal` : normal text

Ex :
```
<p class="font-weight-bold">Bold text</p>
```


### Text Alignment :
- `text-left` : left aligned text
- `text-sm/md/lg/xl-left` : left-aligned text on screen size
- `text-right` : right aligned text
- `text-sm/md/lg/xl-right` : right aligned text on screens size
- `text-center` : center aligned text
- `text-sm/md/lg/xl-center` : center aligned text on screens size
- `text-justify` : justified text

Ex :
```
<p class="text-right">Right-aligned text</p>
```


### Text Format & Cases :
- `text-monospace` : monospaced text
- `text-lowercase` : lowercased text
- `text-uppercase` : uppercased text
- `text-capitalize` : capitalized text
- `text-break` : prevents long text from breaking layout
- `text-nowrap` : no wrap text
- `text-reset` : resets color of text/link
- `text-decoration-none` : removes underline from link

Ex :
```
<p class="text-uppercase">Uppercased text</p>
```


### Lists Style :
- `list-unstyled` : add to `<ul>/<ol>` to remove default list-style & ml on list items (this class only applies to immediate children list items)
- `list-inline` : place all list items on single line (used together with .list-inline-item on each `<li>` elements)

Ex :
```
<ul class="list-unstyled">
    <li>Coffee</li>
    <li>Milk</li>
</ul>
<ul class="list-inline">
    <li class="list-inline-item">Coffee</li>
    <li class="list-inline-item">Tea</li>
</ul>
```


### Text Format :
- `lead` : makes paragraph stand out
- `small` : small text than parent
- `initialism` : display text inside `<abbr>` element in slightly smaller font size
- `pre-scrollable` : make `<pre>` element scrollable

Ex :
```
<p class="lead">This paragraph stands out</p>
<p>The <abbr title="World Health Organization" class="initialism">WHO</abbr> was founded in 1948</p>
<pre class="pre-scrollable">
    Text in pre element is displayed in fixed-width font & it preservea both spaces & line breaks.
</pre>
```


### Flex & Grid :
- `justify-content` : justify content to start (default)
- `justify-content-start/end/center/between/around` : justifies inside content to
- `align-content-start/end/center/between/around/stretch` : align content to
- `align-items-start/end/center/baseline/stretch` : align item to



## Float and Clearfix

- `float-left/right` : float image to left or right
- `clearfix` : clear floats

Ex :
```
<div class="clearfix">
    <span class="float-left">Float left</span>
    <span class="float-right">Float right</span>
</div>
```


### Responive Floats Class :
- `float-sm/md/lg/xl-left/right` : float depends on screen width

Ex :
```
<div class="float-sm-right">Float right on small screens or wider</div>
```



## Height and Width

- `w-%` : set width to %
- `mw-%` : set max-width to %
- `h-%` : set height to %
- `mh-%` : set max-height to %

Ex :
```
<div class="h-50 w-25 bg-warning">Width 25%, Height 50%</div>
```



## Margin and Padding

- `property-size` : set margin/padding
- `property(side)-size` : set specific sides margin/padding
- `property(side)-screen-size` : set margin/padding according to screen width
- `property-auto` : set margin/padding auto

**Note :**
1. property : m (margin) / p (padding)
2. side : l (left) / r (right) / t (top) / b (bottom) / x (left & right) / y (top & bottom)
3. size :  0, 1 (0.25rem), 2 (0.5rem), 3 (1rem), 4 (1.5rem), 5 (3rem); n1-n5 (sets negative value)
4. screen width : xs/sm/md/lg/xl

Ex :
```
<div class="pt-4 bg-warning">Padding 1.5rem</div>
<div class="m-5 pb-5 bg-info">Margin 3rem & Bottom Padding 3rem</div>
<div class="mb-sm-5 bg-warning">Margin Bottom 3rem on sm screens</div>
<div class="px-xl-5 bg-primary">Padding on x 5 on xl screens</div>
```


### Center Align Element Using Margin :
- Set left & right margin to auto ie `mx-auto`

```
<div class="mx-auto bg-warning" style="width:150px">Centered</div>
```



## Vertical Align
*Only for inline elements*

- `align-baseline` : align to line
- `align-top` : align above line
- `align-middle` : align to middle of line
- `align-bottom` : align to bottom of line
- `align-text-top` : align text to top of line
- `align-text-bottom` : align text to bottom of line

Ex :
```
<span class="align-baseline">baseline</span>
```



## Visibility

- `visible` : make element visible (visibility:visible)
- `invisible` : make element invisible (visibility:hidden)

Ex :
```
<div class="visible">I am visible</div>
```



## Position

- `fixed-top/bottom` : fixed to top or bottom
- `sticky-top` : sticks to top on scroll

Ex : *Fixed nav-bar at top*
```
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">...</nav>
```



## Display Element

- `d-block` : add to make element block level
- `d-sm/md/lg/xl-block` : make block level depends on screen width
- `d-none` : set display property none
- `d-sm/md/lg-none` : make display none depends on srceen width
- `d-inline` : make element inline
- `d-sm/md/lg/xl-inline` : make element inline on specific screen width
- `d-inline-block` : make element inline block
- `d-sm/md/lg/xl-inline-block` : make element inline-block on specific screen size

Ex :
```
<span class="d-block bg-success">d-block</span>
<span class="d-sm-block bg-success">d-sm-block</span>
```


### Display as Table :
- `d-table` : add to `<div>` to make element display as table
- `d-sm/md/lg/xl-table` : add to `<div>` make element display as table depends on screen size
- `d-table-cell` : add to `<div>` inside table make element display as table cell
- `d-sm/md/lg/xl-table-cell` : add to `<div>` to make element display as table cell depends on screen size
- `d-table-row` : add to `<div>` inside cell to make element display as table row
- `d-sm/md/lg/xl-table-row` : add to `<div>` to make element display as table row depends on screen size

Ex :
```
<div class="d-table" style="width:100%">
    <div class="d-table-row" style="width:100%">
        <div class="d-table-cell">
            <h4>Left Cell</h4>
            <p>Some text</p>
        </div>
        <div class="d-table-cell">
            <h4>Middle Cell</h4>
            <p>Some text</p>
        </div>
        <div class="d-table-cell">
            <h4>Right Cell</h4>
            <p>Some text</p>
        </div>
    </div>
</div>
```


### Display as Flex :
- `d-flex` : create flexbox container & transform direct children into flex items
- `d-md/sm/lg/xl-flex` : create flexbox container depends on screen size
- `d-inline-flex` : create inline flexbox container
- `d-sm/md/lg/xl-inline-flex` : create inline flexbox container depends on screen size

Ex :
```
<div class="d-flex p-3 bg-secondary text-white">    
    <div class="p-2 bg-info">Flex item 1</div>
    <div class="p-2 bg-warning">Flex item 2</div>
    <div class="p-2 bg-primary">Flex item 3</div>
</div>
```



## Color Classes

### Text Color Classes :
- `text-primary` : blue
- `text-secondary` : silver grey
- `text-success` : green
- `text-info` : cyan
- `text-warning` : yellow
- `text-danger` : red
- `text-dark` : dark grey
- `text-light` : light grey
- `text-body` : black (default color)
- `text-white` : white
- `text-muted` : grey
- `text-class-opacity` : text-dark-50 (50% opacity text)

Ex :
```
<p class="text-primary">This text is important</p>
<a href="#" class="text-success">Success link</a>
<p class="text-black-50">Black text with 50% opacity on white background</p>
```


### Background Color Classes :
- `bg-primary` : blue
- `bg-secondary` : grey
- `bg-success` : green
- `bg-info` : cyan
- `bg-warning` : yellow
- `bg-danger` : red
- `bg-dark` : dark grey
- `bg-light` : light grey

Ex :
```
<p class="bg-primary text-white">This text is important</p>
```



## Screenreaders

- `sr-only` : to hide element on all devices, except screen readers

Ex :
```
<span class="sr-only">I will be hidden on all screens except for screen readers.</span>
```



## Responsive Embeds

- `embed-responsive-aspectRatio` : add to parent element of video/iframe (div/span)
- `embed-responsive-item` : add to `<video>/<iframe>`

Ex : *frame will be open is ratio 21:9 on screen*
```
<div class="embed-responsive embed-responsive-21by9">
    <iframe class="embed-responsive-item" src="..."></iframe>
</div>
```



## Border

- `border` : add default border to element
- `border-0` : set border width to 0
- `border-top/bottom/left/right-0` : set specific border to 0

Ex :
```
<span class="border"></span>
<span class="border border-0"></span>
<span class="border border-top-0"></span>
```


### Contextual Border Color Classes :
- `border-primary` : blue
- `border-secondary` : grey
- `border-success` : green
- `border-info` : cyan
- `birder-warning` : yellow
- `border-danger` : red
- `border-dark` : dark grey
- `border-light` : light grey
- `border-white` : white

Ex :
```
<span class="border border-primary"></span>
```


### Border Radius Classes :
- `rounded` : rounded border
- `rounded-sm` : rounded border on sm, lg & xl screens
- `rounded-lg` : rounded border on lg and xl screens
- `rounded-left/right/top/bottom` : border to specific side
- `rounded-circle` : border of 50% radius
- `rounded-0` : no rounded border

Ex :
```
<span class="rounded-lg"></span>
```



## Shadow

- `shadow` : add default shadow to element
- `shadow-none` : no shadow
- `shadow-sm/lg` : add shadow on sm & lg shadow

Ex :
```
<div class="shadow-none p-4 mb-4 bg-light">No shadow</div>
<div class="shadow-sm p-4 mb-4 bg-white">Small shadow</div>
```



## Tables Classes

- `table` : add to `<table>` for basic table style

Ex :
```
<table class="table">
    <thead>
        <tr>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
        </tr>
    </tbody>
</table>
```


### Table Style Classes :
- `table-striped` : add zebra-stripes to rows
- `table-bordered` : add borders on all sides of table and cells
- `table-hover` : add hover effect (grey background color) on table rows
- `table-dark` : add dark background to table
- `table-borderless` : removes borders from table
- `table-sm` : make table smaller by cutting cell padding in half

*add in `<table>`*

Ex :
```
<table class="table table-striped">
    <thead>
        <tr>
            <th>header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>text 1</td>
        </tr>
        <tr>
            <td>text 2</td>
        </tr>
    </tbody>
</table>
```


### Responsive Table :
- `table-responsive` : add scrollbar to table when needed
- `table-responsive-sm/md/lg/xl` : add scrollbar to table when needed depends on screen width

*add in parent `<div>` element of table*

Ex :
```
<div class="table-responsive">
    <table class="table table-bordered"> ... </table>
</div>
```


### Table Header Color :
- `thead-dark` : add dark background to table header
- `thead-light` : add grey background to table header

*add in table header `<thead>`*

Ex :
```
<table class="table table-striped table-sm">
    <thead class="thead-dark">
        <tr>
            <th>header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>text 1</td>
        </tr>
        <tr>
            <td>text 2</td>
        </tr>
    </tbody>
</table>
```


### Contextual Color Classes :
- `table-primary` : blue
- `table-success` : green
- `table-info` : cyan
- `table-warning` : yellow
- `table-danger` : red
- `table-active` : grey
- `table-secondary` : grey
- `table-light` : light grey
- `table-dark` : dark grey

*For row/col*

Ex :
```
<table class="table table-striped">
    <thead>
        <tr class="table-primary">
            <th>header</th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-light text-dark">
            <td>text 1</td>
        </tr>
    </tbody>
</table>
```



## Image Classes

- `rounded` : add rounded corners to image
- `rounded-circle` : shape image to circle
- `img-thumbnail` : shape image to thumbnail (bordered)
- `float-left` : float image to left
- `float-right` : float image to right
- `img-fluid` : image scale to parent element

Ex :
```
<img src="cinqueterre.jpg" class="rounded" alt="Cinque Terre">
<img src="paris.jpg" class="float-left">
```


**Float Image To Center / Center Aligned Image -**
```
<img src="paris.jpg" class="mx-auto d-block">
```



## Alert Box Classes

- `alert` : default alert

Ex :
```
<div class="alert">
    <strong>Alert!</strong> This is alert-box
</div>
```


### Contextual Alert Classes :
- `alert-success`
- `alert-info`
- `alert-warning`
- `alert-danger`
- `alert-primary`
- `alert-secondary`
- `alert-light`
- `alert-dark`

Ex :
```
<div class="alert alert-success">
    <strong>Success!</strong> Indicates a successful or positive action.
</div>
```


### Alert Links Class :
- `alert-link` : add to links `<a>` inside alert box to create matching colored links

Ex :
```
<div class="alert alert-success">
    <strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.
</div>
```


### Animated Alerts :
- add `.fade` and `.show` class to alert box

Ex :
```
<div class="alert alert-success alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Success!</strong> This alert box could indicate a successful or positive action.
</div>
```


### Close Button Class :
- `alert-dismissible` : add to create dismussible alert box

Ex :
```
<div class="alert alert-success alert-dismissible">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Success!</strong> Indicates a successful or positive action.
</div>
```



## Button Classes

- `btn` : add to `<button>/<input>/<a>` for basic button style

Ex :
```
<button type="button" class="btn">Basic</button>
```

### Button Classes :
- `btn-block` : make button block-level that spans full width
- `active` : active button
- `disable` : disabled button

Ex :
```
<button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
<button type="button" class="btn btn-primary active">Active Primary</button>
<a href="#" class="btn btn-primary disabled">Disabled Link</a>
```


### Contextual Button Colors :
- `btn-primary` : blue
- `btn-secondary` : grey
- `btn-success` : green
- `btn-info` : cyan
- `btn-warning` : yellow
- `btn-danger` : red
- `btn-light` : light grey
- `btn-dark `: dark grey
- `btn-link` : no color

Ex :
```
<button type="button" class="btn btn-warning">Warning</button>
```


### Button Outline Classes :
- `btn-outline-primary` : blue
- `btn-outline-secondary` : grey
- `btn-outline-success` : green
- `btn-outline-info` : cyan
- `btn-outline-warning` : yellow
- `btn-outline-danger` : red
- `btn-outline-light` : light grey
- `btn-outline-dark` : dark grey

Ex :
```
<button type="button" class="btn btn-outline-primary">Primary</button>
```
- 

### Spinner Buttons :
```
<button class="btn btn-primary">
    <span class="spinner-border spinner-border-sm"></span>
</button>
```


### Button Size Classes :
- `btn-sm` : small size button
- `btn-lg` : large size button

Ex :
```
<button type="button" class="btn btn-primary btn-lg">Large</button>
```


### Button Groups Classes :
- `btn-group` : add to parent `<div>` of `<button>` for horizontal group buttons
- `btn-group-vertical` : add to parent `<div>` of `<button>` for vertical group buttons

Ex :
```
<div class="btn-group">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
</div> 

<div class="btn-group-vertical">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
</div> 
```


### Button Group Sizing Classes :
`btn-group-sm` : small button
`btn-group-lg` : large button

Ex :
```
<div class="btn-group btn-group-lg">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Sony</button>
</div>
```


### Button Group With Dropdown List :
```
<div class="btn-group">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
    <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            Sony
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Tablet</a>
            <a class="dropdown-item" href="#">Smartphone</a>
        </div>
    </div>
</div>
```


### Split Button Dropdown :
```
dropdown-toggle-split : add to button for split
<div class="btn-group">
    <button type="button" class="btn btn-primary">Sony</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
        <span class="caret"></span>
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Tablet</a>
        <a class="dropdown-item" href="#">Smartphone</a>
    </div>
</div>
```



## Badges

- `badge` : add badge to `<span>`

Ex :
```
<span class="badge">Badge</span>
```


### Pill Badges :
- `badge-pill` : to make badges more round

Ex :
```
<span class="badge badge-pill badge-primary">Primary</span>
```


### Contextual Color Badges :
- `badge-primary` : blue
- `badge-secondary` : grey
- `badge-success` : green
- `badge-info` : cyan
- `badge-warning` : yellow
- `badge-danger` : red
- `badge-light` : light grey
- `badge-dark` : dark grey

Ex :
```
<span class="badge badge-primary">Primary</span>
```



# Progress Bar

- `progress` : add progress to parent `<div>`
- `progress-bar` : add progress-bar inside of parent progress for progress status

Ex :
```
<div class="progress">
    <div class="progress-bar" style="width:70%"> 70% </div>
</div>
```


### Progress Bar Style Class :
- `progress-bar-striped` : add stripes to progress bar
- `progress-bar-animated` : for animating progress bar

Ex :
```
<div class="progress">
    <div class="progress-bar progress-bar-striped" style="width:40%"></div>
</div>

<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:40%"></div>
</div>
```


### Multiple Progress Bar :
*Use contextual color classes for bg & text color*
```
<div class="progress">
    <div class="progress-bar bg-success" style="width:40%">
        Free Space
    </div>
    <div class="progress-bar bg-warning" style="width:10%">
        Warning
    </div>
    <div class="progress-bar bg-danger" style="width:20%">
        Danger
    </div>
</div>
```



## Spinners

- `spinner-border` : add to `<div>/<span>` for spinner of spinning border

Ex :
*Use contextual color classes for color*
```
<div class="spinner-border text-primary"></div>
```


### Growing Spinner :
- `spinner-grow` : add to `<div>/<span>` for growing spinner

Ex :
```
<div class="spinner-grow text-muted"></div>
```


### Spinner Size Classes :
- `spinner-border-sm/lg` : spinner size
- `spinner-grow-sm/lg` : spinner size

Ex :
```- 
<div class="spinner-border spinner-border-sm"></div>
<div class="spinner-grow spinner-grow-sm"></div>
```



## Pagination

- `pagination` : add class to `<ul>`
- `page-item` : add to each `<li>` inside `<ul>`
- `page-link` : add to each link `<a>` inside of `<li>`

### Page Status Class :
- `active` : add to `<li>` for highlight current page
- `disabled` : add to `<li>` for disable page click

Ex :
```
<ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item disabled"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
```


### Pagination Size :
- `pagination-sm/lg` : small & large pagination

Ex :
```
<ul class="pagination pagination-lg">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
```


### Pagination Alignment Classes :
- `justify-content-center` : center aligned
- `justify-content-end` : right aligned

Ex :
```
<ul class="pagination justify-content-end" style="margin:20px 0">
    <li class="page-item">...</li>
</ul>
```


### Breadcrumbs :- 
*(indicates current page's location within navigational hierarchy)*
- `breadcrumb` : add to `<ul>`
- `breadcrumb-item` : add to each `<li>`

Ex :
```
<ul class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Photos</a></li>
    <li class="breadcrumb-item"><a href="#">Summer 2017</a></li>
    <li class="breadcrumb-item"><a href="#">Italy</a></li>
    <li class="breadcrumb-item active">Rome</li>
</ul>
```



## List Groups

- `list-group` : add to `<ul>`
- `list-group-item` : add to each `<li>`

### List Page Status :
- `active` : add to `<li>/<a>` for highlight current page
- `disabled` : add to `<li>/<a>` for disable list

Ex :
```
<ul class="list-group">
    <li class="list-group-item">First item</li>
    <li class="list-group-item active">Second item</li>
    <li class="list-group-item">
        Inbox
        <span class="badge badge-primary badge-pill">12</span>
    </li>
</ul>
```


### List Group With Linked Items :
- `list-group` : add to `<div>`
- `list-group-items` : add to each `<a>`

Ex :
```
<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">First item</a>
    <a href="#" class="list-group-item list-group-item-action">Second item</a>
    <a href="#" class="list-group-item disabled">Disabled item</a>
</div>
```


### Horizontal List Groups :
- `list-group-horizontal` : groups list horizontally

Ex :
```
<ul class="list-group list-group-horizontal">
    <li class="list-group-item">First item</li>
    <li class="list-group-item">Second item</li>
</ul>
```


### List Group Style :
- `list-group-flush` : add to `<ul>` to remove border & rounded corners
- `list-group-item-action` : add to `<li>` to create grey bg on hover

Ex :
```
<ul class="list-group list-group-flush">
    <li class="list-group-item">First item</li>
    <li class="list-group-item list-group-item-action">Second item</li>
</ul>
```


### Contextual List BG Colors :
- `list-group-item-action` : white
- `list-group-item-success` : green
- `list-group-item-secondary` : grey
- `list-group-item-info` : cyan
- `list-group-item-warning` : yellow
- `list-group-item-danger` : red
- `list-group-item-primary` : blue
- `list-group-item-dark` : dark grey
- `list-group-item-light` : light grey

Ex :
```
<ul class="list-group">
    <li class="list-group-item list-group-item-success">Success item</li>
    <li class="list-group-item list-group-item-secondary">Secondary item</li>
</ul> 
```

*Link List with Contextual Colors -*
```
<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Action item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-success">Success item</a>
</div>
```



## Cards

- `card` : add to parent `<div>` for basic card

### Card Classes :
- `card-header` : add inside card for card header
- `card-body` : add inside card for card body
- `card-footer` : add inside card for card footer
- `card-title` : add inside body for title
- `card-text` : add add inside body for text
- `card-link` : add add inside body for card link

*Use contextual colors for bg & text colors*

Ex :
```
<div class="card">
    <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some example text. Some example text.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>
```


### Card Images Classes :
- `card-img-top` : add inside card for add image to top
- `card-img-bottom` : add inside card for add image to bottom

Ex :
```
<div class="card" style="width:400px">
    <img class="card-img-top" src="img_avatar1.png" alt="Card image">
    <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text</p>
        <a href="#" class="btn btn-primary">See Profile</a>
    </div>
</div>
```


### Stretched Link :
- `stretched-link` : add inside make whole card clickable & hoverable

Ex :
```
<div class="card" style="width:400px">
    <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
    <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
        <a href="#" class="btn btn-primary stretched-link">See Profile</a>
    </div>
</div>
```


### Card Image Overlay :
- `card-img-overlay` : add inside card for text on top of image

Ex :
```
<div class="card" style="width:500px">
    <img class="card-img-top" src="img_avatar1.png" alt="Card image">
    <div class="card-img-overlay">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text.</p>
        <a href="#" class="btn btn-primary">See Profile</a>
    </div>
</div>
```


### Card Columns :
- `card-columns` : add to parent `<div>` of card to create grid of cards (like pinterest)

*Layout will automatically adjust as insert more cards. cards are displayed vertically on small screens (<576px).*

Ex :
```
<div class="card-columns">
    <div class="card bg-primary">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the first card</p>
        </div>
    </div>
    <div class="card bg-warning">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the second card</p>
        </div>
    </div>
    <div class="card bg-info">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the sixth card</p>
        </div>
    </div>
</div>
```


### Card Deck :
- `card-deck` : add to parent `<div>` of card to create grid of cards are of equal height & width

*Layout will automatically adjust as you insert more cards. cards are displayed vertically on small screens (<576px).*

Ex :
```
<div class="card-deck">
    <div class="card bg-primary">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the first card</p>
        </div>
    </div>
    <div class="card bg-warning">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the second card</p>
        </div>
    </div>
    <div class="card bg-success">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the third card</p>
        </div>
    </div>
</div>
```


### Card Group :
- `card-group` : add to parent `<div>` of card to create group of cards (same as card column & deck but it removes left & right margin)

*Layout will automatically adjust as you insert more cards. cards are displayed vertically on small screens (<576px) with top and bottom margin.*

Ex :
```
<div class="card-group">
    <div class="card bg-primary">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the first card</p>
        </div>
    </div>
    <div class="card bg-warning">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the second card</p>
        </div>
    </div>
    <div class="card bg-success">
        <div class="card-body text-center">
            <p class="card-text">Some text inside the third card</p>
        </div>
    </div>
</div>
```



## Dropdown

- `dropdown` : add to `<div>` element for dropdown menu
- `dropdown-menu` : add to `<div>` inside dropdown for menu for dropdown
- `dropdown-item` : add to each `<div>` for dropdown items
<br>
- `dropdown-toggle` : add to `<button>/<a>` for dropdown toggle
- `data-toggle="dropdown"` : add to `<button>/<a>` to made toggle as dropdown

Ex :
```
<div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropdown button
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
    </div>
</div>
```


### Dropdown Item Status :
- `active` : add to `<a>` of each menu for highlight active class
- `disabled` : add to `<a>` of each menu for disable item

Ex :
```
<div class="dropdown">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            Dropdown button
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Normal</a>
            <a class="dropdown-item active" href="#">Active</a>
            <a class="dropdown-item disabled" href="#">Disabled</a>
        </div>
</div>
```


### Dropdown Divider :
- `dropdown-divider` : add to `<div>` for dividing dropdown list & link with thin horiz border

Ex :
```
<div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropdown button
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Another link</a>
    </div>
</div>
```


### Dropdown Header :
- `dropdown-header` : add inside of dropdown menu for header

Ex :
```
<div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropdown button
    </button>
    <div class="dropdown-menu">
        <h5 class="dropdown-header">Dropdown header</h5>
        <a class="dropdown-item" href="#">Link 1</a>
        <h5 class="dropdown-header">Dropdown header</h5>
        <a class="dropdown-item" href="#">Another link</a>
    </div>
</div>
```


### Dropdown Position Class :
- `dropleft` : add to dropdown class for left dropdown menu
- `dropright` : add to dropdown class for right dropdown menu
- `dropup` : add instead of dropdown for dropup menu
- `dropdown-menu-right` : add to dropdown class for right-align dropdown menu

Ex :
```
<div class="dropdown dropright">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropright button
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
    </div>
</div>
```

**Dropup -**
```
<div class="dropup">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropup button
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
    </div>
</div>
```


### Dropdown Text :
- `dropdown-item-text` : add text with dropdown link

Ex :
```
<div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropdown button
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item-text" href="#">Text Link</a>
        <span class="dropdown-item-text">Just Text</span>
    </div>
</div>
```


**Grouped Buttons with Dropdown -**
```
<div class="btn-group">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
    <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
             Sony
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Tablet</a>
            <a class="dropdown-item" href="#">Smartphone</a>
        </div>
    </div>
</div>
```


### Split Button Dropdowns :
- `dropdown-toggle-split` : add to button to split button & dropdown toggle

Ex :
```
<div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
    </div>
</div>
```


### Vertical Button Group with Dropdown :
- `btn-group-vertical` : add to parent `<div>` for vertical button group

Ex :
```
<div class="btn-group-vertical">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
    <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            Sony
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Tablet</a>
            <a class="dropdown-item" href="#">Smartphone</a>
        </div>
    </div>
</div>
```



## Collapse

- `collapse` : add to `<div>` to make collapsible element
<br>
- `data-toggle="collapse"` : to control (show/hide) collapsible content add attribute to `<button>/<a>`
- `data-target="#id"` : add attribute to connect button with collapsible content `(<div id="demo">)`
- `hide` (default) : hide content
- `show` : show content

Ex :
```
<button data-toggle="collapse" data-target="#demo">Collapsible</button>
<div id="demo" class="collapse">
    Text Here
</div>
```

*Note : for <a> href attribute can be used instead of data-target attribute*
```
<a href="#demo" data-toggle="collapse">Collapsible</a>
<div id="demo" class="collapse">
    Text Here
</div>
```


### Accordion (Collaspible Cards) :
```
<div id="accordion">
    <div class="card">
        <div class="card-header">
            <a class="card-link" data-toggle="collapse" href="#collapseOne">
                Collapsible Group Item #1
            </a>
        </div>
        <div id="collapseOne" class="collapse show" data-parent="#accordion">
            <div class="card-body">
                Lorem ipsum..
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                Collapsible Group Item #2
            </a>
        </div>
        <div id="collapseTwo" class="collapse" data-parent="#accordion">
            <div class="card-body">
                Lorem ipsum..
            </div>
        </div>
    </div>
</div>
```



## Navs

- `nav` : add to `<ul>` to create horiz nav
- `nav-item` : add to each `<li>` for nav items
- `nav-link` : add to each link (`<a>)` of `<li>`

Ex :
```
<ul class="nav">
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
    </li>
</ul>
```


### Nav Alignment :
- `justify-content-center` : add to `<ul>` for center aligned nav
- `justify-content-end` : add to `<ul>` for right aligned nav

Ex :
```
<ul class="nav justify-content-center"> ... </ul>
```


### Vertical Nav :
- `flex-column` : add to `<ul>` for vertical nav

Ex :
```
<ul class="nav flex-column">
```


### Nav Tabs :
- `nav-tabs` : add to `<ul>` for turn nav menu into navigation tabs

*add `.active` class to indicate active tab*

Ex :
```
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
    </li>
</ul>
```


### Nav Pills :
- `nav-pills` : add to `<ul>` for turn nav menu into navigation pills

*add `.active` class to indicate active tab*

Ex :
```
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
    </li>
</ul>
```


**Justified Tabs/pills (of equal width) -**
- `nav-justified` : add to `<ul>` for nav-tabs/pills of equal width tabs

Ex :
```
<ul class="nav nav-pills nav-justified"> ... </ul>
<ul class="nav nav-tabs nav-justified"> ... </ul>
```


### Pills with Dropdown :
```
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dropdown</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>
```


### Tabs with Dropdown :
```
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dropdown</a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>
```


### Toggleable / Dynamic Tabs :
```
<!-- Nav Tabs -->
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu">Menu</a>
    </li>
</ul>
<!-- Tab Panes Content -->
<div class="tab-content">
    <div class="tab-pane container active" id="home">...</div>
    <div class="tab-pane container fade" id="menu">...</div>
</div>
```


### Toggleable / Dynamic Pills :
```
<!-- Nav Pills -->
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#menu">Menu</a>
    </li>
</ul>
<!-- Tab Panes Content -->
<div class="tab-content">
    <div class="tab-pane container active" id="home">...</div>
    <div class="tab-pane container fade" id="menu">...</div>
</div>
```



## Navbar

- `navbar` : add to `<nav>` to create navbar
- `navbar-expand-sm/md/lg/xl` : responsive expandable bar, stacks vertically on sm screens
- `navbar-nav` : add to `<ul>` for navbar menu
- `nav-items` : add to each `<li>` for nav items
- `nav-links` : add to link `(<a>)` inside `<li>`
- `navbar-dark` : add to `<nav>` for white text navbar
- `navbar-light` : add to `<nav>` for dark text navbar
<br>
- `active/disabled` : add to link `(<a>)` for disable/active nav-item

*Use contextual color class for colored navbar*

Ex :
```
<nav class="navbar navbar-expand-sm navbar-dark bg-light">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link 2</a>
        </li>
    </ul>
</nav>
```


### Navbar Brand/Logo :
- `navbar-brand` : add to `<a>/<span>` for navigation brand/logo and place inside `<nav>` on top

Ex :
```
<nav class="navbar navbar-expand-sm bg-dark">
    <a class="navbar-brand" href="#">Logo</a>
    ...
</nav>
```


### Navbar Text :
- `navbar-text` : add inside `<nav>` for text to navbar

Ex :
```
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
        </li>
    </ul>
    <span class="navbar-text">
        Navbar text
    </span>
</nav>
```


### Vertical Navbar :
- remove `navbar-expand-sm/md/lg/xl` to create vertical navbar

Ex :
```
<nav class="navbar bg-light">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link 2</a>
        </li>
    </ul>
</nav>
```


### Center Navbar :
- `justify-content-center` : add to `<nav>` for center aligned navbar

Ex :
```
<nav class="navbar navbar-expand-sm bg-light justify-content-center"> ... </nav>
```


### Collapsing Navigation Bar :
- `navbar-toggler` : add to `<button>` to create collapsible navbar
- `navbar-toggler-icon` : add in `<span>` inside button for collapse icon
- `collapse` : add to parent `<div>` of `<ul>`
- `navbar-collapse` : add to parent `<div>` of `<ul>`

- add `data-toggle="collapse"` to `<button>` for collapsing navbar
- add `data-target="#thetarget"` to `<button>` for selecting nav menu
- remove `.navbar-expand-md` class to always hide `nav-menu` items

Ex :
```
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div>
</nav>
```


### Fixed Navigation Bar :
- `fixed-top` : add to `<nav>` for navigation bar fixed at top
- `fixed-bottom` : add to `<nav>` for navigation bar fixed at bottom
- `sticky-top` : add to `<nav>` for navigation bar to stay top while scroll

Ex :
```
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    ...
</nav>
```


### Navbar With Dropdown :
```
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand" href="#">Logo</a>
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Dropdown link
            </a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
            </div>
        </li>
    </ul>
</nav>
```


### Navbar With Forms & Buttons :
```
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <form class="form-inline" action="/action_page.php">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-success" type="submit">Search</button>
    </form>
</nav>
```



## Carousel
*(slideshow sliding through elements)*

- `carousel` : add to `<div>` for creating carousel of image
- `slide` : add with corousel for make slide of images
- `carousel-indicators` : add to `<ul>` inside `<div>` for indicators for carousel (little dots at bottom of each slide)
- `carousel-inner` : add to `<div>` to define slides to carousel
- `carousel-item` : add to `<div>` for content of each slide
- `carousel-control-prev` : add to `<a>` for left (previous) button to carousel
- `carousel-control-next` : add to `<a>` for right (next) button to carousel
- `carousel-control-prev-icon` : used together with .carousel-control-prev to create "previous" button
- `carousel-control-next-icon` : used together with .carousel-control-next to create "next" button
- `slide` : add to CSS transition & animation effect when sliding from one item to next

**Note :**
1. add `data-ride="carousel"` in `.carousel` class
2. add `data-slide-to="0"` no to each `<li>` item

Ex :
```
<div id="demo" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    <!-- The slideshow -->
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="la.jpg" alt="Los Angeles">
        </div>
        <div class="carousel-item">
            <img src="chicago.jpg" alt="Chicago">
        </div>
        <div class="carousel-item">
            <img src="ny.jpg" alt="New York">
        </div>
    </div>
    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
    </a>
</div>
```


### Add Caption :
- `carousel-caption` : add within each `<div class="carousel-item">` to create caption for each slide

Ex :
```
<div id="demo" class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
    </ul>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="la.jpg" alt="Los Angeles" width="1100" height="500">
            <div class="carousel-caption">
                <h3>Los Angeles</h3>
                <p>We had such a great time in LA!</p>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
    </a>
</div>
```



## Modal

- `modal` : add to `<div>` to create modal
- `modal-dialog` : add to `<div>` inside .modal for modal elements
- `modal-content` : add to `<div>` inside .modal-dialog for modal content
- `modal-header` : add to `<div>` inside .modal-content for modal header
- `modal-title` : add to `<div>/<h>` inside .modal-header for header title
- `modal-body` : add to `<div>` inside .modal-content for modal body
- `modal-footer` : add to `<div>` inside .modal-content for modal footer

**Note :**
1. for opening modal add `<button>` & add data-toggle="modal" & target="#id" to `<button>`
2. for close button add `<button>` inside header or footer & add data-dismiss="modal" to `<button>`

Ex :
```
<!-- Button to Open the Modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
</button>
<!-- The Modal -->
<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
                Modal body..
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
```


### Add Open/Close Animation :
- `fade` : add with `.modal` class for open/close fading animation

Ex :
```
<div class="modal fade"> ... </div>
```


### Modal Size :
- `modal-sm/lg/xl` (default md) : add with `.modal-dialog` class for sizing modal

Ex :
```
<div class="modal-dialog modal-sm"> ... </div>
```


### Centered Modal :
- `modal-dialog-centered` : add with `.modal-dialog` for center modal vertically & horizontally within page

Ex :
```
<div class="modal-dialog modal-dialog-centered"> ... </div>
```


### Scrolling Modal :
- `modal-dialog-scrollable` : add with `.modal-dialog` to only scroll inside modal body instead of page itself

Ex :
```
<div class="modal-dialog modal-dialog-scrollable"> ... </div>
```



## Tooltip

- `data-toggle="tooltip"` : add attribute to element to create tooltip
- `title="Hover Text"` : add attribute to element for hover text
- `data-placement="top/bottom/left/right"` : add attribute to element for placement of tooltip

Ex :
```
<a href="#" data-toggle="tooltip" title="Hooray!">Hover over me</a>
<a href="#" data-toggle="tooltip" data-placement="top" title="Hooray!">Hover</a>
```


**Note :**
Tooltips must be initialized with jQuery, select specified element & call tooltip() method.
*following code will enable all tooltips in document -*
```
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script>
```



## Popover

- `data-toggle="popover"` : add attribute to element to create popover
- `title="text"` : add attribute to element for popover header text
- `data-content="content text"` : add attribute to element for popover body text
- `data-placement="top/bottom/left/right"` : add attribute to element for placement of popover
- `data-trigger="focus"` : add attribute to element to close popover when clicking outside element
- `data-trigger="hover"` : add attribute to element for popover to be display when mouse-over element

Ex :
```
<a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside popover">Toggle popover</a>
<a href="#" data-toggle="popover" title="Header" data-placement="top" data-content="Content">Click</a>
<a href="#" title="Dismissible popover" data-toggle="popover" data-trigger="focus" data-content="Click anywhere in document to close this popover">Click</a>
<a href="#" title="Dismissible Popover" data-toggle="popover" data-trigger="hover" data-content="Click anywhere in document to close this popover">Click</a>
```


**Note :**
Popovers must be initialized with jQuery, select specified element & call popover() method.
*following code will enable all popovers in document -*
```
<script>
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
</script>
```



## Toast

- `toast` : add to element `(<div>)` to create toast
- `toast-header` : add to element `(<div>)` inside `.toast` for toast header
- `toast-body` : add to element `(<div>)` inside `.toast` for toast body
- `data-autohide="false"` : add attribute with `.toast` for toasts to show by default (default hidden)
- `data-dismiss="toast"` : add attribute to `<button>` to close toast

Ex :
```
<div class="toast">
    <div class="toast-header">
        Toast Header
    </div>
    <div class="toast-body">
        Some text inside the toast body
    </div>
</div>

<div class="toast" data-autohide="false">
    <div class="toast-header">
        <strong class="mr-auto text-primary">Toast Header</strong>
        <small class="text-muted">5 mins ago</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
    </div>
    <div class="toast-body">
        Some text inside the toast body
    </div>
</div>
```


**Note :**
Toasts must be initialized with jQuery, select specified element & call toast() method.
*following code will show all "toasts" in document -*
```
<script>
$(document).ready(function(){
    $('.toast').toast('show');
});
</script>
```



## Scrollspy

- `data-spy="scroll"` : add attribute to scrollable element Ex. `<body>`
- `data-target="#id/.class"` : add attribute to target navigation bar and set class/id
- `data-offset="value"` : set number of pixels to offset from top when calculating position of scroll (optional)

**Note :**
scrollable element must match id/class of links inside navbar's list items
(`<div id="section1">` matches `<a href="#section1">`)

Ex :
```
<body data-spy="scroll" data-target=".navbar" data-offset="50">
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">  
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#section1">Section 1</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Section 2</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#section21">Link 1</a>
                <a class="dropdown-item" href="#section22">Link 2</a>
            </div>
        </li>
    </ul>
</nav>
<div id="section1" class="container-fluid bg-success" style="padding-top:70px;padding-bottom:70px">
    <h1>Section 1</h1>
    <p>Try to scroll this section and look at navigation bar while scrolling!</p>
    <p>Try to scroll this section and look at navigation bar while scrolling!</p>
</div>
<div id="section21" class="container-fluid bg-danger" style="padding-top:70px;padding-bottom:70px">
    <h1>Section 2 Submenu 1</h1>
    <p>Try to scroll this section and look at navigation bar while scrolling!</p>
    <p>Try to scroll this section and look at navigation bar while scrolling!</p>
</div>
<div id="section22" class="container-fluid bg-info" style="padding-top:70px;padding-bottom:70px">
    <h1>Section 2 Submenu 2</h1>
    <p>Try to scroll this section and look at navigation bar while scrolling!</p>
    <p>Try to scroll this section and look at navigation bar while scrolling!</p>
</div>
</body>
```


### Vertical Navigation Bar :
```
<body data-spy="scroll" data-target="#myScrollspy" data-offset="1">
<div class="container-fluid">
    <div class="row">
        <nav class="col-sm-3 col-4" id="myScrollspy">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#section1">Section 1</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Section 2</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#section21">Link 1</a>
                        <a class="dropdown-item" href="#section22">Link 2</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="col-sm-9 col-8">
            <div id="section1" class="bg-success">    
                <h1>Section 1</h1>
                <p>Try to scroll this section and look at navigation list while scrolling!</p>
            </div>
            <div id="section21" class="bg-danger">         
                <h1>Section 2-1</h1>
                <p>Try to scroll this section and look at navigation list while scrolling!</p>
            </div>    
            <div id="section22" class="bg-info">         
                <h1>Section 2-2</h1>
                <p>Try to scroll this section and look at navigation list while scrolling!</p>
            </div>
        </div>
    </div>
</div>
</body>
```



# Media Objects

- `media` : add to `<div>` element for creating media & must be add inside container
- `media-body` : add to `<div>` inside `.media` for adding content

Ex :
```
<div class="media border p-3">
    <img src="img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
    <div class="media-body">
        <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
        <p>Lorem ipsum...</p>
    </div>
</div>
```


### Nested Media Objects :
```
<div class="media border p-3">
    <img src="img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
    <div class="media-body">
        <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
        <p>Lorem ipsum...</p>
        <div class="media p-3">
            <img src="img_avatar2.png" alt="Jane Doe" class="mr-3 mt-3 rounded-circle" style="width:45px;">
            <div class="media-body">
                <h4>Jane Doe <small><i>Posted on February 20 2016</i></small></h4>
                <p>Lorem ipsum...</p>
            </div>
        </div> 
    </div>
</div>
```


### Right-Aligned Media Image :
```
<div class="media border p-3">
    <div class="media-body">
        <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
        <p>Lorem ipsum...</p>
    </div>
    <img src="img_avatar3.png" alt="John Doe" class="ml-3 mt-3 rounded-circle" style="width:60px;">
</div>
```


### Top Middle or Bottom Alignment :

**Media Top -**
```
<div class="media">
    <img src="img_avatar1.png" class="align-self-start mr-3" style="width:60px">
    <div class="media-body">
        <h4>Media Top</h4>
        <p>Lorem ipsum...</p>
    </div>
</div>
```

**Media Middle -**
```
<div class="media">
    <img src="img_avatar1.png" class="align-self-center mr-3" style="width:60px">
    <div class="media-body">
        <h4>Media Middle</h4>
        <p>Lorem ipsum...</p>
    </div>
</div>
```

**Media Bottom -**
```
<div class="media">
    <img src="img_avatar1.png" class="align-self-end mr-3" style="width:60px">
    <div class="media-body">
        <h4>Media Bottom</h4>
        <p>Lorem ipsum...</p>
    </div>
</div>
```



## Forms

- `form-group` : add wrapper `<div>` with this class to each form's element for full width stacked form

Ex :
```
<form action="/action_page.php">
    <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" placeholder="Enter email" id="email">
    </div>
    <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" placeholder="Enter password" id="pwd">
    </div>
    <div class="form-group form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Remember me
        </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```


### Inline Form :
- `form-inline` : add to `<form>` for inline forms

Ex :
```
<form class="form-inline" action="/action_page.php"> ... </form>
```


### form row/column :
- `row/form-row` : add to wrapper `<div>` to create row form element
- `col` : to add `<div>` inside .row to create col for each element

Ex :
```
<form>
    <div class="form-row">
        <div class="col">
            <input type="text" class="form-control" id="email" placeholder="Enter email" name="email">
        </div>
        <div class="col">
            <input type="password" class="form-control" placeholder="Enter password" name="pswd">
        </div>
    </div>
</form>
```


### Form Validation :
- `was-validated` : add to `<form>` for validate before submision
- `needs-validation` : add to `<form>` for validate after submision
<br>
- `valid-feedback` : add to seperate `<div>` with message for feedback if form is valid
- `invalid-feedback` : add to seperate `<div>` with message for feedback if form is invalid

**Validate Before Submission -**
```
<form action="/action_page.php" class="was-validated">
    <div class="form-group">
        <label for="uname">Username:</label>
        <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" required> I agree on blabla.
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Check this checkbox to continue.</div>
        </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

**Validate After Submission -**
```
<form action="/action_page.php" class="needs-validation" novalidate>
    <div class="form-group">
        <label for="uname">Username:</label>
        <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" required> I agree on blabla.
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Check this checkbox to continue.</div>
        </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
<script>
// Disable form submissions if there are invalid fields -
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to -
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission -
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
</script>
```



## Form Inputs

- `form-control` : add to `<input>` to style inputs with full-width & proper padding

### Form Control Sizing :
- `form-control-sm/lg` : add to `<input>` for input on specific screen size

Ex :
```
<input type="text" class="form-control form-control-sm">
<input type="text" class="form-control form-control">
<input type="text" class="form-control form-control-lg">
```


### Form Control Types :

**Form Control with Plain text -**
- `form-control-plaintext` : add to `<input>` for plain text form without border
```
<input type="text" class="form-control-plaintext">
```

**Form Control File -**
- `form-control-file` : for input type file
```
<input type="file" class="form-control-file border">
```

**Form Control Range -**
- `form-control-range` : for input type range
```
<input type="range" class="form-control-range">
```


### Inputs Types :

**text/password -**
- `form-control` : add to `<input>`
```
<div class="form-group">
    <label for="usr">Name:</label>
    <input type="text" class="form-control" id="usr">
</div>
<div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
</div>
```

**textarea -**
- `form-control` : add to `<textarea>`
```
<div class="form-group">
    <label for="comment">Comment:</label>
    <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
```

**checkboxes -**
- `form-check` : add to wrapper `<div>` to create checkbox
- `form-check-label` : add to `<label>` to set label of checkbox
- `form-check-input` : add to `<input>` type checkbox for checkbox selection
- `disabled` : add to `<input>` to disable check item
```
<div class="form-check">
    <label class="form-check-label">
        <input type="checkbox" class="form-check-input" value="">Option 1
    </label>
</div>
<div class="form-check">
    <label class="form-check-label">
        <input type="checkbox" class="form-check-input" value="">Option 2
    </label>
</div>
<div class="form-check">
    <label class="form-check-label">
        <input type="checkbox" class="form-check-input" value="" disabled>Option 3
    </label>
</div>
```

**inline checkbox -**
- `form-check-inline` : add to wrapper `<div>` to create inline checkboxes
```
<div class="form-check-inline">
    <label class="form-check-label">
        <input type="checkbox" class="form-check-input" value="">Option 1
    </label>
</div>
<div class="form-check-inline">
    <label class="form-check-label">
        <input type="checkbox" class="form-check-input" value="">Option 2
    </label>
</div>
<div class="form-check-inline">
    <label class="form-check-label">
        <input type="checkbox" class="form-check-input" value="" disabled>Option 3
    </label>
</div>
```

**radio buttons -**
- `form-check` : add to wrapper `<div>` to create radio button
- `form-check-label` : add to `<label>` to set label of radio button
- `form-check-input` : add to `<input>` type radio
- `disabled` : add to `<input>` to disable check item
```
<div class="form-check">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio">Option 1
    </label>
</div>
<div class="form-check">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio">Option 2
    </label>
</div>
<div class="form-check disabled">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio" disabled>Option 3
    </label>
</div>
```

**inline radio buttons -**
- `form-check-inline` : add to wrapper `<div>` to create inline radio buttons
```
<div class="form-check-inline">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio">Option 1
    </label>
</div>
<div class="form-check-inline">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio">Option 2
    </label>
</div>
<div class="form-check-inline disabled">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optradio" disabled>Option 3
    </label>
</div> 
```

**selection lists -**
- `form-check` : add to wrapper `<div>` to create select list
- `form-control` : add to `<select>` for styling options
```
<div class="form-group">
    <label for="sel1">Select list:</label>
    <select class="form-control" id="sel1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
</div>
```



## Input Group

- `input-group` : add to wrapper `<div>` container to enhance input by adding icon/text/button in front/behind input field as help text
- `input-group-prepend` : add to `<div>` for help text front of input
- `input-group-append` : add to `<div>` for help text behind input
- `input-group-text` : add to `<span>` for specified help text

Ex :
```
<form>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username">
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Your Email">
        <div class="input-group-append">
            <span class="input-group-text">@example.com</span>
        </div>
    </div>
</form>
```


### Input Group Sizing :
- `input-group-sm/lg` : add with `.input-group` for sizing input groups (default md)

Ex :
```
<form>
    <div class="input-group mb-3 input-group-sm">
         <div class="input-group-prepend">
             <span class="input-group-text">Small</span>
        </div>
        <input type="text" class="form-control">
    </div>
</form>
```


### Multiple Inputs & Helpers :

**Multiple Inputs -**
```
<form>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Person</span>
        </div>
        <input type="text" class="form-control" placeholder="First Name">
        <input type="text" class="form-control" placeholder="Last Name">
    </div>
</form>
```

**Multiple Helper Text -**
```
<form>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">One</span>
            <span class="input-group-text">Two</span>
            <span class="input-group-text">Three</span>
        </div>
        <input type="text" class="form-control">
    </div>
</form>
```


### Input Group with Checkboxes & Radios :

**Checkboxes -**
```
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <div class="input-group-text">
            <input type="checkbox">
        </div>
    </div>
    <input type="text" class="form-control" placeholder="Some text">
</div>
```

**Radios -**
```
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <div class="input-group-text">
            <input type="radio">
        </div>
    </div>
    <input type="text" class="form-control" placeholder="Some text">
</div>
```


### Input Group Buttons :

**Basic Button -**
```
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <button class="btn btn-outline-primary" type="button">Basic Button</button>
    </div>
    <input type="text" class="form-control" placeholder="Some text">
</div>
```

**Go Button -**
```
<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search">
    <div class="input-group-append">
        <button class="btn btn-success" type="submit">Go</button>
    </div>
</div>
```

**Ok & Cancel Button -**
```
<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Something clever..">
    <div class="input-group-append">
        <button class="btn btn-primary" type="button">OK</button>
        <button class="btn btn-danger" type="button">Cancel</button>
    </div>
</div>
```


### Input Group with Dropdown Button :
```
<div class="input-group mt-3 mb-3">
    <div class="input-group-prepend">
        <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
            Dropdown button
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
        </div>
    </div>
    <input type="text" class="form-control" placeholder="Username">
</div>
```


### Input Group Labels :
```
<form>
    <label for="demo">Write your email here:</label>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Email" id="demo" name="email">
        <div class="input-group-append">
            <span class="input-group-text">@example.com</span>
        </div>
    </div>
</form>
```



## Custom Forms

- `custom-control` : add to wrapper `<div>` around `<input>` to create custom forms
- `custom-control-inline` : add with `.custom-control` to create inline custom form element
- `custom-control-label` : add to `<label>` inside `.custom-control` for label text

Ex :
```
<form>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input" id="customRadio" name="example" value="customEx">
        <label class="custom-control-label" for="customRadio">Custom radio 1</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input" id="customRadio2" name="example" value="customEx">
        <label class="custom-control-label" for="customRadio2">Custom radio 2</label>
    </div>
</form>
```


### Custom Checkbox :
- `custom-control-input` : add to `<input>`
- `custom-checkbox` : add with `.custom-control` for custom checkboxes

Ex :
```
<form>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
        <label class="custom-control-label" for="customCheck">Check this custom checkbox</label>
    </div>
</form>
```


### Custom Switch :
- `custom-control-input` : add to `<input>`
- `custom-switch` : add with `.custom-control` for custom switch

```
<form>
    <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="switch1">
        <label class="custom-control-label" for="switch1">Toggle me</label>
    </div>
</form>
```


### Custom Radio buttons :
- `custom-control-input` : add to `<input>`
- `custom-radio` : add with `.custom-control` for custom radio buttons

```
<form>
    <div class="custom-control custom-radio">
        <input type="radio" class="custom-control-input" id="customRadio" name="example1" value="customEx">
        <label class="custom-control-label" for="customRadio">Custom radio</label>
    </div>
</form>
```


### Custom Select Menu :
- `custom-select` : add to `<select>` element for custom select menu
- `custom-select-sm/lg` : add to `<select>` element for sizing custom select menu (default md)

```
<form>
    <select name="cars" class="custom-select">
        <option selected>Custom Select Menu</option>
        <option value="volvo">Volvo</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
</form>
```

**Small Custom Select Menu -**
```
<form>
    <select name="cars" class="custom-select-sm">
        <option selected>Small Custom Select Menu</option>
        <option value="volvo">Volvo</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
</form>
```


### Custom Range :
- `custom-range` : add to `<input>` type range for custom range

```
<form>
    <label for="customRange">Custom range</label>
    <input type="range" class="custom-range" id="customRange" name="points1">
</form>
```


### Custom File Upload :
- `custom-file` : add to wrapper `<div>` element for custom file upload
- `custom-file-input` : add to `<input>` type file for custom file upload

```
<form>
    <div class="custom-file">
        <input type="file" class="custom-file-input" id="customFile">
        <label class="custom-file-label" for="customFile">Choose file</label>
    </div>
</form>

<script>
// Add the following code if you want the name of the file appear on select -
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
</script>
```



# Flexbox

- `d-flex` : add it to `<div>` to create flexbox container & transforms direct children into flex items 
- `d-md/sm/lg/xl-flex` : add it to `<div>` to create flexbox container on specific screen size

**Note : maximum columns are 12**

Ex :
```
<div class="d-flex p-3 bg-secondary text-white">
	<div class="p-2 bg-info">Flex item 1</div>
	<div class="p-2 bg-warning">Flex item 2</div>
	<div class="p-2 bg-primary">Flex item 3</div>
</div>
```


### Inine Flexbox :
- `d-inline-flex` : add it to `<div>` to create inline flexbox container    
- `d-sm/md/lg/xl-inline-flex` : add it to `<div>` to create inline flexbox container on specific screen size

Ex :
```
<div class="d-inline-flex p-3 bg-secondary text-white">
	<div class="p-2 bg-info">Flex item 1</div>
	<div class="p-2 bg-warning">Flex item 2</div>
	<div class="p-2 bg-primary">Flex item 3</div>
</div>
```


### Horizontal Direction Flexbox Items :
- `flex-row` : add with `.d-flex` to display flex items horizontally (side by side)
- `flex-row-reverse` : add with `.d-flex` to right-align horizontal direction

Ex :
```
<div class="d-flex flex-row bg-secondary">
    <div class="p-2 bg-info">Flex item 1</div>
    <div class="p-2 bg-warning">Flex item 2</div>
    <div class="p-2 bg-primary">Flex item 3</div>
</div>
```
- 

### Vertical Direction Flexbox Items :
- `flex-column` : add with `.d-flex` to display flex items vertically (on top of each other)
- `flex-column-reverse` : add with `.d-flex` to reverse vertical direction

Ex :
```
<div class="d-flex flex-column">
    <div class="p-2 bg-info">Flex item 1</div>
    <div class="p-2 bg-warning">Flex item 2</div>
    <div class="p-2 bg-primary">Flex item 3</div>
</div>
```


### Justify Content Flex Items (align) :
- `justify-content-start/end/center/between/around` : add with `.d-flex` to justify inside content to following

Ex :
```
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-end">...</div>
```


### Fill/Equal Width Flex Items :
- `flex-fill` : add to each flex item to force them into equal widths

Ex :
```
<div class="d-flex">
    <div class="p-2 bg-info flex-fill">Flex item 1</div>
    <div class="p-2 bg-warning flex-fill">Flex item 2</div>
    <div class="p-2 bg-primary flex-fill">Flex item 3</div>
</div>
```


### Flex Grow & Shrink :
- `flex-grow-1` : add to flex item to take up rest of space
- `flex-shrink-1` : add to flex item to make it shrink if necessary

Ex :
```
<div class="d-flex">
    <div class="p-2 bg-info">Flex item 1</div>
    <div class="p-2 bg-primary flex-grow-1">Flex item 2</div>
</div>
```

- 
### Flex Order :
- `order` : add to flex items to change visual order of specific flex item

**Note : valid classes are from 0-12, lowest number has highest priority ie order-1 is shown before order-2.**

Ex :
```
<div class="d-flex bg-secondary">
    <div class="p-2 bg-info order-3">Flex item 1</div>
    <div class="p-2 bg-warning order-2">Flex item 2</div>
    <div class="p-2 bg-primary order-1">Flex item 3</div>
</div>
```


### Flex Wrap :
*(control how flex items wrap in flex container)*
- `flex-nowrap` : add with `d-flex` to no wrapping to flex container (default)
- `flex-wrap` : add with `d-flex` to wrap flex container
- `flex-wrap-reverse` : add with `d-flex` to reverse wrap flex container

Ex :
```
<div class="d-flex flex-wrap">..</div>
<div class="d-flex flex-wrap-reverse">..</div>
<div class="d-flex flex-nowrap">..</div>
```


### Auto Margins :
- **add auto margins to flex items with `.mr-auto`, push items to right -**
```
<div class="d-flex bg-secondary">
	<div class="p-2 mr-auto bg-info">Flex item 1</div>
	<div class="p-2 bg-warning">Flex item 2</div>
	<div class="p-2 bg-primary">Flex item 3</div>
</div>
```

- **add auto margins to flex items with `.ml-auto`, push items to left -**
```
<div class="d-flex bg-secondary">
	<div class="p-2 bg-info">Flex item 1</div>
	<div class="p-2 bg-warning">Flex item 2</div>
	<div class="p-2 ml-auto bg-primary">Flex item 3</div>
</div>
```


### Flex Align Content :
*(control vertical alignment of gathered flex items)*
- `align-content-start/end/center/between/around/stretch` : add with `d-flex` for vertical alignment of gathered flex items

*Note : these classes have no effect on single rows of flex items.*

Ex :
```
<div class="d-flex flex-wrap align-content-start">..</div>
<div class="d-flex flex-wrap align-content-end">..</div>
```


### Flex Align Items :
*(control vertical alignment of single rows of flex items)*
- `align-items-start/end/center/baseline/stretch` : add with `d-flex` for vertical alignment of single rows of flex items

Ex :
```
<div class="d-flex align-items-start">..</div>
<div class="d-flex align-items-end">..</div>
```


### Flex Align Self :
*(control vertical alignment of specified flex item)*
- `align-self-start/end/center/baseline/stretch` : add with `d-flex` for vertical alignment of specified flex item

Ex :
```
<div class="d-flex bg-light" style="height:150px">
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border align-self-start">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
</div>
```


### Responsive Flex :

*Note : \* = sm/md/lg/xl*

**Flex Container -**
- `d-*-flex` : creates flexbox container for different screens
- `d-*-inline-flex` : ceates inline flexbox container for different screens

**Direction -**
- `flex-*-row` : display flex items horizontally on different screens
- `flex-*-row-reverse` : display flex items horizontally, and right-aligned, on different screens 
- `flex-*-column` : display flex items vertically on different screens
- `flex-*-column-reverse` : display flex items vertically, with reversed order, on different screens screens

**Justified Content -**
- `justify-content-*-start` : display flex items from the start (left-aligned) on different screens 
- `justify-content-*-end` : display flex items at the end (right-aligned) on different screens    
- `justify-content-*-center` : display flex items in the center of flex container on different screens    
- `justify-content-*-between` : display flex items in "between" on different screens    
- `justify-content-*-around` : display flex items "around" on different screens

**Fill/Equal Width -**
- `flex-*-fill` : force flex items into equal widths on different screens

**Grow -**
- `flex-*-grow-0` : don't make items grow on different screens
- `flex-*-grow-1` : make items grow on different screens

**Shrink -**
- `flex-*-shrink-0` : don't make items shrink on diferent screens    
- `flex-*-shrink-1` : make items shrink on different screens

**Order -**
- `order-*-0-12` : change order from 0 to 12 on small screens

**Wrap -**
- `flex-*-nowrap` : don't wrap items on different screens
- `flex-*-wrap` : wrap items on different screens
- `flex-*-wrap-reverse` : reverse wrapping of items on different screens

**Align Content -**
- `align-content-*-start` : align gathered items from start on different screens
- `align-content-*-end` : align gathered items at the end on different screens
- `align-content-*-center` : align gathered items in the center on different screens
- `align-content-*-around` : align gathered items "around" on different screens
- `align-content-*-stretch` : stretch gathered items on different screens

**Align Items -**
- `align-items-*-start` : align single rows of items from the start on different screens    
- `align-items-*-end` : align single rows of items at the end on different screens
- `align-items-*-center` : align single rows of items in the center on different screens
- `align-items-*-baseline` : align single rows of items on the baseline on different screens
- `align-items-*-stretch` : stretch single rows of items on different screens

**Align Self -**
- `align-self-*-start` : align flex item from the start on different screens
- `align-self-*-end` : lign flex item at the end on different screens
- `align-self-*-center` : align flex item in the center on different screens
- `align-self-*-baseline` : align flex item on the baseline on different screens
- `align-self-*-stretch` : stretch flex item on different screens



## Grid

- `row` : add to `<div>` to create horizontal groups of columns
- `col` : add to `<div>` inside `.row` to create column (must be immediate childs of row)
- `col-sm/md/lg/xl` : create responsive col - decide by us create equal of width
- `col-sm/md/lg/xl-n` : responsive col that spans 1-12 rows (n = 1-12)

*no-gutters : add with `.row` to remove gutters (extra space)*

**Note :**
1. row must be placed in container or container-fluid
2. cols spanned must be sum to 12
3. \* = sm/md/lg/xl


**Create unequal col of 25% 50% 25% -**
```
<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6"></div>
    <div class="col-md-3"></div>
</div>
```

**Create col of equal width (auto layout col) -**
```
<div class="row">
    <div class="col-*"></div>
    <div class="col-*"></div>
    <div class="col-*"></div>
</div>
```

**Stacked to horizontal on large screens & stack on top of each other on small screens -**
```
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-6">
            <p>Lorem ipsum...</p>
        </div>
        <div class="col-sm-6">
            <p>Sed ut perspiciatis...</p>
        </div>
    </div>
</div>
```

**4 columns of 25% width each (auto layout col) -**
```
<div class="row">
    <div class="col-sm">1 of 4</div>
    <div class="col-sm">2 of 4</div>
    <div class="col-sm">3 of 4</div>
    <div class="col-sm">4 of 4</div>
</div>
```

**Nested Columns -**
```
<div class="row">
    <div class="col-8">
        col-8
        <div class="row">
            <div class="col-6">col-6</div>
            <div class="col-6">col-6</div>
        </div>
    </div>
    <div class="col-4">col-4</div>
</div>
```


### On Xtra Small Screen Devices :
**two cols of 25% 75% split on all devices (xsm, sm, md, lg, xl) -**
```
<div class="container-fluid">
    <div class="row">
        <div class="col-3 bg-success">
            <p>Lorem ipsum...</p>
        </div>
        <div class="col-9 bg-warning">
            <p>Sed ut perspiciatis...</p>
        </div>
    </div>
</div>
```


### On Small Screen Devices :
**two cols of 25% 75% split on sm (md, lg, xl) devices, on x-sm devices it will automatically stack 100% width -**
```
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3 bg-success">
            <p>Lorem ipsum...</p>
        </div>
        <div class="col-sm-9 bg-warning">
            <p>Sed ut perspiciatis...</p>
        </div>
    </div>
</div>
```


### On Medium Screen Devices :
**On sm size, look at classes with `-sm-` in them and use those & on md size look at classes with `-md-` in them and use those. 25% 75% split on sm devices & 50% 50% split on md (lg, xl) devices. on x-sm devices, it will automatically stack (100%) -**
```
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3 col-md-6">
            <p>Lorem ipsum...</p>
        </div>
        <div class="col-sm-9 col-md-6">
            <p>Sed ut perspiciatis...</p>
        </div>
    </div>
</div>
```

**Using Only Medium. md, lg, xl devices it split 50% 50%, for sm, x-sm devices t will stack vertically (100% width) -**
```
<div class="row">
	<div class="col-md-6">
		<p>Lorem ipsum...</p>
	</div>
	<div class="col-md-6">
		<p>Sed ut perspiciatis...</p>
	</div>
</div>
```


### On Large Screen Devices :
**On sm size, look at classes with `-sm-`. on md size, look at classes with `-md-`. on lg size, look at classes with `-lg-`. 25% 75% split on sm devices, 50% 50% split on md devices & 33% 66% split on lg & xl devices. On x-sm devices, it will automatically stack (100%) -**
```
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3 col-md-6 col-lg-4">
            <p>Lorem ipsum...</p>
        </div>
        <div class="col-sm-9 col-md-6 col-lg-8">
            <p>Sed ut perspiciatis...</p>
        </div>
    </div>
</div>
```

**Using Only Large. lg & xl devices split 50% 50%, for md, sm & x-sm devices it will stack vertically (100% width) -**
```
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-6">
            <p>Lorem ipsum...</p>
        </div>
        <div class="col-lg-6">
            <p>Sed ut perspiciatis...</p>
        </div>
    </div>
</div>
```


### On Extra Large Screen Devices :
**25% 75% split on sm devices, 50% 50% split on md devices, 33% 66% split on lg & 20% 80% split on xl devices. On x-sm devices it will automatically stack (100%) -**
```
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3 col-md-6 col-lg-4 col-xl-2">
            <p>Lorem ipsum...</p>
        </div>
        <div class="col-sm-9 col-md-6 col-lg-8 col-xl-10">
            <p>Sed ut perspiciatis...</p>
        </div>
    </div>
</div>
```

**Using Only XLarge. On xl devices split 50% 50%. for lg, md, sm, x-sm devices it will stack vertically (100% width) -**
```
<div class="row">
	<div class="col-xl-6">
		<p>Lorem ipsum...</p>
	</div>
	<div class="col-xl-6">
		<p>Sed ut perspiciatis...</p>
	</div>
</div>
```
