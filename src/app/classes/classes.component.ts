import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from 'app/constants/constants';
import { PeriodicElement } from 'app/student/student.component';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'teacher', "studentCount", 'note', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // define form group
  myForm: FormGroup;

  name = "";
  selectedParent = "";

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;

    this.myForm = new FormGroup({
      name: new FormControl("angular@gmail.com", [Validators.required]),
      bday: new FormControl("abcd1234"),
      parent: new FormControl(""),
   });
  }

  createStudent(data) {
    console.log("createing....", this.name, this.selectedParent)
    
  }
}