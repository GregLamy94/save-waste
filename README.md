![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# IronProfile

## INSTALL

### Configuration

```sh
cp .env-dist .env
code .env
```

### Dev

Launch the API Express server in one tab:

```sh
npm install
npm run dev
```

In another tab, launch the React server

```sh
cd client
npm install
npm start
```

Go to: http://localhost:3000

### Deploy

Pre-requisite:

- Create a Heroku app: `https://dashboard.heroku.com/new-app`
- make sure you have the [Heroku-CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) installed.
- make sure you have commited

From the project root folder:

```sh
$ heroku git:remote -a <name_of_your_app_on_heroku>
$ git push heroku master
```

NB: Heroku will detect a Node.js app and will execute the `build` script from `package.json`.

## Requirements

- Fork this repo
- Clone this repo
