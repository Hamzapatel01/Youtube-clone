# YouTube Clone

## Overview

This project is a YouTube clone application built with React, Vite, and Redux. It features search functionality, category filtering, and dynamic content loading using a mock API. The application provides a responsive and interactive user experience similar to the popular video-sharing platform.

## Features

- **Search Functionality**: Search for videos by keywords.
- **Category Filtering**: Filter videos by categories.
- **Video Playback**: Watch video content directly in the application.
- **Dynamic Content Loading**: Fetch and display video data from a mock API.
- **State Management**: Manage application state using Redux.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **Redux**: A predictable state container for JavaScript apps.
- **React-Redux**: Official React bindings for Redux.

## Installation

Follow these steps to get the application running on your local machine.

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/youtube-clone.git
   cd youtube-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   This will start the development server and open the application in your default browser.

## Configuration

The application uses a mock API for fetching video data. You can configure API endpoints and other settings in the `src/config.js` file.


## Usage

- **Search Videos**: Use the search bar at the top of the page to find videos by keywords.
- **Filter by Category**: Select a category from the dropdown menu to filter the displayed videos.
- **Watch Videos**: Click on a video thumbnail to play it in the video player.

## Directory Structure

- `src/` - Source code for the application
  - `components/` - React components
  - `redux/` - Redux-related code (actions, reducers, store)
  - `api/` - API utility functions
  - `styles/` - CSS styles
  - `config.js` - Configuration file

## Scripts

- `npm run dev` - Starts the development server with hot-reloading.
- `npm run build` - Builds the application for production.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Lints the source code for style and syntax issues.
- `npm test` - Runs the test suite.

## Contributing

If you’d like to contribute to this project, please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and passes all tests.


## Contact

For any questions or feedback, please reach out to [hpatel80@student.ccc.edu](mailto:hpatel80@student.ccc.edu).
