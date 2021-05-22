up:
	docker-compose up -d
build:
	docker-compose build --no-cache --force-rm
init:
	docker-compose build --no-cache
	docker-compose up -d
	docker-compose exec backend yarn init
	docker-compose exec backend yarn add --dev typescript ts-node prettier @types/node
	docker-compose exec backend ./node_modules/.bin/tsc --init
	docker-compose exec backend yarn add --dev nodemon
	docker-compose exec backend yarn global add express-generator
	docker-compose exec backend yarn add express
	docker-compose exec backend yarn add --dev @types/express
	docker-compose exec backend yarn add sequelize@5.21.11 sequelize-typescript reflect-metadata mysql2 log4js cors
	docker-compose exec backend yarn global add sequelize-cli
	docker-compose exec backend yarn add --dev dotenv @types/validator @types/bluebird @types/cors @types/dotenv
	docker-compose exec frontend npx create-next-app frontend --typescript
	docker-compose exec frontend yarn add --dev typescript @types/react @types/react-dom @types/node
	docker-compose exec frontend yarn add --dev tailwindcss postcss autoprefixer postcss-nested
	docker-compose exec frontend yarn tailwindcss init -p
remake:
	@make destroy
	@make init
stop:
	docker-compose stop
down:
	docker-compose down --remove-orphans
restart:
	@make down
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
destroy-volumes:
	docker-compose down --volumes --remove-orphans
ps:
	docker-compose ps
logs:
	docker-compose logs
logs-watch:
	docker-compose logs --follow
log-web:
	docker-compose logs web
log-web-watch:
	docker-compose logs --follow web
log-app:
	docker-compose logs backend
log-app-watch:
	docker-compose logs --follow backend
log-db:
	docker-compose logs db
log-db-watch:
	docker-compose logs --follow db
front:
	docker-compose exec frontend sh
back:
	docker-compose exec backend sh
db:
	docker-compose exec db bash
sql:
	docker-compose exec db bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'
