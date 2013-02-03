'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var srv = angular.module('gamestore.services', []);

srv.value('version', '0.1');

srv.value('TVA', 19.6);
srv.factory('Cart', ['TVA', function (TVA) {
    return {
        rows: {},
        add: function (game) {
            var row = this.rows[game.ref];
            if (row) {
                row.qty++;
            } else {
                this.rows[game.ref] = {
                    game: game,
                    qty: 1
                };
            }
        },
        total: function () {
            var sum = 0;
            for (var i in this.rows) {
                sum += this.rows[i].qty * this.rows[i].game.price;
            }
            return sum;
        },
        totalHT: function () {
            return this.total() * 100 / (100 + TVA);
        },
        empty: function () {
            return Object.keys(this.rows).length == 0;
        }
    };
}]);