
# Invoker
> Craft you page, faster! 🚀

![alt text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/brand/cover.png "Meridian.id Design System")

[![license][license-image]][license-url]

[license-image]: https://img.shields.io/npm/l/normalize.css.svg?style=flat-square
[license-url]: LICENSE.md

**Table of Contents**

1. [Colors](https://github.com/vasilenka/invoker#colors)
    * [Accessibility First (A11y)](https://github.com/vasilenka/invoker#a11y-first)
    * [How to read color palette ?](https://github.com/vasilenka/invoker#how-to-read-color-palette-)
    * [Brand Colors](https://github.com/vasilenka/invoker#brand-colors)
    * [Dark Colors](https://github.com/vasilenka/invoker#dark-colors)
    * [System Colors](https://github.com/vasilenka/invoker#system-colors)
    * [Background Colors](https://github.com/vasilenka/invoker#background)
2. [Typography](https://github.com/vasilenka/invoker#typography)
3. [Space](https://github.com/vasilenka/invoker#space)

# Install
**NPM**

```sh
npm install --save vasilenka-invoker
```

---

### Primitives
The basic building blocks for every components and pages we created.

# Colors
### A11y first
Semua produk yang kita buat harus memenuhi tingkat kontras **WCAG AA**. Kontras yang rendah akan menyulitkan orang yang memiliki daya penglihatan yang rendah, buta warna, atau ketika penggunaan dalam situasi yang tidak optimal (e.g. outdoor ketika matahari sangat cerah).

Semua palet warna di bawah ini memiliki label rasio kontras warna yang sudah diuji dengan warna putih. Untuk penggunaan pada warna selain putih, kamu dapat melakukan validasi sendiri dengan menggunakan tools berikut:

1. https://colorable.jxnblk.com
2. https://contrastchecker.com
3. http://accessible-colors.com
4. https://usecontrast.com - *macOS desktop app*

Tingkat kontras minimum yang dibutuhkan bergantung pada **text-size** dan **text-weight**. Text yang berukuran besar (*large scale text*) dan bold akan lebih mudah untuk dibaca, sedangkan text yang berukuran kecil dan regular membutuhkan level kontras yang lebih tinggi untuk lebih mudah dibaca.

Untuk memastikan produk yang kita buat memenuhi a11y, gunakan rasio kontras WCAG AA (>= 4.5) untuk *small text* dan WCAG AA Large (>=3.00) untuk *large text*.

> **AA Large** — Legible untuk large text, yaitu text size >= 18pt untuk text style regular atau text size >= 14pt untuk style bold.
> Based on WCAG 2.0: https://www.w3.org/TR/WCAG20/#larger-scaledef

### How to read color palette ?
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/helper/color.png "Indicator for foreground colors")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/helper/bg.png "Indicator for Background colors")


## Brand Colors

#### Primary Colors - Jeans
> Primary link and actions
```scss
$brand-primary-100 // Default for large text
$brand-primary-200 // Default for small text
$brand-primary-300 // Hover and tap
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/helper/jeans.png "Jeans")

<!-- ![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/jeans-100.png "Jeans 100 - #5773C2") -->
<!-- ![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/jeans-200.png "Jeans 200 - #3F46AD") -->
<!-- ![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/jeans-300.png "Jeans 300 - #182385") -->

#### Secondary Colors - Scarlet
> Primary actions
```scss
$brand-secondary-100  // Default for large text
$brand-secondary-200  // Default for small text
$brand-secondary-300  // Hover and tap
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/helper/scarlet.png "Scarlet")
<!-- ![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/scarlet-100.png "Scarlet 100 - #FD5C63")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/scarlet-200.png "Scarlet 200 - #D43242")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/scarlet-300.png "Scarlet 300 - #9A202C") -->


## Dark Colors
> Text colors

Semua dark colors sudah diuji dengan background putih `#FFFFFF` serta dan memenuhi standar contrast ratio WCAG AA. Untuk penggunaan dengan background selain warna putih silahkan lakukan pengujian lagi.

```SCSS
$dark-hex-70 // Heading
$dark-hex-60 // Heading and Body text in text-heavy page such as blog post
$dark-hex-50 // Body text
$dark-hex-40 // Caption and subtitle

// Alternaive colors using alpha value.
// Preferable!
$dark-alpha-70
$dark-alpha-60
$dark-alpha-50
$dark-alpha-40

```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/dark-70.png "Dark 70 - #0F0F0F")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/dark-60.png "Dark 60 - #292929")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/dark-50.png "Dark 50 - #484848")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/dark-40.png "Dark 40 - #767676")

## System Colors
### Danger - Rose
```scss
$sys-danger-100 // Use for Danger Background or Large text
$sys-danger-200 // Default for small text
$sys-danger-300 // Hover, active, focus and tap
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/rose-100.png "Rose 100 - #FD5C63")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/rose-200.png "Rose 200 - #ED0001")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/rose-300.png "Rose 300 - #B50008")

### Warning - Amber
> Only use these palettes as background color and use at least `$dark-60` as text for the warning.
```scss
$sys-warning-100
$sys-warning-200
$sys-warning-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/amber-100.png "Amber 100 - #FFE380")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/amber-200.png "Amber 200 - #FFAB00")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/amber-300.png "Amber 300 - #FF8B00")

### Success - Verdant
```scss
$sys-success-100 // Use for success background
$sys-success-200 // Default for small text
$sys-success-300 // Hover, active, focus and tap
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/verdant-100.png "Verdant 100 - #57D9A3")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/verdant-200.png "Verdant 200 - #00875A")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/verdant-300.png "Verdant 300 - #006644")

## Background
> Use these colors for background only.

Semua background color sudah diuji dan memenuhi standar contrast **WCAG AA** untuk penggunaan pada warna teks `$dark-50`, `$dark-60`, dan `$dark-70`.
Untuk penggunaan dengan teks `$dark-40`, dapat mengacu pada contrast ratio pada gambar masing-masing warna.

### Dust
```scss
$bg-dust-100
$bg-dust-200
$bg-dust-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-dust-100.png "Dust 100 - #F7F7F5")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-dust-200.png "Dust 200 - #F0F0EE")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-dust-300.png "Dust 300 - #B7B7AD")

### Rose
```scss
$bg-rose-100
$bg-rose-200
$bg-rose-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-100.png "Rose 100 - #FCE7DD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-200.png "Rose 200 - #E3CDD1")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-300.png "Rose 300 - #D8BAC0")

### Scarlet
```scss
$bg-scarlet-100
$bg-scarlet-200
$bg-scarlet-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-scarlet-100.png "Scarlet 100 - #FFEAEE")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-scarlet-200.png "Scarlet 200 - #FFC4CF")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-scarlet-300.png "Scarlet 300 - #FFA2B3")

### Sea
```scss
$bg-sea-100
$bg-sea-200
$bg-sea-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-100.png "Sea 100 - #D7EFEE")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-200.png "Sea 200 - #A9DCD7")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-300.png "Sea 300 - #92D3CC")

### Plump
```scss
$bg-plump-100
$bg-plump-200
$bg-plump-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plump-100.png "Plump 100 - #DFD8E3")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plump-200.png "Plump 200 - #D4D0E3")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plump-300.png "Plump 300 - #BEB8D5")

### Sage
```scss
$bg-sage-100
$bg-sage-200
$bg-sage-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-100.png "Sage 100 - #E8F3EC")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-200.png "Sage 200 - #CAD8B4")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-300.png "Sage 300 - #B7CA9A")

### Sky
```scss
$bg-sky-100
$bg-sky-200
$bg-sky-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sky-100.png "Sky 100 - #E2EFF9")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sky-200.png "Sky 200 - #B7D7F0")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sky-300.png "Sky 300 - #91C2E8")

### Verdant
```scss
$bg-verdant-100
$bg-verdant-200
$bg-verdant-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-verdant-100.png "Verdant 100 - #E4FDEB")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-verdant-200.png "Verdant 200 - #D9FCE3")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-verdant-300.png "Verdant 300 - #A9EEBC")

### Banana
```scss
$bg-banana-100
$bg-banana-200
$bg-banana-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-banana-100.png "Banana 100 - #FFFDDD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-banana-200.png "Banana 200 - #FFFBBB")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-banana-300.png "Banana 300 - #FFFE95")

### Sand
```scss
$bg-sand-100
$bg-sand-200
$bg-sand-300
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sand-100.png "Sand 100 - #F6F1E4")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sand-200.png "Sand 200 - #E0D0B7")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sand-300.png "Sand 300 - #D8C4A5")


# Space
Spacing tokens are used for padding, margins, and position coordinates. Semua nilai spacing dihitung berdasarkan 16px sebagai basis.

## Space Step
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/space/step.png "Space Steps")

## Space Inset
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/space/inset.png "Space Inset")

## Space Inline
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/space/inline.png "Space Inline")

## Space Stack
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/space/stack.png "Space Stack")

## Space Squish
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/space/squish.png "Space Squish")

## Space Stretch
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/space/stretch.png "Space Stretch")

# Typography

Text is one of the main way we can deliver the information to the user. Keeping consist and sticking to logical hierarchies ensures that elements in the UI are clear and easily recognizable when scanning the page. Text sizes, styles, and layouts were selected to balance content and UI and to foster familiarity.

Here's a list of type scale and it's property that we used across the brand.

##

![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/typography/type.png "Typography")
