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

  constructor(private allBank: BankService) {
    this.getAllBank();
  }

  ngOnInit(): void {}

  getAllBank(): void {
    this.allBank.getAllBank().subscribe((bank) => (this.banks = bank));
  }
}
