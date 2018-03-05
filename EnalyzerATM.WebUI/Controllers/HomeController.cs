using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EnalyzerATM.WebUI.Controllers
{
    public partial class HomeController : Controller
    {
        public virtual ActionResult Index()
        {
            return View();
        }

        public virtual ActionResult ChooseAmount()
        {
            return View();
        }
        public virtual ActionResult Depositing()
        {
            return View();
        }
    }
}