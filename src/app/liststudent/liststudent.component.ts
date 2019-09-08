import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {

  constructor() { }
  searchText;
  listStudents = [
    {
      id: 1,
      Firstname: "Cong",
      Lastname: "Ngo",
      Email: "ntcong@tma.com.vn"
    },
    {
      id: 2,
      Firstname: "Thuy",
      Lastname: "Thanh",
      Email: "aa@gmail.com"
    },
    {
      id: 3,
      Firstname: "Thanh",
      Lastname: "Thuy",
      Email: "thanhthuy@gmail.com"
    }
    ,
    {
      id: 4,
      Firstname: "Qui",
      Lastname: "Tran",
      Email: "quitran@tma.com.vn"
    },
    {
      id: 5,
      Firstname: "Nguyen",
      Lastname: "Tran",
      Email: "ttnguyen1@tma.com.vn"
    }

  ]
  ngOnInit() {
  }

}
