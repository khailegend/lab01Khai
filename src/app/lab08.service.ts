import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Guitar } from 'src/models/guitar';
import { Observable, ObservableLike, ObservedValueOf } from 'rxjs';
import { of } from 'rxjs';
import { fakeGuitar } from '../assets/fakeguitar'

 



@Injectable({
  providedIn: 'root'
})
export class Lab08Service {

  private _url: string ="/assets/guitar.json";

  constructor(private http: HttpClient) { 

  }

  getGuitar(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>(this._url);
  };

  getGuitarById(id: number ):Observable<Guitar>{
    return of(fakeGuitar.find(guitar => guitar.id === id ));
    
  };

}
