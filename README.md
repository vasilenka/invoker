# Invoker
> Craft you page, faster!

# Primitives
## Colors
Semua produk yang kita ciptakan harus memenuhi paling tidak level standar contrast WCAG AA. Kontras yang rendah akan menyulitkan orang yang memiliki daya penglihatan yang rendah, buta warna, atau hanya sekedar dalam situasi yang tidak optimal ketika menggunakan produk (e.g. outdoor ketika matahari sangat cerah).

Pengujian kontras warna melalui web dapat dilakukan dengan menggunakan :
1. https://colorable.jxnblk.com
2. https://contrastchecker.com
atau jika kamu lebih menyukai native app di macOS, maka dapat menggunakan:
* https://usecontrast.com

Notes: **”AA Large”** — Legible untuk font dengan size >= 18pt untuk font regular dan 14pt untuk style bold. — https://www.w3.org/TR/WCAG20/#larger-scaledef

#### Primary Colors
```scss
// Brand—Primary colors
$brand-primary              : #3F46AD;
$brand-primary-lighter      : #5B77C4;
$brand-primary-darker       : #182385;
// Brand--Secondary Colors
$brand-secondary            : #ED0001;
$brand-secondary-lighter    : #FD5C63;
$brand-secondary-darker     : #B50008;
```

#### System Colors
```scss
// System colors
$sys-danger                 : #E42700;
$sys-danger-lighter         : #FF603F;
$sys-danger-darker          : #940D00;
$sys-alert                  : #FFAB00;
$sys-alert-lighter          : #FFE380;
$sys-alert-darker           : #FF8B00;
$sys-success                : #00A971;
$sys-success-lighter        : #79F2C0;
$sys-success-darker         : #008D5E;
```

#### Background
Use these colors for background only. All background colors have been tested using `$dark-40` as body text and passed **WCAG AA Large** standard.

![alt text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-100.png "Rose 100 - #FCE7DD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-200.png "Rose 200 - #E3CDD1")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-rose-300.png "Rose 300 - #D8BAC0")

![alt text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-100.png "Sea 100 - #FCE7DD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-200.png "Sea 200 - #E3CDD1")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sea-300.png "Sea 300 - #D8BAC0")

![alt text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plum-100.png "Plum 100 - #FCE7DD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plum-200.png "Plum 200 - #E3CDD1")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-plum-300.png "Plum 300 - #D8BAC0")

![alt text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-100.png "Sage 100 - #FCE7DD")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-200.png "Sage 200 - #E3CDD1")
![alt-text](https://raw.githubusercontent.com/vasilenka/invoker/master/src/colors/bg-sage-300.png "Sage 300 - #D8BAC0")

```scss
$bg-scarlet                 : #FFEAEE;
$bg-sage            	    : #E8F3EC;
$bg-sea             	    : #D7EFEE;
$bg-plum            	    : #DFD8E3;
$bg-sky             	    : #E2EFF9;
$bg-sand            	    : #F6F1E4;
$bg-dust            	    : #F8F7F5;
$bg-verdant         	    : #E4FDEB;
$bg-banana          	    : #FFFDDD;
```

## Spaces
Spacing tokens are used for padding, margins, and position coordinates. Mids menggunakan basis 16px untuk spacing. Basis 16px membuat layout memiliki flexibilitas yang tinggi serta hirarki yang lebih jelas sehingga layout menjadi lebih proporsional.
