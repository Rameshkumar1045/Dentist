import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { LogComponent } from './log/log.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { DentistComponent } from './dentist/dentist.component';

const routes: Routes = [{path:"",component:MainComponent},
{path:"contact",component:ContactComponent},
{path:"log",component:LogComponent},
{path:"pricing",component:PricingComponent},
{path:"service",component:ServiceComponent},
{path:"about",component:AboutComponent},
{path:"dentist",component:DentistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
