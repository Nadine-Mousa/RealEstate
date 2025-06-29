using CleanArchitecture.DataAccess.Contexts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public CityController(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var cities = this._dbContext.Cities.ToList();
            return Ok(cities);
            
        }
        [HttpGet("id")]
        public IActionResult Get(int id)
        {
            var city = _dbContext.Cities.Find(id);
            if (city != null) return Ok(city);
            return NotFound("Invalid Id");
        }
    }
}
