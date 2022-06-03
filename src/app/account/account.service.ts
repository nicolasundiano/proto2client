import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, of, ReplaySubject} from "rxjs";
import {ICurrentUserResponse, IUser, IUserAddress, IUserAddressResponse} from "../shared/models/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
  }

  loadCurrentUser(token: string) {
    if (token === null) {
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`)

    return this.http.get(this.apiUrl + 'user', {headers}).pipe(
      map((response: ICurrentUserResponse) => {
        if (response) {
          localStorage.setItem('token', response.token);
          this.currentUserSource.next(response.user)
        }
      })
    );
  }

  login(values: any) {
    return this.http.post(this.apiUrl + 'login', values)
      .pipe(
        map((user: IUser) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
          }
        })
      );
  }

  register(values: any) {
    return this.http.post(this.apiUrl + 'register', values)
      .pipe(
        map((user: IUser) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get(this.apiUrl + 'user/emailexists?email=' + email);
  }

  getUserAddress() {
    return this.http.get<IUserAddressResponse>(this.apiUrl + 'user/address');
  }

  updateUserAddress(address: IUserAddress) {
    return this.http.put<IUserAddressResponse>(this.apiUrl + 'user/address', address);
  }
}
