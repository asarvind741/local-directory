import {
  Component, AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements AfterViewInit, OnDestroy {

  @ViewChild('cardInfo') cardInfo: ElementRef;
  @Input('selectedPlan') any;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  constructor(
    private cd: ChangeDetectorRef,
    public activeModal: NgbActiveModal) { }

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

  onChange(error: any): void {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  closeModal(token: any): void {
    this.activeModal.close(token);
  }

  cancelNewUserAddition(): void {
  }

  clearModal(): void {
  }

}
