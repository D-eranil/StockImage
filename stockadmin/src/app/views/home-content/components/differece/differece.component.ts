import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { FileUploadService } from 'app/shared/services/file-upload.service';
import { Spotlight } from '../../models/spotlight.model';
import { SpotlightService } from '../../services/spotlight.service';
import { DifferenceService } from '../../services/difference.service';
import { Difference } from '../../models/difference.model';

@Component({
  selector: 'app-differece',
  templateUrl: './differece.component.html',    
  styleUrls: ['./differece.component.scss']  
})                                          
export class DiffereceComponent implements OnInit {

  constructor(private alertService: AlertService, private fileUploadService: FileUploadService, private route: ActivatedRoute, private differenceService: DifferenceService) { } 
  message: any;
  uploadedImageUrl: string;
  form: FormGroup;
  plan_id: number; 
  differenceResponse: Difference; 
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
    this.differenceService.getDifferenceData()
    .subscribe(
      (response: Difference) => {            
      this.differenceResponse = response;   
      }
    );
  }

  onSubmit() {  
    const body = {      
      title : this.form.value.title 
    };                  
    this.differenceService.updateSpotlight(body).subscribe(); 
  }


}
