import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ExpensePageComponent } from './pages/expense-page/expense-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoryService } from './services/category.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard], children: [
    { path: 'expense', component: ExpensePageComponent },
    { path: 'category', component: CategoryPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'expense' },
  ] },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    RegisterPageComponent,
    CategoryPageComponent,
    ExpensePageComponent,
    AddExpenseComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    CategoryService
  ],
  entryComponents: [
    AddExpenseComponent,
    AddCategoryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
