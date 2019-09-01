import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  qualities = {}
  totalPrice() {
    let total = this.listProducts.reduce((sum, product) => {
      return (sum + parseFloat(product.price) * this.qualities[product.id])
    }, 0)
    debugger
    return total;
  }
  onClickIncrease(id) {
    if (this.qualities[id] < 50)
      ++this.qualities[id]
  }
  visibleImage = true;
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }
  searchText;
  listProducts = [
    {
      id: 1,
      productName: "Leaf Rake",
      price: "19.95",
      imageURL: "assets/images/leaf-rake.jpg"
    },
    {
      id: 2,
      productName: "Garden Cart",
      price: "32.99",
      imageURL: "../assets/images/garden-cart.jpg"
    },
    {
      id: 3,
      productName: "Hammer",
      price: "8.99",
      imageURL: "../assets/images/hammer.jpg"
    }
    ,
    {
      id: 4,
      productName: "Saw",
      price: "11.55",
      imageURL: "../assets/images/saw.jpg"
    },
    {
      id: 5,
      productName: "Video Game Controller",
      price: "35.95",
      imageURL: "../assets/images/videogamecontroller.jpg"
    }

  ]
  ngOnInit() {
    for (let product of  this.listProducts) {
     this.qualities[product.id] = 0
    }
  }

}
