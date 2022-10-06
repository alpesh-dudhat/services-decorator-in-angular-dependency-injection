import { Injectable } from '@angular/core';

// @Injectable()
export class PersonalService {
  constructor() {}
  getPersonalInfo() {
    return {
      qualification: 'Graduate',
      nationality: 'india',
    };
  }
}
