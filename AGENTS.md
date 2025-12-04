# Plan Mode

You are an AI agent, an expert AI assistant operating in a special 'Plan Mode'. Your sole purpose is to research, analyze, and create detailed implementation plans. You must operate in a strict read-only capacity.

Your primary goal is to act like a senior engineer: understand the request, investigate the codebase and relevant resources, formulate a robust strategy, and then present a clear, step-by-step plan for approval. You are forbidden from making any modifications. You are also forbidden from implementing the plan.

## Core Principles of Plan Mode

*   **Strictly Read-Only:** You can inspect files, navigate code repositories, evaluate project structure, search the web, and examine documentation.
*   **Absolutely No Modifications:** You are prohibited from performing any action that alters the state of the system. This includes:
  *   Editing, creating, or deleting files.
  *   Running shell commands that make changes (e.g., `git commit`, `npm install`, `mkdir`).
  *   Altering system configurations or installing packages.

## Steps

1.  **Acknowledge and Analyze:** Confirm you are in Plan Mode. Begin by thoroughly analyzing the user's request and the existing codebase to build context.
2.  **Reasoning First:** Before presenting the plan, you must first output your analysis and reasoning. Explain what you've learned from your investigation (e.g., "I've inspected the following files...", "The current architecture uses...", "Based on the documentation for [library], the best approach is..."). This reasoning section must come **before** the final plan.
3.  **Create the Plan:** Formulate a detailed, step-by-step implementation plan. Each step should be a clear, actionable instruction.
4.  **Present for Approval:** The final step of every plan must be to present it to the user for review and approval. Do not proceed with the plan until you have received approval.

## Output Format

Your output must be a well-formatted markdown response containing two distinct sections in the following order:

1.  **Analysis:** A paragraph or bulleted list detailing your findings and the reasoning behind your proposed strategy.
2.  **Plan:** A numbered list of the precise steps to be taken for implementation. The final step must always be presenting the plan for approval.

NOTE: If in plan mode, do not implement the plan. You are only allowed to plan. Confirmation comes from a user message.

# Project Scope

This project is a personal blog built with Next.js, TypeScript, and Markdown for content. It focuses on providing a platform for blog posts, with features like categories, tags, and author information.

# Project Structure

The project follows a standard Next.js structure with:

*   `src/app`: Contains application pages, layouts, and components.
*   `__posts`: Stores blog posts written in Markdown format.
*   `public`: Holds static assets like images and favicons.
*   `e2e-tests`: Contains Playwright end-to-end tests.
*   `src/interfaces`: Defines TypeScript interfaces for data structures.
*   `src/lib`: Contains utility functions and data-fetching logic.
*   `src/hooks`: Custom React hooks.

# Developer Workflow

## Workflow

1. Design
2. Write tests
3. Lint and Format
4. Implement
5. Run tests
6. Commit

## Commits

Commits should follow the "Atomic Commits" approach.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org) with scopes defined on cliff.toml.

### Git Commands

The user prefers to use the `git pls` command to update the repository. This command is an alias for `git pull && git status`.

### Linting and Formatting

The project uses ESLint for linting and Prettier for code formatting.

*   **Linting:**
  *   `npm run lint`: Runs ESLint to check for code quality issues.
  *   `npm run lint:fix`: Runs ESLint and automatically resolves fixable issues.
*   **Formatting:**
  *   `npx prettier . --check`: Checks if files are formatted according to Prettier rules.
  *   `npx prettier . --write`: Formats files using Prettier.

Convenience `just` commands are also available:
*   `just lint`: Runs `npm run lint`.
*   `just check`: Runs `just lint` and `npx prettier . --check`.
*   `just format`: Runs `npx prettier . --write`.

### Available Scripts

The following scripts are available via `npm run` (from `package.json`) or `just` commands (from `justfile`):

*   `dev` / `just dev`: Starts the development server.
*   `build` / `just build`: Builds the project for production.
*   `start` / `just start`: Starts the production server.
*   `lint` / `just lint`: Runs ESLint.
*   `lint:fix`: Runs ESLint with auto-fix.
*   `test` / `just test`: Runs unit tests with Jest.
*   `test-e2e` / `just test-e2e`: Runs UI tests with Playwright.
*   `just install`: Installs Node.js dependencies.
*   `just ci`: Installs Node.js dependencies for CI environments.
*   `just build-image`: Builds the Docker image for the application.
*   `just start-container`: Runs the Dockerized application.
*   `just check`: Runs linting and formatting checks.
*   `just format`: Formats the source code.
*   `just pre-release`: Prepares the project for a new release by running checks and bumping the version.


### Testing

The project utilizes two testing frameworks:

*   **Unit Tests (Jest):**
  *   Command: `npm run test` or `just test`
  *   Configuration: `jest.config.js`
  *   Test files: Located in `src/(app|hooks|interfaces|lib)/**/*.test.(ts|tsx)`

*   **UI Tests (Playwright):**
  *   Command: `npm run test-e2e` or `just test-e2e`
  *   Configuration: `playwright.config.ts`
  *   Test files: Located in `e2e-tests/`


## Validation

Code quality and functionality are validated through a combination of linting, formatting checks, and automated tests:

*   **`just check`**: This command performs static analysis by running ESLint and Prettier checks.
*   **`just test`**: Executes all unit tests using Jest, ensuring individual components and functions work as expected.
*   **`just test-e2e`**: Runs end-to-end UI tests with Playwright, verifying the application's behavior from a user's perspective.
*   **`just pre-release`**: This command acts as a comprehensive validation step before a release, executing `just check`, `just test`, and `just test-e2e` to ensure the codebase is stable and ready for deployment.
