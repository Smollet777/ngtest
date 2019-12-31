import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  sections = [
    {
      title: 'About app',
      description: 'Sandbox for angular Tips & Tricks. Trying to collect the best practices here.'
    },
    {
      title: 'About lorem',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n Modi esse placeat maxime, nobis repellat, odio ad eveniet harum,\n praesentium minus laboriosam dicta optio.\n Soluta at exercitationem, vitae obcaecati quod impedit adipisci optio quis iste deserunt quibusdam.\n At vitae magnam modi libero quod, perspiciatis velit eveniet sunt id! Reiciendis, suscipit nisi?'
    }
  ];


  ngOnInit() {
  }

}
