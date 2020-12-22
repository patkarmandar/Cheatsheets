
# Git -

## Table Of Content :
* [Initial Setup](#initial-setup)
* [Initialize and Cloning Repo](#initialize-and-cloning-repo)
* [View or Inspect Changes](#view-or-inspect-changes)
* [Staging, Unstaging and Deleting Changes](#staging-unstaging-and-deleting-changes)
* [Commit Changes](#commit-changes)
* [Fetch Pull and Push Changes to Remote](#fetch-pull-and-push-changes-to-remote)
* [Branches](#branches)
* [Tags](#tags)
* [Merging Branches](#merging-branches)
* [Adding and Deleting Remotes](#adding-and-deleting-remotes)


<br>


## Initial Setup

| Command | Info |
| --- | --- |
| `git --version` | show installed git version |
| `git command --help` | help for specific command |
| `git config --global user.name "username"` | set git username |
| `git config --global user.email "email"` | set git email |
| `git config --global --list` | list saved global configs |

**Note :** All global settings are save in file .gitconfig in home directory



## Initialize and Cloning Repo

| Command | Info |
| --- | --- |
| `git init` | initialize local repo |
| `git init [repo]` | create local repo |
| `git clone https://github.com/[username]/[repo]` | clone remote repo over https |
| `git clone ssh://git@github.com/[username]/[repo].git` | clone remote repo over SSH |



## View or Inspect Changes

| Command | Info |
| --- | --- |
| `git status` | show working tree status |
| `git diff` | show difference between commits and working tree (unstaged changes) |
| `git diff [source-branch] [target-branch]` | show diff between branches |
| `git diff [commit-ID] [commit-ID]` | show diff between two commits |
| `git diff HEAD` | show all stage + unstage changes |
| `git log` | show commits log |
| `git log --summary` | show commits history in detailed |
| `git log [commit-ID]` | show info of commit |
| `git log --oneline --graph --decorate` | show all commit history |
| `git show` | show recent commited changes |
| `git show [commit-ID OR file]` | show changes for commit or file |
| `git blame [file]` | show last modified revisions & authors for file |



## Staging Unstaging and Deleting Changes

| Command | Info |
| --- | --- |
| `git add [file]` | add changes to stage area or index |
| `git add .` | add all changes to stage area or index |
| `git add -A` | add all changes to stage area or index |
| `git rm -r [file]` | remove file or folder from working tree and index |
| `git checkout .` | delete all unstage changes or restore working tree file |
| `git reset .` | unstage all staged changes |
| `git reset HEAD~1` | unstage most recent change |
| `git reset --hard` | revert everything to last commit |
| `git stash` | stash changes in dirty working directory |
| `git stash clear` | remove all stashed entries |



## Commit Changes

| Command | Info |
| --- | --- |
| `git commit` | commit staged changes |
| `git commit -m "commit-message"` | commit staged changes with commit message |
| `git commit -a -m "commit-message"` | commit all changes (equals to git add + git commit) |
| `git revert [insert-commit-ID]` | revert commit by producing new commit |
| `git commit --amend` | revert last commit |
| `git commit --amend -m "commit message` | revert last commit with message |



## Fetch Pull and Push Changes to Remote

| Command | Info |
| --- | --- |
| `git fetch [remote]` | download objects and refs (branches and tags) from another repo |
| `git fetch [short-name]` | fetch from remote repo |
| `git fetch --all` | fetch all remotes |
| `git pull` | update local repository to newest commit from origin |
| `git pull [remote] [branch]` | pull changes from remote repo |
| `git pull --rebase` | fetch latest changes from origin & rebase |
| `git push` | push commited changes to remote repo (default or remembered branch) |
| `git push [remote] [branch]` | push commited changes to remote repo |
| `git push -u origin [branch]` | push commited changes to remote repo & remember branch |
| `git push origin --delete [branch]` | delete remote branch |


**Note :** Default, remote is origin & branch is main


**Ex :** Push commited changes to repo
```
git push origin main
```



## Branches

| Command | Info |
| --- | --- |
| `git branch` | list branch & * is current working branch |
| `git branch -a` | list all branches (local + remote) |
| `git branch [branch]` | create new branch |
| `git branch -d [branch]` | delete branch |
| `git push origin --delete [branch]` | delete remote branch |
| `git switch [branch]` | switch to new branch |
| `git checkout [branch]` | switch to new branch |
| `git checkout -` | switch to branch last checked out |
| `git checkout -b [branch]` | create new branch & switch to it |
| `git checkout -b [branch] [branch]/Origin` | clone remote branch and switch to it |
| `git branch -m [new-branch]` | rename current local branch |
| `git branch -m [old-branch] [new-branch]` | rename local branch |
| `git checkout -- [file]` | discard changes to file |



## Tags

| Command | Info |
| --- | --- |
| `git tag [tag/version]` | create new tag |
| `git tag -a [tag/version] -m "tag message"` | create new tag with message |
| `git tag [insert-commitID]` | give tag to commit |
| `git tag` or `git tag -l` or `git tag --list` | list all tags |



## Merging Branches

| Command | Info |
| --- | --- |
| `git merge [branch]` | merge branch into active branch |
| `git merge [source-branch] [target-branch]` | merge branch into target branch from source-branch |



## Adding and Deleting Remotes

| Command | Info |
| --- | --- |
| `git remote` | show active remote |
| `git remote -v` | show active remote url |
| `git remote show [remote]` | show info about remote |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git OR https://path-to-repo` | add remote repository |
| `git remote add [source] [repository-path]` | add new remote repo as short-name |
| `git remote rename [old-name] [new-name]` | rename remote |
| `git remote remove [short-name]` | delete remote |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | set repo\`s origin branch to SSH |
