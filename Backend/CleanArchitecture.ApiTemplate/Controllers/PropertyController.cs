using CleanArchitecture.DataAccess.Contexts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        // Get Property Related Data
        [HttpGet("GetFurnishTypes")]
        public ActionResult GetFurnishTypes()
        {
            var furnishtypes = _dbContext.FurnishTypes.ToList();
            return Ok(furnishtypes);
        }
        [HttpGet("GetPropertyTypes")]
        public ActionResult GetPropertyTypes()
        {
            var propertyTypes = _dbContext.PropertyTypes.ToList();
            return Ok(propertyTypes);
        }
        [HttpGet("GetMainEntrances")]
        public ActionResult GetMainEntrances()
        {
            var mainEntrances = _dbContext.mainEntrances.ToList();
            return Ok(mainEntrances);
        }

    }
}
