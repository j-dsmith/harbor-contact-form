import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css'],
})
export class FormSectionComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'),
    ]),
    companyName: new FormControl('', Validators.required),
    businessType: new FormControl(''),
  });

  contact = {
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    businessType: '',
  };

  formInvalid = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.status === 'VALID') {
      this.contact = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phoneNumber: this.contactForm.value.phoneNumber,
        companyName: this.contactForm.value.companyName,
        businessType: this.contactForm.value.businessType,
      };
      alert(
        `Name: ${this.contact.name}\nEmail: ${this.contact.email}\nPhone Number: ${this.contact.phoneNumber}\nCompany Name: ${this.contact.companyName}\nType of Business: ${this.contact.businessType}`
      );
    } else if (this.contactForm.status === 'INVALID') {
      this.formInvalid = true;
    }
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }
  get companyName() {
    return this.contactForm.get('companyName');
  }
  get businessType() {
    return this.contactForm.get('businessType');
  }
}
