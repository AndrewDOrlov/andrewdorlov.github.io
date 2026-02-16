1. Code containerfile:
```
FROM docker.io/library/python:alpine
WORKDIR /tmp
COPY ./requirements.txt .
RUN apk add --update --no-cache --virtual .build-deps gcc musl-dev &&\
    apk add --no-cache git ca-certificates curl &&\
    pip install --no-cache-dir --requirement ./requirements.txt &&\
    apk del .build-deps &&\
    rm ./requirements.txt
WORKDIR /d
CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
```
2. Code requirements.txt:
```
mkdocs>=1.2.1
mkdocs-material>=7.1.0
mkdocs-static-i18n
```
3. Build container:
```
docker build -t twdocs -f containerfile .
```
4. Run command:
```
docker run --rm -itp 8000:8000 -v "$(pwd):/d" twdocs
```