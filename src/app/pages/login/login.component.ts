import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient) {
    this.loginObj = new Login();
  }

  onLogin() {
    debugger;
    this.http.post('https://virtserver.swaggerhub.com/bizify/login/1.0.0/login', this.loginObj).subscribe((res:any)=>{
      if (res.result) {
        alert("Login Success! \n = "+res.message);
      }else{
        alert(res.message);
      }
    });
  }
}

export class Login {
  email: string;
  senha: string;

  constructor() {
    this.email = '';
    this.senha = '';
  }
}
