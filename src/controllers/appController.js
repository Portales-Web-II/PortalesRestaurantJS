const AppController = {};

AppController.index = (req, res) => {
    res.render('home');
}

AppController.menu = (req, res) => {
    res.render('products');
}

AppController.about = (req, res) => {
    res.render('about');
}

AppController.login = (req, res) => {
    res.render('login');
}
module.exports = AppController;