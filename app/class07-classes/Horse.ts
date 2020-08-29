/* eslint-disable no-console */
import Animal from './Animal';

class Horse extends Animal {
  move(meters: number): void {
    console.log('Galloping');
    super.move(meters);
  }
}

export default Horse;
