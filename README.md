# Monitoring Server Application (MSA)

The Monitoring Server Application (MSA) is part of a distributed server health monitoring system. It's a Node.js application designed to receive, forward, and store system metrics.

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js v14.0.0 or later
- npm v6.0.0 or later

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/monitoring-server-application.git
cd monitoring-server-application
```

Then, install the project dependencies:

```bash
npm install
```
## Configuration
Create a .env file in the project root to configure the application. You can use .env.example as a reference. Here are the environment variables you need to set:

***LEADER_SERVER_URL:*** The URL of the leader server to which this application should forward metrics (if not a leader itself).
***SERVER_ID:*** The unique identifier for this server.
***PORT:*** The port on which this application will run.

### Running the Application
To start the server, run:
```bash
npm start
```

The application will start running at `http://localhost:${PORT}`.

### API Endpoints

- **`POST /api/metrics`:** Endpoint for sending server metrics to the application.

### Testing
You can use a tool like Postman to test the API endpoints. Send a POST request with a JSON body to `http://localhost:${PORT}/api/metrics.`

### Built With
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Winston** - Logging library