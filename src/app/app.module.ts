import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { CoreModule } from "./core/core.module";
import { StoreModule } from "@ngrx/store";
import { environment } from "../environments/environment";
import { globalReducers } from "./core/store";
import { InternationalizationService } from "./core/services/internationalization.service";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormsModule } from '@angular/forms';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(globalReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ],
  providers: [InternationalizationService, { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
