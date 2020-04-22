import { Component, OnInit } from '@angular/core';
import { contactDetail } from "./../contact";
import { contacts } from "./../contacts";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contacts: contactDetail[];

  ngOnInit(): void {
    this.contacts=contacts;
  }

}
