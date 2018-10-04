import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';
import { DemoNaComponent } from './demo-na/demo-na';
import { WaterSources8BComponent } from './water-sources8-b/water-sources8-b';
import { WaterSources9Component } from './water-sources9/water-sources9';

@NgModule({
	declarations: [WaterSources8AComponent,
    DemoNaComponent,
    WaterSources8BComponent,
    WaterSources9Component
    ],
	imports: [
        IonicPageModule.forChild(WaterSources8AComponent)
	],
	exports: [WaterSources8AComponent,
    DemoNaComponent,
    WaterSources8BComponent,
    WaterSources9Component
    ]
})
export class ComponentsModule {}
