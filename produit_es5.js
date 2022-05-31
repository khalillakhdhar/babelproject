"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Produit = function () {
    function Produit(id, titre, prix, quantite) {
        _classCallCheck(this, Produit);

        this.id = id;
        this.titre = titre;
        this.prix = prix;
        this.quantite = quantite;
    }

    _createClass(Produit, [{
        key: "productdet",
        get: function get() {
            return this.titre + " prix unitaire " + this.prix + " " + this.quantite;
        }
    }]);

    return Produit;
}();

var pr = new Produit(1, "laptop gamer", 2000, 20);
var proddet = pr.productdet;
console.log("produit", proddet);
