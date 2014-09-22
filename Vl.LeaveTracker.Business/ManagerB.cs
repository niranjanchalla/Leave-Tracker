using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vl.LeaveTracker.Models;
using Vl.LeaveTracker.Repository;


namespace Vl.LeaveTracker.Business
{
    public class ManagerB:IManagerB
    {
         private static Manager _managerRep;

       static ManagerB()
        {
            _managerRep = new Manager();
        }

        public static List<ManagerDetails> GetAllManagerNames()
        {
            var mangdetails = new List<Models.ManagerDetails>();
            var managerlist = _managerRep.SelectAll();
            foreach (var managerT in managerlist)
                mangdetails.Add(managerT.ConvertManagerDetails());
            return mangdetails;
        }
    }
}
