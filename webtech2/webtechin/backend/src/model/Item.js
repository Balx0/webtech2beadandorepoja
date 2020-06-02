"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(item) {
        this._id = item._id;
        this.name = item.name;
        this.price = item.price;
        this.expiration = item.expiration;
    }
    return Item;
}());
exports.Item = Item;
