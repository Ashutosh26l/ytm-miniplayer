// content.js

function injectMiniCSS() {
    if (document.getElementById('ytm-mini-css')) return;

    const style = document.createElement('style');
    style.id = 'ytm-mini-css';
    
    style.innerHTML = `
        @media (max-width: 600px) {
            /* 1. Pull the container out of the layout so the Title doesn't squish */
            /* Make it completely INVISIBLE to hide the Reddit arrows */
            body.ytm-mini-safe ytmusic-player-bar .middle-controls-buttons {
                display: block !important;
                position: absolute !important;
                width: 0 !important;
                height: 0 !important;
                visibility: hidden !important; /* <--- The magic trick */
            }

            /* 2. Target the REAL Like/Dislike renderer and make it VISIBLE again */
            body.ytm-mini-safe ytmusic-player-bar ytmusic-like-button-renderer {
                display: flex !important;
                visibility: visible !important; /* <--- Overrides the invisible parent! */
                position: fixed !important;
                bottom: 85px !important; 
                left: 50% !important;
                transform: translateX(-50%) scale(1.1) !important;
                background-color: #212121 !important;
                padding: 4px 16px !important;
                border-radius: 24px !important;
                border: 1px solid #444 !important;
                box-shadow: 0 4px 15px rgba(0,0,0,0.8) !important;
                z-index: 2147483647 !important;
                pointer-events: auto !important; 
            }
        }
    `;
    document.head.appendChild(style);
}

// Watch the screen to see if the Playlist/Lyrics are actually visible
function watchPlayerState() {
    if (window.innerWidth > 600) {
        document.body.classList.remove('ytm-mini-safe');
        return;
    }

    const playerPage = document.querySelector('ytmusic-player-page');
    const isExpanded = playerPage && window.getComputedStyle(playerPage).display !== 'none' && playerPage.offsetHeight > 100;

    if (isExpanded) {
        document.body.classList.remove('ytm-mini-safe');
    } else {
        document.body.classList.add('ytm-mini-safe');
    }
}

function createButtons() {
    if (document.getElementById('ytm-mini-btn')) return;

    const navBarRight = document.querySelector('ytmusic-nav-bar .right-content');
    if (!navBarRight) return;

    // --- MAIN BUTTON ---
    const mainBtn = document.createElement('button');
    mainBtn.id = "ytm-mini-btn";
    mainBtn.title = "Toggle Mini Player (Pop Out/In)";
    
    const iconImg = document.createElement('img');
    iconImg.src = browser.runtime.getURL('icons/icon-48.png');
    iconImg.style.cssText = "width: 32px; height: 32px; display: block;";
    
    mainBtn.appendChild(iconImg);

    mainBtn.style.cssText = `
        background-color: transparent;
        border: none;
        padding: 6px;
        margin-right: 4px;
        border-radius: 50%;
        cursor: pointer;
        vertical-align: middle;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
    `;

    mainBtn.onmouseover = () => mainBtn.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    mainBtn.onmouseout = () => mainBtn.style.backgroundColor = "transparent";

    mainBtn.addEventListener('click', () => {
        browser.runtime.sendMessage({ action: "toggle_mini" });
    });

    // --- SUPPORT BUTTON ---
    const supportBtn = document.createElement('a');
    supportBtn.href = "https://www.buymeacoffee.com/kakeroth"; 
    supportBtn.target = "_blank";
    supportBtn.innerText = "☕"; 
    supportBtn.title = "Support development";
    
    supportBtn.style.cssText = `
        background-color: #333333;
        color: white;
        text-decoration: none;
        border: 1px solid #555555; 
        padding: 8px 16px;
        margin-right: 12px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        vertical-align: middle;
        display: inline-block;
        transition: background-color 0.2s;
    `;
    
    supportBtn.onmouseover = () => supportBtn.style.backgroundColor = "#4f4f4f";
    supportBtn.onmouseout = () => supportBtn.style.backgroundColor = "#333333";

    navBarRight.prepend(supportBtn); 
    navBarRight.prepend(mainBtn);    
    
    injectMiniCSS();
}

// Run checks to keep everything synced
setInterval(() => {
    createButtons();
    watchPlayerState();
}, 500);