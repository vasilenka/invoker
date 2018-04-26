
# Invoker
> Craft you page, faster!

![alt text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/brand/cover.png "Meridian.id Design System")

# Primitives
## Colors
Semua produk yang kita ciptakan harus memenuhi paling tidak level standar contrast WCAG AA. Kontras yang rendah akan menyulitkan orang yang memiliki daya penglihatan yang rendah, buta warna, atau hanya sekedar dalam situasi yang tidak optimal ketika menggunakan produk (e.g. outdoor ketika matahari sangat cerah).

Pengujian kontras warna melalui web dapat dilakukan dengan menggunakan :
1. https://colorable.jxnblk.com
2. https://contrastchecker.com
atau jika kamu lebih menyukai native app di macOS, maka dapat menggunakan:
* https://usecontrast.com

Notes: **”AA Large”** — Legible untuk font dengan size >= 18pt untuk font regular dan 14pt untuk style bold. — https://www.w3.org/TR/WCAG20/#larger-scaledef

### Brand Colors
#### Primary Colors - Jeans
> Primary link and actions
```scss
$brand-primary-100      : #5773C2;
$brand-primary-200      : #3F46AD; // Default
$brand-primary-300      : #182385; // Hover and tap
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/jeans-100.png "Jeans 100 - #5773C2")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/jeans-200.png "Jeans 200 - #3F46AD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/jeans-300.png "Jeans 300 - #182385")

#### Secondary Colors - Scarlet
> Primary actions
```scss
$brand-secondary-100    : #FD5C63;
$brand-secondary-200    : #ED0001; // Default
$brand-secondary-300    : #B50008; // Hover and tap
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/scarlet-100.png "Scarlet 100 - #FD5C63")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/scarlet-200.png "Scarlet 200 - #ED0001")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/scarlet-300.png "Scarlet 300 - #B50008")


### Dark Colors
> Text colors

Semua dark colors sudah diuji dengan background putih `#FFFFFF` serta dan memenuhi standar contrast ratio WCAG AA. Untuk penggunaan dengan background selain warna putih silahkan lakukan pengujian lagi.

```SCSS
$dark-hex-70        : #0F0F0F; // Heading
$dark-hex-60        : #292929; // Heading and Body text in text-heavy page such as blog post
$dark-hex-50        : #484848; // Body text
$dark-hex-40        : #767676; // Caption and subtitle

$dark-alpha-70      : rgba(0,0,0,,94);
$dark-alpha-60      : rgba(0,0,0,,84);
$dark-alpha-50      : rgba(0,0,0,,71);
$dark-alpha-40      : rgba(0,0,0,,54);
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/dark-70.png "Dark 70 - #0F0F0F")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/dark-60.png "Dark 60 - #292929")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/dark-50.png "Dark 50 - #484848")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/dark-40.png "Dark 40 - #767676")

---

### System Colors
---
#### Danger - Rose
```scss
$sys-danger-100     : #E42700;
$sys-danger-200     : #FF603F;
$sys-danger-300     : #940D00;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/rose-100.png "Rose 100 - #FD5C63")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/rose-200.png "Rose 200 - #ED0001")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/rose-300.png "Rose 300 - #B50008")

#### Warning - Amber
```scss
$sys-warning-100    : #FFAB00;
$sys-warning-200    : #FFE380;
$sys-warning-300    : #FF8B00;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/amber-100.png "Amber 100 - #FD5C63")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/amber-200.png "Amber 200 - #ED0001")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/amber-300.png "Amber 300 - #B50008")

#### Success - Verdant
```scss
$sys-success-100    : #00A971;
$sys-success-200    : #79F2C0;
$sys-success-300    : #008D5E;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/verdant-100.png "Verdant 100 - #FD5C63")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/verdant-200.png "Verdant 200 - #ED0001")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/verdant-300.png "Verdant 300 - #B50008")

### Background
> Use these colors for background only.

Semua background color sudah diuji dan memenuhi standar contrast WCAG AA untuk penggunaan pada warna teks `$dark-50`, `$dark-60`, dan `$dark-70`. Untuk penggunaan dengan teks `$dark-40`, dapat mengacu pada contrast ratio pada gambar masing-masing warna.

#### Dust
```scss
$bg-dust-100    : #F7F7F5;
$bg-dust-200    : #F0F0EE;
$bg-dust-300    : #B7B7AD;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-dust-100.png "Dust 100 - #F7F7F5")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-dust-200.png "Dust 200 - #F0F0EE")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-dust-300.png "Dust 300 - #B7B7AD")

#### Rose
```scss
$bg-rose-100    : #FCE7DD;
$bg-rose-200    : #E3CDD1;
$bg-rose-300    : #D8BAC0;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-100.png "Rose 100 - #FCE7DD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-200.png "Rose 200 - #E3CDD1")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-300.png "Rose 300 - #D8BAC0")

#### Scarlet
```scss
$bg-scarlet-100    : #FFEAEE;
$bg-scarlet-200    : #FFC4CF;
$bg-scarlet-300    : #FFA2B3;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-scarlet-100.png "Scarlet 100 - #FFEAEE")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-scarlet-200.png "Scarlet 200 - #FFC4CF")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-scarlet-300.png "Scarlet 300 - #FFA2B3")

#### Sea
```scss
$bg-sea-100    : #D7EFEE;
$bg-sea-200    : #A9DCD7;
$bg-sea-300    : #92D3CC;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-100.png "Sea 100 - #D7EFEE")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-200.png "Sea 200 - #A9DCD7")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-300.png "Sea 300 - #92D3CC")

#### Plump
```scss
$bg-plump-100    : #DFD8E3;
$bg-plump-200    : #D4D0E3;
$bg-plump-300    : #BEB8D5;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plump-100.png "Plump 100 - #DFD8E3")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plump-200.png "Plump 200 - #D4D0E3")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plump-300.png "Plump 300 - #BEB8D5")

#### Sage
```scss
$bg-sage-100    : #E8F3EC;
$bg-sage-200    : #CAD8B4;
$bg-sage-300    : #B7CA9A;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-100.png "Sage 100 - #E8F3EC")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-200.png "Sage 200 - #CAD8B4")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-300.png "Sage 300 - #B7CA9A")

#### Sky
```scss
$bg-sky-100    : #E2EFF9;
$bg-sky-200    : #B7D7F0;
$bg-sky-300    : #91C2E8;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sky-100.png "Sky 100 - #E2EFF9")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sky-200.png "Sky 200 - #B7D7F0")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sky-300.png "Sky 300 - #91C2E8")

#### Verdant
```scss
$bg-verdant-100    : #E4FDEB;
$bg-verdant-200    : #D9FCE3;
$bg-verdant-300    : #A9EEBC;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-verdant-100.png "Verdant 100 - #E4FDEB")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-verdant-200.png "Verdant 200 - #D9FCE3")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-verdant-300.png "Verdant 300 - #A9EEBC")

#### Banana
```scss
$bg-banana-100    : #FFFDDD;
$bg-banana-200    : #FFFBBB;
$bg-banana-300    : #FFFE95;
```
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-banana-100.png "Banana 100 - #FFFDDD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-banana-200.png "Banana 200 - #FFFBBB")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-banana-300.png "Banana 300 - #FFFE95")


## Spaces
Spacing tokens are used for padding, margins, and position coordinates. Mids menggunakan basis 16px untuk spacing. Basis 16px membuat layout memiliki flexibilitas yang tinggi serta hirarki yang lebih jelas sehingga layout menjadi lebih proporsional.
