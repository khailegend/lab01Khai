import { Component, OnInit, Input } from '@angular/core';
//router

import {Location} from '@angular/common';
import {Lab08Service} from '../../lab08.service';
import {Guitar} from '../../../models/guitar';
import { ActivatedRoute} from '@angular/router'; 
import { ParamMap} from '@angular/router'; 
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() guitar : Guitar ;

  constructor(
    private route: ActivatedRoute,
    private Lab08Service : Lab08Service,
    private location : Location,
  
  ) { }

  ngOnInit() {
    
    this.loadDetail();
    
  }

  loadDetail() {
    const guitarId = +this.route.snapshot.paramMap.get('id');
    this.Lab08Service.getGuitarById(guitarId).subscribe(guitar => this.guitar = guitar);
  }

  
  

  //getDetailfromRoute(): void {
    //const id = +this.route.snapshot.paramMap.get('id'); 
  //}

  goBack(): void {
    this.location.back();
  }

}
