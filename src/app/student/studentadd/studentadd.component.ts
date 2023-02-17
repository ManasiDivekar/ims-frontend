import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllapiService } from 'src/app/service/allapi.service';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {

  register = new FormGroup({
  'firstName' : new FormControl(''),
  'lastName' : new FormControl(''),
  'mobile' :new FormControl(''),
  'email' : new FormControl(''),
  'address' : new FormControl(''),
  'course' : new FormControl(''),
  'dob' : new FormControl(''),
  'education' : new FormControl(''),
  'passingYear' : new FormControl(''),
  'gender' : new FormControl('')
 })
  constructor(private allapi:AllapiService) { }

  ngOnInit(): void {
  }
registerstudent(){
  this.allapi.studentregister(this.register.value).subscribe((res)=>{
    console.log(res);
    alert("data saved successfully.")
  })
}


}
