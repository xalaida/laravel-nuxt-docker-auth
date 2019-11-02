## About
Nuxt.JS and Laravel authentication example using nuxt/auth module and Laravel Passport package. 

Built with my laravel-nuxt-docker starter template [https://github.com/nevadskiy/laravel-nuxt-docker](https://github.com/nevadskiy/laravel-nuxt-docker)

## Installation

**1. Clone or download the repository and enter its folder**
```
git clone https://github.com/nevadskiy/laravel-nuxt-docker.git app
cd app
```

**2. Run the installation script (it may take up to 10 minutes)**
```
make install
```

**3. Create Laravel passport clients**
```
docker-compose exec php-cli php artisan passport:install
```

**4. Copy Client secret and Client ID of Password grant client (typically it has the ID 2) and paste them to client/.env file**
```
# client/.env
API_URL=http://nginx:80
API_URL_BROWSER=http://localhost:8080

PASSPORT_PASSWORD_GRANT_ID=2
PASSPORT_PASSWORD_GRANT_SECRET=your_laravel_password_grant_client_secret_key
```

**5. Restart the node container.**
```
# Make command
make rn

# Full command
docker-compose restart node
``` 

Open [http://localhost:8080](http://localhost:8080) url in your browser. 

_If you see 502 error, just wait a bit until ```yarn install && yarn dev``` process will be finished (Check the status with the command ```docker-compose logs node```)_
