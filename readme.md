<div align="center"><img style="height: 10rem" src="./res/logo_transparent.png"></div>
<p align="center">Effortlessly change the web's typography!</p>
<div style="display:flex; justify-content:center;gap:1rem;" align="center"><a href="https://chromewebstore.google.com/detail/fontonic/hnjlnpipbcbgllcjgbcjfgepmeomdcog"><img style="height: 4rem; cursor: pointer;" src="./res/webstore.png"></a>
<a href="https://addons.mozilla.org/en-US/firefox/addon/fontonic-customize-fonts/"><img style="height: 4rem; cursor: pointer;" src="./res/firefoxaddon.png"></a> <a href="https://www.producthunt.com/posts/fontonic?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-fontonic" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440978&theme=neutral" alt="Fontonic - Customize&#0032;fonts&#0032;of&#0032;any&#0032;website&#0032;with&#0032;any&#0032;fonts&#0032;you&#0032;like&#0033; | Product Hunt" style=" height: 4rem;"/></a>
</div>

<br>
<div  align="center">

![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/hnjlnpipbcbgllcjgbcjfgepmeomdcog?style=flat&logo=googlechrome&logoColor=%23ffffff&label=web%20store%20users&color=%231f4341) ![Mozilla Add-on Users](https://img.shields.io/amo/users/fontonic-customize-fonts?style=flat&logo=firefox&logoColor=%23ffffff&label=add-on%20users&color=%231f4341) ![Mozilla Add-on Users](https://img.shields.io/amo/users/fontonic?logo=firefox&logoColor=white&label=android%20users&color=274644)

</div>

## Setup

Run the TypeScript comiler to generate the JavaScript files required in the `manifest.json`:

```sh
tsc --watch -p tsconfig.json
```

Fontonic uses Prettier for code formatting. Thus, it is recommended to have the Prettier VS Code extension installed. Maintain the `tabWidth: 4` as configured in `.pretttierc`.

### Building for publishing

The Chrome Web Store requires you to package your extension as ZIP to submit for review. Unnecessary directories like `node_modules` and `ts` should be excluded to reduce the size footprint of the extension. The `build.py` automates this process.

```sh
python build.py <version_string>
```

This saves the ZIP file to the `build` directory (create the directory if not already there).

## Source code for the Firefox Add-On

💻 Firefox Desktop: https://github.com/amkhrjee/fontonic-firefox

📱 Firefox Android: https://github.com/amkhrjee/fontonic-firefox-android
