# Apliacación REST API con typescript y mongoDB

El código comppleto en: https://github.com/FaztTech/rest-api-typescript


Esta es la parte 003, anteriormente están restapits000, 001, 002

Hay un documento en drive
Herramientas y primeros pasos:

Herramientas:

nodejs
typescript
mongodb

luego, en la carpeta del proyecto:
npm init
npm install -g typescript
tsc --init
git init

Ya tenemos los parámetros de configuración.

Cambiamos 
"target": "es6",  
"outDir": "./build",	

en tsconfig.ts

npm i express mongoose morgan helmet cors compression

helmet de seguridad los otros no son muy importantes

Creamos la carpeta src con server.ts

npm install @types/node @types/mongoose @types/express @types/cors @types/compression @types/morgan nodemon typescript -D


Instalamos postman:
https://app.getpostman.com/app/download/win64

tiempo 1:18:47

Recordar para ejecutar:
npm run dev ( para que ejecute nodemon)