import * as MongoClient from 'mongodb';
import { URL, DATABASENAME } from '../conf';
import { Query } from '@angular/core';



//const MongoClient = require('mongodb').MongoClient;

class MongoService {
    constructor(private url: string, private databaseName: string) {

    }
    createDB(): Promise<void> {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then((db) => { console.log('DB Connected!'); db.close(); resolve(); })
                .catch(err => {
                    console.log('DB Connection Error: ${err.message}');
                    reject(err.message);
                });
        });
    }
    createCollection(collectionName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }).then(db => {
                var dbo = db.db(this.databaseName);
                return dbo.createCollection(collectionName).then((result) => {
                    console.log(`Collection ${collectionName} created!`);
                    db.close();
                    resolve();
                }, (error) => {
                    throw error;
                }).catch((error) => {
                    db.close();
                    reject(error.message);
                }).finally(() => {
                });
            }, (error) => {
                console.log(error);
                reject(error.message);
            });
        });
    }
    insertOneCollection(collectionName: string, collection: any): Promise<void> {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then((db) => {
                    var dbo = db.db(this.databaseName);
                    return dbo.collection(collectionName).insertOne(collection, {
                    }).then((collection) => {
                        if (collection.insertedCount != 1) {
                            throw new Error("Couldn't post");
                        }
                        db.close();
                        resolve();
                    }).catch(err => {
                        console.log(`DB Connection Error: ${err.message}`);
                        db.close();
                        reject(err.message);
                    }).finally(() => {
                        console.log('Closing DB');
                    });
                });
        });
    }
    listCollection(collectionName: string, query1: any, query2: any): Promise<any> {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then((db) => {
                    var dbo = db.db(this.databaseName);

                    return dbo.collection(collectionName).find(query1, query2).toArray().then((collection) => {
                        db.close();
                        resolve(collection);
                    }).catch(err => {
                        console.log(`DB Connection Error: ${err.message}`);
                        db.close();
                        reject(err.message);
                    }).finally(() => {
                        console.log('Closing DB');
                    })
                });
        });
    }
    updateOneCollection(collectionName: string, query: any, newValues: any): Promise<void> {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then((db) => {
                    var dbo = db.db(this.databaseName);
                    //console.log(newValues);
                    return dbo.collection(collectionName).updateOne(query, newValues).then((collection) => {
                        console.log(collection);
                        if (collection.modifiedCount == 0) {
                            throw new Error('Couldn\'t update item');
                        }
                        db.close();
                        resolve();
                    }).catch(err => {
                        console.log(`DB Error: ${err.message}`);
                        db.close();
                        reject(err.message);
                    }).finally(() => {
                        console.log('Closing DB');
                    });
                });
        });
    }


    deleteOneCollection(collectionName: string, query: any): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log('we here')
            MongoClient.connect(this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then((db) => {
                    var dbo = db.db(this.databaseName);

                    return dbo.collection(collectionName).deleteOne(query).then((collection) => {

                        if (collection.deletedCount == 0) {
                            throw new Error("Could not delete item");
                        }
                        db.close();
                        resolve();
                    }).catch(err => {

                        console.log(`DB Connection Error: ${err.message}`);
                        db.close();
                        reject(err.message);
                    }).finally(() => {
                        console.log('Closing DB');
                    });
                });
        });
    }

}


export let mongoService = new MongoService(URL, DATABASENAME);