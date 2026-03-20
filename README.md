# YTM Mini Mode 🎵

A lightweight, distraction-free mini-player extension for YouTube Music, available for Firefox and Chrome. 

![Version](https://img.shields.io/badge/version-1.2-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📖 Overview

YouTube Music is great, but managing playback while coding or studying often means hunting through dozens of open tabs. **YTM Mini Mode** solves this by adding a native toggle button directly to the YouTube Music interface. 

With one click, your music pops out into a clean, responsive, and persistent mini-window. Click it again, and it seamlessly pops back into your main browser window.

### ✨ Features
* **Seamless Window Management:** Pop the player out into a mini-window, or pop it back into your main browser session without interrupting playback.
* **Responsive Design:** Optimized CSS ensures album art and song titles scale perfectly without getting squished.
* **Lightweight & Private:** Built with pure JavaScript and CSS (Manifest V3). No tracking, no data collection, and zero external dependencies.
* **Cross-Platform:** Supports both Mozilla Firefox and Google Chrome using a unified codebase.

---

## 🚀 Installation

### Official Stores
* **Firefox:** [Download from Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/ytm-mini-mode/)
* **Chrome:** [Download from Chrome Web Store](LINK_TO_YOUR_CHROME_EXTENSION) *(Pending Review)*

### Manual Installation (Developer Mode)
If you want to test the latest source code directly:
1. Clone this repository: `git clone https://github.com/Labreo/ytm-mini-mode.git`
2. Run the build script: `bash build.sh`
3. **For Chrome:** Go to `chrome://extensions/`, enable "Developer mode", click "Load unpacked", and select the `dist/chrome/` folder.
4. **For Firefox:** Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select the `manifest.json` inside the `dist/firefox/` folder.

---

## 🛠️ Building from Source

This project uses a Single-Source, Multiple-Build architecture to maintain compatibility across browsers without duplicating code.

**Directory Structure:**
* `/src/` - Contains the core extension logic (`background.js`, `content.js`) and assets.
* `manifest.chrome.json` & `manifest.firefox.json` - Browser-specific configurations.
* `build.sh` - Automates the packaging process.

To generate the distribution `.zip` files for publishing:
\`\`\`bash
./build.sh
\`\`\`
This will compile the clean, store-ready files into the `/dist/` directory.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Since this is an active project, please check the [Issues](https://github.com/Labreo/ytm-miniplayer/issues) page before submitting a major pull request. 

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## ☕ Support

If this extension makes your daily workflow a little smoother, consider supporting the development! 

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/kakeroth)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

**Built by Kanak Waradkar**