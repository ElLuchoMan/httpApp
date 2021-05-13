import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastname', 'email', 'website'];
  dataSource: any;
  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  cargarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(usuario => {
      console.log(usuario);
      this.dataSource = usuario;
    })
  }
}
