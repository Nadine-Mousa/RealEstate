using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitecture.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Atlanta", "New York", "Cairo" };
        }
        [HttpGet("id")]
        public string Get(int id)
        {
            return ("City of id: " + id);
        }
    }
}
