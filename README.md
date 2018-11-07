[![CircleCI](https://circleci.com/gh/ayildirim/bio2.svg?style=svg)](https://circleci.com/gh/ayildirim/bio2)

## Tech stack
- React

### Development environment
- Visual Studio Code is the configured tool for the project
- Configuration of vscode settings & extensions are in the /.vscode/settings.json

### JS Dev Utilities and Code Hygiene
- Yarn for dependency management
- Eslint for code syntax
- Prettier for code formatting
- Flow for data type safety
- Husky precommit hooks for running tests locally prior to commits made locally

### Tests
- CircleCI runs "yarn test" as configured in /.circleci/config.yml

### Deployment
- The procedure is configured in /.circleci/config.yml, under deploy step
- CircleCI builds the static page from the react app
- Deploys the static page onto "gh-pages" repository
- Push to "gh-pages" triggers the Github Webhook
- Github Webhook informs RunCloud of the push
- RunCloud pulls the new version of the site, and updates on DigitalOcean

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
