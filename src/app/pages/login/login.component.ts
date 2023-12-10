import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  onSubmit(): void {
    // Ici, vous pouvez ajouter la logique de soumission du formulaire
    // console.log('Nom d\'utilisateur :', this.username);
    // console.log('Mot de passe :', this.password);

    // Par exemple, vous pouvez appeler un service d'authentification pour valider les informations
    // this.authService.login(this.username, this.password);
  }

}
