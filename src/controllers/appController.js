const AppController = {};

AppController.index = (req, res) => {
    res.render('home');
}

AppController.menu = (req, res) => {
    res.render('menu');
}

AppController.about = (req, res) => {
    res.render('about');
}

module.exports = AppController;