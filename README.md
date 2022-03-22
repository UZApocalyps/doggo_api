# doggo_api

Doggo_api is a [NodeJS](https://nodejs.org/en/) API that manages the What The Dog application.

## Installation

### Clone the repository

```bash
git clone https://github.com/gabrielrossier/doggo_api.git
```

### Setup environment variables

- Copy the `.env.example` file and paste it in the root directory and name it `.env`.

- Replace the default variables with yours.

### Populate the database

- Go to `./scripts/CynoClientDB/` and run the `cyno.sql` file in an SQL client to create the database and its tables.

- Add some data using the remaining files. (optional)

## Run the API

```bash
npm start
```

The API can now be accessed using `http://localhost:3000` on your browser.
