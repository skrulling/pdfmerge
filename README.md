# PDF Merger

This is a simple Node.js project that merges all PDF files found in a specified directory into a single PDF file.

## Setup

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/pdf-merger.git
    cd pdf-merger
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```

## Usage

1. Place all the PDF files you want to merge into the `input` directory.

2. Run the script:
    ```bash
    node mergePDFs.js
    ```
3. The merged PDF will be created as `merged.pdf` in the project root directory.

## Notes

- The order of merging is determined by the order of the files in the `input` directory as provided by Node's `fs.readdirSync()`, which does not guarantee any particular order.
- If a file named `merged.pdf` already exists in the project root directory, it will be overwritten.

## License

[MIT](https://choosealicense.com/licenses/mit/)
