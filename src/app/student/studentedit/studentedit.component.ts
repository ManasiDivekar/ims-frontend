import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllapiService } from 'src/app/service/allapi.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {

  update = new FormGroup({
    'id' : new FormControl(''),
    'batchCode' : new FormControl(''),
  'firstName' : new FormControl(''),
  'lastName' : new FormControl(''),
  'mobile' :new FormControl(''),
  'email' : new FormControl(''),
  'address' : new FormControl(''),
  'course' : new FormControl(''),
  'dob' : new FormControl(''),
  'education' : new FormControl(''),
  'passingYear' : new FormControl(''),
  'gender' : new FormControl(''),
  'mentorId' : new FormControl(''),
  'createdOn' : new FormControl(''),
  'updatedOn' : new FormControl('')
  })
  constructor(private allapi:AllapiService) { }

  ngOnInit(): void {
  }
updateddata(){
  this.allapi.updatestudent(this.update.value).subscribe((res)=>{
    console.log(res);
    alert('data got updated.')
    
  })
}

}
