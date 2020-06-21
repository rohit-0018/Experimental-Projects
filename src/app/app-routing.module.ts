import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './article-form/article-form.component';


const routes: Routes = [
  { path: 'articles', component: ArticleComponent},
  { path: 'form', component: ArticleFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
