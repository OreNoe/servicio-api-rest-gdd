const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API de Comedores",
    description: `API de Comedores

### Instalación y Ejecución

#### Requisitos Previos:
- Node.js
- npm (gestor de paquetes de Node.js)

#### Instalación:
1. Clona el repositorio:
   \`\`\`bash
   git clone https://github.com/OreNoe/servicio-api-rest-gdd.git
   \`\`\`
2. Navega al directorio del proyecto:
    \`\`\`bash
    cd servicio-api-rest-gdd
    \`\`\`
3. Instala las dependencias:
    \`\`\`bash
    npm install express typeorm sqlite3 swagger-autogen swagger-ui-express typescript ts-node @types/node @types/express @types/swagger-ui-express @types/swagger-autogen 
    \`\`\`

#### Ejecución:
1. Para ejecutar el servidor de desarrollo:
   \`\`\`bash
   npm start
   \`\`\`
2. El servidor estará corriendo en \`http://localhost:3000\`.
`,
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
