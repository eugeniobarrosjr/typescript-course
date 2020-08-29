import { DaoInterface } from './dao.interface';
import Animal from '../class07-classes/Animal';

export default class AnimalDao implements DaoInterface {
  tablename = '';

  insert = (): boolean => {
    return true;
  };

  update = (): boolean => {
    return true;
  };

  delete = (): Animal => {
    return new Animal('Rex');
  };

  find = (): Animal => {
    return new Animal('Rex');
  };

  findAll = (): [Animal] => {
    return [new Animal('Rex')];
  };
}
