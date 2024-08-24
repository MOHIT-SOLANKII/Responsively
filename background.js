chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'resize') {
      chrome.windows.create({
        url: message.url, // Use the URL from the message
        width: message.width,
        height: message.height,
        type: 'popup'
      }, (newWindow) => {
        if (chrome.runtime.lastError) {
          console.error('Error creating new window:', chrome.runtime.lastError.message);
        } else {
          console.log('New window created successfully');
        }
      });
    }
  });
  