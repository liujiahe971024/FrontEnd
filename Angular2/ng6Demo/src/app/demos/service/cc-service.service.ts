import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CcServiceService {

  p = {
    name: 'Alice',
    age: 39
  };

  constructor() { }
}
