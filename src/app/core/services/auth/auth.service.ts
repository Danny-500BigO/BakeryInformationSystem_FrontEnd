import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { LoginRequest } from '../../../features/authentications/models/login/loginRequestModel';
import { loginResponseModel } from '../../../features/authentications/models/login/loginResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private apiUrl = `${environment.apiUrl}/User`;

  constructor(private httpClient:HttpClient) { }


  userlogin(request:LoginRequest):Observable<loginResponseModel>{
  
return this.httpClient.post<loginResponseModel>(
  `${this.apiUrl}/login`,request

);



  }

}
