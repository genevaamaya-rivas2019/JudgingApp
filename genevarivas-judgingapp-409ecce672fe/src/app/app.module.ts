
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { JudgepanelComponent } from './judgepanel/judgepanel.component';
import { FormpageComponent } from './formpage/formpage.component';
import { Criteria2Component } from './criteria2/criteria2.component';
import { Judgepanel2Component } from './judgepanel2/judgepanel2.component';
// import { NewComponentComponent } from './new-component/new-component.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'criteria', component: CriteriaComponent },
  { path: 'criteria2', component: Criteria2Component }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomepageComponent,
    CriteriaComponent,
    JudgepanelComponent,
    FormpageComponent,
    Criteria2Component,
    Judgepanel2Component,
    // NewComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
