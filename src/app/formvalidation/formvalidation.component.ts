import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validator, Validators,AbstractControl}from '@angular/forms'

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

RegisterForm:FormGroup;
fnames='ganesh'
constructor(private fb:FormBuilder) { 
this.Register();

  }
firstname=''
Register()
{
  this.RegisterForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_]{2})[^_.].*[^_.]$'),Validators.minLength(8),Validators.maxLength(20)]],
    firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(5),Validators.maxLength(20)]],
    dob:['',[Validators.required]],
    age:['',[Validators.pattern('([1-9]{1,2}[0]?|100)'),Validators.maxLength(3)]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/),Validators.minLength(8),Validators.maxLength(16)]],
    confirmpassword:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
   },
   {
    validator: (this.MustMatch('password', 'confirmpassword'), this.Namematch('firstname'))
  }
  
  )

}
ageValidator (control: AbstractControl):{[key: string]: boolean} | null {

  if( control.value !==null && (isNaN(control.value) || control.value <20  || control.value> 70)){
    return {'ageValidator': true}
  }
  return null;
};
Arrname=[
  {"name":"ganesh","age":"21"},
  {"name":"mani","age":"23"},
  {"name":"babu","age":"18"}]

Namematch(controlName:string)
{ 
  return(formGroup:FormGroup)=>{
    const name=formGroup.controls[controlName];
 
    if(name.value==this.fnames)
    {
      name.setErrors({Namematch:true})
    }
    else{
      name.setErrors(null);
    }
 
   
  }
}

MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
agecall()
{
  alert((this.RegisterForm.value.dob).getFullYear())
}


registerSubmit()
{
  if(this.RegisterForm.invalid)
  {
    return;
  }

let body={
  name:this.RegisterForm.value.name,
  Firstname:this.RegisterForm.value.firstname,
  age:this.RegisterForm.value.age,
  dob:this.RegisterForm.value.dob,
  email:this.RegisterForm.value.email


}

alert(JSON.stringify(body))
}
  ngOnInit(): void {
  }


}
