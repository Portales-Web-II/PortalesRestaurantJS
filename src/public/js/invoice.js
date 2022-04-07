//Import the easyinvoice library so we can use it
var easyinvoice = require('easyinvoice');

//Import the built-in NodeJS fs library so we can interact with the file system to save our invoice
var fs = require('fs');

//variables para obtener la fecha
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var fecha = date + '/' + month + '/' + year;

//  Our data object
var data = {

    //    Let's add a recipient
    "client": {
        "company": "Samuel Oviedo",
        "address": "Direccion",
        "zip": "12111",
        "city": "Siguatepeque",
        "country": "Honduras"
    },

    //    Now let's add our own sender details
    "sender": {
        "company": "Portales Restaurant",
        "address": fecha,
        "zip": "12111",
        "city": "Siguatepeque",
        "country": "Honduras"
    },
    "products": [
        {
            "quantity": "2",
            "description": "Test1",
            "tax": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax": 21,
            "price": 10.45
        }
    ],

    //      We will use bottomNotice to add a message of choice to the bottom of our invoice
    "bottomNotice": "Kindly pay your invoice within 15 days.",

    //      Here we add our preferred currency
    //      See EasyInvoice NPM documentation 'Locales and Currency' for more info
    "currency": "HNL",

    //      Here we can add our countries tax notation
    "taxNotation": "ISV",

    //      Using margin we can regulate how much white space we would like to have from the edges of our invoice
    "marginTop": 25,
    "marginRight": 20,
    "marginLeft": 20,
    "marginBottom": 25,

    //      Last but not least, the translate parameter.
    //      Used for translating the headers to your preferred language
    //      Defaults to English. Below example is translated to Dutch.
    //      We will not use translate in this sample to keep our samples readable
    "translate": {
        "invoiceNumber": "Num. Factura",
        "invoiceDate": "Fecha",
        "products": "Productos",
        "quantity": "Cantidad",
        "price": "Precio",
        "subtotal": "Subtotal",
        "total": "Total"
    }
};

//Let's use the easyinvoice library and call the "createInvoice" function
easyinvoice.createInvoice(data, function (result) {
    //The response will contain a base64 encoded PDF file
    var pdf = result.pdf;

    //Now let's save our invoice to our local filesystem
    fs.writeFileSync("Factura.pdf", pdf, 'base64');
});