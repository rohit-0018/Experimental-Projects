import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ArticleDataService } from '../article-data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article = `
  You probably already know how integral the process of blogging is to the success of your marketing efforts. Which is why it goes without saying it's exceptionally important to learn how to effectively start and manage a blog in a way that supports your business.

  Without a blog, you'll find yourself experiencing a number of problems such as poor search engine optimization (SEO), lack of promotional content for social, little clout with your leads and customers, and fewer pages to share your lead-generating calls-to-action (CTAs) on.

  So why, oh why, do so many marketers I talk to still have a laundry list of excuses for why they can't maintain a blog?
  `;
  @Input()
  newArticle;

  @Output()
  errorMessage = new EventEmitter();
  articles = [];
  uniqueness = [];
  constructor(private articleDataService: ArticleDataService) {}

  ngOnInit(): void {
    this.articles = this.articleDataService.getArticles();
    // console.log(this.articles);
    // this.errorMessage.emit({message: 'Duplicate blog! please change the title'});
  }
  // ngOnChanges(): void {

  // }

}
