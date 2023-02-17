import { Component, OnInit } from '@angular/core';
import { AllapiService } from 'src/app/service/allapi.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
allstudentdata:any;
  constructor(private allapi:AllapiService) { }

  ngOnInit(): void {
    this.getallstudent();
  }
getallstudent(){
this.allapi.getallstudentapi().subscribe((res)=>{
  this.allstudentdata = res;
  console.log(this.allstudentdata);
  
})
}

deletestudent(id:any){
  this.allapi.deletestudentapi(id).subscribe((res)=>{
    console.log(res);
    alert("data got deleted");
    
  })
}

}
