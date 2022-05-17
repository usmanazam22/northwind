import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ICategory } from './category';

export class CategoryData implements InMemoryDbService {

  createDb(): { categories: ICategory[]} {
    const categories: ICategory[] = [
        {
            categoryId: 1,
            categoryName: "Beverages",
            description: "Soft drinks, coffees, teas, beers, and ales"
        },
        {
            categoryId: 2,
            categoryName:  "Condiments",
            description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        {
            categoryId: 3,
            categoryName: "Confections",
            description: "Desserts, candies, and sweet breads"
        },
        {
            categoryId: 4,
            categoryName: "Dairy Products",
            description: "Cheeses"
        },
        {
            categoryId: 5,
            categoryName: "Grains/Cereals",
            description: "Breads, crackers, pasta, and cereal"
        },
        {
            categoryId: 6,
            categoryName: "Meat/Poultry",
            description: "Prepared meats"
        },
        {
            categoryId: 7,
            categoryName: "Produce",
            description: "Dried fruit and bean curd"
        },
        {
            categoryId: 8,
            categoryName: "Seafood",
            description: "Seaweed and fish"
        }	
    ];
    return { categories };
  }
}
