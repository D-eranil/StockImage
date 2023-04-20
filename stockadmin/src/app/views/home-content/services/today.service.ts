import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { environment } from 'environments/environment';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodayService {

  constructor(private http: HttpClient, private alertService: AlertService) { }

  getTodayData() {
    return this.http.get(`${environment.apiURL}/get-today`)
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

  updateWhatWeProvide(body) {
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
