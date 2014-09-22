using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vl.LeaveTracker.Models
{
    public class MainDetails
    {
        public int LeaveId { get; set; }
        public int EmpId { get; set; }        
        public int ManagerId { get; set; }
        public string ManagerName { get; set; }
        public int LeaveTypeId { get; set; }
        public Nullable<System.DateTime> LeaveFrom { get; set; }
        public Nullable<System.DateTime> LeaveTo { get; set; }
        public string Reason { get; set; }
        public string status { get; set; }
        public Nullable<System.DateTime> AppliedDate { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
    }
}
