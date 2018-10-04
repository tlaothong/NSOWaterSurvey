import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';
import { DemoNaComponent } from './demo-na/demo-na';
import { PoolComponent } from './pool/pool';

@NgModule({
	declarations: [WaterSources8AComponent,
    DemoNaComponent,
    PoolComponent
    ],
	imports: [
        IonicPageModule.forChild(WaterSources8AComponent)
	],
	exports: [WaterSources8AComponent,
    DemoNaComponent,
    PoolComponent
    ]
})
export class ComponentsModule {}
