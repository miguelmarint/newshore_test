import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { ApiService } from './core/services/api.service';
import { FormComponent } from './core/pages/form/form.component';
import {RouteTableComponent} from '../app/core/pages/routeTable/routeTable.component';
import {CardComponent} from '../app/core/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RouteTableComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
