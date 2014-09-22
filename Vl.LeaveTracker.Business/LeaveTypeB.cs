using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vl.LeaveTracker.Models;
using Vl.LeaveTracker.Repository;


namespace Vl.LeaveTracker.Business
{
    class LeaveTypeB:ILeaveTypeB
    {
        private static LeaveType _leaveTypeRep;

         static LeaveTypeB()
        {
          _leaveTypeRep = new LeaveType();
        }

        public static List<LeaveTypeDetails> GetAllLeaveTypes()
        {
            var leaveTypes = new List<Models.LeaveTypeDetails>();
            var leaveTList = _leaveTypeRep.SelectAll();
            foreach (var leaveT in leaveTList)
                leaveTypes.Add(leaveT.ConvertLeaveTypeDetails());
            return leaveTypes;
        }
    }
}
