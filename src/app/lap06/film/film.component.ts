import { Component, OnInit } from '@angular/core';
import { DetailfilmService } from '../detailfilm.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  url='https://swapi.co/api/films/';
  inforFilm: any;
  listFilms:any;

  constructor( private http: HttpClient , private service : DetailfilmService ) { }

  ngOnInit() {
    this.service.getdata().subscribe(data=>{
      this.inforFilm=data;
      this.listFilms= this.inforFilm.results;
    })
  }
 


}
