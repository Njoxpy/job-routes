# Job Routes

**Job Routes** is a React app demonstrating React Router, fetching job listings from a MEN stack backend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- React Router for smooth SPA navigation
- Job listings fetched from MEN stack backend
- Detailed job view pages
- Responsive design

## Installation

1. Clone the repo:

```sh
git clone https://github.com/Njoxpy/job-routes
```

2. **Backend setup:**

```sh
cd logic
npm install
```

3. **Setup environment variables:**

- Copy the example env file:

```sh
cp .env.example .env
```

- Open `.env` and update the variables (like MongoDB URI, PORT, etc.) with your own config.

4. Start the backend server:

```sh---

That’s the full clear setup flow with env config included. Need me to help draft `.env.example` content or anything else?

npm run dev
```

5. Open a new terminal for frontend:

```sh
cd ../client
npm install
npm run dev
```

## Usage

- Backend API should be running at the configured port (default or as set in `.env`).
- Frontend available at [http://localhost:5173](http://localhost:5173).
- Browse job listings and details powered by your backend.

## Contributing

Issues or PRs welcome! Let’s build this better together.
