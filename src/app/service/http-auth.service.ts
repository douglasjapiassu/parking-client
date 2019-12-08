import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Login {
  constructor(
    public username:string,
    public password:string,
  ) {}
  
}

export class User {
  constructor(
    public token:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private httpClient: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public authenticate(login) {
    return this.httpClient.post<any>("http://localhost:8080/parking-api/auth", login).pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
      }

      return user;
  }));;
  }

  isUserLoggedIn(){
    let user=this.currentUserValue;
    //console.log(!(user===null))
    return !(user===null)
  }

  logOut()
  {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
