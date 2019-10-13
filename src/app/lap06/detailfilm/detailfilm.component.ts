import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailfilmService } from '../detailfilm.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detailfilm',
  templateUrl: './detailfilm.component.html',
  styleUrls: ['./detailfilm.component.css']
})
export class DetailfilmComponent implements OnInit {
  film: any;
  constructor(private router: ActivatedRoute, private http:HttpClient, private service : DetailfilmService) { }

  ngOnInit() {
    const url = this.router.snapshot.paramMap.get('url');
    this.service.geturl(url).subscribe(data =>{
      this.film=data;
    })
  }
  getFilmId(url:string)
  {
    return this.http.get(url);
  }
  Onback(){
    window.history.back();
    }    
}