import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ImageGalleryModule,
        AppRoutingModule
    ],
    providers: [
        {provide: GalleryConfig, useValue: 2}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
