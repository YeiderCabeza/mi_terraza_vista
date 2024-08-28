// usuario.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service'; // Importa el servicio
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any[] = []; // Variable para almacenar la lista de usuarios
  usuarioSeleccionado: any; // Variable para almacenar el usuario seleccionado por ID
  idUsuario: number | null = null; // Inicializa idUsuario como null

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getData().subscribe(data => {
      this.usuarios = data; // Asigna los datos recibidos a la variable usuarios
      console.log(this.usuarios); // Muestra los datos en la consola para verificar
    });
  }

  // Actualiza el método para aceptar un parámetro ID
  buscarUsuarioPorId(id: number): void {
    this.usuarioService.getUsuarioById(id).subscribe(data => {
      this.usuarioSeleccionado = data; // Asigna el usuario seleccionado
      console.log(this.usuarioSeleccionado); // Muestra el usuario en la consola para verificar
    });
  }

  // Método para manejar la edición de un usuario
  editarUsuario(id: number): void {
    console.log(`Editar usuario con ID: ${id}`);
    // Aquí puedes agregar la lógica para redirigir a una página de edición o abrir un formulario modal
    // Por ejemplo, si quieres redirigir a una página de edición:
    // this.router.navigate(['/editar-usuario', id]);
  }

  abrirModal(usuario: any): void {
    this.usuarioSeleccionado = usuario; // Asigna el usuario seleccionado
    const modalElement = document.getElementById('usuarioModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement); // Usa el objeto de modal de Bootstrap
      modal.show(); // Muestra el modal
    }
  }
}
