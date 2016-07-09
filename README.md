# frontexpress-demo

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

 Because frontexpress is not in npm repository, we must do the prepublish manually

```bash
$ cd node_modules/frontexpress
$ npm install
$ npm run prepublish
$ cd ../..
```

 Start the server:

```bash
$ npm start
```
