class Menu {
    init(app) {
        this.app = app;

        const menus = document.querySelectorAll('.pure-menu-item');
        for (let i=0; i<menus.length; i++) {
            const menu = menus[i];
            menu.addEventListener('click', () => {
                this.select(menu.dataset.routeId);
            });
        }
    }

    select(routeId) {
        this.app.httpGet(`/api/${routeId}`);
    }

    selection(uri) {
        const menus = document.querySelectorAll('.pure-menu-item');
        for (let i=0; i<menus.length; i++) {
            const menu = menus[i];
            const re = new RegExp('^/(api/)?'+menu.dataset.routeId);
            if (uri.match(re)) {
                menu.className='pure-menu-item pure-menu-selected';
            } else {
                menu.className='pure-menu-item';
            }
        }
    }
}

const menu = new Menu();
export default menu;