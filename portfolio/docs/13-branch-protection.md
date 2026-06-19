# Branch Protection

## Protected Branches

* main
* develop

---

## Main Branch Rules

Direct pushes:

❌ Not allowed

Force pushes:

❌ Not allowed

Deletion:

❌ Not allowed

---

## Required Status Checks

Before merge:

✓ Type Check

✓ ESLint

✓ Unit Tests

✓ Build Validation

✓ Security Scan

---

## Pull Request Requirements

Minimum approvals:

1

For future team projects:

2

---

## Merge Requirements

All CI jobs passing.

No unresolved conversations.

Branch up to date with target branch.

---

## Security Requirements

Secret scanning enabled.

Dependency review enabled.

Code scanning enabled.

Dependabot enabled.

---

## Release Requirements

Only reviewed code may reach production.
