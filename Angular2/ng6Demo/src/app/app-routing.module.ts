import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LifeCycleComponent} from './demos/life-cycle/life-cycle.component';
import {ChangeDetectionComponent} from './demos/change-detection/change-detection.component';
import {ViewEncapsulationComponent} from './demos/view-encapsulation/view-encapsulation.component';
import {FormComponent} from './demos/form/form.component';
import {DirectiveComponent} from './demos/directive/directive.component';
import {PipeComponent} from './demos/pipe/pipe.component';
import {ComponentCommunicationComponent} from './demos/component-communication/component-communication.component';
import {ObserevableComponent} from './demos/obserevable/obserevable.component';

const routes: Routes = [
  {
    path: 'lc',
    component: LifeCycleComponent
  },
  {
    path: 'cd',
    component: ChangeDetectionComponent
  },
  {
    path: 've',
    component: ViewEncapsulationComponent
  },
  {
    path: 'f',
    component: FormComponent
  },
  {
    path: 'd',
    component: DirectiveComponent
  },
  {
    path: 'p',
    component: PipeComponent
  },
  {
    path: 'cc',
    component: ComponentCommunicationComponent
  },
  {
    path: 's',
    component: ObserevableComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
