using AutoMapper;
using CleanArchitecture.DataAccess.Models;
using CleanArchitecture.DataAccess.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace CleanArchitecture.Utilities
{
    public class AutomapperProfiles : Profile
    {
        public AutomapperProfiles()
        {
            CreateMap<City, CityDto>().ReverseMap();
        }
    }
}
