import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../model/Profile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'https://rc.arsenelapostolet.fr/api/Auth/authenticate';

  constructor(private http: HttpClient) {
  }

  async login(username: string, password: string) {
    const profile: Profile = await this.http.post<Profile>(this.url, {username, password}).toPromise();
    sessionStorage.setItem('profile', JSON.stringify(profile));
  }
}
