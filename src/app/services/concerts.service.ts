import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Atelier} from './ateliers.service';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {
  url = 'https://rc.arsenelapostolet.fr/api/Concert';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getConcerts(): Promise<Array<Concert>> {
    return this.httpClient.get<Array<Concert>>(this.url).toPromise();
  }

  updateConcert(concert: Concert): Promise<Concert> {
    return this.httpClient.put<Concert>(`${this.url}/${concert.id}`, concert).toPromise();
  }

  deleteConcert(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`).toPromise();
  }

  createConcert(concert: Concert): Promise<Concert> {
    return this.httpClient.post<Concert>(this.url, concert).toPromise();
  }
}

export class Concert {
  constructor(public id?: string,
              public hours?: Array<string>,
              public title?: string,
              public dateTime?: string,
              public dateSure?: boolean,
              public location?: string,
              public locationSure?: boolean,
              public artist?: string,
              public description?: string,
              public image?: string,
              public flyer?: string

  ) {

  }
}

