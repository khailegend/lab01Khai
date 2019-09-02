import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickproduct',
  templateUrl: './clickproduct.component.html',
  styleUrls: ['./clickproduct.component.css']
})
export class ClickproductComponent implements OnInit {

  constructor() { }
  visibleImage = true;
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }
  searchText;
  listProducts = [
    {
      id: 1,
      productName: "Leaf Rake",
      code: "GDN-0011",
      description: "Leaf rake with 48-inch wooden handle",
      available: "Mar 19, 2016",
      price: "19.95",
      starRating: "0.61",
      imageURL: "../assets/images/leaf-rake.jpg"
    },

  ]
  ngOnInit() {
  }


}
