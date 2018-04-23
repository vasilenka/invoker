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
$brand-primary				: #3F46AD;
$brand-primary-lighter		: #5B77C4;
$brand-primary-darker			: #182385;
// Brand--Secondary Colors
$brand-secondary                : #ED0001;
$brand-secondary-lighter        : #FD5C63;
$brand-secondary-darker         : #B50008;
```

#### System Colors
```scss
// System colors
$sys-danger                 	: #E42700;
$sys-danger-lighter         	: #FF603F;
$sys-danger-darker          	: #940D00;
$sys-alert                  	: #FFAB00;
$sys-alert-lighter          	: #FFE380;
$sys-alert-darker           	: #FF8B00;
$sys-success                	: #00A971;
$sys-success-lighter        	: #79F2C0;
$sys-success-darker         	: #008D5E;
```

#### Background
Use these colours for background only. All background colors have been tested for `$dark-50` text and passed WCAG AA standard.
```scss
// ROSE
$bg-rose                    	: #E3CDD1;
$bg-rose-lighter            	: #FCE7DD;
$bg-rose-darker             	: #D8BAC0;
// SCARLET
$bg-scarlet                 	: #FFC4CF;
$bg-scarlet-lighter         	: #FFEAEE;
$bg-scarlet-darker          	: #FFA2B3;
// SAGE
$bg-sage                    	: #CAD8B4;
$bg-sage-lighter            	: #E8F3EC;
$bg-sage-darker             	: #B7CA9A;
// SEA
$bg-sea                     	: #A9DCD7;
$bg-sea-lighter             	: #D7EFEE;
$bg-sea-darker              	: #92D3CC;
// SAGE
$bg-plum                    	: #D4D0E3;
$bg-plum-lighter            	: #DFD8E3;
$bg-plum-darker             	: #BEB8D5;
// SKY
$bg-sky                     	: #B7D7F0;
$bg-sky-lighter             	: #E2EFF9;
$bg-sky-darker              	: #91C2E8;
// SAND
$bg-sand                    	: #E0D0B7;
$bg-sand-lighter            	: #F6F1E4;
$bg-sand-darker             	: #D8C4A5;
// DUST
$bg-dust                    	: #F0F0EE;
$bg-dust-lighter            	: #F8F7F5;
$bg-dust-darker             	: #B7B7AD;
// VERDANT
$bg-verdant                 	: #D9FCE3;
$bg-verdant-lighter         	: #E4FDEB;
$bg-verdant-darker          	: #A9EEBC;
// BANANA
$bg-banana                  	: #FFFBBB;
$bg-banana-lighter          	: #FFFDDD;
$bg-banana-darker           	: #FFFE95;
```

## Spaces
Spacing tokens are used for padding, margins, and position coordinates. Mids menggunakan basis 16px untuk spacing. Basis 16px membuat layout memiliki flexibilitas yang tinggi serta hirarki yang lebih jelas sehingga layout menjadi lebih proporsional.