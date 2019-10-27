import { Component, OnInit } from '@angular/core';

import { Guitar } from '../../../models/guitar';
import { Lab08Service } from '../../lab08.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  guitar : Guitar []
  constructor( private _guitar: Lab08Service ) { }

  ngOnInit() {
    this._guitar.getGuitar()
    .subscribe( data => this.guitar = data);
    
  }
}

