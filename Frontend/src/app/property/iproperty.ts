export interface IProperty {
    Id: number;
    Name: string;
    Type: Type;
    Price: number;
    Location: string;
    Bedrooms: number;
    Bathrooms: number;
    Area: number;
    Category: Category;  // Field with strict values
    Image?: string
}


  export type Category = 'rent' | 'sale';
  export type Type = 'Apartment' | 'Villa' | 'House' | 'Studio' | 'Penthouse' | 'Duplex';
