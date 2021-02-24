import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AdminService } from './api/admin.service';
import { ClassService } from './api/class.service';
import { DeviceService } from './api/device.service';
import { FormService } from './api/form.service';
import { MenuService } from './api/menu.service';
import { NoticeService } from './api/notice.service';
import { NotificationService } from './api/notification.service';
import { ParentService } from './api/parent.service';
import { StatisticService } from './api/statistic.service';
import { StudentService } from './api/student.service';
import { TeacherService } from './api/teacher.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AdminService,
    ClassService,
    DeviceService,
    FormService,
    MenuService,
    NoticeService,
    NotificationService,
    ParentService,
    StatisticService,
    StudentService,
    TeacherService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
