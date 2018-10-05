import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploaderService {
  private token: string;

  constructor(private httpClient: HttpClient) {
    this.token = null;
  }

  uploadImage(data) {
    console.log(data);
    let formData = new FormData(data);
    let headers = new HttpHeaders();
    headers.append('Authorization', this.token);
    return this.httpClient.post(
      'http://localhost:3000/cms/upload',
      formData,
      {
        reportProgress: true,
        observe: 'events',
        headers: headers
      });
  }
}
