import { Injectable, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, ReplaySubject } from 'rxjs';
import { PortalApiService } from './portal-api.service';
import { take } from 'rxjs/operators';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  readonly forecast$: Observable<any>;

  private readonly _forecast$$: ReplaySubject<any> = new ReplaySubject(1);

  constructor(
    private readonly portalApiService: PortalApiService
  ) {
    this.forecast$ = this._forecast$$.asObservable();
  }

  loadForecast(days?: number): void {
    this.portalApiService.getWeatherForecast(days)
      .pipe(
        untilDestroyed(this),
        take(1)
      )
      .subscribe(this._forecast$$);
  }
}
