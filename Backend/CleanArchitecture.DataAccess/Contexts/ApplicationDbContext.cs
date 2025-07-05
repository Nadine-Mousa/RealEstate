using CleanArchitecture.DataAccess.Models;
using CleanArchitecture.Utilities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.DataAccess.Contexts
{
    public class ApplicationDbContext: IdentityDbContext<ApplicationUser>
    {
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<FurnishType> FurnishTypes { get; set; }
        public DbSet<PropertyType> PropertyTypes { get; set; }
        public DbSet<MainEntrance> mainEntrances { get; set; }
        public DbSet<Property> Properties { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            SeedRoles(builder);
        }
        private static void SeedRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>().HasData(
                new IdentityRole() { Name = SD.Role_Admin, ConcurrencyStamp = "1", NormalizedName = SD.Role_Admin },
                new IdentityRole() { Name = SD.Role_User, ConcurrencyStamp = "2", NormalizedName = SD.Role_User }
                );
        }
    }
}
