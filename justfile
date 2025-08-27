# justfile

# Install dependencies
install:
	npm install

# Install dependencies for CI environment
ci:
    npm ci --frozen-lockfile --legacy-peer-deps

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
    npm run lint:fix
    npx prettier . --write

# Run unit tests
test:
	npm run test

# Run UI tests
test-ui:
	rm -rf test-results # Clean test results
	just build
	npm run test-ui # Run playwright test

# Prepare for a new release
pre-release:
    #!/usr/bin/env bash
    set -e

    if [[ -n $(git status --porcelain) ]]; then
      echo "Git working directory is not clean. Please commit or stash your changes."
      exit 1
    fi

    echo "Running checks and tests..."
    just check
    just test
    just test-ui

    current_version=$(node -p "require('./package.json').version")
    echo "Current version is ${current_version}"

    if [[ $current_version != *"-SNAPSHOT"* ]]; then
      echo "Error: Current version is not a SNAPSHOT version."
      exit 1
    fi

    new_version=$(echo ${current_version} | sed 's/-SNAPSHOT//')
    echo "Bumping version to ${new_version}..."
    npm version --no-git-tag-version ${new_version}

    echo "Committing version bump..."
    git add package.json package-lock.json
    git commit -m "chore(release): prepare for release v${new_version}"

    echo "Pre-release for version ${new_version} is ready."
    echo "You can now push the changes to trigger the release workflow."

