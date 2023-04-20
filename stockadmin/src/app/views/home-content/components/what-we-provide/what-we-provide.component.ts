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

@Component({
  selector: 'app-what-we-provide',
  templateUrl: './what-we-provide.component.html',
  styleUrls: ['./what-we-provide.component.scss']
})
export class WhatWeProvideComponent implements OnInit {
  
  constructor(private alertService: AlertService, private fileUploadService: FileUploadService, private route: ActivatedRoute, private whatWeProvideService: WhatWeProvideService) { } 
  message: any;
  uploadedImageUrl: string;
  form: FormGroup; 
  plan_id: number;
  whatWeProvideResponse: WhatWeProvide; 
  imageUrl = 'assets/imgs/home-banner.png';

  ngOnInit(): void {
    this.getWhatWePrivodeData();
 
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(20),
        Validators.maxLength(60)
      ]) 
    })
  } 
  uploadFile(files: FileList) { 
    const fileToUpload: File | null = files.item(0);
    this.fileUploadService.upload(fileToUpload).subscribe((data: any) => {
      this.uploadedImageUrl = data.image_url;
      this.imageUrl = this.uploadedImageUrl; 
      }, error => {
        console.log(error);
      });
  } 
  
  getWhatWePrivodeData() {
    this.whatWeProvideService.getWhatWeProvideData()
    .subscribe(
      (response: WhatWeProvide) => {         
      this.whatWeProvideResponse = response;  
      this.form.patchValue({
        title: this.whatWeProvideResponse.title    
      });
      } 
      );
  }

  onSubmit() {  
      const body = {
        title : this.form.value.title 
      };               
      this.whatWeProvideService.updateWhatWeProvide(body).subscribe(); 
  }


}
