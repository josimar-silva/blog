## Contributing

Hey there!!! We are happy that you would like to contribute to make this project great!

On the section bellow you find all the necessary steps to start contributing.

All contributions to this project are released under the project [The MIT License](https://opensource.org/license/mit) license.

This project is released with a Contributor [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Happy coding :-).

### Writing a Guest Blog Post

We welcome guest blog posts! Here's how to contribute one:

#### 1. Create Your Blog Post File

Create a new Markdown file in the `__posts/` directory with the following naming convention:

```
__posts/YYYY-MM-DD-your-post-title.md
```

Example: `__posts/2025-01-15-introduction-to-rust.md`

#### 2. Add Frontmatter Metadata

Every blog post must start with YAML frontmatter containing the following fields:

```yaml
---
title: "Your Post Title"
excerpt: "A brief summary of your post (1-2 sentences)"
date: "YYYY-MM-DD"
category: "Programming" # or "DevOps", "Architecture", etc.
tags: ["tag1", "tag2", "tag3"] # Relevant topics
author: "Your Name"
authorPhoto: "/assets/blog/authors/your-name.png"
image: "/assets/blog/posts/your-image.svg" # Featured image for the post
featured: false # Set to true if this should appear on homepage
---
```

#### 3. Write Your Content

Write your blog post in Markdown below the frontmatter. Some guidelines:

- Use clear headings to organize your content (start with `##`)
- Include code examples with proper syntax highlighting
- Keep paragraphs concise and readable
- Use links to reference relevant resources
- Ensure spelling and grammar are correct

#### 4. Prepare Your Assets

- Add your author photo to `/public/assets/blog/authors/` if you don't have one already
- Add a featured image to `/public/assets/blog/posts/`
- Images should be optimized for web (PNG, SVG, or JPEG)

#### 5. Submit Your Contribution

Follow the [Submitting a Pull Request](#submitting-a-pull-request) section below to submit your guest blog post.

### Submitting a pull request

These are the general steps to open a pull request with your contribution to the project:

1. [Fork](https://github.com/josimar-silva/kaizen/fork) and clone the repository;

```sh
git clone https://github.com/josimar-silva/blog && cd kaizen
# OR
git clone git@github.com:josimar-silva/blog && cd kaizen
```

2. Build the project. Make sure you have [Node](https://nodejs.org) `24` or later installed;

```sh
just build
```

3. Create a new branch: `git checkout -b your-branch-name`;
4. Start committing your changes. Follow the [conventional commit specification](https://www.conventionalcommits.org/) while doing so;
4. Add your contribution and appropriate tests. Make sure all tests are green;

```sh
just test
```

5. Push to your fork and [submit a pull request](https://github.com/josimar-silva/kaizen/compare);
6. Enjoying a cup of coffee while our team review your pull request.

Here are a few things to keep in mind while preparing your pull request:

- Write tests for your changes; 
- Keep your changes focused. If there are independent changes, consider if they could be submitted as separate pull requests;
- Write good [commit messages](https://github.blog/2022-06-30-write-better-commits-build-better-projects/).

With that in mind, the chances of your pull request be accepted will be quite high.

-------
## Resources
- [How to contribute to Open Source?](https://opensource.guide/how-to-contribute/);
- [Write better commits, build better projects](https://github.blog/2022-06-30-write-better-commits-build-better-projects/);
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/meta/doc.html);
- [About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests);
