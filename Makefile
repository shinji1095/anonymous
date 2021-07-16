init:
	cd ./front/my-app
	yarn install

up:
	docker-compose up -d

down:
	docker-compose down

rs :
	docker-compose restart	