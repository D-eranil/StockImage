import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload'; 
import { HomeContentRoutes } from './home-content.routing';  
import { SharedMaterialModule } from 'app/shared/shared-material.module'; 
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { AlertComponent } from 'app/shared/services/alert/alert.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';
import { DiffereceComponent } from './components/differece/differece.component'; 
import { FaqComponent } from './components/faq/faq.component';
import { TodayComponent } from './components/today/today.component';
import { WhatWeProvideComponent } from './components/what-we-provide/what-we-provide.component';
import { FreeComponent } from './components/free/free.component'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    SharedMaterialModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    FlexLayoutModule,
    QuillModule.forRoot(),
    FileUploadModule,
    RouterModule.forChild(HomeContentRoutes),
  ],
  declarations: [TopBannerComponent, AlertComponent, WhatWeProvideComponent, SpotlightComponent, DiffereceComponent, FaqComponent, TodayComponent, FreeComponent],
})
  
export class HomeContentModule { }
