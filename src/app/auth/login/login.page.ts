import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usuario: string = '';
  public contrasena: string = ''; 
  constructor(private alertController: AlertController, public genericservice: GenericService) { }

  ngOnInit() {
     console.log('initLogin')
    this.genericservice.execQuery(' SELECT TOP 1 * FROM SISTEMA.DBO.USUARIOS  ').then(Response => {
      console.log(Response)
    })
  }

  iniciarSesion(){
    this.presentAlert();
  }

  async presentAlert() {
    if(this.usuario != "" || this.contrasena != ""){
      this.genericservice.execQuery('select * from sistema.dbo.usuarios where cve_tra = 21352')
    }else{
      const alert = await this.alertController.create({
        mode: 'md',
        header: 'Error',
        subHeader: 'Credenciales',
        message: 'Es necesario ingresar un usuario y contraseña.',
        buttons: ['Entendido'],
      });
      await alert.present();
      return;
    }
   }
}
