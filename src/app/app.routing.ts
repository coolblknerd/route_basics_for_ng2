import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponentParam } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';

import { LoginGuard } from './login-guard';
import { UnsavedChangesGuard } from './unsavedChanges';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'chat', component: ChatComponent, outlet: 'aux'},
  { path: 'product/:id', component: ProductDetailComponentParam,
      children: [
        { path: '', component: ProductDescriptionComponent, canDeactivate: [UnsavedChangesGuard] },
        { path: 'seller/:id', component: SellerInfoComponent, canActivate: [LoginGuard] }
      ]}
];

export const routing = RouterModule.forRoot(routes);
