# prism-magento-template

[![Latest Version on npm][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Total Downloads][ico-downloads]][link-downloads]

Prism syntax highlighting for Magento templates

## Install

Several quick start options are available:
* [Download the latest release](https://github.com/GordonLesti/prism-magento-template/releases/latest).
* Clone the repo: `git clone https://github.com/GordonLesti/prism-magento-template.git`.
* Install with [npm](https://www.npmjs.com/): `npm install prism-magento-template`.
* Install with [Bower](http://bower.io): `bower install prism-magento-template`.

Include script (unless you are packaging scripts somehow else) after loading `prism.js`:

```html
<script src="/path/to/prism-magentotemplate.min.js"></script>
```

## Usage

### Initialization

Just add the class `language-magentotemplate` to the `code` element that contains the Magento template content.

```html
<pre><code class="language-magentotemplate">{{block
    class=&#39;Magento\\Framework\\View\\Element\\Template&#39;
    area=&#39;frontend&#39;
    template=&#39;Magento_Sales::email&#x2F;shipment&#x2F;track.phtml&#39;
    shipment=$shipment
    order=$order}}</code></pre>
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email info@gordonlesti.com instead of using the issue tracker.

## Credits

- [Gordon Lesti][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/npm/v/prism-magento-template.svg?style=flat-square
[ico-license]: https://img.shields.io/github/license/GordonLesti/prism-magento-template.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/GordonLesti/prism-magento-template/master.svg?style=flat-square
[ico-downloads]: https://img.shields.io/npm/dt/prism-magento-template.svg?style=flat-square

[link-npm]: https://www.npmjs.com/package/prism-magento-template
[link-travis]: https://travis-ci.org/GordonLesti/prism-magento-template
[link-downloads]: https://www.npmjs.com/package/prism-magento-template
[link-author]: https://gordonlesti.com/
[link-contributors]: ../../contributors
