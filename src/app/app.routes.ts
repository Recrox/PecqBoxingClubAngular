import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { LoginComponent } from './pages/login/login.component';
import { MembersComponent } from './pages/member/members.component';
import { MemberFormComponent } from './member-form/member-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'weather-forecast', component: WeatherComponent },
    { path: 'members', component: MembersComponent },
    { path: 'member/:id', component: MemberFormComponent },
    { path: 'login', component: LoginComponent },
  ];


