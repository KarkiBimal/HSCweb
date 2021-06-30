import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { SendMailServiceService } from '../send-mail.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public subscription: Subscription | undefined;
  constructor(private sendmailservice: SendMailServiceService,
              private fb: FormBuilder) { }

  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ],

    message: ['', [
      
    ]
    ],

    file: ['', [
      
    ]
    ]
  });

  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }
  get message() { return this.infoForm.get('message'); }
  get file() { return this.infoForm.get('contact_upload'); }



  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}