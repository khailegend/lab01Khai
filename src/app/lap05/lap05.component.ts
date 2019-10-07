import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap05',
  templateUrl: './lap05.component.html',
  styleUrls: ['./lap05.component.css']
})
export class Lap05Component implements OnInit {

  cd=null;
  cr=null;
  cv=null;
  dt=null;
  student = {
    hoten:null,
    ngaysinh:null,
    gioitinh:null,
    diem:null,
    hocluc:null
  };
  nhanvien = {
    hotennv:null,
    luong:null,
    gioitinhnv:null,
    dotuoi:null,
    thuong:null
  };
  list = [
    {
      age : "nhở hơn 25",
      rate: 0.07
    },
    {
      age : "từ 25 đến 40",
      rate: 0.1
    },
    {
      age : "trên 40",
      rate: 0.15
    }
  ];

  

  products = [
    {
      id: 1,
      name: "Nước Ngọt",
      price: 10000
    },
    {
      id: 2,
      name: "Coffee Đen",
      price: 20000
    },
    {
      id: 3,
      name: "Coca Cola",
      price: 12000
    },
    {
      id: 4,
      name: "Nước tăng lực",
      price: 13000
    }
  ]
  constructor() { }
  qualities ={}
 
  isSalary
  name
  salary
  gender
  groupAge

  onChangeName() {
    this.name = this.name.trim()
  }

  onChangeGender(gender) {
    this.gender = gender
  }

  onChangeSalary() {
    if (parseInt(this.salary).toString() !== this.salary.toString()) {
      this.isSalary = false
      this.salary = ""
  }
    else {
      this.isSalary = true
      if (this.salary)
        this.salary = parseInt(this.salary)
      else
        this.salary = ""
    }
  }
  

  ngOnInit() {
    this.products.map(product => {
      this.checked[product.id] = false
      this.quantity[product.id] = 0
    });
    this.salary = "" ;
  }
  checked = {}

  quantity = {}
  total =0;
  onChange(id) {
    console.log(parseInt(this.quantity[id]))
    if (!parseInt(this.quantity[id]))
      this.quantity[id] = 0
    else
      this.quantity[id] = parseInt(this.quantity[id])

    this.total = this.products.reduce((a, b) => {
      return a + b.price * this.quantity[b.id]
    }, 0)
  }
  
  tinh(){
    this.cv = (this.cd + this.cr)*2;
    this.dt =this.cd * this.cr;
  }
  tinhdiem(){
    if(this.student.diem < 5)
      this.student.hocluc ="rớt";
    else
      this.student.hocluc ="đậu";
  }

  tinhthuong(){
    let s = this.nhanvien.luong * this.nhanvien.dotuoi;
    if(this.nhanvien.gioitinhnv == "nu")
     s += 200000;
    return s;
  };

  
  
}
