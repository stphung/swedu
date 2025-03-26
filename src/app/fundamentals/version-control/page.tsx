import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function VersionControlPage() {
  return (
    <ContentLayout
      title="Version Control"
      description="Learn about version control systems, Git workflow, and best practices for managing code changes."
    >
      <ContentSection title="Introduction to Version Control">
        <p>
          Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. Git is one of the most popular version control systems.
        </p>
      </ContentSection>

      <ContentSection title="Basic Git Commands">
        <h3 className="text-lg font-medium text-white mb-2">Initial Setup</h3>
        <CodeExample
          title="Git Configuration"
          code={`# Set user name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git`}
          description="Basic Git setup commands"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Basic Operations</h3>
        <CodeExample
          title="Common Git Commands"
          code={`# Check repository status
git status

# Add files to staging area
git add filename.txt
git add .  # Add all files

# Commit changes
git commit -m "Initial commit"

# View commit history
git log

# Create and switch to a new branch
git checkout -b feature-branch

# Switch between branches
git checkout main

# Merge changes
git merge feature-branch

# Push changes to remote
git push origin main

# Pull changes from remote
git pull origin main`}
          description="Common Git commands for basic operations"
        />
      </ContentSection>

      <ContentSection title="Git Workflow">
        <h3 className="text-lg font-medium text-white mb-2">Feature Branch Workflow</h3>
        <p>
          A common Git workflow for feature development.
        </p>
        <CodeExample
          title="Feature Branch Workflow"
          code={`# Start a new feature
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push feature branch
git push origin feature/new-feature

# Create pull request (on GitHub)
# After review, merge to main
git checkout main
git merge feature/new-feature
git push origin main

# Clean up
git branch -d feature/new-feature`}
          description="Example of feature branch workflow"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Git Flow Workflow</h3>
        <CodeExample
          title="Git Flow Workflow"
          code={`# Initialize git flow
git flow init

# Start a new feature
git flow feature start new-feature

# Finish a feature
git flow feature finish new-feature

# Start a release
git flow release start 1.0.0

# Finish a release
git flow release finish 1.0.0

# Start a hotfix
git flow hotfix start bug-fix

# Finish a hotfix
git flow hotfix finish bug-fix`}
          description="Example of Git Flow workflow"
        />
      </ContentSection>

      <ContentSection title="Advanced Git Concepts">
        <h3 className="text-lg font-medium text-white mb-2">Rebasing</h3>
        <p>
          Rebasing is an alternative to merging that creates a linear history.
        </p>
        <CodeExample
          title="Git Rebase"
          code={`# Rebase current branch onto main
git checkout feature-branch
git rebase main

# Interactive rebase
git rebase -i HEAD~3  # Rebase last 3 commits`}
          description="Examples of Git rebase commands"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Stashing</h3>
        <CodeExample
          title="Git Stash"
          code={`# Save changes to stash
git stash save "WIP: Working on feature"

# List stashes
git stash list

# Apply most recent stash
git stash pop

# Apply specific stash
git stash apply stash@{1}

# Drop a stash
git stash drop stash@{0}`}
          description="Examples of Git stash commands"
        />
      </ContentSection>

      <ContentSection title="Git Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Write clear and descriptive commit messages</li>
          <li>Keep commits atomic and focused</li>
          <li>Regularly pull changes from the remote repository</li>
          <li>Use branches for feature development</li>
          <li>Review changes before committing</li>
          <li>Keep the main branch stable</li>
          <li>Use .gitignore appropriately</li>
          <li>Regularly clean up old branches</li>
          <li>Back up important repositories</li>
          <li>Use Git hooks for automation</li>
        </ul>
      </ContentSection>

      <ContentSection title="Common Git Issues">
        <h3 className="text-lg font-medium text-white mb-2">Resolving Conflicts</h3>
        <CodeExample
          title="Git Conflict Resolution"
          code={`# When conflicts occur during merge
git status  # Check status
# Edit files to resolve conflicts
git add .  # Mark as resolved
git commit -m "Resolve merge conflicts"

# Abort merge if needed
git merge --abort`}
          description="Example of resolving Git conflicts"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Undoing Changes</h3>
        <CodeExample
          title="Undoing Git Changes"
          code={`# Undo last commit but keep changes
git reset HEAD~1

# Undo last commit and discard changes
git reset --hard HEAD~1

# Undo changes in working directory
git checkout -- filename.txt

# Revert a commit
git revert commit-hash`}
          description="Examples of undoing Git changes"
        />
      </ContentSection>
    </ContentLayout>
  );
} 