import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
import { StudentComponent } from 'app/student/student.component';
import { ClassesComponent } from 'app/classes/classes.component';
import { ParentComponent } from 'app/parent/parent.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { FoodMenuComponent } from 'app/food-menu/food-menu.component';
import { NotificationDetailComponent } from 'app/notification-detail/notification-detail.component';
import { TeacherComponent } from 'app/teacher/teacher.component';
import { FeePaymentComponent } from 'app/fee-payment/fee-payment.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatRadioModule,
    MatStepperModule
  ],
  declarations: [
    DashboardComponent,
    StudentComponent,
    ParentComponent,
    UserProfileComponent,
    ClassesComponent,
    TeacherComponent,
    FoodMenuComponent,
    NotificationDetailComponent,
    TableListComponent,
    NotificationsComponent,
    FeePaymentComponent
  ]
})

export class AdminLayoutModule {}
