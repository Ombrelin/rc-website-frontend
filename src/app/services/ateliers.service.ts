import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AteliersService {

  constructor() {
  }

  getAteliers(): Array<Atelier> {
    return ['Jeudis 15 Octobre 2020', '12 Novembre 2020', '10 Décembre 2020'].map(date => new Atelier(date));
  }
}

export class Atelier {
  constructor(
    public date: string
  ) {
  }
}
