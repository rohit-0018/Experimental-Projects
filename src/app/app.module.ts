import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleDataService } from './article-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ArticleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
