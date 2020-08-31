import {LifeCycleComponent} from './app/demo/lift-cycle/lift-cycle.compoent';
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'lc',
    component: LifeCycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
