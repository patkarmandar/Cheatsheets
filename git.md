# Git

### Table Of Content :
* [Initial Setup](#initial-setup)
* [Git Ignore File](#git-ignore-file)
* [Setting Repo](#setting-repo)
* [View and Inspect Changes](#view-and-inspect-changes)
* [Staging and Unstaging](#staging-and-unstaging)
* [Commit and Rebase](#commit-and-rebase)
* [Reset](#reset)
* [Push](#push)
* [Fetch Merge and Pull](#fetch-merge-and-pull)
* [Branch](#branch)
* [Remote](#remote)
* [Stash](#stash)
* [Reflog](#reflog)
* [Tags](#tags)

<br>


## Initial Setup
| Command | Info |
| --- | --- |
| `git --version` | show installed git version |
| `git --help [command]` | help for specific command |
| `git config --global user.name "username"` | set git username |
| `git config --global user.email "email"` | set git email |
| `git config --global --list` | list saved global configs |

**Note:**
- All global settings are save in file .gitconfig in home directory


## Git Ignore File
- It is special config file, any files added in it will be excluded from git repo.
- This file should be in root folder of repo.
- File name: `.gitignore`
- [Collection of useful .gitignore templates](https://github.com/github/gitignore)

**For example-**
```
# file setup.txt will be excluded
setup.txt

# all files with extension .sh will be excluded
*.sh

# folder bin will be excluded
bin/
```


## Setting Repo
| Command | Info |
| --- | --- |
| `git init` | initialize local repo |
| `git init [repo]` | create local repo |
| `git clone https://github.com/[username]/[repo]` | clone remote repo over https |
| `git clone ssh://git@github.com/[username]/[repo].git` | clone remote repo over SSH |


## View and Inspect Changes
| Command | Info |
| --- | --- |
| `git status` | show untracked files |
| `git diff` | show difference between commits and working tree (unstaged changes) |
| `git diff [source-branch] [target-branch]` | show diff between branches |
| `git diff [commit-ID] [commit-ID]` | show diff between two commits |
| `git diff HEAD` | show all stage + unstage changes |
| `git log` | show commits log |
| `git log -n` | show last n commits log |
| `git log --summary` | show commits history in detailed |
| `git log [commit-ID]` | show info of commit |
| `git log [branch] [commit-ID]` | show commit log of specified branch |
| `git log --oneline` | show each commit in single line only |
| `git log --graph --decorate` | show commit history in formatted way |
| `git log -g` | show reflog entries from most recent one to older ones |
| `git show` | show recent commited changes |
| `git show [commit-ID\|file]` | show changes for commit or file |
| `git blame [file]` | show last modified revisions & authors for file |

**Note:**
- `HEAD` is pointer which points at current working tree and working branch.


## Staging and Unstaging
| Command | Info |
| --- | --- |
| `git add [file]` | add file to stage area or index |
| `git add .` | add all changes to stage area or index |
| `git add -A` | add all changes to stage area or index |
| `git restore [file]` | discard changes in working directory |
| `git restore --staged [file]` | unstage file |
| `git rm -r [file]` | remove file or folder from working tree and index |
| `git checkout .` | delete all unstage changes or restore working tree |
| `git checkout [commit-id]` | move/switch HEAD to specified commit-id, in detached HEAD state |

**Note:**
- Working tree = unstaged = untracked
- Index = staged = tracked


## Commit and Rebase
| Command | Info |
| --- | --- |
| `git commit` | commit staged changes |
| `git commit -m "commit-message"` | commit staged changes with commit message |
| `git commit -a -m "commit-message"` | commit all changes (equals to git add + git commit) |
| `git revert [insert-commit-ID]` | revert commit by producing new commit |
| `git commit --amend` | amend/change last commit |
| `git commit --amend --no-edit` | amends commit without changing its commit message |
| `git commit --amend -m "commit message` | amend last commit with message |
| `git rebase` | merge branch without creating additiinal commit |
| `git rebase -i HEAD~n` | squash commits ie combine series of commits and condense it to few commits interactively |

**Note:**
- Never rebase on public branch, other team may face conflicts as rebase changes checksums.


## Reset
| Command | Info |
| --- | --- |
| `git reset` | reset current HEAD to specified state (reset index) |
| `git reset HEAD~n` | reset HEAD to last n-th commit |
| `git reset --soft [commit-id]` | doesnt touch index file or working tree but resets head to commit |
| `git reset --mixed [commit-id]` | resets index but not working tree ie changed files are preserved but not marked for commit (default action) |
| `git reset --hard [commit-id]` | resets index and working tree, Any changes to tracked files in working tree since commit are discarded |

**Note:**
- `checkout` vs `reset`
Git reset is specifically about updating the index, moving the HEAD. <br>
Git checkout is about updating the working tree (to the index or the specified tree). <br>
It will update the HEAD only if you checkout a branch (if not, you end up with a detached HEAD).


## Push
| Command | Info |
| --- | --- |
| `git push` | push commited changes to remote (default or remembered branch) |
| `git push [remote] [branch]` | push commited changes to remote branch |
| `git push -u origin [branch]` | push commited changes to remote branch & remember branch |
| `git push origin --delete [branch]` | delete remote branch |
| `git push -f` | force push changes, required when command refuses to update remote ref that is not ancestor of local ref (usally happen with rebase) |
| `git push --force-with-lease` | when rebased already pushed changes, force pushing will lose pushed commits history by others. Force with lease gives flexibility to override new commits on your remote branch, while protecting old commit history |

**Note:**
- Use `force-with-lease` option instead of `f`.
- Default, remote is origin & branch is main.
Ex: Push commited changes to repo
```
git push origin main
```


## Fetch Merge and Pull
| Command | Info |
| --- | --- |
| `git fetch [remote]` | download objects and refs (branches, tags) from remote (does not merge) |
| `git fetch [short-name]` | fetch from remote |
| `git fetch --all` | fetch all remotes |
| `git merge [branch]` | merge fetched histories/changes to active branch |
| `git merge [source-branch] [target-branch]` | merge fetched changes into target-branch from source-branch |
| `git pull` | fetch and merge changes from origin (git fetch+marge) |
| `git pull [remote] [branch]` | pull changes from specified remote branch |
| `git pull --rebase` | fetch latest changes from origin & rebase |


## Branch
| Command | Info |
| --- | --- |
| `git branch` | list branch (\* is current working branch) |
| `git branch -a` | list all branches (local + remote) |
| `git branch -r` | list all remote branches |
| `git branch [branch]` | create new branch |
| `git branch -d [branch]` | delete branch |
| `git branch -u [branch]` | set upstream branch |
| `git push origin --delete [branch]` | delete remote branch |
| `git switch [branch]` | switch branch |
| `git switch -c [branch] | create & switch to new branch |
| `git checkout [branch]` | switch branch |
| `git checkout -` | switch to branch last checked out |
| `git checkout -b [branch]` | create & switch to new branch |
| `git checkout -b [branch] [branch]/Origin` | clone remote branch and switch to it |
| `git branch -m [new-branch]` | rename current local branch |
| `git branch -m [old-branch] [new-branch]` | rename local branch |
| `git checkout -- [file]` | discard changes to file |

**Note:**
- It is recommended to create branches from main branch.


## Remote
| Command | Info |
| --- | --- |
| `git remote` | show active remote |
| `git remote -v` | show active remote url |
| `git remote show [remote]` | show info about remote |
| `git remote add origin [path-to-repo]` | add remote repository |
| `git remote add [short-name] [repository-path]` | add new remote repo as short-name |
| `git remote rename [old-name] [new-name]` | rename remote |
| `git remote remove [short-name]` | delete remote |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | set repo\`s origin to SSH |


## Stash 
| Command | Info |
| --- | --- |
| `git stash` | save index state WIP on stash |
| `git stash -u` | save index state with untracked changes on stash |
| `git stash save "stash-name"` | save WIP with name stash-name on stash |
| `git stash apply` | apply changes from stash to current branch |
| `git stash apply stash@{n}` | apply changes from stash n to current branch |
| `git stash list` | list saved stash entries |
| `git stash pop` | remove single most recent stash entry and apply to current working tree |
| `git stash drop` | remove single most recent stash entry |
| `git stash clear` | remove all stashed entries |
| `git stash branch [branch-name]` | create new branch from stash and switch to it, also drop corresponding stash |

**Note:**
- Stash index start from 0 as in array.
- It is similar to data structure stack with LIFO.


## Reflog
| Command | Info |
| --- | --- |
| `git reflog` | manage reflog information |
| `git branch [branch-name] [commit-id]` | restore specified commit to branch |

**Note:**
- Git reflog can be used to restore deleted/lost commits.


## Tags
| Command | Info |
| --- | --- |
| `git tag [tag/version]` | create new tag |
| `git tag -a [tag/version] -m "tag message"` | create new tag with message |
| `git tag [insert-commitID]` | give tag to commit |
| `git tag` or `git tag -l` or `git tag --list` | list all tags |



<br>

**[Goto Up](https://github.com/patkarmandar/Cheatsheets/blob/main/git.md#)**



