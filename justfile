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

build-image:
    docker build -t blog:dev .

# Start the production server
start:
	npm run start

start-container:
    docker run -p 3000:3000 blog:dev

# Run linting
lint:
	npm run lint

check:
    just lint
    npx prettier . --check

format:
    npx prettier . --write

# Run unit tests
test:
	npm run test

# Run UI tests
test-ui:
	npm run test-ui

# Default recipe: list available commands
default:
	@echo "Available commands:"
	@echo "  install - Install dependencies"
	@echo "  dev     - Start the development server"
	@echo "  build   - Build the project for production"
	@echo "  build-image - Build the docker image"
	@echo "  start   - Start the production server"
	@echo "  start-container - Start the docker container"
	@echo "  lint    - Run linting"
	@echo "  test    - Run unit tests"
	@echo "  test-ui - Run UI tests"
