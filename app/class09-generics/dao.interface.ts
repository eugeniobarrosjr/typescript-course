export interface DaoInterface<T> {
  tablename: string;

  insert(object: T): boolean;
  update(object: T): boolean;
}
