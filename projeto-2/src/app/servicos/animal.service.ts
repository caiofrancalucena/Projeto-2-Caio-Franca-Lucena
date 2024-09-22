import { Injectable } from '@angular/core';
import { AnimalInterface } from '../interfaces/animal-interface';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  url = 'http://localhost:3000/animais'

  constructor() { }

  async getAllAnimals(): Promise<AnimalInterface[]> {
    const dados = await fetch(this.url);
    return dados.json() ?? [];
  }

  async getAnimalById(id: number): Promise<AnimalInterface | undefined> {
    const dados = await fetch(`${this.url}/${id}`);
    return dados.json() ?? {};
  }

  SubmissaoComentario(nome: string, comentario: string ){
      console.log(nome, comentario);
    }
}
