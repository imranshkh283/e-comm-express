const express = require('express');
const userRoute = require('./user.route');
const authRoute = require('./auth.route');
const excelRoute = require('./excel.route');
const router = express.Router();

const defaultRoutes = [
    {
        path: '/user',
        route: userRoute,
    },
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/excel',
        route: excelRoute,
    }
];


defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;
