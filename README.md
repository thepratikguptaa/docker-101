# Docker-101

This project is a simple web application built with Node.js, Express, and MongoDB. It serves as a hands-on project for learning and experimenting with Docker.

## About the Application

The application provides a web interface with a signup form. Users can submit their email, username, and password, and the data will be stored in a MongoDB database.

The primary goal of this project is to demonstrate how to containerize a Node.js application using Docker.

## Getting Started

To run this application on your local machine, you'll need to have Node.js, npm, and MongoDB installed.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/docker-101.git
    cd docker-101
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the App

1.  Make sure your MongoDB server is running.

2.  Start the application:
    ```bash
    node server.js
    ```

The application will be available at [http://localhost:5050](http://localhost:5050).

## Dockerization

You can also run this application using Docker.

### Building the Docker Image

To build the Docker image, run the following command in the project's root directory:

```bash
docker build -t docker-101 .
```

### Running the Docker Container

To run the Docker container, use the following command:

```bash
docker run -p 5050:5050 docker-101
```

This will start the application, and it will be accessible at [http://localhost:5050](http://localhost:5050).

## API Endpoints

The application has the following API endpoints:

-   `GET /`: Serves the main `index.html` page.
-   `POST /addUser`: Adds a new user to the database.
-   `GET /getUsers`: Retrieves a list of all users from the database.

## Resources

- [Docker Commands Cheat Sheet](https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/publicFiles/Docker%20CheatSheet%20ApnaCollege.pdf)
