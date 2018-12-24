import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit {
  private subscriptionRoute: Subscription;
  orderId: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
     this.subscriptionRoute = this.route.params.subscribe((params: any) => {
      this.orderId = params['id'];
    }, error => {
      this.router.navigate(['/']);
      return;
    });
  }

}
