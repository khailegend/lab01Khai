import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clickproduct',
  templateUrl: './clickproduct.component.html',
  styleUrls: ['./clickproduct.component.css']
})
export class ClickproductComponent implements OnInit {
  ID;
  product:any ;
  constructor(private route: ActivatedRoute) { }
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
    {
      id: 2,
      productName: "Garden Cart",
      code: "GDN-0023",
      available: "Mar 18, 2016",
      price: "32.99",
      starRating: "0.801",
      imageURL: "../assets/images/garden-cart.jpg"
    },
    {
      id: 3,
      productName: "Hammer",
      code: "TBX-0048",
      available: "Mar 21, 2016",
      price: "8.99",
      starRating: "0.96",
      imageURL: "../assets/images/hammer.jpg"
    }
    ,
    {
      id: 4,
      productName: "Saw",
      code: "TBX-0022",
      available: "Mar 15, 2016",
      price: "11.55",
      starRating: "0.78",
      imageURL: "../assets/images/saw.jpg"
    },
    {
      id: 5,
      productName: "Video Game Controller",
        code: "GMG-0042",
      available: "Oct 15, 2015",
      price: "35.95",
      starRating: "0.9",
      imageURL: "../assets/images/videogamecontroller.jpg"
    }

  ]
  ngOnInit() {
    this.route.paramMap.subscribe(para =>
      {
      this.ID =+ para.get('productid');
    });
    this.product = this.listProducts.find(p => p.id === this.ID)
  }

  


}
