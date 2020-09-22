const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const config = require('./src/config');
const trace = require('./src/middleware/trace');

const routes = require('./src/routes');


const app = express();
const port = config.PORT || 3000;
const swaggerYamlDocument = YAML.load('./swagger-doc/fullSchema.yaml');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/v1/api', trace, routes);

app.use('/v1/docs/', express.static('./docs'));

app.use('/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerYamlDocument));

app.get('/v1/docs/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, './docs/')
  });
});

app.use(['/docs/*', '/'], (req, res) => {
  res.redirect('/v1/docs/');
});

app.listen(port, () => {
  console.log(config.PORT);
  console.log(`Server is running on PORT ${port}`);
});
