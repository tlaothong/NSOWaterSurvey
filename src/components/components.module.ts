import { NgModule } from '@angular/core';
import { WaterSources8AComponent } from './water-sources8-a/water-sources8-a';
import { DemoNaComponent } from './demo-na/demo-na';

@NgModule({
	declarations: [WaterSources8AComponent,
    DemoNaComponent
    ],
	imports: [
	],
	exports: [WaterSources8AComponent,
    DemoNaComponent
    ]
})
export class ComponentsModule {}
