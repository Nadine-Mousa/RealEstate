using CleanArchitecture.DataAccess.Contexts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public PropertyController(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProperties()
        {
            var properties = await _dbContext.Properties.ToListAsync();
            return Ok(properties);
        }
        [HttpGet("id")]
        public async Task<IActionResult> GetProperty(int id)
        {
            var property = await _dbContext.Properties.FirstOrDefaultAsync(p => p.Id == id);
            if(property == null) { return NotFound("No property found for this Id"); }
            return Ok(property);
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            var propertyToBeDeleted = await _dbContext.Properties.FirstOrDefaultAsync(p => p.Id == id);
            if(propertyToBeDeleted == null)
            {
                return NotFound("NO such property found");
            }
            _dbContext.Properties.Remove(propertyToBeDeleted);
            await _dbContext.SaveChangesAsync();
            return Ok("Property Deleted");
        }
        // Get Property Related Data
        [HttpGet("GetFurnishTypes")]
        public async Task<ActionResult> GetFurnishTypes()
        {
            var furnishtypes = await _dbContext.FurnishTypes.ToListAsync();
            return Ok(furnishtypes);
        }
        [HttpGet("GetPropertyTypes")]
        public async Task<ActionResult> GetPropertyTypes()
        {
            var propertyTypes = await _dbContext.PropertyTypes.ToListAsync();
            return Ok(propertyTypes);
        }
        [HttpGet("GetMainEntrances")]
        public async Task<ActionResult> GetMainEntrances()
        {
            var mainEntrances = await _dbContext.mainEntrances.ToListAsync();
            return Ok(mainEntrances);
        }

    }
}
