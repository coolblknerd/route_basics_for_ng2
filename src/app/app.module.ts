import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponentParam } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from './app.routing';
import { LoginGuard } from './login-guard';
import { UnsavedChangesGuard } from './unsavedChanges';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponentParam,
    ProductDescriptionComponent,
    SellerInfoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, LoginGuard, UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
