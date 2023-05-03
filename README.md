## ESAT Software

Employee Satisfaction Software measures the level of satisfaction employees have with their work and helps to receive feedback in a friendly manner.

## Table of Contents
1. Introduction
2. Requirements
3. Installation
4. Project Structure
5. React Components
6. Backend Features (Node.js)
7. REST API
8. Testing
9. Deployment
10. License

## 1. Introduction

Introduction: Employee Satisfaction Software measures the level of satisfaction employees have with their work and helps to receive feedback in a friendly manner. By using this software, companies can identify areas for improvement and work on strategies to increase employee satisfaction and retention. Furthermore, it allows employees to express their opinions and concerns safely and anonymously, fostering a more open and communicative work environment. This project has been developed using the MERN stack, with MongoDB as the database for its ease of deployment. For the backend, I used Node.js along with the Express.js framework to create the API quickly, and finally, the frontend was developed using React.js for its versatility and ability to separate the application into components. The frontend was created using the Vite bundler for its fast code compilation.

## 2. Requirements

Frontend Dependencies:

- "axios": "^1.3.4"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-router-dom": "^6.8.2"
- "styled": "^1.0.0"
- "styled-components": "^5.3.8"

Backend Dependencies:

- "cors": "^2.8.5"
- "express": "^4.18.2"
- "jsonwebtoken": "^9.0.0"
- "mongoose": "^7.0.2" 

## 3. Installation

Prerequisites
Ensure that you have the following installed on your system:

- Node.js (https://nodejs.org/)
- npm (comes bundled with Node.js)
- git (https://git-scm.com)
- mongodb (https://www.mongodb.com)

### Frontend

1. Clone the repository to your local machine:
  - `git clone https://github.com/SeroC00l/ESAT`
  
2. Navigate to the frontend directory within the project:
  - `cd your-project-name/frontend`
 
3. Install the dependencies using npm:
  - `npm install`

4. Start the development server:
  - `npm run dev`

*The frontend should now be running on http://localhost:5173 (or another available port). 
 
### Data Base

1. Esure you have mongodb installed in your machine:
  - `mongod --version`

2. Start the data base on your machine:
  - `mongod`

 *The database should now be runung on mongodb://localhost:27017
 
 *You can also install mongoDB Compass to manage your database on the visual way

### Backend

1. Navigate to the backend directory within the project:
 - `cd your-project-name/backend`

2. Install the dependencies using npm:
  - `npm install`
 
3. Start the backend server:
  - `npm run dev`

*The backend should now be runung on http://localhost:3000

## 4. Project Structure

your-project-name/
│
├── backend/
│   ├── src/
|   |   ├── controllers/
|   |   ├── database/
|   |   ├── middlewares/
|   |   ├── models/
|   |   ├── routes/
|   |   ├── mailer.js
|   |   └── index.js
|   |
|   ├── .gitignore
|   ├── package.json
|   └── package-lock.json
│
├── frontend/
|   ├── src/
|   │   ├── components/
|   │   ├── context/
|   │   ├── hooks/
|   │   ├── img/
|   │   ├── pages/
|   │   ├── App.jsx
|   │   ├── index.css
|   │   └── main.js
|   |
|   ├── .gitignore
|   ├── index.html
|   ├── package-lock.json
|   ├── package.json
|   └── vite.config.js
|
└── README.md  

### Backend

- `controllers/` - Contains the controller files responsible for handling incoming HTTP
- `database/`  - Contains the databbase conection
- `middlewares/` - Contains middleware functions that are executed before the request is passed to the controller.
- `models/` - Contains Mongoose schema definitions and models for interacting with the MongoDB database
- `routes/` - Contains Express route definitions that map URLs to controller functions.
- `mailer.js` - Contains de code to send the reset password mails
- `index.js` - The main entry point for your backend application, where the Express app is configured and started.

### Frontend

- `components/` -  Contains reusable React components used throughout the application.
- `context/`  - Contains the context files for managing global state using React Context API. This folder is used to store and share data across different components in the application without having to pass it down through props.
- `hooks/`  - Contains custom React hooks used throughout the application. These hooks encapsulate reusable logic and functionality, allowing you to easily share stateful logic between different components without repeating code.
- `img/` - Contains the images used in the home page of the aplication.
- `pages/` - Contains the main page components that represent different views in the application. 
- `App.jsx` - The main application component that defines the structure and layout of the React app.
- `index.html` -  The main HTML file that serves as the entry point for the frontend application. It contains the root element where the React application will be rendered, and it may also include references to external stylesheets, scripts, or other resources required for the app. This file is usually kept minimal, as most of the application's content and logic are implemented within React components.

## 5. React Components

### Pages
  #### Login:

    This component render the login interface and send the requests to the backend

    - States:
      - email - Stores the email entered by the user in the login form.
      - password - Stores the password entered by the user in the login form.
      - error, showErrorModal, setError, setShowErrorModal, loggedIn - These are values and functions obtained from the UserContext. They manage error messages and the user's logged-in status.  

    - Functions:
      - handleUsernameChange - Handles changes in the email input field and updates the email state.
      - handlePasswordChange - Handles changes in the password input field and updates the password state.
      - handleSubmit - Submits the login form by calling the login function from the useUser hook with the entered email and password.
      - handleCloseErrorModal - Closes the error modal and clears the error state.
      - handleKeyPress - Detects when the user presses the "Enter" key and submits the login form.

    - Effects:
      -The useEffect hook checks if the user is logged in. If so, it navigates to the "/Feelings" page.
    
   #### Feelings:
   

## 6. Backend Features (Node.js)
Description of the backend features and how they interact with the React application.

- Routes
- Controllers
- Models
- Middleware (if applicable)

## 7. REST API
Document the REST API routes and how they interact with the frontend. Include HTTP methods, parameters, request bodies, and expected responses.

## 8. Testing
Explain how the components and features of your project are tested. Include information about the testing tools used and how to run the tests.

## 9. Deployment
Provide detailed instructions on how to deploy your project in a production environment. If you use any specific service, include information on how to set it up.

## 10. License
State the license under which your project is distributed.

Don't forget to review and adapt this outline to your project's specific needs. It's also helpful to add code examples and screenshots where appropriate, to illustrate how your application works.
