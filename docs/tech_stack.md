# Tech Stack

## Frontend Architecture

- [Vite](https://vitejs.dev/): A build tool that provides a fast development environment and optimized production builds.
- [React](https://reactjs.org/): Used for building the user interface.
- [Tailwind CSS](https://tailwindcss.com/): Used for styling the application.
- [React Router](https://reactrouter.com/en/main): Used for handling routing in the application.
- [Axios](https://axios-http.com/): Used for making HTTP requests to the backend.

## Backend Architecture

- [Node.js](https://nodejs.org/en): A JavaScript runtime used for building the backend server.
- [Express](https://expressjs.com/): Used to build the API server and handle HTTP requests.
- [Cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing (CORS).
- [Mongoose](https://mongoosejs.com/): Used for interacting with MongoDB.
- [MongoDB](https://www.mongodb.com/): A NoSQL database used for storing data.
- [Bcryptjs] (https://www.npmjs.com/package/bcryptjs): Used for hashing passwords.
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Used for generating and verifying JSON Web Tokens (JWTs).

### Development Tools

- [ESLint](https://eslint.org/): A tool for identifying and fixing problems in JavaScript code.
- [Prettier](https://prettier.io/): A code formatter that enforces a consistent style.
- [Dotenv](https://www.npmjs.com/package/dotenv): Used for loading environment variables from a .env file.
- [Nodemon](https://www.npmjs.com/package/nodemon): Used for automatically restarting the server during development.

### State Management

> The application may need to manage complex state, especially when dealing with dynamic content. If so I will be doing research on state management libraries like Redux to handle the state of the application.

- [Redux](https://redux.js.org/): A predictable state container for JavaScript apps.

## Change Order

Changes have been made to the original tech stack to reflect the current state of the project. The original tech stack has been updated to include the following changes:

- Vite has been added as the build tool for the frontend.
- Passport has been removed from the backend architecture. Bcryptjs and Jsonwebtoken are now used for authentication.
- Mongoose has been added to the backend architecture for interacting with MongoDB.
- Created a Development Tools section to list miscellaneous tools used during development.
