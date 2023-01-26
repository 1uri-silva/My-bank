import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChooseBankComponent } from './choose-bank/choose-bank.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseBankComponent,
    CreateAccountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}


