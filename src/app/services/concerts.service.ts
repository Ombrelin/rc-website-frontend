import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {

  private url = "https://rc.arsenelapostolet.fr/api/Concert";

  constructor(private http: HttpClient) {
  }

  getConcerts(): Promise<Array<Concert>> {
    return this.http.get<Array<Concert>>(this.url).toPromise();
  }
}

export class Concert {
  constructor(public title: string,
              public date: string,
              public location: string,
              public artist: string,
              public description: string,
              public image: string,
              public flyer: string

  ) {

  }
}

