import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/faq.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { FileUploadService } from 'app/shared/services/file-upload.service';
import { Difference } from '../../models/difference.model';
import { FAQ } from '../../models/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private alertService: AlertService, private fileUploadService: FileUploadService, private route: ActivatedRoute, private faqService: FaqService) { } 
  message: any;
  uploadedImageUrl: string;
  form: FormGroup;
  plan_id: number; 
  FAQResponse: FAQ []; 
  imageUrl = 'assets/imgs/home-banner.png';

  ngOnInit(): void {  
    this.getFAQ(); 
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
  
  getFAQ() {
    this.faqService.getFAQData()
    .subscribe(
      (response: FAQ []) => {                 
      this.FAQResponse = response;   
      }
    );
  }

  onSubmit() {  
    const body = {      
      title : this.form.value.title 
    };                  
    this.faqService.updateFAQ(body).subscribe(); 
  }

}
