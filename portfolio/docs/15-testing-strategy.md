# Testing Strategy

## Philosophy

Testing should provide confidence.

Goal:

Prevent regressions while enabling fast iteration.

---

## Testing Pyramid

            E2E
          /     \
    Integration
      /       \
       Unit

Priority:

1. Unit
2. Integration
3. E2E

---

## Unit Tests

Scope:

- Utilities
- Composables
- Domain logic
- Services

Tools:

- Vitest

Coverage Target:

80%+

---

## Integration Tests

Scope:

- Page interactions
- Content loading
- Repository interactions

Goal:

Validate collaboration between components.

---

## End-to-End Tests

Tool:

- Playwright

Scenarios:

- Homepage loads
- Project cards render
- Navigation works
- Contact links work
- Resume download works

---

## Accessibility Testing

Requirements:

- Keyboard navigation
- Screen reader compatibility
- Lighthouse Accessibility > 95

---

## Performance Testing

Requirements:

- Lighthouse Performance > 95
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s

---

## Regression Testing

All pull requests must:

✓ Run unit tests

✓ Run integration tests

✓ Validate build

Before merge.