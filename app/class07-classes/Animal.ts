/* eslint-disable no-console */
class Animal {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public move(meters: number): void {
    console.log(`${this.nome} moves ${meters}m`);
  }
}

export default Animal;
