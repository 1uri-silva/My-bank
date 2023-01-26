import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/api.service';

interface Banks {
  ispb: string;
  name: string;
  fullName: string;
  code: number;
}

@Component({
  selector: 'app-choose-bank',
  templateUrl: './choose-bank.component.html',
  styleUrls: ['./choose-bank.component.sass'],
})
export class ChooseBankComponent implements OnInit {
  banks: Banks[] = [];
  code: number | null = null;
  bank: Banks | null = null;

  constructor(private allBank: BankService) {
    this.getAllBank();
  }

  ngOnInit(): void {}

  getAllBank(): void {
    this.allBank.getAllBank().subscribe((bank) => (this.banks = bank));
  }

  getBankByCode(code: string): void {
    this.allBank
      .getBankByCode(Number(code))
      .subscribe((bank) => (this.bank = bank));
  }
}
