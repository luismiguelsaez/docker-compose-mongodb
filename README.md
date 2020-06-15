## Deploy MongoDB replicaset

### Create virtualenv
```
$ virtualenv -p /bin/python3 .venv
$ . .venv/bin/activate
```

### Install dependencies
```
$ pip install --upgrade -r requirements.xt
```

### Start containers
```
$ docker-compose up -d
```

### Initialize RS
```
$ docker-compose exec mongo-1 mongo localhost:27017 /rs.js
$ docker-compose exec mongo-1 mongo localhost:27017 --eval "rs.status()"
```
