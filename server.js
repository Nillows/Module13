const express = require('express');
const routes = require('./routes');
const sequelize = require(`./config/connection`)

const app = express();
const PORT = process.env.PORT || 3001;

const {Category, Product, Tag, ProductTag} = require(`./models/`)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({force:false}).then(function(){
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});