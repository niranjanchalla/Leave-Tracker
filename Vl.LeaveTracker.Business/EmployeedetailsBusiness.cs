using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Vl.LeaveTracker.Repository;
using Vl.LeaveTracker.Models;


namespace Vl.LeaveTracker.Business
{
   public class EmployeedetailsBusiness:IEmployeeDetailsBusiness
    {
         private static EmployeeRepository _employeeRep;

      static EmployeedetailsBusiness()
        {
          _employeeRep = new EmployeeRepository();
        }

        public static List<EmployeeDetails> GetAllEmployeeNames()
        {
            var empdetails = new List<Models.EmployeeDetails>();
            var emplist = _employeeRep.SelectAll();
           
            foreach (var employeeT in emplist)
                empdetails.Add(employeeT.ConvertEmployeeDetails());


            return empdetails;
        }

      

       
      

    }
}
