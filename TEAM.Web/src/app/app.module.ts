import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ManageRolesComponent } from './components/admin/manage-roles/manage-roles.component';
import { ManageUserComponent } from './components/admin/manage-user/manage-user.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { NotificationComponent } from './components/common/notification/notification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './components/dashboard/dashboard.service';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { EditTaskComponent } from './components/task/edit-task/edit-task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ServerListComponent } from './components/user/server-list/server-list.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { AuthenticationInterceptor } from './interceptors/authenticationInterceptor';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    TaskListComponent,
    EditTaskComponent,
    AddTaskComponent,
    UserListComponent,
    ManageUserComponent,
    ManageRolesComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    ServerListComponent,
    DropdownDirective,
    LoaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },

      // login
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },

      // server
      {
        path: 'server-list',
        component: ServerListComponent
      },

      // tasks
      {
        path: 'task-list',
        component: TaskListComponent
      },
      {
        path: 'edit-task',
        component: EditTaskComponent
      },
      {
        path: 'add-task',
        component: AddTaskComponent
      }
    ])
  ],
  providers: [
    DashboardService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
