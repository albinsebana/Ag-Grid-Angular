import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdComponent } from './third/third.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondPageComponent,
    ThirdComponent,
    GridDemoComponent
  ],
  imports: [
    BrowserModule,
  
    AppRoutingModule,
    RouterModule, // Include RouterModule in imports array
    AgGridModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
