using CleanArchitecture.DataAccess.Contexts;
using CleanArchitecture.DataAccess.IUnitOfWorks;
using CleanArchitecture.DataAccess.Models;
using CleanArchitecture.DataAccess.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices;
using System.Linq;

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
            var cities = await this._unitOfWork.CityRepository.GetAll();

            var citiesDtos = from c in cities
                                       select new CityDto
                                       {
                                           Id = c.Id,
                                           Name = c.Name,
                                       };
            return Ok(citiesDtos);

        }

        [HttpGet("Id")]
        public async Task<IActionResult> Get(int id)
        {
            var city = await this._unitOfWork.CityRepository.Get(c => c.Id == id);
            if(city == null)
            {
                return NotFound("Invalid Id");
            }
            var cityDto = new CityDto
            {
                Id = city.Id,
                Name = city.Name
            };
            return Ok(cityDto);
            
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest("Invalid inputs. Please, try again.");
            }
            var city = new City
            {
                Id = cityDto.Id,
                Name = cityDto.Name,
                LastUpdatedOn = DateTime.Now
            };

            await this._unitOfWork.CityRepository.Add(city);
            await this._unitOfWork.Save();
            return Ok("City Added Successfully");
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cityFromDb = await this._unitOfWork.CityRepository.Get(c => c.Id == id);
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
