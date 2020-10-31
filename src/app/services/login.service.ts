import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://rc.arsenelapostolet.fr/api/Auth/authenticate';

  constructor(private httpClient: HttpClient) {
  }

  async login(login: string, password: string): Promise<void> {
    const token = (await this.httpClient.post<any>(this.url, {username: login, password}).toPromise()).token;
    sessionStorage.setItem("token", token);
  }
}
