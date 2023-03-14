# Media Suite Data Stories

## About

The [CLARIAH Media Suite](https://mediasuite.clariah.nl/) gives researchers access to Dutch multimedia archives from, among others, Netherlands Institute for Sound and Vision, Eye Film Institute, DANS, Meertens Institute and National Library.

The Media Suite tools offer the core functionalities needed for research with these data and to generate “data stories” based on interesting facts and figures that are extracted from these data.

**Media Suite Data Stories** serves as a platform for presenting various types of such data stories. They can be part of a research topic that scholars are working on in the Media Suite, the outcome of a Data-A-Thon with students, or inspired by events in the news.

## Development

This project uses [Gatsby](https://www.gatsbyjs.org/) to generate fast web pages and a flexible content editing workflow. It is based on the [Gatsby Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog).

To start developing (or previewing content) on your local machine:

clone this repo & move to the root directory

    git clone git@github.com:beeldengeluid/data-stories.git
    cd data-stories

install dependencies

```bash
yarn install
# or
npm install
```

then run the development version

    npm run develop

this will start a live reloading development server with debug info logged to your command line. you can now view the project in your browser at

    http://localhost:8000/
	
If you get error messages such as 'Field "fields" is not defined' and you are running on Windows, then you need to go to gatsby-config.js and edit pagesPaths in 'gatsby-plugin-i18n' to contain the absolute paths to data-stories/content/blog and data-stories/src/pages

## Deployment

We branch from `main` to work on changes to the labs website. Use the steps under _Development_ to work on your changes locally. To share your changes with others, create a draft pull request on GitHub. This deploys your branch through [Vercel for Github](https://vercel.com/docs/concepts/git/vercel-for-github) to a new environment, and posts a shareable preview URL to the pull request. If your changes are ready to be released, set the pull request to 'ready for review' and ask someone for a code review. After review, the change is deployed by merging to `main`. 
