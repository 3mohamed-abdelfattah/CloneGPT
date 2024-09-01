# ChatGPT UI Clone

## Overview

This repository contains a clone of the user interface for ChatGPT, built using React, Vite, and Tailwind CSS. The project replicates the look and feel of the ChatGPT interface, providing a similar experience for users. It features a chat window, message input, and response display, all styled and structured to mimic the original ChatGPT UI.

## Features

- **Chat Window:** Main area for viewing and interacting with chat history.
- **Message Input:** Text input field for sending messages.
- **Response Display:** Area for displaying simulated responses from the ChatGPT AI.
- **Responsive Design:** UI designed to be responsive across various screen sizes.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Build tool for fast development and optimized production builds.
- **Tailwind CSS:** Utility-first CSS framework for styling.

 ## Screenshots

 <table align="center">
  <tr>
    <td><img src="https://github.com/user-attachments/assets/3fbe3457-e37d-443f-8dd7-d65e908479a0" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="https://github.com/user-attachments/assets/c6bd4c8d-9d77-48be-af27-7ee11c4461e8" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/cb7b274d-4756-4b21-bdbb-97f42ef51e2f" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
    <td><img src="https://github.com/user-attachments/assets/ec5277b3-de3e-400a-879f-818ac93d7d3f" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
  <tr>
    <td colspan="2"><img src="https://github.com/user-attachments/assets/13fdfbd2-4bd2-4b4b-9525-21e2364f63a4" alt="Image"  style="border: 5px solid #92E3A9;"/></td>
  </tr>
</table>

# Project Structure Description

- **src/**: The main source directory.
  - **assets/**: Contains static assets like fonts and images.
    - **fonts/**: Directory for custom font files (`.ttf`).
    - **images/**: Contains images used in the project, such as `logo.png`.
  - **pages/**: Houses the different pages of your application, each in its own folder.
    - **Login/**: Includes files related to the Login page (`Login.jsx`, `index.js`).
    - **MainScreen/**: Contains files for the Main Screen page (`MainScreen.jsx`, `index.js`).
    - **SignUp/**: Holds the Sign-Up page files (`SignUp.jsx`, `index.js`).
    - **StartScreen/**: Files related to the Start Screen (`StartScreen.jsx`, `index.js`).
    - **Welcome/**: Contains the Welcome page files (`Welcome.jsx`, `index.js`).
  - **router/**: Contains the routing logic (`index.js`) for navigating between different pages.
  - **styles/**: Houses the CSS files for styling.
    - **_fonts.css**: font-face declarations for custom fonts.
    - **global.css**: Global styles that apply to the entire application.
  - **utils/**: Contains utility files, which are helper functions and reusable code components.
    - **functions.util.jsx**: Utility functions used across the application.
    - **icons.util.jsx**: components related to icons.
  - **App.jsx**: The root component of React application.
  - **main.jsx**: The entry point of application where the React app is rendered.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/3mohamed-abdelfattah/ChatGPT.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd ChatGPT
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```


4. **Run the Application:**

   ```bash
   npm run dev
   ```

   CTRL+O to open in your browser
