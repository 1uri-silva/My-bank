import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Banks {
  ispb: string;
  name: string;
  fullName: string;
  code: number;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass'],
})
export class CreateAccountComponent implements OnInit {
  bank: Banks | undefined = undefined;

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation();
    this.bank = state?.extras.state?.['bank'];
  }

  ngOnInit(): void {}

  saveData(): void {
    this.router.navigateByUrl('/');
  }
}
