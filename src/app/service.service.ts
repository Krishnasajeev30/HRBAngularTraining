import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from './class';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  saveCustomer(cust: Class): void{
    console.log(cust.id);
    console.log(cust.customer_name);
    console.log(cust.email_address);
    console.log(cust.phone_number);
    console.log(cust.taxi);
    console.log(cust.extras);
    console.log(cust.pickup_time);    
    console.log(cust.pickup_place);
    console.log(cust.dropoff_place);
    console.log(cust.comments);

    this.http.post('http://localhost:3000/custDetails', cust).subscribe(() =>
    console.log("Saved Successfully"));
  }
  getCustList(): Observable<any> {
      return this.http.get('http://localhost:3000/custDetails');
     }
}