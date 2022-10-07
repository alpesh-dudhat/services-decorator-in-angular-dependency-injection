import { Injectable } from '@angular/core';
console.log('personal service');
@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  constructor() {}
  getPersonalInfo() {
    return {
      qualification: 'Graduate',
      nationality: 'india',
    };
  }
}
