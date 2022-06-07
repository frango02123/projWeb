import { Injectable } from '@angular/core';
import { Formulario } from 'src/models/cadastro.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private url = 'https://localhost:5001/formulario';

  constructor(private httpClient: HttpClient) {}

  public cadastrar(cadastro: Formulario): Observable<Formulario> {
    return this.httpClient.post<Formulario>(`${this.url}/cadastrarFormulario`, cadastro);
  }

}
