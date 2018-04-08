import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { RestangularModule, Restangular } from 'ngx-restangular';
// import { RestangularConfigFactory } from './shared/restConfig';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {AppService}  from './app.service';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { ProfilePicComponent } from './header/profile-pic/profile-pic.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './signup/login/login.component';
import { AntikaSliderComponent } from './antika-slider/antika-slider.component';
import { ProductsComponent } from './products/products.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    ProfilePicComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AntikaSliderComponent,
    ProductsComponent,
    UserPageComponent,
    ProfilePageComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatToolbarModule
    //RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
