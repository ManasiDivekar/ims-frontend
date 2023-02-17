import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllapiService {

  constructor(private httpclient:HttpClient) { }
getallstudentapi(){
  return this.httpclient.get(`http://localhost:8080/student/all`);
}
studentregister(data:any){
  return this.httpclient.post(`http://localhost:8080/student/register`,data)
}
updatestudent(data:any){
  return this.httpclient.put(`http://localhost:8080/student/updateStudent`,data);
}
deletestudentapi(id:any){
  return this.httpclient.delete(`http://localhost:8080/student/${id}`);
}
}
