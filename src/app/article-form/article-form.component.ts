import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from '../article-data.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {
  title = 'Blogger';
  showBlogTitle = true;
  showPreview = false;
  blogTitle = '';
  blogLogo = '';
  content = '';
  articles = {};
  displayMessage = {message: '', class: []};
  showErrorMessage = false;
  constructor(private articleDataService: ArticleDataService) { this.articles = this.articleDataService.getArticles(); }
  saveFormData() {
    console.log('saving the form data in service or to a server');
    if ( !(this.blogLogo && this.blogTitle && this.content) ) {
      this.sendMessage(`All fields are required`, ['alert', 'alert-danger']);
    } else {
      this.sendMessage('successfully saved', ['alert', 'alert-success']);
      this.articleDataService.addArticle({blogLogo: this.blogLogo, blogTitle: this.blogTitle, content: this.content});
    }
  }
  sendMessage(message, className = ['alert', 'alert-secondary']) {
    this.displayMessage.message = message;
    this.displayMessage.class = className;
    this.showErrorMessage = true;
    if (this.showErrorMessage) {setTimeout(() => this.showErrorMessage = false, 5000); }
    console.log('errormessage', this.displayMessage);
  }

}
