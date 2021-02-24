import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {
  
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
  
  export interface PeriodicElement {
    name: string;
    id: number;
    bday: string;
    sex: string,
    parent: string;
    note: string;
    class: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
    {id: 1, name: 'Nguyễn Tuấn Anh', bday: "12/09/2009", sex: "Nam", class: 'Lớp Mầm 1', parent: "Nguyễn Xuân Trường", note: ""},
  ];
  
