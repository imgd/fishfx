import Ilist from './Ilist';
import { exception } from '../';
export default class list<T> implements Ilist<T> {
  private _items: Array<T>;
  private static readonly s_emptyArray: Array<any> = [];

  constructor(capacity: number)
  constructor() {
    
  }

  indexOf(item: T): number {
    throw new exception.notImplementedException();
  }
  insert(index: number, item: T): void {
    throw new exception.notImplementedException();
  }
  removeAt(index: number): void {
    throw new exception.notImplementedException();
  }
}