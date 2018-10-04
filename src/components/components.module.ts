import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';
import { DemoNaComponent } from './demo-na/demo-na';

@NgModule({
	declarations: [WaterSources8AComponent,
    DemoNaComponent
    ],
	imports: [
        IonicPageModule.forChild(WaterSources8AComponent)
	],
	exports: [WaterSources8AComponent,
    DemoNaComponent
    ]
})
export class ComponentsModule {}
