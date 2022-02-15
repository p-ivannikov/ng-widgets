import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiRootModule,
  TuiNotificationsModule,
  TUI_SANITIZER
} from "@taiga-ui/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SystemModule } from './components';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  apiBasePathFactory,
  API_BASE_PATH,
  AuthentificationInterceptor,
  yandexIdFactory,
  YANDEX_ID
} from './core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiNotificationsModule,
    SystemModule
  ],
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthentificationInterceptor,
      multi: true
    },
    {
      provide: API_BASE_PATH,
      useFactory: apiBasePathFactory
    },
    {
      provide: YANDEX_ID,
      useFactory: yandexIdFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
