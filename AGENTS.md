# Personal Website & Blog - AGENTS.md

## Overview

This is a Next.js 16 and TypeScript application serving as a personal website and blog. The project showcases software engineering thoughts, homelab experiments, and technical content with a focus on high-quality, accessible, and performant web experiences.

**Tech Stack:**
- Next.js 16 (App Router, Static Export)
- React 19
- TypeScript 5.9 (Strict Mode)
- Tailwind CSS 4
- Radix UI components (shadcn/ui patterns)
- React Markdown + Remark/Rehype plugins
- Framer Motion for animations
- Jest 30 (unit tests) + Playwright (e2e tests)

**Project Repository:** https://github.com/josimar-silva/blog
**Live Site:** https://josimar-silva.com/

## Architecture & Design Principles

### Object Calisthenics

This project follows Object Calisthenics principles to maintain clean, maintainable code:

1. **One Level of Indentation per Method/Function**
   - Extract nested logic into well-named functions
   - Improves readability and testability

2. **No Else Keywords**
   - Use early returns and guard clauses
   - Prefer ternary operators or strategy patterns

3. **Wrap All Primitives and Strings**
   - Create types for domain concepts (e.g., `PostId`, `PublishDate`)
   - Enforce type safety beyond basic primitives

4. **First-Class Collections**
   - Classes/functions that contain a collection should contain nothing else
   - Collection operations should be encapsulated

5. **One Dot per Line**
   - Avoid method chaining that violates Law of Demeter
   - Exception: fluent interfaces (builders, query builders)

6. **No Abbreviations**
   - Use descriptive, searchable names
   - `getUserById` not `getUsrById`

7. **Keep All Entities Small**
   - Components: < 200 lines
   - Functions: < 20 lines
   - Files: < 300 lines

8. **No Classes/Modules with More Than Two Instance Variables**
   - Encourages single responsibility
   - In React: prefer composition over complex state

9. **No Getters/Setters/Properties**
   - Tell, don't ask - prefer methods that perform actions
   - Exceptions for React props and state

### Component Architecture

- **Atomic Design:** Organize components by atoms, molecules, organisms
- **Composition over Configuration:** Use component composition patterns
- **Single Responsibility:** Each component does one thing well
- **Separation of Concerns:** Separate UI, logic, and data fetching
- **Progressive Enhancement:** Core content works without JavaScript

## Development Workflow

### Test-Driven Development (TDD)

This project enforces a strict TDD workflow:

**Red-Green-Refactor Cycle:**
1. **Red:** Write a failing test that defines desired behavior
2. **Green:** Write minimal code to make the test pass
3. **Refactor:** Improve code while keeping tests green

**TDD Guidelines:**
- Write tests BEFORE implementation code
- Each feature branch must increase or maintain test coverage
- Minimum coverage thresholds:
  - Unit tests: 80% overall
  - Critical paths: 100%
  - E2E tests: All user journeys covered
- Tests are documentation - write clear test names
- Follow AAA pattern: Arrange, Act, Assert
- One assertion per test (when practical)
- Use test doubles (mocks, stubs) to isolate units

**Pre-commit Checklist:**
```bash
# 1. Ensure all tests pass
just test

# 2. Ensure E2E tests pass
just test-e2e

# 3. Check coverage hasn't decreased
# Coverage reports auto-generated in coverage/

# 4. Lint and format
just check
```

### Quality Gates

All code must pass these quality gates before merging:

#### 1. **Testing Gates**
- ✅ All unit tests passing
- ✅ All E2E tests passing
- ✅ Coverage ≥ 80% (lines, statements, branches)
- ✅ No skipped or pending tests
- ✅ Tests follow TDD principles

#### 2. **Code Quality Gates**
- ✅ ESLint: Zero errors, zero warnings
- ✅ TypeScript: Strict mode, zero errors
- ✅ Prettier: All files formatted
- ✅ Object Calisthenics principles followed
- ✅ No commented-out code
- ✅ No console.log statements (use proper logging)
- ✅ No `any` types without justification
- ✅ SonarCloud quality gate passing

#### 3. **Security Gates**
- ✅ No hard-coded secrets or credentials
- ✅ Dependencies have no critical vulnerabilities (npm audit)
- ✅ CodeQL security scanning passing
- ✅ OWASP Top 10 considerations addressed
- ✅ Content Security Policy headers configured
- ✅ OpenSSF Scorecard checks passing

#### 4. **UX/UI Gates**
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Lighthouse scores: Performance ≥ 90, Accessibility = 100
- ✅ Core Web Vitals passing (LCP, FID, CLS)
- ✅ No layout shifts during page load
- ✅ Keyboard navigation functional
- ✅ Screen reader tested
- ✅ Color contrast ratios meet WCAG standards

#### 5. **Performance Gates**
- ✅ Bundle size analysis (no unexpected increases)
- ✅ Images optimized and properly sized
- ✅ No unnecessary re-renders (React Profiler)
- ✅ Build completes without warnings
- ✅ Static export successful

#### 6. **Documentation Gates**
- ✅ Public APIs documented with JSDoc
- ✅ Complex logic has explanatory comments
- ✅ README updated if user-facing changes
- ✅ AGENTS.md updated if workflow changes
- ✅ Spell check passing

## Build and Development Commands

### Installation
```bash
npm install          # Install dependencies
npm ci               # Install for CI (frozen lockfile)
just install         # Same as npm install
just ci              # CI install with frozen lockfile
```

### Development
```bash
npm run dev          # Start dev server with Turbopack
just dev             # Same as npm run dev
```

The `predev` script automatically runs `scripts/prebuild.mjs` before starting the dev server.

### Production Build
```bash
npm run build        # Build for production (static export)
just build           # Same as npm run build
```

Output directory: `dist/blog/`
The `prebuild` script automatically runs `scripts/prebuild.mjs` before building.

### Testing
```bash
# Unit Tests (Jest)
npm run test         # Run with coverage
just test            # Same as npm run test

# End-to-End Tests (Playwright)
npm run test-e2e     # Run all browsers
just test-e2e        # Build + clean + run all browsers
just test-e2e-on chromium  # Run specific browser
```

The `pretest` script automatically runs `scripts/prebuild.mjs` before testing.

**Coverage Reports:**
- Unit: `coverage/lcov-report/index.html`
- E2E: Monocart Reporter output

### Linting and Formatting
```bash
# Linting (ESLint)
npm run lint         # Check for issues
npm run lint:fix     # Auto-fix issues
just lint            # Same as npm run lint

# Formatting (Prettier)
npx prettier . --check   # Check formatting
npx prettier . --write   # Auto-format

# Combined checks
just check           # Run lint + prettier check
just format          # Run lint:fix + prettier write
```

### Docker
```bash
just build-image         # Build Docker image (blog:dev)
just start-container     # Run container on port 3000

# Manual commands
docker build -t blog:dev .
docker run -p 3000:3000 blog:dev
```

### Release Preparation
```bash
just pre-release     # Run all checks, tests, and bump version
```

This command:
- Verifies git working directory is clean
- Runs `just check` and `just test` and `just test-e2e`
- Removes `-SNAPSHOT` suffix from version
- Updates `package.json` and `package-lock.json`
- Creates a release commit
- Prepares for release workflow trigger

## Testing Guidelines

### Test-Driven Development Process

**1. Unit Testing with Jest**

**Framework:** Jest 30 with SWC
- Test environment: jsdom
- Testing utilities: React Testing Library
- Coverage: Threshold 80% enforced
- Test files: `*.test.ts`, `*.test.tsx`
- Location: Co-located with source files or `__tests__/` directories

**Test Structure:**
```typescript
describe('ComponentName', () => {
  describe('when condition', () => {
    it('should expected behavior', () => {
      // Arrange: Set up test data and dependencies
      const props = { ... };

      // Act: Execute the behavior being tested
      render(<Component {...props} />);

      // Assert: Verify the outcome
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
```

**Testing Best Practices:**
- Test behavior, not implementation
- Use semantic queries (`getByRole`, `getByLabelText`) over `getByTestId`
- Mock external dependencies, not internal modules
- Avoid snapshot tests for rapidly changing UI
- Test accessibility (roles, labels, keyboard interactions)

**2. End-to-End Testing with Playwright**

**Framework:** Playwright
- Browsers: Chromium, Firefox, WebKit (all tested)
- Coverage: Monocart Reporter
- Test files: `*.spec.ts`
- Location: `e2e/` or `__e2e__/` directories

**E2E Testing Guidelines:**
- Test critical user journeys end-to-end
- Test cross-browser compatibility
- Verify accessibility with playwright-axe
- Test responsive behavior at different viewports
- Build project before running E2E tests
- Clean test results before each run

**User Journey Coverage:**
- Homepage load and navigation
- Blog post reading experience
- Search functionality (if applicable)
- Theme switching (light/dark mode)
- Responsive menu interactions
- Link sharing and social features

### TDD Red-Green-Refactor Example

**Example: Adding a reading time estimator**

**1. RED - Write failing test:**
```typescript
// src/lib/reading-time.test.ts
describe('estimateReadingTime', () => {
  it('should return 1 minute for 200 words', () => {
    const text = 'word '.repeat(200);
    const result = estimateReadingTime(text);
    expect(result).toBe('1 min read');
  });
});
```

**2. GREEN - Minimal implementation:**
```typescript
// src/lib/reading-time.ts
export function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
```

**3. REFACTOR - Improve while keeping tests green:**
```typescript
// Add more test cases
it('should handle empty text', () => {
  expect(estimateReadingTime('')).toBe('< 1 min read');
});

// Refactor implementation
const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (words === 0) return '< 1 min read';

  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  return `${minutes} min read`;
}
```

## Code Style Guidelines

### ESLint Configuration
- Uses `@eslint/js` and `eslint-config-next`
- Enforces `eslint-config-prettier` for compatibility
- Uses `eslint-plugin-simple-import-sort` for import ordering
- License header enforcement via `eslint-plugin-license-header`
- Targets: `src/**/*.{js,jsx,ts,tsx}`

### TypeScript Guidelines
- Strict mode enabled
- No implicit `any`
- Explicit return types for exported functions
- Use `unknown` instead of `any` when type is truly unknown
- Prefer `interface` for object shapes, `type` for unions/intersections
- Use discriminated unions for variant types

### Prettier Configuration
- Tab width: 2 spaces
- Single quotes: false (use double quotes)
- Trailing commas: ES5
- Semi-colons: true
- Print width: 80 characters
- Applies to entire project (`.`)

### Import Organization
Imports are auto-sorted via `eslint-plugin-simple-import-sort`:

```typescript
// 1. React and Next.js
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. External libraries
import clsx from 'clsx';
import { formatDate } from 'date-fns';

// 3. Internal absolute imports
import { Button } from '@/components/ui/button';
import { getPost } from '@/lib/posts';

// 4. Relative imports
import { PostCard } from './post-card';
import styles from './styles.module.css';

// 5. Type imports (with type keyword)
import type { Post } from '@/types';
```

### File Naming Conventions
- Components: `kebab-case.tsx` (e.g., `post-card.tsx`)
- Utilities: `kebab-case.ts` (e.g., `format-date.ts`)
- Types: `kebab-case.ts` or `types.ts`
- Tests: `component-name.test.tsx`
- E2E: `feature-name.spec.ts`

### Component Patterns
```typescript
// Prefer named exports for components
export function PostCard({ title, date }: PostCardProps) {
  // Early returns for conditional rendering
  if (!title) {
    return null;
  }

  // Extract complex JSX into sub-components
  return (
    <article>
      <PostHeader title={title} date={date} />
      <PostContent />
    </article>
  );
}

// Define prop types inline with interface
interface PostCardProps {
  title: string;
  date: Date;
}
```

### Object Calisthenics Checklist
When writing code, verify:
- [ ] No function has more than one level of indentation
- [ ] No `else` keywords (use early returns)
- [ ] Primitives are wrapped in domain types where meaningful
- [ ] Collections are encapsulated
- [ ] No excessive method chaining
- [ ] No abbreviations in variable/function names
- [ ] Components < 200 lines, functions < 20 lines
- [ ] Components have focused, minimal state
- [ ] Behavior is exposed through methods, not getters

## UX/UI Standards

### Design System
- **Component Library:** Radix UI primitives with shadcn/ui patterns
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Typography:** Geist font family
- **Color System:** CSS variables for theming (light/dark)
- **Spacing:** Tailwind spacing scale (4px base unit)
- **Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Accessibility (A11y) Requirements

**WCAG 2.1 AA Compliance:**
- [ ] All interactive elements keyboard accessible (Tab, Enter, Space, Arrows)
- [ ] Focus indicators visible and clear
- [ ] Color contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- [ ] All images have descriptive alt text
- [ ] Form inputs have associated labels
- [ ] Semantic HTML5 elements (`nav`, `main`, `article`, `aside`)
- [ ] ARIA labels used appropriately (not overused)
- [ ] Skip navigation links present
- [ ] Heading hierarchy logical (h1 → h2 → h3)
- [ ] Links have descriptive text (no "click here")
- [ ] Tables have proper headers
- [ ] Videos/audio have captions/transcripts

**Screen Reader Testing:**
- Test with at least one screen reader (NVDA, JAWS, VoiceOver)
- Verify reading order matches visual order
- Ensure dynamic content changes announced
- Test form validation error announcements

**Testing Tools:**
- axe DevTools browser extension
- Lighthouse accessibility audit
- Playwright with playwright-axe
- Manual keyboard navigation testing

### Responsive Design
- **Mobile-First:** Design for mobile, enhance for larger screens
- **Fluid Typography:** Use clamp() for responsive font sizes
- **Flexible Layouts:** CSS Grid and Flexbox
- **Touch Targets:** Minimum 44x44px for interactive elements
- **Viewport Meta:** `<meta name="viewport" content="width=device-width, initial-scale=1">`
- **Breakpoint Testing:** Test at 320px, 375px, 768px, 1024px, 1440px

### Performance Requirements

**Core Web Vitals:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

**Additional Metrics:**
- **FCP (First Contentful Paint):** < 1.8s
- **TTI (Time to Interactive):** < 3.8s
- **TBT (Total Blocking Time):** < 200ms

**Optimization Techniques:**
- Image optimization: WebP format, appropriate sizes
- Code splitting: Dynamic imports for heavy components
- Lazy loading: Images and components below fold
- Prefetching: Next.js Link component
- Font optimization: Font subsetting, font-display: swap
- Critical CSS: Inline critical styles

### UX Principles
1. **Clarity:** Clear information hierarchy and visual design
2. **Consistency:** Consistent patterns, terminology, and interactions
3. **Feedback:** Immediate feedback for user actions
4. **Efficiency:** Minimize steps to accomplish goals
5. **Error Prevention:** Validate input, provide helpful error messages
6. **Accessibility:** Usable by everyone, regardless of ability
7. **Progressive Enhancement:** Core functionality without JavaScript
8. **Performance:** Fast load times and responsive interactions

### Component Checklist
Before marking a component complete:
- [ ] Responsive across breakpoints
- [ ] Keyboard accessible
- [ ] Focus management correct
- [ ] Screen reader tested
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Empty states designed
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Color contrast verified
- [ ] Touch targets adequate size

## Security Considerations

### OWASP Top 10 Protections

1. **Injection Prevention**
   - Use parameterized queries (if database used)
   - Sanitize user input with libraries (DOMPurify for HTML)
   - Validate and escape data in React components

2. **Broken Authentication**
   - No authentication in static site (N/A)
   - If added: Use NextAuth.js or similar
   - Secure session management

3. **Sensitive Data Exposure**
   - No secrets in client-side code
   - Use environment variables for API keys
   - HTTPS enforced in production
   - Security headers configured

4. **XML External Entities (XXE)**
   - No XML parsing in client code
   - If added: Disable external entity processing

5. **Broken Access Control**
   - Static site: All content public
   - If auth added: Implement proper authorization

6. **Security Misconfiguration**
   - Security headers in middleware
   - No verbose error messages in production
   - Dependency updates via Renovate bot

7. **Cross-Site Scripting (XSS)**
   - React escapes by default
   - Use `dangerouslySetInnerHTML` only with sanitized content
   - Content Security Policy headers
   - Validate all props that render user content

8. **Insecure Deserialization**
   - Validate JSON schema before parsing
   - No eval() or Function() constructor

9. **Using Components with Known Vulnerabilities**
   - Run `npm audit` regularly
   - Automated updates with Renovate
   - Monitor GitHub Security Advisories
   - CI fails on critical vulnerabilities

10. **Insufficient Logging & Monitoring**
    - Error boundary logging
    - Analytics for user behavior
    - Uptime monitoring (Gatus)

### Security Headers
Configure in middleware or hosting provider:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Dependency Management
- Use `npm audit` to check vulnerabilities
- Renovate bot for automated dependency updates
- Review changelogs before updating major versions
- Lock file committed to ensure reproducible builds

### Code Security
- No `eval()` or `new Function()`
- No `dangerouslySetInnerHTML` without sanitization
- Validate all external data sources
- Use TypeScript to catch type-related bugs
- CodeQL scanning in CI

## Commit and PR Guidelines

### Conventional Commits

Follow the Conventional Commits specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature/bug change)
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, tooling, dependencies
- `ci`: CI/CD changes
- `revert`: Revert previous commit

**Scopes:**
- `ui`: UI components
- `blog`: Blog functionality
- `a11y`: Accessibility
- `perf`: Performance
- `deps`: Dependencies
- `dx`: Developer experience

**Examples:**
```
feat(blog): add reading time estimation to posts
fix(ui): correct focus trap in modal dialog
docs: update AGENTS.md with TDD guidelines
test(blog): add E2E tests for post navigation
chore(deps): update Next.js to v16.0.3
```

### Pull Request Guidelines

**PR Title:** Use conventional commit format
**PR Description:**
```markdown
## Summary
Brief description of changes

## Motivation
Why is this change needed?

## Changes
- Bullet list of changes
- Include breaking changes

## Testing
- [ ] Unit tests added/updated
- [ ] E2E tests added/updated
- [ ] Manual testing performed

## Quality Gates
- [ ] All tests passing
- [ ] Coverage maintained/increased
- [ ] Lint and format checks passing
- [ ] Accessibility verified
- [ ] Performance impact assessed
- [ ] Screenshots for UI changes

## Related Issues
Closes #123
```

**Review Process:**
1. Self-review checklist completed
2. All CI checks passing
3. Code review by at least one maintainer
4. No merge conflicts
5. Squash and merge (keep history clean)

## CI/CD Pipeline

### Continuous Integration

**GitHub Actions Workflows:**

1. **CI (`ci.yaml`):**
   - Triggered on: Push to any branch, PRs
   - Jobs:
     - Dependency installation
     - Linting (ESLint)
     - Formatting (Prettier)
     - Type checking (TypeScript)
     - Unit tests (Jest) with coverage
     - E2E tests (Playwright) all browsers
     - Build verification
   - Artifacts: Test coverage reports

2. **CodeQL (`codeql.yaml`):**
   - Triggered on: Push to main, PRs, schedule
   - Security scanning for vulnerabilities
   - Must pass for PR merge

3. **Spell Check (`spellcheck.yaml`):**
   - Triggered on: Push, PRs
   - Checks documentation and code comments
   - Custom dictionary: `.github/wordlist.txt`

4. **Docker (`docker.yaml`):**
   - Triggered on: Push to main, tags
   - Builds Docker image
   - Pushes to registry (if applicable)

5. **CD (`cd.yaml`):**
   - Triggered on: Push to main, tags
   - Deploys to production environment
   - Static site deployment

### Pipeline Quality Gates

**Required Checks for PR Merge:**
- ✅ CI workflow passing
- ✅ CodeQL security scan passing
- ✅ Spell check passing
- ✅ SonarCloud quality gate passing
- ✅ Test coverage ≥ 80%
- ✅ Docker build successful
- ✅ No merge conflicts
- ✅ At least one approval

### SonarCloud Integration
- **Quality Gate:** Configured in SonarCloud
- **Metrics Tracked:**
  - Code coverage
  - Code smells
  - Bugs
  - Vulnerabilities
  - Security hotspots
  - Duplications
  - Technical debt
- **Token:** Configured in GitHub Secrets

### Monitoring & Observability
- **Uptime:** Gatus monitoring (https://status.from-gondor.com)
- **Health Check:** `/api/health` endpoint
- **Metrics:** Response time, uptime percentage
- **OpenSSF Scorecard:** Security best practices score

## Project Structure

```
blog/
├── .github/                # GitHub configuration
│   ├── workflows/         # CI/CD pipelines
│   └── wordlist.txt       # Spell check dictionary
├── __posts/               # Blog post content (Markdown)
│   └── *.md              # Post files with frontmatter
├── docs/                  # Documentation
│   └── images/           # Documentation images
├── public/                # Static assets
│   ├── images/           # Public images
│   └── *.svg, *.png      # Icons, logos
├── scripts/              # Build and utility scripts
│   └── prebuild.mjs      # Pre-build preparation script
├── src/                   # Source code
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── blog/         # Blog routes
│   ├── components/       # React components
│   │   ├── ui/           # Base UI components (shadcn/ui)
│   │   └── *.tsx         # Feature components
│   ├── lib/              # Utility functions and libraries
│   │   ├── utils.ts      # General utilities
│   │   └── *.ts          # Domain-specific utilities
│   ├── styles/           # Global styles
│   │   └── globals.css   # Tailwind directives and custom CSS
│   └── types/            # TypeScript type definitions
├── test-results/         # Playwright test results (gitignored)
├── coverage/             # Jest coverage reports (gitignored)
├── dist/                 # Build output (gitignored)
│   └── blog/             # Static export output
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── jest.config.js        # Jest configuration
├── playwright.config.ts  # Playwright configuration
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── justfile              # Just command runner recipes
├── Dockerfile            # Docker containerization
├── package.json          # Dependencies and scripts
├── AGENTS.md             # This file
└── README.md             # Project overview for humans
```

## Key Dependencies

### UI and Styling
- **Radix UI:** Unstyled, accessible component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown, etc.
- **Tailwind CSS 4:** Utility-first CSS framework
- **class-variance-authority:** Component variant management
- **clsx + tailwind-merge:** Conditional class composition
- **Framer Motion:** Animation library
- **Lucide React:** Icon library

### Content Processing
- **gray-matter:** Parse frontmatter from Markdown
- **react-markdown:** Render Markdown as React components
- **remark-gfm:** GitHub Flavored Markdown
- **remark-frontmatter:** Frontmatter parsing
- **remark-math:** Math notation support
- **rehype-raw:** Allow raw HTML in Markdown
- **react-syntax-highlighter:** Code syntax highlighting

### Forms and Interaction
- **react-hook-form:** Form state management
- **react-day-picker:** Date picker component
- **input-otp:** OTP input component
- **cmdk:** Command palette component
- **embla-carousel-react:** Carousel component

### Theming and Utilities
- **next-themes:** Dark mode support
- **sonner:** Toast notifications
- **vaul:** Drawer component
- **react-resizable-panels:** Resizable panel layouts
- **recharts:** Chart components
- **reading-time-estimator:** Reading time calculation
- **react-share:** Social sharing buttons

### Development
- **TypeScript 5.9:** Type safety
- **ESLint 9:** Linting
- **Prettier 3:** Code formatting
- **Jest 30 + SWC:** Fast unit testing
- **Playwright:** E2E testing
- **@testing-library/react:** React testing utilities

## Environment Variables

**Build-time Variables:**
- No runtime environment variables (static export)
- Version configured in `package.json` and `next.config.mjs`

**Development:**
- Next.js dev server runs on port 3000 by default
- Use `PORT` environment variable to override

**Production:**
- Deployed as static files
- No server-side runtime

## Notes for AI Agents

### Critical Principles
1. **Test-First Development:** ALWAYS write tests before implementation
2. **Quality Gates:** Never skip quality checks - they're non-negotiable
3. **Accessibility:** Never sacrifice accessibility for aesthetics
4. **Type Safety:** Avoid `any` - embrace TypeScript's strictness
5. **Performance:** Static export means everything loads at once - optimize aggressively

### Common Workflows

**Adding a New Component:**
1. Write test file: `src/components/my-component.test.tsx`
2. Write failing tests (RED)
3. Create component: `src/components/my-component.tsx`
4. Implement to pass tests (GREEN)
5. Refactor and optimize (REFACTOR)
6. Run `just check` and `just test`
7. Verify accessibility with axe DevTools
8. Check responsive design at breakpoints

**Adding a New Blog Post:**
1. Create `__posts/my-post.md` with frontmatter
2. Write content in Markdown
3. Run `npm run dev` (prebuild processes posts)
4. Test in browser
5. Verify reading time, metadata, and formatting

**Fixing a Bug:**
1. Write a failing test that reproduces the bug
2. Fix the bug
3. Verify test passes
4. Run full test suite
5. Check for regressions

### Pre-build Script
- `scripts/prebuild.mjs` runs automatically before dev, build, and test
- Processes blog posts, generates metadata, or other prep tasks
- Understand its behavior before modifying workflows

### Next.js Configuration
- **Static Export:** `output: "export"` in `next.config.mjs`
- No server-side runtime features (API routes, SSR, ISR)
- All pages pre-rendered at build time
- Images unoptimized (no Image Optimization API)
- Output directory: `dist/blog/`

### Build Errors
- TypeScript and ESLint errors ignored during build (`ignoreBuildErrors: true`)
- This is intentional for flexibility but NOT an excuse for poor quality
- Fix all errors reported by `just check` before committing

### Component Patterns
- Follow shadcn/ui patterns for component organization
- Use Radix UI primitives for complex interactions
- Leverage composition over configuration
- Extract logic into custom hooks
- Use `cn()` utility for class merging

### Testing Patterns
- Co-locate tests with components
- Use semantic queries from Testing Library
- Test user behavior, not implementation details
- Mock external dependencies, not React internals
- Verify accessibility in tests (roles, labels, keyboard)

### Performance Optimization
- Use dynamic imports for heavy components
- Optimize images (WebP, proper sizes)
- Minimize bundle size (analyze with `next build`)
- Avoid large dependencies for small features
- Lazy load below-the-fold content

### Accessibility Reminders
- Every interactive element must be keyboard accessible
- Focus indicators must be visible
- Color never the only means of conveying information
- All images need alt text (decorative images: `alt=""`)
- Form inputs need labels (visual or aria-label)
- Test with screen reader before marking complete

### Version Management
- Version in `package.json` follows semantic versioning
- `-SNAPSHOT` suffix for development versions
- `just pre-release` removes snapshot and creates release commit
- Version bumps trigger release workflow

### Docker
- Dockerfile at project root
- Build creates `blog:dev` image
- Container exposes port 3000
- Suitable for local testing and deployment

### Git Workflow
- Branch from `main`
- Branch naming: `feature/description`, `fix/description`, `chore/description`
- Commit with conventional commit messages
- PR to `main` requires passing all checks
- Squash and merge to keep history clean

### Code Review Focus
- Object Calisthenics adherence
- Test coverage and quality
- Accessibility compliance
- Performance impact
- TypeScript strictness
- Security considerations
- UX/UI consistency with design system

### Continuous Improvement
- This file is living documentation - update it
- When you find a gap in the docs, fill it
- When you create a new pattern, document it
- When quality improves, raise the bar

---

**License:**
- Source Code: MIT License
- Content (blog posts): CC BY-NC 4.0

**Maintained by:** Josimar Silva
**Last Updated:** 2025-11-14
