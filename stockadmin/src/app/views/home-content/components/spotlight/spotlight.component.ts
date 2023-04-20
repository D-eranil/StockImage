import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { FileUploadService } from 'app/shared/services/file-upload.service';
import { Today } from '../../models/today.model';
import { TodayService } from '../../services/today.service';
import { SpotlightService } from '../../services/spotlight.service';
import { Spotlight } from '../../models/spotlight.model';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {

  constructor(private alertService: AlertService, private fileUploadService: FileUploadService, private route: ActivatedRoute, private spotlightService: SpotlightService) { } 
  message: any;
  uploadedImageUrl: string;
  form: FormGroup;
  plan_id: number; 
  spotlightResponse: Spotlight []; 
  imageUrl = 'assets/imgs/home-banner.png';

  ngOnInit(): void {  
    this.getSpotlightData();
 
    this.form = new FormGroup({    
      title: new FormControl(''), 
      heading: new FormControl(''), 
      description: new FormControl('') 
    });
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
  
  getSpotlightData() {
    this.spotlightService.getSpotlightData()
    .subscribe(
      (response: Spotlight []) => {            
      this.spotlightResponse = response;   
      }
    );
  }

  onSubmit() {  
    const body = {      
      title : this.form.value.title 
    };                  
    this.spotlightService.updateSpotlight(body).subscribe(); 
  }

}
