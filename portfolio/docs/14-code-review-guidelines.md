# Code Review Guidelines

## Objective

Improve:

* Quality
* Reliability
* Maintainability
* Knowledge sharing

---

## Review Checklist

### Architecture

Questions:

* Does this follow project architecture?
* Does this violate clean architecture?
* Is dependency direction correct?

---

### Design

Questions:

* Is responsibility clear?
* Is abstraction justified?
* Is duplication introduced?

---

### Readability

Questions:

* Can another engineer understand this quickly?
* Are names meaningful?
* Is intent obvious?

---

### Testing

Questions:

* Are tests included?
* Are edge cases covered?
* Are failures handled?

---

### Security

Questions:

* Are secrets exposed?
* Is input validated?
* Is user-generated content sanitized?

---

## Reviewer Responsibilities

Review the code.

Review the design.

Review the long-term maintainability.

Do not review only formatting.

---

## Author Responsibilities

Provide:

* Problem statement
* Solution summary
* Screenshots (if UI changes)
* Testing evidence

---

## Review Culture

Critique code.

Never critique people.

Use:

"What if we..."

Instead of:

"This is wrong."
