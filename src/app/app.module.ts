import { CartsService } from './services/carts/carts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PreOrderComponent } from './components/pages/pre-order/pre-order.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DisplayComponent } from './components/pages/display/display.component';
import { TrackOrderComponent } from './components/pages/track-order/track-order.component';
import { LearnMoreComponent } from './components/pages/learn-more/learn-more.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';
import { HeaderScrollComponent } from './components/header-scroll/header-scroll.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    LeftSidebarComponent,
    HeaderComponent,
    RightSidebarComponent,
    HomeComponent,
    PreOrderComponent,
    AboutComponent,
    DisplayComponent,
    TrackOrderComponent,
    LearnMoreComponent,
    FooterComponent,
    FilterSidebarComponent,
    HeaderScrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlashMessagesModule ,
    RouterModule.forRoot([
      {
        path:'', component:HomeComponent
      },
      {
        path:'about', component:AboutComponent
      },
      {
        path:'product-category/display', component:DisplayComponent
      },
      {
        path:'pre-order', component:PreOrderComponent
      },
      {
        path:'track-order', component:TrackOrderComponent
      },
      {
        path:'learn-more', component:LearnMoreComponent
      }
    ])
  ],
  providers: [CartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
