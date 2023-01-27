import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

interface Banks {
  ispb: string;
  name: string;
  fullName: string;
  code: number;
}
interface UserBank {
  code?: number;
  agency: number;
  account: string;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass'],
})
export class CreateAccountComponent implements OnInit {
  bank: Banks | undefined = undefined;

  constructor(private router: Router, private storage: LocalStorageService) {
    const state = this.router.getCurrentNavigation();
    this.bank = state?.extras.state?.['bank'];
  }

  ngOnInit(): void {}

  saveData(agency: string, account: string, code?: number): void {
    this.storage.set<UserBank>('@user-bank', {
      account,
      agency: Number(agency),
      code,
    });
    this.router.navigateByUrl('/');
  }
}
