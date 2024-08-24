Responsively
Responsively is a Chrome extension designed to help developers and designers quickly test responsive web designs by resizing the browser window to various device dimensions. Whether you're testing on a phone, tablet, or desktop, or applying custom dimensions, Responsively makes it easy to see how your website adapts to different screen sizes.

Features
Preset Screen Sizes: Quickly resize the browser window to common device dimensions:
Phone: 375x667 pixels
Tablet: 768x1024 pixels
Desktop: 1280x800 pixels
Custom Dimensions: Manually enter custom width and height to test unique screen sizes.
URL Input: Enter any URL to test different pages on your website.
Seamless Integration: The extension works directly from the browser, making it simple to test and adjust your designs.
Installation
To install the Responsively Chrome extension locally:

Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/MOHIT-SOLANKII/responsively.git
Open Google Chrome and navigate to chrome://extensions/.

Enable "Developer mode" by toggling the switch in the upper right corner.

Click on "Load unpacked" and select the directory where you cloned the repository.

The extension should now appear in your list of extensions and is ready to use.

Usage
Click the Responsively icon in your Chrome toolbar to open the popup.
Enter the URL of the website you want to test.
Choose a preset screen size by clicking one of the "Phone", "Tablet", or "Desktop" buttons, or enter custom dimensions in the "Custom Dimensions" section.
Click "Apply" to resize the browser window to the selected dimensions.
Files
manifest.json: Contains the configuration and metadata for the Chrome extension.
background.js: Handles background tasks such as creating new windows with specific dimensions.
popup.html: The user interface for the extension, displayed in a popup when the extension icon is clicked.
popup.css: Styles the popup interface.
popup.js: Manages user interactions in the popup and communicates with the background script.
Development
If you want to contribute to this project or customize it further, follow these steps:

Fork the repository to your GitHub account.
Create a new branch for your feature or bug fix:
bash
Copy code
git checkout -b feature-name
Make your changes and commit them with a descriptive message:
bash
Copy code
git commit -m "Added new feature"
Push your changes to your fork:
bash
Copy code
git push origin feature-name
Submit a pull request to the main repository.
Contributing
Contributions are welcome! Please read the CONTRIBUTING.md file for guidelines on how to contribute to this project.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions, issues, or suggestions, feel free to reach out to me via email at your-email@example.com or create an issue on the GitHub repository.

