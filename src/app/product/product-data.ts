import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService {

  createDb(): { products: IProduct[]} {
    const products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Chai",
            "categoryId": 1,
            "unitPrice": 18.00,
        },
        {
            "productId": 2,
            "productName": "Chang",
            "categoryId": 1,
            "unitPrice": 19,
        },
        {
            "productId": 3,
            "productName": "Aniseed Syrup",
            "categoryId": 2,
            "unitPrice": 10,
        },
        {
            "productId": 4,
            "productName": "Chef Anton's Gumbo Mix",
            "categoryId": 2,
            "unitPrice": 21.35,
        },
        {
            "productId": 4,
            "productName": "Chef Anton's Cajun Seasoning",
            "categoryId": 2,
            "unitPrice": 25,
        },
        {
            "productId": 5,
            "productName": "Chef Anton's Gumbo Mix",
            "categoryId": 2,
            "unitPrice": 30,
        },
        {
            "productId": 6,
            "productName": "Grandma's Boysenberry Spread",
            "categoryId": 2,
            "unitPrice": 25,
        },
        {
            "productId": 7,
            "productName": "Uncle Bob's Organic Dried Pears",
            "categoryId": 7,
            "unitPrice": 30,
        }
    ];
    return { products };
  }
}
