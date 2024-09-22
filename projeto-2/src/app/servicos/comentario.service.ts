import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:3000/comentarios'; // Altere para sua URL de API

  constructor(private http: HttpClient) {}
  
  getComentarios() : Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.apiUrl);
  }

  addComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.apiUrl, comentario);
  }
}
