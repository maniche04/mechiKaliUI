import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SectorsPageComponent } from './sectors-page/sectors-page.component';
import { OurTeamPageComponent } from './our-team-page/our-team-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'sectors', component: SectorsPageComponent},
  { path: 'team', component: OurTeamPageComponent},
  { path: 'gallery', component: GalleryPageComponent},
  { path: 'blog', component: BlogPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
