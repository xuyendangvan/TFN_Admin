import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { StudentComponent } from 'app/student/student.component';
import { ParentComponent } from 'app/parent/parent.component';
import { TeacherComponent } from 'app/teacher/teacher.component';
import { FeePaymentComponent } from 'app/fee-payment/fee-payment.component';
import { ClassesComponent } from 'app/classes/classes.component';
import { NotificationDetailComponent } from 'app/notification-detail/notification-detail.component';
import { FoodMenuComponent } from 'app/food-menu/food-menu.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'student',        component: StudentComponent },
    { path: 'parent',         component: ParentComponent },
    { path: 'teacher',        component: TeacherComponent },
    { path: 'classes',        component: ClassesComponent },
    { path: 'fee-payment',    component: FeePaymentComponent },
    { path: 'food-menu',      component: FoodMenuComponent },
    { path: 'notification-detail',    component: NotificationDetailComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
