(function (ng) {

    var mod = ng.module("mainApp", ["ui.router",
                "perfilModule", "ciudadCrudModule","itinerarioModule"]);

    mod.config(['$logProvider', function ($logProvider) {
            $logProvider.debugEnabled(true);
        }]);

    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/timeline");
            $stateProvider
                    .state('evento', {
                        url: '/evento',
                        templateUrl: "src/modules/evento/evento.tpl.html"
                    })
                    .state('listacrudciudad', {
                        url: '/listacrudciudad',
                        templateUrl: "src/modules/ciudad/listacrudciudad.tpl.html",
                        controller: "ciudadCrudCtrl",
                        controllerAs: "ctrl"
                    })
                    .state('ciudad', {
                        url: '/listacrudciudad/:id',
                        templateUrl: "src/modules/ciudad/ciudad.tpl.html",
                        controller: "ciudadCrudCtrl",
                        controllerAs: "ctrl"
                    })
                    .state('eventocrud', {
                        url: '/eventocrud',
                        templateUrl: "src/modules/eventocrud/eventoscrud.tpl.html",
                        controller: "eventocrudCtrl",
                        controllerAs: "ctrl"
                    })
                    .state('timeline', {
                        url: '/timeline',
                        templateUrl: "src/modules/itinerario/timeline.tpl.html"
                    })
                    .state('lista', {
                        url: '/lista',
                        templateUrl: "src/modules/itinerario/lista.tpl.html"
                    })
                    .state('perfil',{
                        url:'/perfil',
                        controller: "perfilCtrl",
                        controllerAs: "ctrl",
                        templateUrl:"src/modules/perfil/perfil.tpl.html"
                    })
                    .state('perfil.recuerdo',{
                        url:'/recuerdo',
                        views: {
                        'viewA': {
                        templateUrl: 'src/modules/perfil/recuerdo.tpl.html',

                        }}

                    })
                    .state('perfil.infogeneral',{
                        url:'/recuerdo/infogeneral',
                        views: {
                        'viewA': {
                        templateUrl: 'src/modules/perfil/datosPersonales.tpl.html',
                        controller: "perfilDatosCtrl",
                        controllerAs: "ctrl"
                        }}

                    })
                    .state('mapa',{
                        url:'/mapa',
                        templateUrl:"src/modules/itinerario/mapa.tpl.html"
                    })
                    .state('login',{
                        url:'/login',
                        templateUrl:"src/modules/usuario/login.tpl.html"
                    })
                    .state('registro',{
                        url:'/registro',
                        templateUrl:"src/modules/usuario/registro.tpl.html"
                    })
                    .state('crearitinerario',{
                        url:'/crearitinerario',
                        controller:'itinerarioController',
                        controllerAs:'ctrl',
                        templateUrl:"src/modules/itinerario/crear.tpl.html"
                    })

        }]);
})(window.angular);
