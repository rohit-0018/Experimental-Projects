import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'Blogger';
  blogTitle = '';
  blogLogo = '';
  content = '';
  article = {};
  errorMessage = {message: ''};
  showErrorMessage = false;
  ngOnChanges() {
    // if (this.showErrorMessage) {setTimeout(() => this.showErrorMessage = false, 2000); }
  }
  saveFormData() {
    console.log('saving the form data in service or to a server');
    this.article =  {logo: this.blogLogo, title: this.blogTitle, content: this.content};
  }
  getErrorMessage(message) {
    this.errorMessage = message;
    this.showErrorMessage = true;
    if (this.showErrorMessage) {setTimeout(() => this.showErrorMessage = false, 5000); }
    console.log('errormessage');
  }
}
