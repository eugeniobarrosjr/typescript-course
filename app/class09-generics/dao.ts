import { DaoInterface } from './dao.interface';

export default class Dao<T> implements DaoInterface<T> {
  tablename = '';

  insert = (): boolean => {
    return true;
  };

  update = (): boolean => {
    return true;
  };
}
