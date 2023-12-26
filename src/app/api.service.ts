import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept",'application/json');
    this.headers.append("Content-Type",'application/json');
    this.headers.append('Access-Control-Allow-Origin','*');

  }

  addStudent(data: any){
    return this.http.post('http://localhost/PHP-IONIC-CRUD/backend/create.php',data)
    // return this.http.post('http://192.168.1.5/PHP-IONIC-CRUD/backend/create.php',data)
  }

  getStudents(){
    return this.http.get('http://localhost/PHP-IONIC-CRUD/backend/getStudents.php')
    // return this.http.get('http://192.168.1.5:3306/PHP-IONIC-CRUD/backend/getStudents.php')
  }
  deleteStudent(id: any){
    return this.http.delete('http://localhost/PHP-IONIC-CRUD/backend/delete.php?id='+id)
  }

  getStudent(id:any){
    return this.http.get('http://localhost/PHP-IONIC-CRUD/backend/getSingleStudent.php?id='+id)
  }

  updateStudent(id:any,data:any){
    return this.http.put('http://localhost/PHP-IONIC-CRUD/backend/updateStudent.php?id='+id,data)
  }
}
