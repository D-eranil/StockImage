import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { FileUploader } from 'ng2-file-upload';
import { TopBanner } from '../../models/top-banner.model';
import { TopBannerService } from '../../services/top-banner.service';
import { environment } from 'environments/environment';
import { FileUploadService } from 'app/shared/services/file-upload.service';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { WhatWeProvideService } from '../../services/what-we-provide.service';
import { WhatWeProvide } from '../../models/what-we-provide.model';
import { TodayService } from '../../services/today.service';
import { Today } from '../../models/today.model';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(private alertService: AlertService, private fileUploadService: FileUploadService, private route: ActivatedRoute, private todayService: TodayService) { } 
  message: any;
  uploadedImageUrl: string;
  form: FormGroup;
  plan_id: number;
  todayResponse: Today; 
  imageUrl = 'assets/imgs/home-banner.png';

  ngOnInit(): void {  
    this.getTodayData();
 
    this.form = new FormGroup({
      title: new FormControl(''), 
      heading: new FormControl(''), 
      description: new FormControl('') 
    })
  } 
  uploadFile(files: FileList) { 
    const fileToUpload: File | null = files.item(0);
    this.fileUploadService.upload(fileToUpload).subscribe(
      (data: any) => {
      this.uploadedImageUrl = data.image_url;
      this.imageUrl = this.uploadedImageUrl; 
      }, error => {
        console.log(error);
      });
  } 
  
  getTodayData() {
    this.todayService.getTodayData()
    .subscribe(
      (response: Today) => {         
      this.todayResponse = response;  
      this.form.patchValue({        
        title: this.todayResponse.title,
        heading: this.todayResponse.heading,
        description: this.todayResponse.description
      });
      });
  }

  onSubmit() {  
    const body = {
      title : this.form.value.title 
    };         
    this.todayService.updateWhatWeProvide(body).subscribe(); 
  }


}
