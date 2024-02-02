# Sistema Administrativo de la Escuela de Atletismo del Estado Monagas

## Proyecto-E.A-Front-End

### Construido en

- [React](https://es.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

### Instalación del proyecto

Clone este repositorio. Necesitarás node y npm instalado globalmente en tu equipo.

Instalación:

NPM:

1. Ejecutar el comando "npm install" en la consola para instalar las dependencias.
2. Ejecutar el comando "npm run dev" para ejecutar la aplicación.

YARN:

1. Ejecutar el comando "yarn" en la consola para instalar las dependencias.
2. Ejecutar el comando "yarn dev" para ejecutar la aplicación.

> [!NOTE]
> Si tiene problemas con al cargar la pagina, colocar el siguiente comando "npm run dev --force".
> En caso de usar yarn colocar "yarn dev --force".

### Rutas de la aplicación

Ruta inicial.

- `localhost:5173`

### Otros comandos

- `dev-host`: Para poder mostrar la aplicación mediante la ruta del host local.
- `build`: Desplegar la aplicacion para producción y creará una carpeta llamada dist.
- `lint`: Verificar errores en el código.
- `lint-fix`: Tratar de solucionar los errores que se presentan.
- `preview`: Arrancará el servidor web estático local que sirve los archivos desde dist en http://localhost:4173.

### Dependencias

- Esta en proceso...

### Eslint y Prettier

ESLint es un linter de código JavaScript. Su función es analizar el código de nuestra aplicación, detectar problemas en por medio de patrones y si esta a su alcance resolverlos él mismo.

Por otro lado, Prettier es un formateador de código. Tambien analiza nuestro código JavaScript. Pero no solo detecta problemas (como la longitud de una línea, o si una variable no se usa nunca); re-escribe nuestro código cada vez que salvamos un archivo, permitiéndonos ver y entender cuales son los problemas de nuestra aplicación.

**Recomendación**: Para poder tomar ventaja de estas herramientas, si estas usando VS Code, debes instalar la siguiente extensión.

- [Extensión Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Se configuró la aplicación para que Eslint sea el que señala los errores, y Eslint se encarga exclusivamente del indexado del código. Para esto, debes acceder a las configuraciones, y debes insertar lo siguiente:

```
{
    "prettier.configPath": ".prettierrc.js",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```

## Ampliando la configuración de ESLint

Si está desarrollando una aplicación de producción, le recomendamos actualizar la configuración para habilitar reglas de Eslint con reconocimiento de tipos:

- Configure la propiedad `parserOptions` de nivel superior de esta manera:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```
