import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-lab07',
  templateUrl: './lab07.component.html',
  styleUrls: ['./lab07.component.css']
})
export class Lab07Component implements OnInit {

  @ViewChild('formAdd', null ) formadd: NgForm ;

  showFormEdit: boolean = false; selectStudentId = -1;
  


  searchText;
  formStudent = {

    

    fullName: String,

    birthday: new Date().toISOString().substring(0, 10),

    mark: 0,

  };

  students:  Student [] = [
    {

 

    fullName: 'Phan thị nở',

    birthday: new Date(2019, 2, 29),

    mark: 8
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }
  gradeStudent(student) {

    if (student.mark >= 0 && student.mark < 5) {

      return 'Yếu/Kém'

    } 
    else {
      if (5 <= student.mark && student.mark <= 8) 
      return 'Trung bình/Khá'
      if (student.mark > 8)
       return 'Giỏi/Xuất sắc'
    }

  };
  
  addStudent(value) {
    this.students.push(value);
    this.formadd.reset();
   
  };

  capnhat(thamso) {
    let fullName= thamso.getAttribute('data-fullName');
    let birthday= thamso.getAttribute('data-birthday');
    let mark = thamso.getAttribute('data-mark');
    this.formadd.setValue({
      fullName: fullName,
      birthday: birthday,
      mark : mark ,
    })

  };

 


  }


