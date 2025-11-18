import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import {App} from './app';
import { HttpErrorInterceptorService } from './interceptors/http-error-interceptor.service.service';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ToastrModule } from 'ngx-toastr';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, RouterModule,
    // ToastrModule.forRoot({
    //   timeOut: 10000,
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true,
    // }),
  ],
  
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: HttpErrorInterceptorService,
  //     multi: true,
  //   },
  // ],
  bootstrap: [App],
})
export class AppModule {}