import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  year: any;
  studentOne: any;
  studentTwo: any;
  students: any = [];

  constructor(public _apiService: ApiService) {
    this.getStudents();
  }

  ngOnInit() {
  }

  addStudent(){
    console.log(this.year,this.studentOne,this.studentTwo);
    let data = {
      year : this.year,
      studentOne: this.studentOne,
      studentTwo: this.studentTwo,
    }

    this._apiService.addStudent(data).subscribe((res:any) =>{
      console.log("SUCCESS === ",res);
      this.year = '';
      this.studentOne = '';
      this.studentTwo = '';
      alert('SUCCESS');
      this.getStudents();
    },(error:any) =>{
      alert('ERROR');
      console.log("ERROR === ",error);

    })

  }

  getStudents(){
    this._apiService.getStudents().subscribe((res:any) =>{
      console.log("SUCCESS === ",res);
      this.students = res;
    },(error:any) =>{
      console.log("ERROR === ",error);

    })
  }

  _deleteStudent(id: any){
    this._apiService.deleteStudent(id).subscribe((res:any) =>{
      console.log("SUCCESS");
      this.getStudents();
    },(err:any) =>{
      console.log("ERROR");

    })
  }

  refreshPage(e:any){
    this.getStudents();
    setTimeout(() =>{
      console.log('Async operation has ended');
      e.target.complete();
    }, 2000);
  }
}
