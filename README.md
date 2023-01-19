# README

Work in progress :) I'm building this repo to help educate on best practices for React readability and testing principles.

Please fork the repo to experiment and make changes!

## Install

-   This repo uses `pnpm`, you can find the installation instructions at https://pnpm.io/installation.

-   App installation:
    ```
    pnpm i
    ```

## Test

```
pnpm test
```

## Run

```
pnpm dev
```

## The Continuous Deployment feedback cycle

-   Decide what to build
-   Write a new test for that behaviour
-   Write code to pass that test
-   Refactor
-   Merge new code to main branch
-   Automated deploy when code is merged

### How we do this

-   Each page will have its own test file where we describe any new behaviour as a test before we write it
-   We then work on the new feature code and follow the red, green, refactor cycle of TDD
-   Before a commit happens, all the tests and prettifier are run to validate a commit
-   As soon as the commit is merged into the main branch on GitHub, Vercel picks up the change and deploys the latest version to vite-ts-react-tdd.vercel.app
