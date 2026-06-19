# Git Strategy

## Branch Model

main

Production-ready code.

develop

Integration branch.

feature/*

Feature development.

hotfix/*

Emergency fixes.

---

## Examples

```text
feature/project-cards
feature/blog-engine
feature/github-integration

hotfix/navigation-bug
```

---

## Commit Standard

Conventional Commits.

Format:

```text
type(scope): description
```

Examples:

```text
feat(projects): add project showcase section

fix(navbar): resolve mobile menu issue

docs(architecture): update hld diagram

refactor(seo): simplify metadata generation

test(projects): add unit tests
```

---

## Allowed Types

```text
feat
fix
docs
style
refactor
test
chore
ci
build
```

---

## Pull Request Flow

feature branch

↓

pull request

↓

review

↓

ci validation

↓

merge

↓

deployment

---

## Merge Strategy

Use:

Squash and Merge

Reason:

* Cleaner history
* Easier rollback
* Better changelog generation

---

## Commit Rules

Every commit should:

* Build successfully
* Pass linting
* Pass tests

Never commit:

* node_modules
* secrets
* API keys
* generated artifacts
