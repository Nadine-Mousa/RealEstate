﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleanArchitecture.DataAccess.Models.DTOs
{
    public class CityDto
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
