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
8. Deployment
9. License

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

    - State:
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
   
    This component renders the feelings selection interface, allowing users to choose their current emotion.

    - Components:
      - Header - Displays the header at the top of the page.
      - Tittle - Contains the title "How Are You Feeling Today?".
      - FeelingsContainer - Holds the available feelings for users to choose from.
      - FeelingStyle - Contains the individual feeling emoji and its corresponding label.
      
     - Navigation:
      -Each feeling has a Link component that navigates to the corresponding feelings page (e.g., "/Feelings/Happy/") when clicked.
      This page does not have any states, functions, or effects. It simply displays the available feelings and provides navigation links to the corresponding feelings pages.
      
   #### Dashboard:
   
      This component renders the dashboard interface where users can view and manage feelings reported by employees.

      -State:
       - feelings: An array of feelings fetched from the API.
       - supervisors: An array of supervisors.
       - userName, rol, area: User context data.
       - isEditingActionTaken: A boolean indicating if the action taken is being edited.
       - selectedFeelingId: The ID of the selected feeling.
       - actionTakenText: The text of the action taken.
       - isEditingSecondAction: A boolean indicating if the second action is being edited.
       - secondAction: The text of the second action.
       - currentPage: The current page number for pagination.
       - feelingsPerPage: The number of feelings displayed per page.
       - filter: An object containing filter criteria for feelings.
       
      - Effects:
       - Fetch feelings data from the API when the component is mounted or actionTakenText changes.
       - Fetch unique supervisors when the component is mounted.
       
      - Functions:
       - handleSaveActionTaken: Handles saving action taken for a specific feeling.
       - handleSaveSecondAction: Handles saving the second action for a specific feeling.
       - handleFilterChange: Updates the filter state based on user input.
       - truncateComment: Truncates long comments for better display.
       - handleSelectFeeling: Sets the selectedFeelingId state.
       - handleTakeAction: Opens the action taken editor for the selected feeling.
       - handleSecondAction: Opens the second action editor for the selected feeling.
      
      - Components:
       - Header: Displays the header at the top of the page.
       - DashboardContainer: Holds the main content of the dashboard.
       - Table: Displays the feelings data in a table format.
       - TruncatedComment: A styled component for displaying truncated comments.
       - Pagination buttons: Allows the user to navigate between pages.
      
      This page is mainly for managing and filtering feelings reported by employees. Users can edit and save actions taken for a specific feeling and apply various filters to the feelings data. Pagination is also implemented for better data display and management.
   
#### Components

  #### Feeling:
  
     This component renders the emotion-based questions interface depending on the user's selected emotion.

     - Components:
      - Header - Displays the header at the top of the page.
      - Tittle - Contains the title with the appropriate question based on the selected emotion.
      - QuestionsContainer - Holds the content depending on the user's emotion.
      - Buttons - Contains the "Yes" and "No" buttons for emotions "Sad", "Angry", and "Worried".
      - Message - Input field for user feedback when the emotion is "Neutral".
      - FeelingStyle (Link) - Contains the navigation links styled as buttons.
      
     - States & Functions:
      - emotion - The user's selected emotion retrieved from the URL using useParams.
      - Context - Accesses the context to retrieve and manipulate data.
      - questions - An object containing specific questions for each emotion.
      - handleInputValueChange - Saves the input value to the state of inputValue.
      - handleSendClick - Saves the data to the context.
      
     - Navigation:
      - The component renders questions and navigation options based on the user's selected emotion.
      - If the emotion is "Sad", "Angry", or "Worried", the component displays "Yes" and "No" buttons that navigate to different routes based on the user's response.
      - If the emotion is "Happy" or "Neutral", the component displays a "Send" button that navigates to the corresponding route (e.g., "/Feelings/Happy/send") when clicked.
      
     This component uses React Hooks and the Context API to access and manipulate data. It also uses Link components from react-router-dom for navigation between different views based on the user's emotion and responses.

  #### Header:
  
     This component renders the header of the application, displaying a logo and conditional navigation links depending on the user's role and location.
     
     - Components:
      - HeaderContainer - A styled-component containing the header's styles and animations.
      - Logo - A styled-component for displaying the logo image.
     
     - States & Functions:
      - Context - Accesses the context to retrieve and manipulate data.
      - location - The current location of the user retrieved using the useLocation hook from react-router-dom.
      - showDashboardLink - Determines whether to display the "Dashboard" link based on the user's logged-in status, role, and location.
      - showLogoutLink - Determines whether to display the "Logout" link based on the user's logged-in status and location.
      - handleLogout - A function that sets the loggedIn state to false.
     
     - Navigation:
      - If the showDashboardLink condition is true, the component renders a "Dashboard" link that navigates to "/Dashboard" when clicked.
      - If the showLogoutLink condition is true, the component renders a "Logout" link that navigates to "/Login" when clicked and logs out the user by calling the handleLogout function.
     
     This component uses React Hooks and the Context API to access and manipulate data. It also uses Link components from react-router-dom for conditional navigation between different views based on the user's role and location. The header's styling and animation are defined using styled-components and keyframes.

  #### Message:
  
    This component renders a message input for the user to provide additional details about their feeling, based on their selected emotion, job-related status, and resignation intent.

    - Components:
     - Header - Displays the header at the top of the page.
     - Tittle - Contains a dynamic title that changes depending on the user's emotion, job-related status, and resignation intent.
     - Container - Holds the input area and the "send" button.
     - MessageStyle - A styled-component for the textarea input where the user can type their message.
     
    - States & Functions:
     - Context - Accesses the context to retrieve and manipulate data.
     - emotion - Retrieves the selected emotion from the URL using the useParams hook from react-router-dom.
     - handleInputValueChange - A function to update the inputValue state as the user types in the input area.
     - handleSendClick - A function to save the user's input data in the context when the "send" button is clicked.
     
    - Navigation:
     - The "send" button has a Link component that navigates to /Feelings/${emotion}/send when clicked.
    
    This component uses React Hooks, the Context API, and react-router-dom to access and manipulate data. The styled-components library is used to style the input area, title, and send button. The component's behavior depends on the selected emotion and user inputs.
    
 #### ProtectedRoutes:

    This component is responsible for protecting the routes of the application. It ensures that only logged-in users can access the protected routes.

    - Components:
      - Feelings - The feelings selection page.
      - Feeling - The individual feeling page based on the selected emotion.
      - Message - The message input component.
      - Send - The component that handles sending the data.
      - Resing - The component that handles resignation-related questions.
      - Dashboard - The dashboard page.

    - States & Functions:
      - Context - Accesses the context to retrieve the loggedIn status.
      - loggedIn - Retrieves the logged-in status from the context.
      - useEffect - React Hook to handle side effects when loggedIn status changes.
      - useNavigate - Hook from react-router-dom for programmatically navigating to a specific route.

    - Routes:
      - The ProtectedRoutes component wraps the Routes component from react-router-dom, providing route protection based on the loggedIn status. If the user is not logged in, they are redirected to the /Login route.

    This component uses React Hooks, the Context API, and react-router-dom to access the loggedIn status and handle route protection.

#### Resing:

    This component is rendered when the user's mood is related to their job, and asks if the user is considering resigning.

    - Components:
      - Header - Displays the header at the top of the page.
      - Tittle - Contains the title "Are you thinking on resigning?".
      - Container - Holds the "Yes" and "No" buttons.
      - Buttons - Contains the "Yes" and "No" buttons.

    - States & Functions:
      - Context - Accesses the context to retrieve and manipulate data.
      - emotion - Retrieves the selected emotion from the URL using the useParams hook from react-router-dom.
      - handleSendClick - A function to save the user's resignation intent in the context.
      - setResing - A function to update the resignation intent in the context.

    - Navigation:
      - The "Yes" and "No" buttons have Link components that navigate to `/Feelings/${emotion}/resing/message` when clicked.

    This component uses React Hooks, the Context API, and react-router-dom to access and manipulate data. The styled-components library is used to style the title and buttons. The component's behavior depends on the selected emotion and user inputs.

#### Send:

```
This component thanks the user for their feedback and sends the collected data to the backend. The component also handles restrictions for submitting data once per day.

  - Components:
    - Header - Displays the header at the top of the page.
    - Tittle - Contains the title "Thanks for your Feedback 😊".

  - States & Functions:
    - Context - Accesses the context to retrieve and manipulate data.
    - jwt - Retrieves the JSON Web Token from the context.
    - feelingData - Retrieves the user's feeling data from the context.
    - sentimentSentToday - Retrieves the "sentimentSentToday" item from local storage.
    - sendFeelingData - A custom hook to send the user's feeling data to the backend.
    - setLoggedIn - A function to update the loggedIn state in the context.

  - Behavior:
    - The component checks if the user has already submitted a response today by comparing the current date with the last sent date stored in local storage.
    - If the user has not submitted a response today, their feeling data is sent to the backend and the last sent date is updated in local storage.
    - If the user has already submitted a response today, they are alerted and redirected to the Airtech page.
    - After successfully sending the data or if the user has already submitted a response today, the user is redirected to the Airtech page after 3 seconds.

  This component uses React Hooks, the Context API, and a custom hook (useFeelings) to send the data to the backend. The styled-components library is used to style the title. The component's behavior depends on the selected emotion, user inputs, and restrictions for submitting data once per day.
  ```

## 6. Backend Features (Node.js)

The backend of the application is built using Node.js, and it is responsible for handling the data processing, storage, and retrieval. The backend interacts with the React frontend through APIs, which enable the transfer of data between the frontend and backend. The backend consists of several key components:

- Routes: These define the endpoints that the frontend interacts with to send and receive data. The routes map the incoming requests to the appropriate controllers that handle the specific functionalities.

- Controllers: These contain the logic for handling incoming requests and performing the required operations, such as processing data, interacting with the database, and returning responses to the frontend. Controllers are responsible for executing the appropriate actions based on the request and route.

- Models: These define the structure of the data and how it should be stored in the database. Models enforce data validation rules and ensure that the data is consistent and follows the defined schema. They also handle the interactions with the database, such as querying, inserting, updating, and deleting records.

- Middleware: Middleware functions are used to perform specific tasks or apply additional processing to the incoming requests before they reach the controllers. Middleware can be used for tasks such as authentication, authorization, error handling, and logging.

The backend features enable the React application to securely store and manage user data, ensuring that the frontend can access and display the data as needed. By handling the data processing and storage on the backend, the application can maintain a clean separation of concerns, with the frontend focusing on the user interface and the backend focusing on data management.

## 7. REST API

The REST API is used to communicate between the frontend and the backend of the application. This section documents the available API routes, their respective HTTP methods, expected parameters, request bodies, and responses.

### API Base URL: `/api`

### Auth Routes

**POST `/auth/login`**

- Description: Authenticate a user with their email and password.
- Request body:
  - `email` (string) - The user's email.
  - `password` (string) - The user's password.
- Response: Returns a JSON object containing the authentication status, JWT token, user information, and an HTTP status code.
  - `message` (string) - "ok" on successful login.
  - `token` (string) - The JWT token.
  - `name` (string) - The user's name.
  - `area` (string) - The user's area.
  - `rol` (string) - The user's role.
  - `supervisor` (string) - The user's supervisor.

### User Routes

**GET `/users`**

- Description: Retrieve all users.
- Response: Returns a JSON array of user objects containing user information.

### Feeling Routes

**POST `/`**

- Description: Create a new feeling record.
- Request body: JSON object containing the feeling data.
- Response: Returns the created feeling record.

**GET `/feelings`**

- Description: Retrieve all feeling records.
- Response: Returns a JSON array of feeling objects containing feeling information.

**GET `/supervisors`**

- Description: Retrieve a list of unique supervisors.
- Response: Returns a JSON array containing a list of unique supervisors.

**GET `/export`**

- Description: Export feeling data to Excel.
- Response: Returns an Excel file containing the feeling data.

**PUT `/:id`**

- Description: Update a feeling record by ID.
- URL parameter: `id` (string) - The ID of the feeling record to update.
- Request body: JSON object containing the updated feeling data.
- Response: Returns the updated feeling record.

**PATCH `/:id`**

- Description: Update the action taken field of a feeling record by ID.
- URL parameter: `id` (string) - The ID of the feeling record to update.
- Request body: JSON object containing the updated action taken data.
- Response: Returns the updated feeling record.

**PATCH `/second/:id`**

- Description: Update the second action field of a feeling record by ID.
- URL parameter: `id` (string) - The ID of the feeling record to update.
- Request body: JSON object containing the updated second action data.
- Response: Returns the updated feeling record.

**DELETE `/:id`**

- Description: Delete a feeling record by ID.
- URL parameter: `id` (string) - The ID of the feeling record to delete.
- Response: Returns a JSON object containing the deleted feeling record.

These API routes are used by the frontend to interact with the backend, allowing the application to create, read, update, and delete feeling records, as well as authenticate users and retrieve user information.

## 8. Deployment

For deploying this application, we will use a Linux server (Ubuntu Server). The frontend will be served using Nginx after running `npm run build` to generate the static files, and MongoDB will be installed and set up as a service for the database. Finally, the backend will be managed using PM2 and configured to start on boot.

Follow these steps to deploy your application:

### 1. Set up the server

First, set up an Ubuntu Server. You can use a virtual machine or a cloud service provider like AWS, Google Cloud, or DigitalOcean.

### 2. Install Node.js and MongoDB

On your Ubuntu Server, install Node.js and MongoDB by running the following commands:

```bash
# Update packages
sudo apt update

# Install Node.js
sudo apt install -y nodejs npm

# Install MongoDB
sudo apt install -y mongodb
```

### 3. Configure MongoDB

To enable and start MongoDB as a service, run the following commands:

```bash
sudo systemctl enable mongod
sudo systemctl start mongod
```

Edit the MongoDB configuration file `/etc/mongod.conf` to set up the IP address. You can use `nano` or any other text editor:

```bash
sudo nano /etc/mongod.conf
```

Find the `bindIp` option and set it to the desired IP address.

### 4. Install and configure Nginx

Install Nginx by running the following command:

```bash
sudo apt install -y nginx
```

After building your frontend with `npm run build`, copy the generated `build` folder to the Nginx default root directory:

```bash
sudo cp -r /path/to/your/frontend/build/* /var/www/html/
```

### 5. Install PM2

Install PM2 globally using npm:

```bash
sudo npm install -g pm2
```

### 6. Start the backend application with PM2

Navigate to your backend directory and start your backend application using PM2:

```bash
cd /path/to/your/backend
pm2 start app.js --name your-app-name
```

### 7. Configure PM2 to start on boot

To ensure that your backend application starts automatically when the server boots, run the following command:

```bash
pm2 startup
```

Then, follow the instructions given by the command to enable PM2 to start on boot.

Your application is now deployed and running on your Ubuntu Server.

## 9. License

This project is licensed under the MIT License, which allows for free, open-source use and distribution, as well as modifications of the software. The MIT License grants permission for any person obtaining a copy of this software and associated documentation files to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the conditions that the copyright notice and permission notice shall be included in all copies or substantial portions of the Software.

The full text of the MIT License can be found below:

```
MIT License

Copyright (c) 2023 Alejandro Urrea

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Remember to replace `[year]` with the current year and `[full name]` with your name or your organization's name.

