# frontexpress-demo

Smallest project for starting using [frontexpress](https://github.com/camelaissani/frontexpress) framework.

![image](https://www.nuageprive.fr/images/overview.optimized1.gif)

## Quick Start

 Clone the git repository:

```bash
$ git clone git@github.com:camelaissani/frontexpress-demo.git
$ cd frontexpress-demo
```

 Install dependencies:

```bash
$ npm install
```

 Start the server:

```bash
$ npm start
```

## Objective

Create a Single Page Application (SPA) in which the routing is managed by [frontexpress](https://github.com/camelaissani/frontexpress).

 We created a [frontexpress](https://github.com/camelaissani/frontexpress) application:

```js
// Frontend application
const app = frontexpress();
```

 This application listens two kind of routes:

```js
// api routes (ajax requests)
app.use(apiRouter);

// page routes (complete page refresh)
app.use(pageRouter);
```

 It pops up a dialog to ask sign in when the HTTP error 401 is received

```js
// React on http 401 (Unauthorized need to sign in to access)
app.use((req, res, next)  => {
    if (res.status === 401) {
        window.alert('Your are not authenticated!\n\nPlease sign in.');
        app.httpGet(`/api/login?ori_req=${encodeURIComponent(req.uri)}`);
    } else {
        next();
    }
});
```

 The menu selection is managed through out routes

```js
// On update content select the corresponding menu
router.get((req, res, next) => {
    menu.selection(req.uri);
    next();
});
```

For more look at the [sources](https://github.com/camelaissani/frontexpress-demo/tree/master/frontend).
