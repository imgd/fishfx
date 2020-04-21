export default interface Ilist<T> {
  indexOf(item: T): number;
  insert(index: number, item: T): void;
  removeAt(index: number): void;
}