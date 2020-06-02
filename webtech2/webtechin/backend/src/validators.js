"use strict";
exports.__esModule = true;
exports.Validator = void 0;
var Error_1 = require("./model/Error");
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.itemsPostError = function (item) {
        var errors = [];
        console.log(item);
        if (!item) {
            errors.push(new Error_1.Error('item', 'No item given'));
            return errors;
        }
        if (!item.name) {
            errors.push(new Error_1.Error('item.name', 'Item name must be given'));
        }
        if (!item.price) {
            errors.push(new Error_1.Error('item.price', 'Item price not given'));
        }
        if (!item.expiration) {
            errors.push(new Error_1.Error('item.expiration', 'Expiration not given'));
        }
    };
    return Validator;
}());
exports.Validator = Validator;
