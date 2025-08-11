export default function GitBlogContent() {
  return (
    <div
      className="prose prose-lg max-w-none mx-auto px-6 py-8 font-serif
        bg-background text-foreground
        dark:bg-background dark:text-foreground"
      style={{ scrollMarginTop: "5rem" }}
    >
      <h1
        className="text-4xl font-bold mb-4 border-b-4 border-gold-500 pb-2
          text-gold-700 dark:text-gold-400"
      >
        Mastering Git and GitHub: A Comprehensive Guide for Developers
      </h1>
     

      <h2
        id="what-is-git"
        className="text-3xl font-semibold mt-12 mb-4 text-sage-800 dark:text-sage-400"
      >
        What is Git?
      </h2>
      <p className="mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
        Git is a distributed version control system (VCS) created by Linus Torvalds
        in 2005. It allows developers to track changes in code over time, collaborate
        with teams, and revert to previous versions if needed. Unlike centralized VCS
        like SVN, Git is distributed, meaning every developer has a full copy of the
        repository on their local machine. This enables offline work and faster
        operations.
      </p>

      <h3
        id="key-benefits-of-git"
        className="text-2xl font-semibold mt-8 mb-3 text-sage-700 dark:text-sage-300"
      >
        Key Benefits of Git:
      </h3>
      <ul className="list-disc list-inside mb-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li>
          <strong>Version Tracking</strong>: Records every change with commit messages,
          timestamps, and authors.
        </li>
        <li>
          <strong>Branching and Merging</strong>: Easily create branches for features or
          bug fixes without affecting the main codebase.
        </li>
        <li>
          <strong>Collaboration</strong>: Supports multiple developers working
          simultaneously.
        </li>
        <li>
          <strong>Speed and Efficiency</strong>: Handles large projects with minimal
          performance issues.
        </li>
        <li>
          <strong>Data Integrity</strong>: Uses cryptographic hashing (SHA-1) to ensure
          no corruption.
        </li>
      </ul>

      <h2
        id="what-is-github"
        className="text-3xl font-semibold mt-12 mb-4 text-sage-800 dark:text-sage-400"
      >
        What is GitHub?
      </h2>
      <p className="mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
        GitHub is a web-based platform built on top of Git, acquired by Microsoft in
        2018. It acts as a remote repository host, enabling developers to store, share,
        and collaborate on Git repositories online. While Git is the tool for local
        version control, GitHub adds social and collaborative features like issue
        tracking, pull requests, and project boards.
      </p>

      <h3
        id="key-features-of-github"
        className="text-2xl font-semibold mt-8 mb-3 text-sage-700 dark:text-sage-300"
      >
        Key Features of GitHub:
      </h3>
      <ul className="list-disc list-inside mb-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li>
          <strong>Repositories (Repos)</strong>: Central places to store code; can be
          public (open-source) or private.
        </li>
        <li>
          <strong>Forks and Pull Requests (PRs)</strong>: Fork a repo to create your
          copy, make changes, and submit a PR for review.
        </li>
        <li>
          <strong>Issues and Projects</strong>: Track bugs, features, and tasks with
          Kanban-style boards.
        </li>
        <li>
          <strong>GitHub Actions</strong>: Automate workflows like CI/CD (Continuous
          Integration/Continuous Deployment).
        </li>
        <li>
          <strong>Community and Discovery</strong>: Explore millions of open-source
          projects and contribute via stars, watches, and forks.
        </li>
      </ul>

      <h3
        id="git-vs-github"
        className="text-2xl font-semibold mt-12 mb-4 text-gold-600 dark:text-gold-400"
      >
        Git vs. GitHub: The Key Differences
      </h3>
      <table className="table-auto w-full border-collapse border border-border mb-10 text-slate-800 dark:text-slate-100">
        <thead>
          <tr className="bg-muted dark:bg-muted">
            <th className="border border-border px-6 py-3 text-left font-semibold">
              Aspect
            </th>
            <th className="border border-border px-6 py-3 text-left font-semibold">
              Git
            </th>
            <th className="border border-border px-6 py-3 text-left font-semibold">
              GitHub
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Type", "Command-line tool for VCS", "Web platform for hosting Git repos"],
            ["Scope", "Local machine operations", "Remote collaboration and storage"],
            ["Installation", "Download from git-scm.com", "Sign up at github.com"],
            ["Usage", "Tracks changes offline", "Enables sharing, PRs, and issues"],
            ["Cost", "Free", "Free basic; paid for advanced features"],
          ].map(([aspect, gitDesc, githubDesc]) => (
            <tr
              key={aspect}
              className={`hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/20`}
            >
              <td className="border border-border px-6 py-2 font-medium">{aspect}</td>
              <td className="border border-border px-6 py-2">{gitDesc}</td>
              <td className="border border-border px-6 py-2">{githubDesc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2
        id="setting-up-git-and-github"
        className="text-3xl font-semibold mt-12 mb-4 text-sage-800 dark:text-sage-400"
      >
        Setting Up Git and GitHub
      </h2>

      <h3
        id="step-1-install-git"
        className="text-2xl font-semibold mt-8 mb-3 text-sage-700 dark:text-sage-300"
      >
        Step 1: Install Git
      </h3>
      <ul className="list-disc list-inside mb-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li>
          Download from{" "}
          <a
            href="https://git-scm.com/downloads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-500 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-600 underline"
          >
            git-scm.com
          </a>{" "}
          for your OS.
        </li>
        <li>
          Verify installation:{" "}
          <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
            git --version
          </code>
        </li>
      </ul>

      <h3
        id="step-2-configure-git"
        className="text-2xl font-semibold mt-8 mb-3 text-sage-700 dark:text-sage-300"
      >
        Step 2: Configure Git
      </h3>
      <pre className="bg-muted p-4 rounded mb-6 overflow-x-auto text-sm font-mono border border-border">
        <code>
          git config --global user.name "Your Name"
          {"\n"}
          git config --global user.email "your.email@example.com"
        </code>
      </pre>

      <h3
        id="step-3-create-github-account"
        className="text-2xl font-semibold mt-8 mb-3 text-sage-700 dark:text-sage-300"
      >
        Step 3: Create a GitHub Account
      </h3>
      <p className="mb-6 text-slate-700 dark:text-slate-300">
        Sign up at{" "}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-500 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-600 underline"
        >
          github.com
        </a>
      </p>

      <h3
        id="step-4-generate-ssh-keys"
        className="text-2xl font-semibold mt-8 mb-3 text-sage-700 dark:text-sage-300"
      >
        Step 4: Generate SSH Keys
      </h3>
      <pre className="bg-muted p-4 rounded mb-6 overflow-x-auto text-sm font-mono border border-border">
        <code>ssh-keygen -t ed25519 -C "your.email@example.com"</code>
      </pre>

      <h2
        id="essential-git-commands"
        className="text-3xl font-semibold mt-12 mb-4 text-sage-800 dark:text-sage-400"
      >
        Essential Git Commands
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li>
          <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
            git init
          </code>{" "}
          — Initializes a repo
        </li>
        <li>
          <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
            git clone &lt;url&gt;
          </code>{" "}
          — Clones a repo
        </li>
        <li>
          <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
            git status
          </code>{" "}
          — Checks status
        </li>
        <li>
          <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
            git add .
          </code>{" "}
          — Stages changes
        </li>
        <li>
          <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
            git commit -m "Message"
          </code>{" "}
          — Commits changes
        </li>
        <li>
          <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
            git push origin main
          </code>{" "}
          — Pushes changes
        </li>
        <li>
          <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
            git pull origin main
          </code>{" "}
          — Pulls updates
        </li>
      </ul>

      <h2
        id="best-practices"
        className="text-3xl font-semibold mt-12 mb-8 text-sage-800 dark:text-sage-400"
      >
        Best Practices
      </h2>
      <ul className="list-disc list-inside mb-8 space-y-2 text-slate-700 dark:text-slate-300">
        <li>Commit often</li>
        <li>Use branches</li>
        <li>Write good PRs</li>
        <li>Ignore unnecessary files</li>
        <li>Handle conflicts carefully</li>
      </ul>

      <h2
        id="conclusion"
        className="text-3xl font-semibold mb-6 text-gold-600 dark:text-gold-400"
      >
        Conclusion
      </h2>
      <p className="mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
        Git and GitHub are indispensable for modern development. Master them to boost
        your productivity and shine in your portfolio.
      </p>
      <p>
        Check out my profile{" "}
        <a
          href="https://github.com/Shahil-Ahamad-Per"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-500 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-600 underline"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
