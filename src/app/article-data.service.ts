import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  private articles: any[];
  getArticles() {
    return this.articles;
  }
  public addArticle( newArticle: any) {
    this.articles.push(newArticle);
  }
  constructor() {this.articles = [{
    blogLogo: 'Mo',
    blogTitle: 'Mock data in service',
    content: 'random blog from dkfdk dkfjdkf kdfkf dkflakd kjd skjdf ksdkf kdfdandom blog from dkfdk dkfjdkf kdfkf dkflakd kjd skjdf ksdkf kdfd',
  }, {
    blogLogo: 'Mo',
    blogTitle: 'Mock Blog',
    content: 'random blog from dkfdk dkfjdkf kdfkf dkflakd kjd skjdf ksdkf kdfdandom blog from dkfdk dkfjdkf kdfkf dkflakd kjd skjdf ksdkf kdfd',
  }]; }
}
