import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent, HttpEventType ,HttpErrorResponse,} from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
//import { bodyparser } from '../../../node_modules/body-parser'
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://185.63.32.215:8100';

  constructor(public httpCli: HttpClient,   public toastCtrl: ToastController ) {
    console.log('Hello RestServiceProvider Provider');
  }
  
  postData(endpoint: string, data:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    /*headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Accept");
    headers.append('Access-Control-Allow-Credentials', 'true');*/
    console.log(headers);
    return this.httpCli.post(
      this.url + '/' + endpoint,
       data, 
       { headers: headers, params: new HttpParams().set('id', '3'),reportProgress: true}
      )
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }


    return this.httpCli.get(this.url + '/' + endpoint, reqOpts);
  }
  addUser(endpoint: string, data:any) {
    this.httpCli.post(this.url + '/' + endpoint, data,{reportProgress:true})
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        }
      );
  }
  addUserLongRequest(endpoint: string, data:any) {

    const request = new HttpRequest(
        "POST", 
        this.url + '/' + endpoint, 
        data, 
        {reportProgress: true}
        );

   return this.httpCli.request(request)
} 
delUser(endpoint: string, data:any) {

  const request = new HttpRequest(
      "POST", 
      this.url + '/' + endpoint, 
      data, 
      {reportProgress: true}
      );

 return this.httpCli.request(request)
}

passRep(endpoint: string, data:any) {

  const request = new HttpRequest(
      "POST", 
      this.url + '/' + endpoint, 
      data, 
      {reportProgress: true}
      );

 return this.httpCli.request(request)
}


  post(endpoint: string, body: any, reqOpts?: any) {
    console.log('User.Login.post drove through...');
    return this.httpCli.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.httpCli.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.httpCli.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.httpCli.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
