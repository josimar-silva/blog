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

# Start the production server
start:
	npm run start

# Run linting
lint:
	npm run lint

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
	@echo "  start   - Start the production server"
	@echo "  lint    - Run linting"
	@echo "  test    - Run unit tests"
	@echo "  test-ui - Run UI tests"
