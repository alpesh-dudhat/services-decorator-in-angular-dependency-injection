import { Injectable } from '@angular/core';
import { PersonalService } from './personal.service';

@Injectable()
export class UsersService {
  userQual: string = '';
  constructor(private personalInfo: PersonalService) {
    this.userQual = this.personalInfo.getPersonalInfo().qualification;
  }

  getData() {
    return {
      name: 'Alpesh Dudhat',
      Age: '30',
      mail: 'admin@gmail.com',
      qualification: this.userQual,
    };
  }
}
