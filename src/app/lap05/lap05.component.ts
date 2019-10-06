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

  nuocngot = {
    amount:0,
    dongia:null,
  };
  searchText;
  listdrinks = [
    {
      id: 1,
      namedrink : "Nước ngọt",
      price: 10000
    },
    {
      id: 2,
      namedrink : "Cà phê đen",
      price: 12000
    },
    {
      id: 3,
      namedrink : "Thuốc lá",
      price: 18000
    }
  ];
  constructor() { }
 
  

  ngOnInit() {
   
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

  totalmoney (){
    let s = this.nuocngot.dongia ;
    return s ;
  }
  
}
