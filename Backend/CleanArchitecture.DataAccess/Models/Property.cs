using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleanArchitecture.DataAccess.Models
{
    public class Property
    {
        // Basic Info
        public int Id { get; set; }
        public string Name { get; set; }
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }
        public SellOrRent SellOrRent { get; set; }
        public string? SiteType {  get; set; }

        // Pricing
        public double Price { get; set; }
        public double? Security { get; set; }
        public double? Maintenance { get; set; }

        // Area (Sqr Feet)
        public double BuiltArea { get; set; }
        public double? CarpetArea { get; set; }

        // Address
        public int? Floor { get; set; }
        public int? TotalFloor { get; set; }
        public string Address { get; set; }
        public string? Landmark { get; set; }

        // Other Details
        public bool? ReadyToMove { get; set; }
        public DateTime? AvailableFrom { get; set; }
        public int? AgeOfProperty { get; set; }
        public bool? GatedCommunity { get; set; }
        public string? Description { get; set; }


        //Image
        public string? Image { get; set; }


        #region Relationships
        public int PropertyTypeId { get; set; }
        [ValidateNever]
        public PropertyType PropertyType { get; set; }
        public int? FurnishTypeId { get; set; }
        [ValidateNever]
        public FurnishType? FurnishType { get; set; }
        public int CityId { get; set; }
        [ValidateNever]
        public City City { get; set; }
        public int? MainEntranceId { get; set; }
        [ValidateNever]
        public MainEntrance? MainEntrance { get; set; }
        #endregion
    }
    public enum SellOrRent
    {
        Sell,
        Rent
    }
}
