import {
  Component, OnInit, AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var stripe: any;
declare var elements: any;

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css']
})
export class StripePaymentComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  @Input('selectedPlan') selectedPlan: any;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  constructor(
    private cd: ChangeDetectorRef,
    public activeModal: NgbActiveModal) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };
    this.card = elements.create('card', { style });
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy(): void {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit() {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
    } else {
      this.closeModal(token);
      // ...send the token to the your backend to process the charge
    }
  }

  closeModal(token) {
    this.activeModal.close(token);
  }

  cancelNewUserAddition() {
  }

  clearModal() {
  }
}
