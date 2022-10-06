// Imports

const express = require('express');
require('dotenv').config();
require('./config/config');
const apiRouter = require('./Routes/users.routes').router;
const models = require('./models')

///////
// const AdminJS = require('adminjs')
// const AdminJSExpress = require('@adminjs/express')
// const AdminJSSequelize = require('@adminjs/sequelize')
// AdminJS.registerAdapter(AdminJSSequelize)
/////



// Instantiate server

const app = express();

// Parser config

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes config

app.get('/', (req, res) => {
    res.status(200).send('Serveur en marche');
});

app.use('/api/', apiRouter);

///////////

// const adminJs = new AdminJS({
//   databases: [models],
//   branding: {
//     companyName: 'Groupomania',
//     logo: false
//   },
//   rootPath: '/admin',
// })

// const router = AdminJSExpress.buildRouter(adminJs)
// app.use(adminJs.options.rootPath, router)

///////////


// Server launch

app.listen(process.env.APP_PORT, () => {
    console.log(`Serveur en écoute sur ${process.env.APP_PORT} `);
});

