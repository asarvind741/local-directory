import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'braintree-web';
import { hostedFields } from 'braintree-web';

import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-braintree-payment',
  templateUrl: './braintree-payment.component.html',
  styleUrls: ['./braintree-payment.component.css']
})
export class BraintreePaymentComponent implements OnInit {

  donationId: Number = 25;;
  private clientToken: String = 'ABC';

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router) { }

  createPayment() {
    const self = this;
    client.create({
      authorization: this.clientToken
    },
      function (clientErr: any, clientInstance: any) {
        if (clientErr) {
          return;
        }
        self.createHostedFields(clientInstance);
      });
  }

  createHostedFields(clientInstance) {
    var self = this;
    hostedFields.create({
      client: clientInstance,
      styles: {
        'input': {
          'font-size': '14px'
        },
        'input.invalid': {
          'color': 'red'
        },
        'input.valid': {
          'color': 'green'
        }
      },
      fields: {
        number: {
          selector: '#card-number',
          placeholder: '4111 1111 1111 1111'
        },
        cvv: {
          selector: '#cvv',
          placeholder: '123'
        },
        expirationDate: {
          selector: '#expiration-date',
          placeholder: '10/2019'
        }
      }
    },
      function (hostedFieldsErr, hostedFieldsInstance) {
        if (hostedFieldsErr) {
          console.error(hostedFieldsErr);
          return;
        }
        self.handleHostedFields(hostedFieldsInstance);
      })
  }

  handleHostedFields(hostedFieldsInstance) {
    const self = this;
    document.querySelector('#cardForm').addEventListener('submit',
      function (event: any) {
        event.preventDefault();
        const checkoutURL = 'api/checkout';
        hostedFieldsInstance.tokenize(function (tokenizeErr: any, payload) {
          if (tokenizeErr) {
            alert("Some payment input fields are invalid.");
            return;
          }
          console.log('Got a nonce: ' + payload.nonce);
          console.log('URL: ' + checkoutURL);
          self.paymentService.checkout(checkoutURL, payload.nonce, self.donationId.toString()).subscribe({
            next: res => {
              alert("Thank you very much for your donation");
              console.log(res);
            },
            error: err => {
              alert("Your payment was declined")
              console.log("api error" + err);
            },
          });
        });
      });
  };

  ngOnInit():void {
    this.createPayment();
  }



}
