import { MainDishBuilder } from "./builder";

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();

  makeMeal1() {
    this.mainDishBuilder.makeMeal().makeDessert().meal;

    console.log(this.mainDishBuilder);
    console.log(this.mainDishBuilder.price);
  }

  makeMeal2() {
    this.mainDishBuilder.reset();
    this.mainDishBuilder.makeBeverage().meal;

    console.log(this.mainDishBuilder);
    console.log(this.mainDishBuilder.price);
  }
}
