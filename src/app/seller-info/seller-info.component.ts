import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'seller',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent {

  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.params['id'];
    console.log("The SellerInfoComponent got the seller id ${{ this.sellerID }}");
  }

}
