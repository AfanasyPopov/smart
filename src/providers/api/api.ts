import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent, HttpEventType ,HttpErrorResponse,} from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
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
    return this.httpCli.post(this.url + '/' + endpoint, data, {
      headers: headers,
      params: new HttpParams().set('id', '3'),
    })
    /*
    .subscribe(res => {
      console.log("Response: ");
      console.log(res);

      let  toast = this.toastCtrl.create({
        message: 'POST request done successfull.',
        duration: 3000,
        position: 'bottom',
        cssClass:'success'
      });
      toast.present();
      return res;
    }, (err) => {
      console.log(err);
      let  toast = this.toastCtrl.create({
        message: 'POST request done ERROR.',
        duration: 3000,
        position: 'bottom',
        cssClass:'error'
      });
      toast.present();
    });
    */
    //return null;
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
    this.httpCli.post(this.url + '/' + endpoint,
    {
      "name": "morpheus",
      "job": "leader"
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
  longRequest() {

    const request = new HttpRequest(
        "POST", "/api/test-request", {}, 
         {reportProgress: true});

    this.httpCli.request(request)
        .subscribe(
            event => {

                if (event.type === HttpEventType.DownloadProgress) {
                    console.log("Download progress event", event);
                }

                if (event.type === HttpEventType.UploadProgress) {
                    console.log("Upload progress event", event);
                }

                if (event.type === HttpEventType.Response) {
                    console.log("response received...", event.body);
                }

            }
        );
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
