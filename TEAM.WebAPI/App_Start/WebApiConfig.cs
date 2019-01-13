﻿using System.Web.Http;

using TEAM.Business;
using TEAM.Business.Base;
using TEAM.WebAPI;

using Unity;

namespace TEAM.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            UnityContainer container = new UnityContainer();
            RegisterTypes(container);
            config.DependencyResolver = new UnityResolver(container);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }

        private static void RegisterTypes(UnityContainer container)
        {
            container.RegisterType<ITeamServerManagementService, TeamServerManagementService>();
        }
    }
}
