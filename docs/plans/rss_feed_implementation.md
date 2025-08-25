# RSS Feed Implementation Plan

## Analysis:
The blog is a Next.js application that statically generates pages from Markdown files. The `src/lib/posts.ts` utility already provides functions to read and parse blog post data, including the `excerpt` which is suitable for an RSS item's description. There are no existing libraries for RSS generation, so one will need to be added. Given the static nature of the blog, generating the RSS feed at build time is the most appropriate approach.

## Plan:

1.  **Install RSS generation library:** Add a suitable library like `rss` to the project dependencies.
    *   Command: `npm install rss`
2.  **Create a utility for RSS generation:**
    *   Create a new file, e.g., `src/lib/rss.ts`.
    *   This file will import `getAllPosts` from `src/lib/posts.ts`.
    *   It will use the `rss` library to construct the RSS feed XML.
    *   The feed will include:
        *   Channel details (title, link, description, language).
        *   For each blog post: title, link (absolute URL), description (from `excerpt`), publication date, and a unique identifier (`guid`).
    *   The base URL for the blog will need to be configured, likely via an environment variable (e.g., `NEXT_PUBLIC_SITE_URL`).
3.  **Integrate RSS generation into the build process:**
    *   Modify the `package.json` `build` script or create a new `just` command to run the RSS generation utility after the Next.js build.
    *   The utility will write the generated XML to `public/rss.xml`.
    *   This ensures the `rss.xml` file is available at the root of the deployed site.
4.  **Add RSS feed discovery links:**
    *   Modify `src/app/layout.tsx` (or a relevant layout component) to include a `<link>` tag in the `<head>` section, pointing to `/rss.xml`. This helps browsers and RSS readers discover the feed.
    *   Example: `<link rel="alternate" type="application/rss+xml" title="Blog RSS Feed" href="/rss.xml" />`
5.  **Verify the implementation:**
    *   Run the build process locally.
    *   Check if `public/rss.xml` is generated correctly and contains valid XML.
    *   Serve the build output (e.g., `npm run start` after `npm run build`) and verify the RSS feed is accessible at `/rss.xml`.
    *   Validate the RSS feed using an online RSS validator.
    *   **Write a Playwright test:**
        *   Create a new Playwright test file (e.g., `ui-tests/rss.spec.ts`).
        *   Navigate to the blog's homepage.
        *   Locate the footer and specifically the "Legal" section.
        *   Assert that a link with text "RSS Feed" (or similar) and `href="/rss.xml"` exists and is visible.
        *   Click the RSS link and assert that the page loads with the correct `Content-Type` (application/rss+xml or application/xml) and contains valid XML content (e.g., check for `<rss>` tag).
