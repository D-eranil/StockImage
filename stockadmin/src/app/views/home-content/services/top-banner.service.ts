import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { environment } from 'environments/environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopBannerService {

  constructor(private http: HttpClient, private alertService: AlertService) { }

  getBannerData() {
    return this.http.get(`${environment.apiURL}/get-banner-data`)
    .pipe(
      map((res: any) => {     
        return res;
      }),
      catchError((error) => {    
        const errorMessage = 'something went wrong!';
        this.alertService.error(errorMessage); 
        return throwError(() => new Error(errorMessage));
      })                    
    );
  }

  updateBannerData(body) {
    return this.http.post(`${environment.apiURL}/update-banner-data`, body)
      .pipe(
        map((res: any) => {    
          this.alertService.success(res.message); 
        }),
        catchError((error) => {    
          const errorMessage = 'something went wrong!';
          this.alertService.error(errorMessage); 
          return throwError(() => new Error(errorMessage));
        })                    
      );
  }
}
