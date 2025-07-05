using CleanArchitecture.DataAccess.Contexts;
using CleanArchitecture.DataAccess.IUnitOfWorks;
using CleanArchitecture.DataAccess.Models;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitecture.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public CityController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var cities = this._unitOfWork.CityRepository.GetAll();
            return Ok(cities);

        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Get(int id)
        {
            var city = this._unitOfWork.CityRepository.Get(c => c.Id == id);
            if (city != null) return Ok(city);
            return NotFound("Invalid Id");
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddCity(City city)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest("Invalid inputs. Please, try again.");
            }
            this._unitOfWork.CityRepository.Add(city);
            await this._unitOfWork.Save();
            return Ok("City Added Successfully");
        }
        [HttpDelete("delete")]
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cityFromDb = this._unitOfWork.CityRepository.Get(c => c.Id == id);
            if (cityFromDb == null)
            {
                return NotFound("No city found with such Id");
            }

            this._unitOfWork.CityRepository.Delete(cityFromDb);
            await this._unitOfWork.Save();
            return Ok("Deleted Successfully city with id " + id);
        }
    
    
    }
}
