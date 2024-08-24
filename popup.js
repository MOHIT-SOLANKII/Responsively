// Function to get the URL value
function getUrl() {
    return document.getElementById('customUrl').value || 'https://www.example.com';
  }
  
  document.getElementById('phone').addEventListener('click', () => {
    chrome.runtime.sendMessage({
      action: 'resize',
      width: 375,
      height: 667,
      url: getUrl() // Use the URL from the input field
    });
  });
  
  document.getElementById('tablet').addEventListener('click', () => {
    chrome.runtime.sendMessage({
      action: 'resize',
      width: 768,
      height: 1024,
      url: getUrl() // Use the URL from the input field
    });
  });
  
  document.getElementById('desktop').addEventListener('click', () => {
    chrome.runtime.sendMessage({
      action: 'resize',
      width: 1280,
      height: 800,
      url: getUrl() // Use the URL from the input field
    });
  });
  
  document.getElementById('custom').addEventListener('click', () => {
    const customWidth = parseInt(document.getElementById('customWidth').value);
    const customHeight = parseInt(document.getElementById('customHeight').value);
    const customUrl = getUrl();
  
    if (!isNaN(customWidth) && !isNaN(customHeight) && customUrl) {
      chrome.runtime.sendMessage({
        action: 'resize',
        width: customWidth,
        height: customHeight,
        url: customUrl
      });
    } else {
      alert('Please enter valid numbers for width and height, and a valid URL.');
    }
  });
  