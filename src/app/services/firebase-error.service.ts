import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() {}

    codeError(code: string) {
      switch (code) {
        //El correo ya existe
        case FirebaseCodeErrorEnum.EmailAlredyInUse:
          return 'El usuario ya existe';

          //Contraseña debil
        case FirebaseCodeErrorEnum.WeakPassword:
          return 'Contraseña muy debil';

          //Correo invalido
        case FirebaseCodeErrorEnum.InvalidEmail:
          return 'Correo invalido';

          //Contraseña incorrecta
        case FirebaseCodeErrorEnum.WrongPassword:
          return 'Contraseña incorrecta';

          //No existe usuario
          case FirebaseCodeErrorEnum.UserNotFound:
          return 'Usuario no existe';

          //Default
        default:
          return 'Error desconocido';
      }
    }
}
