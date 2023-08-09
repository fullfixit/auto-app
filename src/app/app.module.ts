import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetComponent } from "./component/widget/widget.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    
    imports: [
        BrowserModule,
        WidgetComponent
    ]
})
export class AppModule { }
