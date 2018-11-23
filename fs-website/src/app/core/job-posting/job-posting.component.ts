import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
<<<<<<< HEAD

=======
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    AOS.init()
=======
    AOS.init();
>>>>>>> fc4659e2cb20c526fe47a264494d62ef3ac0309d
  }

}
