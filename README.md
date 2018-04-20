# Invoker
Craft your page, faster!

## Primitives
### Colors
Color is a great way to impart vitality, provide visual continuity, communicate status information, give feedback in response to user actions, and help people visualize data. Look to the system’s color scheme for guidance when picking app tint colors that look great individually and in combination, on both light and dark backgrounds.

##### Accessibility
Semua produk yang kita ciptakan harus memenuhi paling tidak level standar contrast WCAG AA. Contrast yang rendah akan menyulitkan orang yang memiliki daya penglihatan yang rendah, buta warna, atau hanya sekedar dalam situasi yang tidak optimal ketika menggunakan produk (e.g. outdoor ketika matahari sangat cerah).

Pengujian kontras warna melalui web dapat dilakukan dengan menggunakan :

1. https://colorable.jxnblk.com
2. https://contrastchecker.com

atau jika kamu lebih menyukai native app di macOS, maka dapat menggunakan:

1. https://usecontrast.com

“AA Large” — Legible untuk font dengan size >= 24pt
https://www.w3.org/TR/WCAG20/#larger-scaledef

## Tokens
### Spaces
Spacing tokens are used for padding, margins, and position coordinates. Mids menggunakan basis 16px untuk spacing. Basis 16px membuat layout memiliki flexibilitas yang tinggi serta hirarki yang lebih jelas sehingga layout menjadi lebih proporsional.

```scss
Base 16px

$xs     : 0.25rem;
$s      : 0.5rem;
$sm     : 0.75rem;
$m      : 1rem;
$ml     : 1.5rem;
$l      : 2rem;
$xl     : 4rem;
```
