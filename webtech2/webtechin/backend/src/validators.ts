import { Item } from './Model/Item';
import { Error } from './model/Error';

export class Validator {

  static itemsPostError(item: Item): Error[] {
    let errors: Error[] = [];
    console.log(item);

    if (!item) {
      errors.push(new Error('item', 'No item given'));
      return errors;
    }
    if (item.name == undefined) {
      console.log("oupsie")
      errors.push(
        new Error(
          'item.name',
          'Item name must be given'
        )
      );
    }
    if (!item.price) {
      errors.push(
        new Error('item.price', 'Item price not given')
      );
    }
    if (!item.expiration) {
      errors.push(
        new Error(
          'item.expiration',
          'Expiration not given'
        )
      );
    }
  }
}
