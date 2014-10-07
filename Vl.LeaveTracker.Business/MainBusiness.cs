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
    public class MainBusiness : IMainBusiness
    {
        private MainRepository _mainRep;

        public MainBusiness()
        {
            _mainRep = new MainRepository();
        }
        public Models.LeaveTrackerDetails GetLeaveTrackerDetailsForGivenDateRange(DateTime startDate, DateTime endDate)
        {
            var result = new Models.LeaveTrackerDetails();
            result.LeaveDetails = GetLeaveDetailsForGivenDateRange(startDate, endDate);
            result.LeaveTypes = LeaveTypeBusiness.GetAllLeaveTypes();
            result.EmpDetails = EmployeedetailsBusiness.GetAllEmployeeNames();
            result.MangDetails = ManagerBusiness.GetAllManagerNames();
            return result;
        }
        private Dictionary<int, List<Models.MainDetails>> GetLeaveDetailsForGivenDateRange(DateTime startDate, DateTime endDate)
        {
            var leaveDetails = new Dictionary<int, List<Models.MainDetails>>();
            var mainTList = _mainRep.SelectAll().Where(item => item.LeaveFrom >= startDate || item.LeaveTo < endDate);
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
        public int InsertMainDetails(Vl.LeaveTracker.Models.MainDetails maindetails)
        {
            MainT maint = maindetails.RConvertMainDetails();
            _mainRep.Insert(maint);
            _mainRep.Save();
            return maint.LeaveId;
        }
        public void DeleteMainDetails(int leaveId)
        {
            _mainRep.Delete(leaveId);
            _mainRep.Save();
        }
    }
}
