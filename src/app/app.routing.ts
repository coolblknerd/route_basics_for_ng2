import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponentParam } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { LoginGuard } from './login-guard';
import { UnsavedChangesGuard } from './unsavedChanges';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponentParam,
      children: [
        { path: '', component: ProductDescriptionComponent, canDeactivate: [UnsavedChangesGuard] },
        { path: 'seller/:id', component: SellerInfoComponent, canActivate: [LoginGuard] }
      ]}
];

export const routing = RouterModule.forRoot(routes);
