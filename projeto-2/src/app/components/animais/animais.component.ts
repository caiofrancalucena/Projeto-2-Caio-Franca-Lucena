import { Component, inject } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';
import { AnimalInterface } from '../../interfaces/animal-interface';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../servicos/animal.service';

@Component({
  selector: 'app-animais',
  standalone: true,
  imports: [AnimaisComponent, CommonModule, AnimalComponent],
  templateUrl: './animais.component.html',
  styleUrl: './animais.component.css'
})
export class AnimaisComponent {
  animalsList: AnimalInterface[] = [];
  animalService: AnimalService = inject(AnimalService);

  constructor(){
    this.animalService.getAllAnimals().then((animalsList: AnimalInterface[]) => {
      this.animalsList = animalsList
    })
  }


}
