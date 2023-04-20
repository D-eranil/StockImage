import { Routes } from '@angular/router';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { WhatWeProvideComponent } from './components/what-we-provide/what-we-provide.component';
import { TodayComponent } from './components/today/today.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';
import { DiffereceComponent } from './components/differece/differece.component';
import { FaqComponent } from './components/faq/faq.component';
import { FreeComponent } from './components/free/free.component';

export const HomeContentRoutes: Routes = [
  {
    path: 'top-banner',     
    children: [
      {
        path: '',
        component: TopBannerComponent,
        data: { title: 'List', breadcrumb: 'LIST' }
      },
      { 
        path: 'edit/:id',
        component: TopBannerComponent,
        data: { title: 'Edit', breadcrumb: 'EDIT' }
      }
    ]
  },
  {
    path: 'what-we-provide',
    children: [ 
      {
        path: '',
        component: WhatWeProvideComponent,
        data: { title: 'Edit', breadcrumb: 'EDIT' }
      }  
    ]
  },
  {
    path: 'today',
    children: [
      {
        path: '',
        component: TodayComponent,
        data: { title: 'Edit', breadcrumb: 'EDIT' }
      }  
    ]
  },
  {
    path: 'spotlight',
    children: [
      {
        path: '',
        component: SpotlightComponent,
        data: { title: 'Edit', breadcrumb: 'EDIT' }
      }  
    ]  
  },
  {
    path: 'difference',
    children: [
      {
        path: '',
        component: DiffereceComponent,
        data: { title: 'Edit', breadcrumb: 'EDIT' }
      }  
    ]
  },
  {
    path: 'free',
    children: [
      {
        path: '',
        component: FreeComponent,
        data: { title: 'Edit', breadcrumb: 'EDIT' }
      }  
    ]
  },
  {
    path: 'faq',
    children: [
      {
        path: '',
        component: FaqComponent,
        data: { title: 'Edit', breadcrumb: 'EDIT' }
      }  
    ]
  },
];
  