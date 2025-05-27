export interface IProperty {
  // Basic Info
    Id: number;
    Name: string;
    PropertyType: PropertyType;
    Bedrooms: number;
    Bathrooms: number;
    SellOrRent: SellOrRent;  // Field with strict values    
    FurnishType: FurnishType;
    SiteType: string;     // Compound / Project / Building
    // Pricing
    Price: number;
    Security: number;
    Maintenance : number;
    // Area (Sqr Feet)
    BuiltArea: number;
    CarpetArea: number;
    // Address
    Floor : number;
    TotalFloor: number;
    Address: string;
    City: string;
    Landmark: string;
    // Other Details
    ReadyToMove: boolean;
    AvailableFrom: Date;
    AgeOfProperty: number;
    GatedCommunity: boolean;
    MainEntrance: 'North' | 'South' | 'East' | 'West';
    Description: string;
    // Image
    Image?: string



}


  export type SellOrRent = 'rent' | 'sale';
  export type PropertyType = 'Apartment' | 'Villa' | 'House' | 'Studio' | 'Penthouse' | 'Duplex';
  export type FurnishType = 'Semi' | 'Fully' | 'Unfurnished';
