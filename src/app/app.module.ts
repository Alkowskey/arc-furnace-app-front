import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArcModule } from './modules/arc/arc.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule.forRoot({ generateColors: false }),
    ArcModule,
    SharedModule,
    NgChartsModule,
    BrowserAnimationsModule //TODO - to be lazy-loaded
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
