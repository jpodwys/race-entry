# race-entry

Automated UI tests for RaceEntry.com

# Installation

> If you get stuck on any of the below steps, have a look at [Protractor's setup](https://angular.github.io/protractor/#/tutorial) page. If you can't find what you're looking for there, contact me on slack.

1. Make sure you have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed.
2. Run `git pull` from the `master` branch of your `Race_Entry` folder to make sure you have the tests.
3. Go to `programfiles/nodejs/` and delete all files that start with `npm` (there should only be 2).
4. From the `Race_Entry` folder, run `npm install -g npm` to get the latest version of node.
5. Run `node_modules/.bin/webdriver-manager update`.
6. Run `npm test` to make sure it all worked. If it worked, browser tests will launch a run against your dev environment.

# Running Tests

#### As part of commits

A pre-commit hook exists in your repo that will fire these tests off every time you make a commit. If the tests fail, your commit will be rejected.

To bypass the tests when you commit, add the `--no-verify` flag. See the [pre-commit NPM page](https://www.npmjs.com/package/pre-commit) for more details.

#### Manually

You can run `npm test` from the project root at any time. This will run the tests against your local environment.

To manually run the tests against v2, run `npm test -- --v2`.
