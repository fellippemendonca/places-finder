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

app.use('/api', trace, routes);

app.use('/docs/', express.static('./docs'));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerYamlDocument));

app.get('/docs/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, './docs/')
  });
});

app.use(['/docs/*', '/'], (req, res) => {
  res.redirect('/docs/');
});

app.listen(port, () => {
  console.log(config.PORT);
  console.log(`Server is running on PORT ${port}`);
});
