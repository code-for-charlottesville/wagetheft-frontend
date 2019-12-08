# wagetheft-frontend

> The user-facing website for helping workers recover wages

## Initial setup

The starting project was created like this:

``` bash
$ npx create-nuxt-app wagetheft-frontend

create-nuxt-app v2.11.1
✨  Generating Nuxt.js project in wagetheft-frontend
? Project name wagetheft-frontend
? Project description The user-facing website for helping workers recover wages
? Author name Code For America
? Choose the package manager Npm
? Choose UI framework None
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules Axios, Progressive Web App (PWA) Support
? Choose linting tools ESLint
? Choose test framework None
? Choose rendering mode Universal (SSR)
? Choose development tools jsconfig.json (Recommended for VS Code)
```

## To deploy:

This has been set up on Netlify with two branches:

staging.vawagetheft.org is "staging"

vawagetheft.org and www.vawagetheft.org is "production"

Scripts have been created to deploy:

```bash
npm run staging
```

```bash
npm run production
```

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
