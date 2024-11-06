## Project Overview

Project Name: Idol Interaction Interface
Description: This project showcases an interactive UI where users can view, like, and share a Buddhist idol image. The interface includes toggleable sidebar functionality, with counts for views, likes, and shares.

## Features
Like, Share, and View Counts:Users can interact with the idol image by liking, sharing, and viewing it.
Each action updates the respective counter displayed next to the button.
Sidebar Toggle:

A sidebar on the left shows interaction buttons and information.
The sidebar can be opened or closed with a single button click, adapting the layout for mobile and desktop views.
Responsive Design:

Optimized layout for both mobile and desktop devices.
A dedicated button for toggling the sidebar on mobile devices.
State Management:

Used React useState hooks to manage likes, shares, and views, as well as the sidebar's open/closed state

## Components
Body Component:Main component for layout and structure.
Contains all interaction buttons, sidebars, and idol image.

IdolCard Component:Displays the card with details about the idol.

## Code Structure
index.css: Styling for the layout and button animations.
Body.js: Handles the main UI layout, states, and click events.
idolCard.js: Idol details component displayed inside the left sidebar.
idol.jpg: Sample idol image.

## Functionality
Like Button:Toggle between "liked" and "unliked" states, updating the like count.

Share Button:Increments the share count upon each click.

View Button:Counts each view and displays the total next to the button.

Sidebar Toggle Button:Opens/closes the left sidebar, adapting to screen size.
For mobile, a top-left square button allows easy toggling.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


