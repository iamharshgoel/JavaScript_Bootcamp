##### GIT:-

* "the stupid content tracker"
* Popular Version Control System
  - Tracks changes between files, and creates "commits" (checkpoints) that you can revert to

  - Synchronize code between multiple people
  - Create alternate "branches" that can

Commands:-

1. git init :- 

* creates a git repository in your current directory
* cretes .git/ in your working directory

2. git clone <url> :-

* copies a git repository located at <url> into a new directory in your working directory
* includes all files, history, branches
* A "fork" on GitHub will create your own copy of a repository (makes you the owner of a new copy)

3. git status :-

* shows current state of repository
* displays changed files, added files, removed files

4. git add <path>

* Tell git to include the file(s) at <path> in the next commit 
* If you modify the file(s) after git-adding them, Git will remember their state when you add them
* To cancel `git add <path>`, use `git reset <path>`

5. git reset <path> :-

* undoes a `git add`
* removes files from the index

6. git reset [--soft | --hard] <commit>

* restores state to a specified commit
* --soft flag will not affect files
* --hard files will discard all changes
  - DANGER: this is one of git's few unrecoverable commands

7. git commit [-a][-m <message>]

* create a new checkpoint in the project status along with a message
* stores the state of any added files
* use the -a flag to automatically add all tracked files (files already known to Git from previous `git add` commands)
* use the -m flag to use <message> as the commit message
* `git config --global core.editor<command>` to set editor
