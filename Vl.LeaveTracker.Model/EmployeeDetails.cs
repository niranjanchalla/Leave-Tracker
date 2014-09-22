using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vl.LeaveTracker.Models
{
    public class EmployeeDetails
    {
        public int EmpId { get; set; }
        public string Empname { get; set; }
        public int ManagerId { get; set; }
        public string CreatedDate { get; set; }
        public string UpdatedDate { get; set; }



    }
}
