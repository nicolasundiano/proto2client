import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  apiUrl = environment.apiUrl;
  validationErrors: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.apiUrl + 'errortest/notfound').subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    });
  }

  get500Error() {
    this.http.get(this.apiUrl + 'errortest/servererror').subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    });
  }

  get400Error() {
    this.http.get(this.apiUrl + 'errortest/badrequest').subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    });
  }

  get400ValidationError() {
    this.http.get(this.apiUrl + 'errortest/badrequest/fortytwo').subscribe({
      next: response => console.log(response),
      error: err => {
        console.log(err);
        this.validationErrors = err.errors;
      }
    });
  }
}
