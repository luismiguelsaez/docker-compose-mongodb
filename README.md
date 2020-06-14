### Initialize RS
```
$ docker-compose exec mongo-1 mongo localhost:27017 /rs.js
$ docker-compose exec mongo-1 mongo localhost:27017 --eval "rs.status()"
```
