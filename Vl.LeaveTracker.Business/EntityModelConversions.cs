using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vl.LeaveTracker.DataAccess;
using Vl.LeaveTracker.Models;

namespace Vl.LeaveTracker.Business
{
    public static class EntityModelConversions
    {
        public static MainDetails ConvertMainDetails(this MainT source)
        {
            return source != null ? new MainDetails
            {
                AppliedDate = source.AppliedDate,
                EmpId = source.EmpId,
                LeaveFrom = source.LeaveFrom,
                LeaveId = source.LeaveId,
                LeaveTo = source.LeaveTo,
                LeaveTypeId = source.LeaveTypeId.Value,
                ManagerId = source.ManagerId.Value,
                Reason = source.Reason,
                status = source.status,
                UpdatedDate = source.UpdatedDate

            }
            : new MainDetails();
        }

        public static LeaveTypeDetails ConvertLeaveTypeDetails(this LeaveT source)
        {
            return source != null ? new LeaveTypeDetails
            {
                Id = source.Id,
                Ltype = source.Ltype,

            }
            : new LeaveTypeDetails();
        }

        public static EmployeeDetails ConvertEmployeeDetails(this EmployeeT source)
        {
            return source != null || source.ManagerId==null ? new EmployeeDetails
            {
                EmpId = source.EmpId,
                Empname = source.EmpName,
                ManagerId = (int)source.ManagerId,

            }
            : new EmployeeDetails();
        }

        public static ManagerDetails ConvertManagerDetails(this ManagerT source)
        {
            return source != null ? new ManagerDetails
            {
                Id = source.Id,
                Name = source.Name,


            }
            : new ManagerDetails();
        }

        public static MainT RConvertMainDetails(this MainDetails source)
        {
            return source != null ? new MainT
            {
                AppliedDate = source.AppliedDate,
                EmpId = source.EmpId,
                LeaveFrom = source.LeaveFrom,
                LeaveId = source.LeaveId,
                LeaveTo = source.LeaveTo,
                LeaveTypeId = source.LeaveTypeId,
                ManagerId = source.ManagerId,
                Reason = source.Reason,
                status = source.status,
                UpdatedDate = source.UpdatedDate

            }
            : new MainT();
        }
        public static LeaveT RConvertLeaveTypeDetails(this LeaveTypeDetails source)
        {
            return source != null ? new LeaveT
            {
                Id = source.Id,
                Ltype = source.Ltype

            }
            : new LeaveT();
        }
        public static EmployeeT RConvertEmployeeDetails(this EmployeeDetails source)
        {
            return source != null ? new EmployeeT
            {
                EmpId = source.EmpId,
                EmpName = source.Empname,
                ManagerId = (int)source.ManagerId

            }
            : new EmployeeT();
        }
        public static ManagerT RConvertManagerDetails(this ManagerDetails source)
        {
            return source != null ? new ManagerT
            {
                Id = source.Id,
                Name = source.Name,


            }
            : new ManagerT();
        }

    }
}
