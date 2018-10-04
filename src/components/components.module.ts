import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';

@NgModule({
	declarations: [WaterSources8AComponent
    ],
	imports: [
		IonicPageModule.forChild(WaterSources8AComponent)
	],
	exports: [WaterSources8AComponent
    ]
})
export class ComponentsModule {}
