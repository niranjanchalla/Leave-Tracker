using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Vl.LeaveTracker.Repository;
using Vl.LeaveTracker.Models;
using Vl.LeaveTracker.DataAccess;


namespace Vl.LeaveTracker.Business
{
    public class MainB : IMainB
    {
        private Main _mainRep;
        //private LeaveType _leaveType;
        ////
        //private Employee _employee;
        //private Manager _manager;
        ////

        public MainB()
        {
            _mainRep = new Main();
            //_leaveType = new LeaveType();
            //_employee = new Employee();
            //_manager = new Manager();
        }

        public Models.LeaveTrackerDetails GetLeaveTrackerDetailsForGivenDateRange(DateTime startDate, DateTime endDate)
        {
            var result = new Models.LeaveTrackerDetails();
            result.LeaveDetails = GetLeaveDetailsForGivenDateRange(startDate, endDate);
            result.LeaveTypes =LeaveTypeB.GetAllLeaveTypes() ;
            result.EmpDetails = EmployeedetailsB.GetAllEmployeeNames();
            result.MangDetails = ManagerB.GetAllManagerNames();

            return result;
        }

        private Dictionary<int, List<Models.MainDetails>> GetLeaveDetailsForGivenDateRange(DateTime startDate, DateTime endDate)
        {
            var leaveDetails = new Dictionary<int, List<Models.MainDetails>>();
            var mainTList = _mainRep.SelectAll().Where(item => item.LeaveTo >= startDate && item.LeaveFrom <= endDate);
            var mainDetails = new List<MainDetails>();
            foreach (var mainT in mainTList)
                mainDetails.Add(mainT.ConvertMainDetails());
            leaveDetails = mainDetails.GroupBy(emp => emp.EmpId).ToDictionary(empKey => empKey.Key, value => value.ToList());

            return leaveDetails;
        }

        public DateTime GetStartDateForGivenCurrentDate(DateTime currentDate)
        {
            DateTime StartDate = currentDate.AddDays(-15);
            return StartDate;
        }

        public DateTime GetEndDateForGivenCurrentDate(DateTime currentDate)
        {
            DateTime EndDate = currentDate.AddDays(+15);
            return EndDate;
        }


    }
}
