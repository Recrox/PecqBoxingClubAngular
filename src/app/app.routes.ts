import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { LoginComponent } from './pages/login/login.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';
import { MembersComponent } from './pages/members/members.component';
import { MemberDetailsComponent } from './pages/member-details/member-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },

    { path: 'weather-forecast', component: WeatherComponent },

    // Members
    { path: 'members', component: MembersComponent },
    { path: 'member-form', component: MemberFormComponent },
    { path: 'member-form/:id', component: MemberFormComponent },
    { path: 'member-details/:id', component: MemberDetailsComponent },

    { path: 'login', component: LoginComponent },
  ];


