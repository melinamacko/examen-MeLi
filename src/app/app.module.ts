import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrettyjsonPipe } from './prettyjson.pipe';
import  localeEsAr  from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';
registerLocaleData(localeEsAr,'es-Ar')
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    PrettyjsonPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [{provide:LOCALE_ID,useValue:'es-Ar'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
