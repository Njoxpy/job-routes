# Job Routes

This project, Job Routes, is a simple React application created to learn and demonstrate the usage of React Router for managing different routes within a single-page application (SPA). The application focuses on displaying job listings and allows users to navigate between different pages using React Router.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **Route Navigation**: Utilizes React Router for managing routes and navigation within the application.
- **Job Listings**: Displays a list of job listings fetched from an API(Not yet) or stored locally.
- **Details Page**: Provides a detailed view of each job listing with additional information.
- **Responsive Design**: Ensures compatibility and usability across various devices and screen sizes.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/Njoxpy/job-routes
```

2. Navigate to the project directory:

```sh
cd job-routes
```

3. Install dependencies:

```sh
npm install
```

## Usage

1. Start The JSON Server, if You don't have json-server installed you can install using below command.

```sh
# install json-server
npm i -g json-server

# start json-server
npx json-server --watch data/careers.json --port 3000
```

2. Start the development server:

```sh
npm start
```

3. Open your web browser and navigate to <http://localhost:5173> to view the application.

4. Explore different routes and features within the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.
