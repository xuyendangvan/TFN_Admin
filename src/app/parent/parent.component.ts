import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA, PeriodicElement } from 'app/constants/constants';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'avatar', 'name', 'bday', "sex", 'parent', 'class', 'note', 'action'];
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