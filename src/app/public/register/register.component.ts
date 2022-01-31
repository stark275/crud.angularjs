import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  )
  { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }

  submit(){
    const formData = this.form.getRawValue()
    const data = {
      name: formData.name,
      email : formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,

    }

    this.http.post('http://localhost:8000/api/register',data).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.token)
        this.router.navigate(['/secure'])
      },

      error => {
        console.log('Error');
        console.log(error);
      }
    )

    // this.http.get('http://localhost:8000/api/products/1').subscribe(
    //   result => {
    //     console.log('Success');
    //     console.log(result);
    //   },
    //   error => {
    //     console.log('Error');
    //     console.log(error);
    //   }
    // )
  }

}
