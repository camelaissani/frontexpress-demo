import css from './stylesheet.css';

import frontexpress from 'frontexpress';
import apiRouter from './api-router';
import pageRouter from './page-router';
import menu from './menu';

// Frontend application
const app = frontexpress();

// React on http 401 (Unauthorized need to sign in to access)
app.use((req, res, next)  => {
    if (res.status === 401) {
        window.alert('You are not authenticated!\n\nPlease sign in.');
        app.httpGet(`/api/login?ori_req=${encodeURIComponent(req.uri)}`);
    } else {
        next();
    }
});

// api routes
app.use(apiRouter);

// page routes
app.use(pageRouter);

// manage click on menu
menu.init(app);

// starts listening to frontend application requests
app.listen();
