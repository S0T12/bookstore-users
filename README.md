Got it. I see that your `UserController` is using message patterns instead of traditional HTTP methods for handling requests. Let's update the README.md to reflect this:

---

# Users Microservice

This project is a microservice application built with NestJS that provides a message-based API for managing user data. It utilizes MongoDB for data storage and RabbitMQ for message queuing.

## How to Run

### Prerequisites

- Node.js and npm installed on your machine
- Docker and Docker Compose installed (optional, for running with Docker)

### Local Development

1. Clone this repository to your local machine.
2. Install dependencies using npm:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run start:dev
   ```

### Running with Docker

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to start the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

## Message Patterns

This microservice application uses message patterns for communication between clients and the server. Below are the available message patterns and their corresponding endpoints:

- **createUser**: Create a new user.
- **findAllUser**: Retrieve a list of all users.
- **findOneUser**: Retrieve a user by ID.
- **findOneByEmail**: Retrieve a user by email.
- **findOneByUsername**: Retrieve a user by username.
- **updateUser**: Update an existing user.
- **removeUser**: Delete a user.

## Algorithms and Scenarios

This application utilizes various algorithms and scenarios for user management, including:

- **Password Hashing**: User passwords are hashed using the bcrypt algorithm to securely store them in the database.
- **Validation**: Request data is validated using class-validator to ensure data integrity and consistency.
- **Message Queuing**: RabbitMQ is used for asynchronous communication between microservices, allowing for scalable and decoupled architecture.
