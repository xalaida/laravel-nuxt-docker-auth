<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;
use Laravel\Passport\RouteRegistrar;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->registerPolicies();
        $this->registerPassportRoutes();
    }

    /**
     * Register passport routes.
     */
    private function registerPassportRoutes(): void
    {
        Passport::routes(function (RouteRegistrar $router) {
            $router->forAccessTokens();
        }, [
            'prefix' => 'api/oauth',
        ]);
    }
}
