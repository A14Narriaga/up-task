## Start a proyect
```
npm init -y
```

## Proyect dependencies
```
npm i --save express
npm i --save pug
```

## Development dependencies
```
npm i --save-dev nodemon
npm i typescript --save-dev
npm i --save-dev typescript ts-node @types/node @types/express
```

## Typescript configuration
```
npx tsc --init
```
- Scripts in package.json (TypeScript proyect)
```
"start": "node build/index.js",
"dev": "nodemon src/index.ts",
"build": "tsc -p ."
```
- tsconfig.json
```
"rootDir": "src",
"outDir": "build",
```

## Instalation
```
npm i
```

## Heroku CLI
```
heroku -v
heroku login
heroku logs --tail --app a14narriaga-up-task
```