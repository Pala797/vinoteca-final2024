// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'ruta-donde-almacenaras-tu-servicio';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    // Llamar al servicio de autenticación para verificar credenciales
    this.authService.login(this.username, this.password);
  }
}
