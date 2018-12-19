import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-component',
  templateUrl: './buyer-component.component.html',
  styleUrls: ['./buyer-component.component.css']
})
export class BuyerComponentComponent implements OnInit {
  @Input('buyerPlans') buyerPlans: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  signupBuyer(data) {
    let selectedPlan;
    this.buyerPlans.forEach(plan => {
      if (plan.name === data) {
        selectedPlan = plan;
        this.router.navigate(['/auth/signup', selectedPlan._id]);
      }
    })
  }
}

