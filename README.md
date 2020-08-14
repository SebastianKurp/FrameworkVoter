# Javascript Framework Voter App

### Built as a coding assessment for FullStack Labs

### Build Time 4 Hours

[![Screenshot of the final build](https://github.com/SebastianKurp/FrameworkVoter/blob/master/githubReadMePhoto.png "Screenshot of the final build")](http://https://github.com/SebastianKurp/FrameworkVoter/blob/master/githubReadMePhoto.png "Screenshot of the final build")

## Technologies/Libraries Used

- [Blitz.js](https://blitzjs.com/) :Wanted to try it out as it's a ruby on rails like framework that uses primsa and nextJs. The database language I chose was PSQL, but you can use SQLlite if you want.
- [axios](https://github.com/axios/axios) : Used for easy fetching of the data from the Github API
- [recharts](https://recharts.org/en-US/) : Charting Library for React
- [styled-components](https://styled-components.com/) :Didn't want the hassle of stylesheets or implementing tailwind so I went with styled components
- [Coolors](https://coolors.co/092327-0b5351-00a9a5-4e8098-90c2e7) : Needed to generate a quick color schema 
- [render.com](https://render.com/) : Used this as the hosting site cause blitz recommends it and it's super easy to set up

## Requirements

To get started for this assessment I begun by writing out the requirements:

- [x] needed to fetch data from github api
- [x] needed to be able to refresh that data
- [x] needed to be able to show that data in some visually appealing way
- [x] needed to capture and store a users vote on their favorite framework, the same email and browser session could not vote this.(to see votes go to `/votes` route or https://frameworkvoter.onrender.com/votes)
- [x] needs to be deployed to a hosting site

## Why I went with Blitz.js?

Great question, um to be honest I didn't want to setup a seperate folder and deal with running a server and database for a "simple" project like this. Also the idea of challenging myself to learn a new framework was sorta too good to past up.

## How was using Blitz.js?

So I have never used [Prisma](https://www.prisma.io/) or [next.js](https://nextjs.org/) before so those were two small curve balls thrown at me. Luckly the Blitz team has great documentation and I was able to get understand enough of the two use to start hacking away. Overall I have to say I enjoyed the expierence alot. The ability to create a type safe backend with out having to write out the bolier plate was awesome and I'm starting to really enjoy using prisma on the backend. Also the intergration with the front end was pretty smooth.

## Build Process

1. Get Blitz Running
2. Add Rechart and start mocking up a bar chart component
3. Once the barchart looked well, start learning about the github api.
4. Made the realization that I had to make multiple calls to the api to get the data
5. After googling, figured out that axios was the perfect tool for this.
6. After data was fetched and parse I just dropped it in to the barchart component I made earlier.
7. After the data looked good, I added the info card with title, refresh button, and form to add your vote. Used React-select cause I didn't want to create select component.
8. Get hosting on render.com to work.

## Structure of this Repo

```
frameworkVote
├── app
│   ├── components
│   │   └── ErrorBoundary.tsx
 |.    |.   └── Dashboard
 |     |              └── BarChart.js
 |     |              └── InfoDashboardCard.js
 |     |              └── Dashboard.js
│   ├── layouts
│   └── pages
│       ├── _app.tsx
│       ├── _document.tsx
│       └── index.tsx
├── db
│   ├── migrations
│   ├── index.ts
│   └── schema.prisma
├── integrations
├── node_modules
├── public
│   ├── favicon.ico
│   └── logo.png
├── utils
├── .babelrc.js
├── .env
├── .eslintrc.js
├── .gitignore
├── .npmrc
├── .prettierignore
├── README.md
├── blitz.config.js
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Info About the File Struct

These files are:

- The `app/` directory is a container for most of your project. This is where you’ll put any pages or API routes.

- `db`/ is where your database configuration goes. If you’re writing models or checking migrations, this is where to go.

- `node_modules/` is where your “dependencies” are stored. This directory is updated by your package manager, so you don’t have to worry too much about it.

- `public/` is a directory where you will put any static assets. If you have images, files, or videos which you want to use in your app, this is where to put them.

- `utils/` is a good place to put any shared utility files which you might use across different sections of your app.

- `.babelrc.js`, `.env`, etc. ("dotfiles") are configuration files for various bits of JavaScript tooling.

- `blitz.config.js` is for advanced custom configuration of Blitz. It extends [`next.config.js`](https://nextjs.org/docs/api-reference/next.config.js/introduction).

- `package.json` contains information about your dependencies and devDependencies. If you’re using a tool like `npm` or `yarn`, you won’t have to worry about this much.

- `tsconfig.json` is our recommended setup for TypeScript.
