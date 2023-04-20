import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { FileUploader } from 'ng2-file-upload';
import { TopBanner } from '../../models/top-banner.model';
import { TopBannerService } from '../../services/top-banner.service';
import { environment } from 'environments/environment';
import { FileUploadService } from 'app/shared/services/file-upload.service';
import { AlertService } from 'app/shared/services/alert/alert.service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html', 
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {
  
  constructor(private alertService: AlertService, private fileUploadService: FileUploadService, private route: ActivatedRoute, private topBannerService: TopBannerService) { } 
  message: any;
  uploadedImageUrl: string;
  form: FormGroup; 
  plan_id: number;
  bannerResponse: TopBanner; 
  imageUrl = 'assets/imgs/home-banner.png';

  ngOnInit(): void {
    this.getBannerData();
 
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(25)
      ]),  
      subtitle: new FormControl('', [
        Validators.minLength(20),
        Validators.maxLength(100)
      ]),
      free_trial_title: new FormControl('', [
        Validators.minLength(20),
        Validators.maxLength(50)
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
  
  getBannerData() {
    this.topBannerService.getBannerData()
    .subscribe(
      (response: TopBanner) => {        
      this.bannerResponse = response;  
      this.form.patchValue({
        title: this.bannerResponse.title,     
        subtitle: this.bannerResponse.subtitle,     
        free_trial_title: this.bannerResponse.free_trial_title     
      });
      },                      
      (err) => {            
      console.log(err); 
      } 
      );
  }

  onSubmit() {  
      const body = {
        title : this.form.value.title,
        subtitle : this.form.value.subtitle,
        free_trial_title: this.form.value.free_trial_title,
        image_url : this.uploadedImageUrl ?? this.bannerResponse.image.url
      };         
      this.topBannerService.updateBannerData(body).subscribe(); 
  }

}
