import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  url = 'https://rc.arsenelapostolet.fr/api/Files';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  async upload(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return JSON.parse(await this.httpClient.post(this.url, formData,
      {
        responseType: 'text'
      }
    ).toPromise()).id;
  }

}
