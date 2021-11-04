## Start a proyect
```
npm init -y
```

## Proyect dependencies
```
npm i --save express
```

## Development dependencies
```
npm i --save-dev typescript ts-node @types/node @types/express
npm i --save-dev nodemon
npm i typescript --save-dev
```

## Typescript configuration
```
npx tsc --init
```

## Instalation
```
npm i
```

## Heroku deploy CLI
```
heroku -v
heroku login
heroku git:remote -a a14narriaga-up-task
git push heroku main
```
- Scripts in package.json (TypeScript proyect)
```
"start": "node build/index.js",
"dev": "nodemon src/index.ts",
"build": "tsc -p ."
```
- tsconfig.json
```
"target": "es6",
"module": "commonjs",
"rootDir": "src",
"outDir": "build",
"moduleResolution": "node",
"esModuleInterop": true,
"forceConsistentCasingInFileNames": true,
"strict": true,
"skipLibCheck": true
```