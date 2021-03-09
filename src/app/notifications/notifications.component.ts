import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from 'app/api';
import { NotificationData } from 'app/api/model/notificationData';
import { PeriodicElement } from 'app/student/student.component';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  panelOpenState = true;

  listData: NotificationData[] = [];

  displayedColumns: string[] = ['id', 'title', 'poster', "postedDate", 'target', 'category', 'action'];
  dataSource = new MatTableDataSource<NotificationData>(this.listData);
  
  // define form group
  myForm: FormGroup;

  name = "";
  selectedParent = "";

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private teacherApi: TeacherService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getNotificationList();
    //this.dataSource.paginator = this.paginator;

    this.myForm = new FormGroup({
      name: new FormControl("angular@gmail.com", [Validators.required]),
      bday: new FormControl("abcd1234"),
      parent: new FormControl(""),
    });
    this.panelOpenState = true
  }

  closePanel(){
    this.panelOpenState = false;
  }

  // Get list of notification
  getNotificationList(){
    this.teacherApi.findNotificationByTeacherID(6).subscribe(
      (value) => {
        console.log(value);
        this.dataSource = new MatTableDataSource(value);
        this.dataSource.paginator = this.paginator;
      }
    )
    
  }
}
