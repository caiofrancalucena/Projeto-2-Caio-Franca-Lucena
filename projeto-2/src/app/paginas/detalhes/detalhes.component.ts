import { Component, inject, OnInit } from '@angular/core';
import { AnimalInterface } from '../../interfaces/animal-interface';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../servicos/animal.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../../components/item/item.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, ItemComponent, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  private animalService = inject(AnimalService);
  private route = inject(ActivatedRoute);
  
  animal: AnimalInterface | undefined;

  ngOnInit(): void {
    const animalId = Number(this.route.snapshot.params['id']);
    this.animalService.getAnimalById(animalId).then((animal) => {
      this.animal = animal;
    });
  }

  
}
