import {Injectable} from '@angular/core';
import {Category, CategoryName} from "./category.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    {
      icon: "eye",
      displayName: "All",
      technicalName: "ALL",
      activated: false
    },
    {
      icon: "eye",
      displayName: "Amazing views",
      technicalName: "AMAZING_VIEWS",
      activated: false
    },
    {
      icon: "exclamation",
      displayName: "OMG!",
      technicalName: "OMG",
      activated: false
    },
    {
      icon: "tree",
      displayName: "Treehouses",
      technicalName: "TREEHOUSES",
      activated: false
    },
    {
      icon: "umbrella-beach",
      displayName: "Beach",
      technicalName: "BEACH",
      activated: false
    },
    {
      icon: "tractor",
      displayName: "Farms",
      technicalName: "FARMS",
      activated: false
    },
    {
      icon: "house-user",
      displayName: "Tiny homes",
      technicalName: "TINY_HOMES",
      activated: false
    },
    {
      icon: "water",
      displayName: "Lake",
      technicalName: "LAKE",
      activated: false
    },
    {
      icon: "box",
      displayName: "Containers",
      technicalName: "CONTAINERS",
      activated: false
    },
    {
      icon: "campground",
      displayName: "Camping",
      technicalName: "CAMPING",
      activated: false
    },
    {
      icon: "chess-rook",
      displayName: "Castle",
      technicalName: "CASTLE",
      activated: false
    },
    {
      icon: "skiing",
      displayName: "Skiing",
      technicalName: "SKIING",
      activated: false
    },
    {
      icon: "fire",
      displayName: "Campers",
      technicalName: "CAMPERS",
      activated: false
    },
    {
      icon: "snowflake",
      displayName: "Artic",
      technicalName: "ARTIC",
      activated: false
    },
    {
      icon: "ship",
      displayName: "Boat",
      technicalName: "BOAT",
      activated: false
    },
    {
      icon: "mug-hot",
      displayName: "Bed & breakfasts",
      technicalName: "BED_AND_BREAKFASTS",
      activated: false
    },
    {
      icon: "lightbulb",
      displayName: "Rooms",
      technicalName: "ROOMS",
      activated: false
    },
    {
      icon: "globe-europe",
      displayName: "Earth homes",
      technicalName: "EARTH_HOMES",
      activated: false
    },
    {
      icon: "broadcast-tower",
      displayName: "Tower",
      technicalName: "TOWER",
      activated: false
    },
    {
      icon: "mountain",
      displayName: "Caves",
      technicalName: "CAVES",
      activated: false
    },
    {
      icon: "glass-cheers",
      displayName: "Luxes",
      technicalName: "LUXES",
      activated: false
    },
    {
      icon: "restroom",
      displayName: "Chef's kitchen",
      technicalName: "CHEFS_KITCHEN",
      activated: false
    },
  ];

  private changeCategory$: BehaviorSubject<Category> = new BehaviorSubject<Category>(this.getCategoryByDefault());
  changeCategoryObs: Observable<Category> = this.changeCategory$.asObservable();

  changeCategory(category: Category): void {
    this.changeCategory$.next(category);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryByDefault() {
    return this.categories[0];
  }

  getCategoryByTechnicalName(technicalName: CategoryName): Category | undefined {
    return this.categories.find(category => category.technicalName === technicalName);
  }

  constructor() {
  }
}
