import { Component, inject, Output, EventEmitter, ChangeDetectorRef, OnInit } from '@angular/core';
import { PainelComponent } from '../../components/painel/painel.component';
import { AnimaisComponent } from "../../components/animais/animais.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Comentario } from '../../interfaces/comentario';
import { ComentarioService } from '../../servicos/comentario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PainelComponent, AnimaisComponent, FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comentarioList: Comentario[] = [];
  comentarios: Comentario[] = [];
  @Output() adicionarComentario = new EventEmitter<Comentario>();

  // Usando o injetor diretamente para o serviço de comentários
  private comentarioService = inject(ComentarioService);

  comentario: Comentario = { nome: '', comentario: '' };

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadComentarios(); 
  }

  //submissão do comentario
  onSubmit() {
    //verificação se os campos foram preechidos
    if (this.comentario.nome.trim() === '' || this.comentario.comentario.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    this.addComentario(this.comentario);  
    this.comentario = { nome: '', comentario: '' };  
  }

  //função para adicionar os comentarios
  addComentario(comentario: Comentario) {
    this.comentarioService.addComentario(comentario).subscribe(
      (comentarioAdicionado) => {
        this.comentarios.push(comentarioAdicionado);
        this.cdr.detectChanges(); 
      },
      (error) => {
        console.error('Erro ao adicionar comentário', error);
      }
    );
  }

  //função para carregar os comentarios
  loadComentarios(): void {
    this.comentarioService.getComentarios().subscribe(comentarios => {
      this.comentarios = comentarios;
      this.cdr.detectChanges(); 
    });
  }
}
