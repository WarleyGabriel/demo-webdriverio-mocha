class Home {
    get logoSite() {
        return $('img.logo.img-responsive');
    }

    get cart() {
        return $('.shopping_cart > a');
    }
}

export const home = new Home();
