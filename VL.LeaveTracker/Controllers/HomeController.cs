using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vl.LeaveTracker.Business;
using Vl.LeaveTracker.Models;

namespace VL.LeaveTracker.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            //------------      to get employee names   ---------------------///

            //EmployeedetailsB obj = new EmployeedetailsB();
            //var EmployeeList = new List<EmployeeDetails> { };
            //EmployeeList = obj.GetAllEmployeeNames();
            //return View(EmployeeList);


            //--------         to get leave details ----------------- //////

            MainB obj1 = new MainB();
           var result = new Vl.LeaveTracker.Models.LeaveTrackerDetails();
            DateTime currentdate = new DateTime(2014, 9, 15);
            DateTime startdateToPass = obj1.GetStartDateForGivenCurrentDate(currentdate);
            DateTime endddateToPass = obj1.GetEndDateForGivenCurrentDate(currentdate);

            result = obj1.GetLeaveTrackerDetailsForGivenDateRange(startdateToPass, endddateToPass);
           
            return View(result);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
