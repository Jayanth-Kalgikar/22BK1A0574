# URL Shortener App

This is a simple URL shortener web application built with React and TypeScript. The application allows users to input a URL, validate it, and receive a shortened version of the URL.

## Features

- Client-side validation for URL input
- Displays validation messages for incorrect URLs
- Shortens URLs and displays the results
- Responsive design for a better user experience

## Project Structure

```
url-shortener-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # Contains reusable components
│   │   ├── ShortenForm.tsx # Form for URL input
│   │   ├── ResultDisplay.tsx # Displays the shortened URL
│   │   └── ValidationMessage.tsx # Displays validation messages
│   ├── pages               # Contains page components
│   │   ├── HomePage.tsx    # Main landing page
│   │   └── NotFoundPage.tsx # Page for non-existent routes
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types               # TypeScript types and interfaces
│       └── index.ts
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd url-shortener-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```
This will open the application in your default web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.