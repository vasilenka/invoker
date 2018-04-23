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

```scss

// TODO: Dokumentasi penggunaan warna pada README.MD

// Brand--Primary Colors
$brand-primary              : #ED0001;
$brand-primary-lighter      : #FD5C63;
$brand-primary-darker       : #B50008;
// Brand--Secondary colors
$brand-secondary            : #3F46AD;
$brand-secondary-lighter    : #5B77C4;
$brand-secondary-darker     : #182385;

// Dark
// HEX
$dark-hex-70                : #0f0f0f;
$dark-hex-60                : #292929;
$dark-hex-50                : #484848;
$dark-hex-40                : #767676;
// End-point for text colors
$dark-hex-30                : #cccccc;
$dark-hex-20                : #e0e0e0;
$dark-hex-10                : #f5f5f5;
// ALPHA
$dark-alpha-70              : rgba(0,0,0,.94);
$dark-alpha-60              : rgba(0,0,0,.84);
$dark-alpha-50              : rgba(0,0,0,.71);
$dark-alpha-40              : rgba(0,0,0,.54);
// End-point for text colors
$dark-alpha-30              : rgba(0,0,0,.20);
$dark-alpha-20              : rgba(0,0,0,.12);
$dark-alpha-10              : rgba(0,0,0,.04);

// Light
// ALPHA
$light-alpha-70             : rgba(255,255,255,1);
$light-alpha-60             : rgba(255,255,255,.84);
$light-alpha-50             : rgba(255,255,255,.71);
$light-alpha-40             : rgba(255,255,255,.54);
// HEX
$light-hex-70               : #ffffff;
$light-hex-60               : #dcdcdc;
$light-hex-50               : #c0c0c0;
$light-hex-40               : #9c9c9c;

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

// Background Colors
// Only use this colors for background
// ROSE
$bg-rose                    : #E3CDD1;
$bg-rose-lighter            : #FCE7DD;
$bg-rose-darker             : #D8BAC0;
// SCARLET
$bg-scarlet                 : #FFC4CF;
$bg-scarlet-lighter         : #FFEAEE;
$bg-scarlet-darker          : #FFA2B3;
// SAGE
$bg-sage                    : #CAD8B4;
$bg-sage-lighter            : #E8F3EC;
$bg-sage-darker             : #B7CA9A;
// SEA
$bg-sea                     : #A9DCD7;
$bg-sea-lighter             : #D7EFEE;
$bg-sea-darker              : #92D3CC;
// SAGE
$bg-plum                    : #D4D0E3;
$bg-plum-lighter            : #DFD8E3;
$bg-plum-darker             : #BEB8D5;
// SKY
$bg-sky                     : #B7D7F0;
$bg-sky-lighter             : #E2EFF9;
$bg-sky-darker              : #91C2E8;
// SAND
$bg-sand                    : #E0D0B7;
$bg-sand-lighter            : #F6F1E4;
$bg-sand-darker             : #D8C4A5;
// DUST
$bg-dust                    : #F0F0EE;
$bg-dust-lighter            : #F8F7F5;
$bg-dust-darker             : #B7B7AD;
// VERDANT
$bg-verdant                 : #D9FCE3;
$bg-verdant-lighter         : #E4FDEB;
$bg-verdant-darker          : #A9EEBC;
// BANANA
$bg-banana                  : #FFFBBB;
$bg-banana-lighter          : #FFFDDD;
$bg-banana-darker           : #FFFE95;

// Additional Brand Colors
// SAGE
$brand-sage                 : #2C864C;
$brand-sage-lighter         : #56A472;
$brand-sage-darker          : #1B512E;
// SEA
$brand-sea                  : #008380;
$brand-sea-lighter          : #37A4A0;
$brand-sea-darker           : #00514F;
// SKY
$brand-sky                  : #267ABC;
$brand-sky-lighter          : #4A9BDA;
$brand-sky-darker           : #184C75;
// PLUM
$brand-plum                 : #866D96;
$brand-plum-lighter         : #A18DAD;
$brand-plum-darker          : #51425B;


```

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
