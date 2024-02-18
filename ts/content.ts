let originalSerif: string, originalSansSerif: string, originalMonospace: string;

const changeFontFamily = (
  node: Node,
  serif: string,
  sansSerif: string,
  monospace: string,
  doRestore: boolean
) => {
  if (node.nodeType === 1) {
    const computedStyle = window.getComputedStyle(node as Element);
    const fontFamily = computedStyle.getPropertyValue("font-family");

    if (fontFamily) {
      if (fontFamily.includes("sans-serif")) {
        if (!doRestore || sansSerif != "Default") {
          originalSansSerif = fontFamily;
          (node as HTMLElement).style.fontFamily =
            `'${sansSerif}', ${originalSansSerif}`;
        } else {
          (node as HTMLElement).style.fontFamily = `${originalSansSerif}`;
        }
      } else if (fontFamily.includes("serif")) {
        if (!doRestore || serif != "Default") {
          originalSerif = fontFamily;
          (node as HTMLElement).style.fontFamily =
            `'${serif}', ${originalSerif}`;
        } else {
          (node as HTMLElement).style.fontFamily = `${originalSerif}`;
        }
      } else if (fontFamily.includes("monospace")) {
        if (!doRestore || monospace != "Default") {
          originalMonospace = fontFamily;
          (node as HTMLElement).style.fontFamily =
            `'${monospace}', ${originalMonospace}`;
        } else {
          (node as HTMLElement).style.fontFamily = `${originalMonospace}`;
        }
      }
    }
  }

  // Recursively process child nodes
  for (const childNode of node.childNodes) {
    changeFontFamily(childNode, serif, sansSerif, monospace, doRestore);
  }
};

let message = {
  action: "on-page-load",
  domain: window.location.hostname,
};

chrome.runtime.sendMessage(message, undefined, (response) => {
  console.log("Received response from service worker: ", response);
  if (response.type === "apply_font") {
    const serif = response.data.serif;
    const sans_serif = response.data.sans_serif;
    const monospace = response.data.monospace;
    changeFontFamily(document.body, serif, sans_serif, monospace, false);
  } else if (response.type === "redirect") {
    console.log("here url: ", response.data.redirect_url);
    window.open(response.data.redirect_url, "_blank");
  } else if (response.type === "restore") {
    console.log("Message received for restoring fonts...");
    changeFontFamily(document.body, "", "", "", true);
  }
});

chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    {
      if (message.type === "apply_font") {
        const serif = message.data.serif;
        const sans_serif = message.data.sans_serif;
        const monospace = message.data.monospace;
        changeFontFamily(document.body, serif, sans_serif, monospace, false);
      }
    }
  });
});
