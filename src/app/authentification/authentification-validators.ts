import { AbstractControl } from '@angular/forms';

export class AuthentificationValidators {

  public static passwordValidator(control: AbstractControl) {
    let hasNumber = /\d/.test(control.value);
    let hasUpper = /[A-Z]/.test(control.value);
    let hasLower = /[a-z]/.test(control.value);
    let hasSpecialCaracter = /[&%$#@!?~]/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && hasSpecialCaracter;
    if (!valid) {
      let validationErrorMessage = "";
      if(!hasNumber){
        validationErrorMessage += "The password must contain at least 1 number \n"
      }
      if(!hasUpper){
        validationErrorMessage += "The password must contain at least 1 upper case \n"
      }
      if(!hasLower){
        validationErrorMessage += "The password must contain at least 1 lower case \n"
      }
      if(!hasSpecialCaracter){
        validationErrorMessage += "The password must contain at least 1 special caracter \n"
      }
      return { validationErrorMessage };
    }
    return null;
  }

  public static emailValidator(control: AbstractControl){
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const valid = EMAIL_REGEX.test(control.value);
    let validationErrorMessage = "";
    if(!valid){
      validationErrorMessage += "Email format is not correct \n"
      return { validationErrorMessage };
    }
    return null;
  }
}
