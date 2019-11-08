import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient) { }

  obtenerData() {
    return this.http.get(
      ': https://misalbums/api/fotos'
    );
  }


}
