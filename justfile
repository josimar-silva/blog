# justfile

# Install dependencies
install:
	npm install

# Start the development server
dev:
	npm run dev

# Build the project for production
build:
	npm run build

# Build the app docker image
build-image:
    docker build -t blog:dev .

# Start the production server
start:
	npm run start

# Start the dockerized application
start-container:
    docker run -p 3000:3000 blog:dev

# Run linting
lint:
	npm run lint

# Checks code for linting and formatting issues
check:
    just lint
    npx prettier . --check

# Format the source code using prettier
format:
    npx prettier . --write

# Run unit tests
test:
	npm run test

# Run UI tests
test-ui:
	npm run test-ui

