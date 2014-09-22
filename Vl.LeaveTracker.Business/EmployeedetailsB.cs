using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Vl.LeaveTracker.Repository;
using Vl.LeaveTracker.Models;


namespace Vl.LeaveTracker.Business
{
   public class EmployeedetailsB:IEmployeeDetailsB
    {
         private static Employee _employeeRep;

      static EmployeedetailsB()
        {
          _employeeRep = new Employee();
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
