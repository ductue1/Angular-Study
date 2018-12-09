import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Router
import { RouterModule, Routes } from '@angular/router';
//HttpRequest
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { CartitemComponent } from './cart/cartitem/cartitem.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', redirectTo: '', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: '**', redirectTo: 'index', pathMatch: 'full' },
  { path: 'cart', component: CartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContactComponent,
    ProductsComponent,
    IndexComponent,
    CartComponent,
    CartitemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
