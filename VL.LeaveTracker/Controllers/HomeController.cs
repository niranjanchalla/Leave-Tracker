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

        public ActionResult Index(string date,
            string leaveTypeID,
            string leaveFromDate,
            string leaveFromMonth,
            string leaveFromYear,
            string employeeID,
            string leaveID)
        {

            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            LeaveTrackerDetails result = getLeaveDetails(date);

            if (leaveID != null && employeeID == null && leaveTypeID == null)
            {
                DeleteLeave(leaveID);
                return View(result);
            }
            if (leaveTypeID == null || leaveFromDate == null || leaveFromMonth == null || leaveFromYear == null || employeeID == null && leaveID == null)
            {
                return View(result);
            }

            int leaveid = InsertLeaves(leaveTypeID, leaveFromDate, leaveFromMonth, leaveFromYear, employeeID);
            return View(leaveid);

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

        private int InsertLeaves(string leaveTypeID, string leaveFromDate, string leaveFromMonth, string leaveFromYear, string employeeID)
        {
            MainBusiness mainBusinessObject = new MainBusiness();
            int leaveTid = Convert.ToInt32(leaveTypeID);
            int leaveFdate = Convert.ToInt32(leaveFromDate);
            string leaveFmonth = Convert.ToString(leaveFromMonth);
            int leaveFyear = Convert.ToInt32(leaveFromYear);
            int empid = Convert.ToInt32(employeeID);
            //, int leaveTypeID,string leaveFromDate, string leaveFromMonth, int leaveFromYear, int employeeID
            int month = Convert.ToDateTime(leaveFdate + leaveFmonth + leaveFyear).Month;
            var user = new MainDetails();
            user.AppliedDate = DateTime.Now;
            user.EmpId = empid;
            user.LeaveFrom = new DateTime(leaveFyear, month, leaveFdate);
            user.LeaveTo = new DateTime(leaveFyear, month, leaveFdate);
            user.ManagerId = 1386;
            user.LeaveTypeId = leaveTid;
            user.Reason = "Default";
            user.status = "pending";
            int leaveid = mainBusinessObject.InsertMainDetails(user);
            return leaveid;
        }

        private LeaveTrackerDetails getLeaveDetails(string date)
        {
            MainBusiness mainBusinessObject = new MainBusiness();

            var result = new Vl.LeaveTracker.Models.LeaveTrackerDetails();
            if (date == null)
                date = DateTime.Now.ToString();
            var value = Convert.ToDateTime(date).ToShortDateString();
            var currentdate = Convert.ToDateTime(value);
            var startdateToPass = mainBusinessObject.GetStartDateForGivenCurrentDate(currentdate);
            var endddateToPass = mainBusinessObject.GetEndDateForGivenCurrentDate(currentdate);
            result = mainBusinessObject.GetLeaveTrackerDetailsForGivenDateRange(startdateToPass, endddateToPass);

            return result;
        }

        private void DeleteLeave(string leaveID)
        {
            MainBusiness mainBusinessObject = new MainBusiness();
            int leaveIDtoDelete = Convert.ToInt32(leaveID);
            mainBusinessObject.DeleteMainDetails(leaveIDtoDelete);

        }


    }
}
