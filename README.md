# Docker-101

This project is a simple web application built with Node.js, Express, and MongoDB. It serves as a hands-on project for learning and experimenting with Docker.

## About the Application

The application provides a web interface with a signup form. Users can submit their email, username, and password, and the data will be stored in a MongoDB database.

The primary goal of this project is to demonstrate how to containerize a Node.js application using Docker and manage multi-container applications with Docker Compose.

## Getting Started

To run this application, you'll need to have Node.js, npm, and Docker installed.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/products/docker-desktop/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/thepratikguptaa/docker-101.git
    cd docker-101
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the App

There are two ways to run the application:

#### 1. Using Docker Compose (Recommended)

This is the easiest way to get the application running with all its services.

1.  Make sure Docker is running on your machine.

2.  Run the following command in the project root:
    ```bash
    docker-compose up -d
    ```

This will start the Node.js application, a MongoDB database, and a Mongo Express instance for easy database management.

-   The application will be available at [http://localhost:5050](http://localhost:5050).
-   Mongo Express will be available at [http://localhost:8081](http://localhost:8081).

To stop the application and all related services, run:
```bash
docker-compose down
```

#### 2. Running Locally (for Development)

If you want to run the application without Docker, you'll need to have a local MongoDB instance running.

1.  Make sure your local MongoDB server is running.

2.  You will need to set the `MONGO_URL` environment variable. You can do this by creating a `.env` file in the root of the project with the following content:
    ```
    MONGO_URL=mongodb://admin:password@localhost:27017/docker101-db?authSource=admin
    ```
    Alternatively, you can set it in your terminal before running the app.

3.  Start the application:
    ```bash
    node server.js
    ```

The application will be available at [http://localhost:5050](http://localhost:5050).

## API Endpoints

The application has the following API endpoints:

-   `GET /`: Serves the main `index.html` page.
-   `POST /addUser`: Adds a new user to the database.
-   `GET /getUsers`: Retrieves a list of all users from the database.

## Resources

- [Docker Commands Cheat Sheet](https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/publicFiles/Docker%20CheatSheet%20ApnaCollege.pdf)