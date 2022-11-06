import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ArcModule } from './modules/arc/arc.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule.forRoot({ generateColors: false }),
    ArcModule,
    NgChartsModule, //TODO - to be lazy-loaded
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
