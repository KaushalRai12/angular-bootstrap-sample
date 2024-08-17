import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'aboutUs', component:AboutusComponent}, 
    {path:'contactUs',component:ContactUsComponent}

];
