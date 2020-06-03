"use strict";
exports.__esModule = true;
exports.mongoService = void 0;
var MongoClient = require("mongodb");
var conf_1 = require("../conf");
//const MongoClient = require('mongodb').MongoClient;
var MongoService = /** @class */ (function () {
    function MongoService(url, databaseName) {
        this.url = url;
        this.databaseName = databaseName;
    }
    MongoService.prototype.createDB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) { console.log('DB Connected!'); db.close(); resolve(); })["catch"](function (err) {
                console.log('DB Connection Error: ${err.message}');
                reject(err.message);
            });
        });
    };
    MongoService.prototype.createCollection = function (collectionName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }).then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.createCollection(collectionName).then(function (result) {
                    console.log("Collection " + collectionName + " created!");
                    db.close();
                    resolve();
                }, function (error) {
                    throw error;
                })["catch"](function (error) {
                    db.close();
                    reject(error.message);
                })["finally"](function () {
                });
            }, function (error) {
                console.log(error);
                reject(error.message);
            });
        });
    };
    MongoService.prototype.insertOneCollection = function (collectionName, collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).insertOne(collection, {}).then(function (collection) {
                    if (collection.insertedCount != 1) {
                        throw new Error("Couldn't post");
                    }
                    db.close();
                    resolve();
                })["catch"](function (err) {
                    console.log("DB Connection Error: " + err.message);
                    db.close();
                    reject(err.message);
                })["finally"](function () {
                    console.log('Closing DB');
                });
            });
        });
    };
    MongoService.prototype.listCollection = function (collectionName, query1, query2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).find(query1, query2).toArray().then(function (collection) {
                    db.close();
                    resolve(collection);
                })["catch"](function (err) {
                    console.log("DB Connection Error: " + err.message);
                    db.close();
                    reject(err.message);
                })["finally"](function () {
                    console.log('Closing DB');
                });
            });
        });
    };
    MongoService.prototype.updateOneCollection = function (collectionName, query, newValues) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                //console.log(newValues);
                return dbo.collection(collectionName).updateOne(query, newValues).then(function (collection) {
                    console.log(collection);
                    if (collection.modifiedCount == 0) {
                        throw new Error('Couldn\'t update item');
                    }
                    db.close();
                    resolve();
                })["catch"](function (err) {
                    console.log("DB Error: " + err.message);
                    db.close();
                    reject(err.message);
                })["finally"](function () {
                    console.log('Closing DB');
                });
            });
        });
    };
    MongoService.prototype.deleteOneCollection = function (collectionName, query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('we here');
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).deleteOne(query).then(function (collection) {
                    if (collection.deletedCount == 0) {
                        throw new Error("Could not delete item");
                    }
                    db.close();
                    resolve();
                })["catch"](function (err) {
                    console.log("DB Connection Error: " + err.message);
                    db.close();
                    reject(err.message);
                })["finally"](function () {
                    console.log('Closing DB');
                });
            });
        });
    };
    return MongoService;
}());
exports.mongoService = new MongoService(conf_1.URL, conf_1.DATABASENAME);
