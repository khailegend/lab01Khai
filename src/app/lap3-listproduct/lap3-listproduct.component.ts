import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap3-listproduct',
  templateUrl: './lap3-listproduct.component.html',
  styleUrls: ['./lap3-listproduct.component.css']
})
export class Lap3ListproductComponent implements OnInit {

  constructor() { }
  visibleImage = true;
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }
  searchText;
  listproducts = [
    {
      id: 1,
      name: "iphone",
      caption:"product 1",
      imageURL: "assets/images/logo.jpg"
    },
    {
      id: 2,
      name: "ipad",
      caption:"product 2",
      imageURL: "assets/images/logo.jpg"
    },
    {
      id: 3,
      name: "panasonic",
      caption:"product 3 ",
      imageURL: "assets/images/logo.jpg"
    }
    ,
    {
      id: 4,
      name: "dell",
      caption:"product 4 ",
      imageURL: "assets/images/logo.jpg"
    },
    {
      id: 5,
      name: "samsung galaxy",
      caption:"product 5 ",
      imageURL: "assets/images/logo.jpg"
    }
  ]
  ngOnInit() {
  }

}
