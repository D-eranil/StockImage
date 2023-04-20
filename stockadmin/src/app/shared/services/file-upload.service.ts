import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { catchError, map, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
  
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  upload(fileToUpload: File) { 
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
     
    return this.http.post(`${environment.apiURL}/upload-image`, formData)
      .pipe(
        map((res: any) => { 
          return res;
        }),
        catchError((error) => {
          return throwError(() => new Error('something went wrong!'));
        })
      );
  }
}
