import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AteliersService {

  url = 'https://rc.arsenelapostolet.fr/api/Atelier';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAteliers(): Promise<Array<Atelier>> {
    return this.httpClient.get<Array<Atelier>>(this.url).toPromise();
    // return ['Jeudis 15 Octobre 2020', '12 Novembre 2020', '10 Décembre 2020'].map(date => new Atelier(date));
  }

  updateAtelier(atelier: Atelier) {
    return this.httpClient.put(`${this.url}/${atelier.id}`, atelier).toPromise();
  }

  deleteAtelier(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`).toPromise();
  }

  createAtelier(atelier: Atelier) {
    return this.httpClient.post<Atelier>(this.url, atelier).toPromise();
  }
}

export class Atelier {
  constructor(
    public id: string,
    public date: Date
  ) {
  }
}
