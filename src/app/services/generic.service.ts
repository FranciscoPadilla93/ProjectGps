import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  url: string = '';
  constructor(private http: HttpClient, public alertController: AlertController) {
    this.url = environment.urlbackend
   }

    execQuery(body:any): Promise <void>{
      return new Promise((resolve, reject) => {
        this.http.post('http://200.76.187.147:3000/api/apps/exec',{body}).subscribe({
          next: (response:any) => {
            console.log('la petición fue exitosa')
            resolve(response);
          }, 
          error: (error) =>{
            console.log('ocurrió un error al hacer la petición')
            reject(error);
          }
        })
      })
    }


prueba(body:any){
  console.log()
  this.http.get('http://200.76.187.147:3000/api/apps/execute').subscribe((res:any)=>{
    
  })
}


  }

