// background.js

// 1. Safely import the polyfill for Chrome Service Workers without breaking Firefox
try {
  if (typeof importScripts === 'function') {
    importScripts('browser-polyfill.min.js');
  }
} catch (e) {
  console.error("Polyfill import skipped (Firefox environment)");
}

// 2. Your existing background logic
browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message.action === "toggle_mini") {
    
    // Safety check
    if (!sender.tab || !sender.tab.id) return;

    try {
      const currentWindow = await browser.windows.get(sender.tab.windowId);

      if (currentWindow.type === "popup") {
        console.log("Popping back to main window...");
        const normalWindows = await browser.windows.getAll({ windowTypes: ["normal"] });
        
        if (normalWindows.length > 0) {
          await browser.tabs.move(sender.tab.id, { windowId: normalWindows[0].id, index: -1 });
          await browser.tabs.update(sender.tab.id, { active: true });
          await browser.windows.update(normalWindows[0].id, { focused: true });
        } else {
          await browser.windows.create({ tabId: sender.tab.id, type: "normal" });
        }
      } 
      else {
        console.log("Popping out to Mini Mode...");
        await browser.windows.create({
          tabId: sender.tab.id,
          type: "popup",
          width: 380,   
          height: 700,  
          focused: true
        });
      }
    } catch (error) {
      console.error("Background: Failed to toggle window.", error);
    }
  }
});