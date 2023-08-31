import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetComponent } from "./component/widget/widget.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./component/header/header.component";
import { VolumeDirective } from './volume.directive';



@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        WidgetComponent,
        AppRoutingModule,
        HttpClientModule,
        HeaderComponent
    ]
})
export class AppModule { }
