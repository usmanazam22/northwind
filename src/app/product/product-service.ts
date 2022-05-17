import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from './product';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {

    //private categoryUrl = 'http://my-json-server.typicode.com/epam-dotnet-lab/northwind-rest-api/categories';
    //private categoryUrl = "api/category";
    private productUrl = "http://northwind.now.sh/api/products"
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    //return this.http.get(this.productUrl,httpOptions);
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  private initializeProduct(): IProduct {
    // Return an initialized object
    return {
        productId: null,
        productName: '',
        categoryId: null,
        unitPrice: null
    };
  }
}
