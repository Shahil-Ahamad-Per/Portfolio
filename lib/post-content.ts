import { getPostById, type Post } from "./content-adapter"

const markdownContents: Record<number, string> = {
  1: `# Mastering Git and GitHub: A Comprehensive Guide for Developers

## What is Git?

Git is a distributed version control system (VCS) created by Linus Torvalds in 2005. It allows developers to track changes in code over time, collaborate with teams, and revert to previous versions if needed. Unlike centralized VCS like SVN, Git is distributed, meaning every developer has a full copy of the repository on their local machine. This enables offline work and faster operations.

### Key Benefits of Git:

- **Version Tracking**: Records every change with commit messages, timestamps, and authors.
- **Branching and Merging**: Easily create branches for features or bug fixes without affecting the main codebase.
- **Collaboration**: Supports multiple developers working simultaneously.
- **Speed and Efficiency**: Handles large projects with minimal performance issues.
- **Data Integrity**: Uses cryptographic hashing (SHA-1) to ensure no corruption.

## What is GitHub?

GitHub is a web-based platform built on top of Git, acquired by Microsoft in 2018. It acts as a remote repository host, enabling developers to store, share, and collaborate on Git repositories online. While Git is the tool for local version control, GitHub adds social and collaborative features like issue tracking, pull requests, and project boards.

### Key Features of GitHub:

- **Repositories (Repos)**: Central places to store code; can be public (open-source) or private.
- **Forks and Pull Requests (PRs)**: Fork a repo to create your copy, make changes, and submit a PR for review.
- **Issues and Projects**: Track bugs, features, and tasks with Kanban-style boards.
- **GitHub Actions**: Automate workflows like CI/CD (Continuous Integration/Continuous Deployment).
- **Community and Discovery**: Explore millions of open-source projects and contribute via stars, watches, and forks.

### Git vs. GitHub: The Key Differences

| Aspect | Git | GitHub |
|--------|-----|--------|
| Type | Command-line tool for VCS | Web platform for hosting Git repos |
| Scope | Local machine operations | Remote collaboration and storage |
| Installation | Download from git-scm.com | Sign up at github.com |
| Usage | Tracks changes offline | Enables sharing, PRs, and issues |
| Cost | Free | Free basic; paid for advanced features |

## Setting Up Git and GitHub

### Step 1: Install Git

- Download from [git-scm.com](https://git-scm.com/downloads) for your OS.
- Verify installation: \`git --version\`

### Step 2: Configure Git

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
\`\`\`

### Step 3: Create a GitHub Account

Sign up at [github.com](https://github.com)

### Step 4: Generate SSH Keys

\`\`\`bash
ssh-keygen -t ed25519 -C "your.email@example.com"
\`\`\`

## Essential Git Commands

- \`git init\` — Initializes a repo
- \`git clone <url>\` — Clones a repo
- \`git status\` — Checks status
- \`git add .\` — Stages changes
- \`git commit -m "Message"\` — Commits changes
- \`git push origin main\` — Pushes changes
- \`git pull origin main\` — Pulls updates

## Best Practices

- Commit often
- Use branches
- Write good PRs
- Ignore unnecessary files
- Handle conflicts carefully

## Conclusion

Git and GitHub are indispensable for modern development. Master them to boost your productivity and shine in your portfolio.

Check out my profile [here](https://github.com/Shahil-Ahamad-Per).`,
}

export function getPostWithContent(id: number): Post | undefined {
  const post = getPostById(id)
  if (!post) return undefined

  const content = markdownContents[id]
  return { ...post, content: content ?? "" }
}
