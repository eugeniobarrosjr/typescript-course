export interface DaoInterface {
  tablename: string;

  insert(object: unknown): boolean;
  update(object: unknown): boolean;
  delete(id: number): unknown;
  find(id: number): unknown;
  findAll(): [unknown];
}
