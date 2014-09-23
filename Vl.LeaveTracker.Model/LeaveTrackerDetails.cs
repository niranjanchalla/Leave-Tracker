using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vl.LeaveTracker.Models
{
    public class LeaveTrackerDetails
    {       
       public IDictionary<int,List<MainDetails>> LeaveDetails { get; set; }
       public IList<LeaveTypeDetails> LeaveTypes { get; set; }
       public List<EmployeeDetails> EmpDetails { get; set; }
       public List<ManagerDetails> MangDetails { get; set; }
    }
   
}
