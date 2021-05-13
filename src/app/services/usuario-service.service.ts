import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  baseUrl = 'https://jsonplaceholder.typicode.com/users';
  baseUrl2 = environment.ApiUrl;
  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl);
  }
}
