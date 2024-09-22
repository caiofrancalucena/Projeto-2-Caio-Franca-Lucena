import { Component, inject } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';
import { AnimalInterface } from '../../interfaces/animal-interface';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../../servicos/animal.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [AnimalComponent, CommonModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {
  
}
