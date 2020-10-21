# Apliacación REST API con typescript y mongoDB

Copn esto terminamos el CRUD de Posts

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

tiempo 1:18:47:

Recordar para ejecutar:
npm run dev ( para que ejecute nodemon)

---

Recordamos los pasos git:


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/***/**.git
git push -u origin main
---

Utilización con Postman:

localhost:4500/api/posts
Con método POST: 
Para alta de un post. En body, raw, Json y esta estructura
{ 
    "title": "t1" , 
    "url": "url1", 
    "content": "content1", 
    "image": "imagen1" 
}

localhost:4500/api/posts
Con método GET para obtener un listado, array de posts

localhost:4500/api/posts/url2
Con método GET para obtener el post de url: url2

localhost:4500/api/posts/url2
Con método PUT:
Para actualizar un post. En body, raw, Json esta estructura
{ 
    "title": "tx" , 
    "url": "url2", 
    "content": "contentx", 
    "image": "imagenx" 
}

localhost:4500/api/posts/url2
Con el método DELETE:
Para eliminar el post de url: url2




