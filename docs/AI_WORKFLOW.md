# AI Workflow

## Roles

- ChatGPT — Project Coordinator: owns planning, documentation direction, and implementation boundaries.
- VS Code Agent — Implementation / execution agent: performs approved changes in the workspace.
- Claude, Gemini, or DeepSeek — Optional specialist or review agents: may assist with analysis, review, or targeted recommendations.

## Working Rules

- Read the documentation in docs/ before changing code.
- Do not perform uncontrolled refactoring.
- Preserve the existing website structure unless the Project Coordinator explicitly approves a change.
- Do not invent missing facts; use TODO: Coordinator to define when information is unknown.
- Keep changes scoped to the approved task.

## Production Safety Rule

Production GitHub and Netlify deployment settings must not be changed during development unless the Project Coordinator explicitly authorizes it.

## Notes

This repository is documentation-sensitive; implementation work should be conservative and evidence-based.
