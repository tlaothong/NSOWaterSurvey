import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { QuestionnaireMenuPopoverComponent } from '../../components/questionnaire-menu-popover/questionnaire-menu-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    // used for an example of ngFor and navigation
    this.pages = [
      // test push
      { title: 'Zero', component: "ZeroPage" },
      { title: 'Commercial', component: "CommercialPage" },
      { title: 'Rice', component: "RicePage" },
      { title: 'Mushroom', component: "MushroomPage" },
      { title: 'Plumbing', component: "PlumbingPage" },
      { title: 'GroundWater', component: "GroundWaterPage" },
      { title: 'River', component: "RiverPage" },
      { title: 'FlowerCrop', component: "FlowerCropPage" },
      { title: 'HerbsPlant', component: "HerbsPlantPage" },
      { title: 'AnimalFarm', component: "AnimalFarmPage" },
      { title: 'Factorial', component: "FactorialPage" },
      { title: 'Disaster', component: "DisasterPage" },
      { title: 'Residential', component: "ResidentialPage" },
      { title: 'Buying', component: "BuyingPage" },
      { title: 'Disasterous', component: "DisasterousPage" },
      { title: 'Irrigation', component: "IrrigationPage" },
      { title: 'Rain', component: "RainPage" },
      { title: 'Dry-CropPlanting', component: "DryCropPlantingPage" },
      { title: 'RubberTree', component: "RubberTreePage" },
      { title: 'PerennialPlanting', component: "PerennialPlantingPage" },
      { title: 'WaterAnimalPlanting', component: "WaterAnimalPlantingPage" },
      { title: 'User', component: "UserPage" },
      { title: 'Pool', component: "PoolPage" },
    ];
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }
}
