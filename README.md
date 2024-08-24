# Responsively

**Responsively** is a Chrome extension that enables developers and designers to quickly test responsive web designs by resizing the browser window to predefined device dimensions. It offers the flexibility to switch between common screen sizes such as phones, tablets, and desktops, as well as the option to apply custom dimensions.

## Features

- **Preset Screen Sizes**:
  - **Phone**: 375x667 pixels
  - **Tablet**: 768x1024 pixels
  - **Desktop**: 1280x800 pixels
- **Custom Dimensions**: Input custom width and height to test specific screen sizes.
- **URL Input**: Test any URL with the selected dimensions.
- **Seamless Browser Integration**: Directly interact with the extension through a user-friendly popup interface.

## Installation

To install the Responsively Chrome extension locally:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/MOHIT-SOLANKII/responsively.git
    ```

2. **Load the Extension:**
   - Open Google Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** using the toggle in the upper-right corner.
   - Click **Load unpacked** and select the directory where you cloned the repository.

3. The extension will now be available in your Chrome toolbar, ready for use.

## Usage

1. **Open the Extension:**
   - Click the Responsively icon in your Chrome toolbar.

2. **Enter a URL:**
   - In the popup, input the URL of the website you want to test.

3. **Select a Screen Size:**
   - Click on the **Phone**, **Tablet**, or **Desktop** buttons to resize the browser window to predefined dimensions.

4. **Apply Custom Dimensions:**
   - Enter custom width and height values in the respective fields and click **Apply**.

## Project Structure

- **manifest.json**: Defines the extension's configuration and metadata.
- **background.js**: Manages background processes, including creating new windows with specified dimensions.
- **popup.html**: The extension's user interface, shown in a popup when the extension icon is clicked.
- **popup.css**: Styles the popup interface for a clean, user-friendly experience.
- **popup.js**: Handles user interactions in the popup and communicates with the background script.

## Development

Contributions are welcome! If you'd like to contribute:

1. **Fork the Repository:**
    - Fork the repository to your GitHub account.

2. **Create a New Branch:**
    ```bash
    git checkout -b feature-name
    ```

3. **Commit Your Changes:**
    ```bash
    git commit -m "Description of the feature or fix"
    ```

4. **Push to Your Fork:**
    ```bash
    git push origin feature-name
    ```

5. **Submit a Pull Request:**
    - Open a pull request to the main repository.

## Contributing

Please review the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## Contact

For any questions, issues, or suggestions, please contact me via email at `your-email@example.com` or open an issue in the [GitHub repository](https://github.com/MOHIT-SOLANKII/responsively).
