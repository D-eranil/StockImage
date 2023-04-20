import { Component, OnInit } from '@angular/core';
import { Free } from '../../models/free.model';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from 'app/shared/services/file-upload.service';
import { Difference } from '../../models/difference.model';
import { DifferenceService } from '../../services/difference.service';
import { FreeService } from '../../services/free.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss']
})
export class FreeComponent implements OnInit {

  constructor(private alertService: AlertService, private fileUploadService: FileUploadService, private route: ActivatedRoute, private freeService: FreeService) { } 
  message: any;
  uploadedImageUrl: string;
  form: FormGroup;
  plan_id: number; 
  freeResponse: Free; 
  imageUrl = 'assets/imgs/home-banner.png';

  ngOnInit(): void {  
    this.getSpotlightData();
 
    this.form = new FormGroup({    
      title: new FormControl(''),  
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
    this.freeService.getFreeData()
    .subscribe(
      (response: Free) => {            
      this.freeResponse = response;   
      this.form.patchValue(
      {
        title: this.freeResponse.title,
        description: this.freeResponse.description
      }
      )
      }
    );
  }

  onSubmit() {  
    const body = {      
      title : this.form.value.title 
    };                  
    this.freeService.updateFree(body).subscribe(); 
  }

}
