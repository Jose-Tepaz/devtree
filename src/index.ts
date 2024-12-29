//Notas
//ctrl c para detener servidor
// node --watch index.js re ejecuta el servidor sin detenerlo, caracteristica directa de nose
// En el package.json podemos definir escripts que queremos correr desde el servidor ej: "scripts": { "dev": "node --watch index.js"}, lo correomos con npm run
// Instalar dependencias de desarrollo = npm i -D nodemon

//usamos estos scripts para correr en distintos entornos "dev": "nodemon src/index.ts", "build": "tsc",  "start": "node dist/index.js"
import colors from 'colors'
import server from './server'

const port = process.env.PORT || 4000;


server.listen(port, () => {
    console.log(colors.blue.bold('Servidor funcionando en el puerto ...'), port)
   
});