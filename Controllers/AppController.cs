using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineMotorWorld.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            // throw new InvalidProgramException("Bad things happen to goof people!");
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        { 
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(object model)
        {
            return View();
        }
        public IActionResult About()
        {
            ViewBag.Title = "About Us";
            return View();
        }
    }
}
