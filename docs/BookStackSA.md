# BookStack <br> Solution Architecture
August 2024

### Document Control

#### Revision History

| Version | Author | Date (dd/mm/yyyy) | Summary of change |
| --- | --- | --- | --- |
| 1.0 | Ivan Ivanov | 24.08.2024 | Initial version |
| 1.1 | Ivan Ivanov | 27.12.2024 | Updated architecture overview (section 2.5) |

#### Document Review and Approval

| Version | Approved by | Date (dd/mm/yyyy) |
| --- | --- | --- |
| 1.0 | Petr Petrov | 22.11.2024 |
| 1.1 | Petr Petrov | 23.12.2024 |

#### Acronyms

| Acronym | Definition |
| --- | --- |
| ADFS | Active Directory Federation Service |

#### References

| Item no. | Document title | Version or date |
| --- | --- | --- |
| 1 | [Source repository README](https://github.com/BookStackApp/BookStack/blob/development/readme.md) | Managed by vendor |
| 2 |  |  |

### Introduction

#### Document Purpose

The document is intended as a reference for system administrators and support engineers in charge of the system deployment and maintenance.

#### Solution Overview

BookStack is an opinionated documentation platform that provides a pleasant and simple out-of-the-box experience. New users to an instance should find the experience intuitive and only basic word-processing skills should be required to get involved in creating content on BookStack. The platform should provide advanced power features to those that desire it, but they should not interfere with the core simple user experience.

The BookStack source is provided under the [MIT License](https://github.com/BookStackApp/BookStack/blob/development/LICENSE).

The libraries used by, and included with, BookStack are provided under their own licenses and copyright. The licenses for many of our core dependencies can be found in the attribution list below but this is not an exhaustive list of all projects used within BookStack.

#### Architecture Overview

![Screenshot](img/BookStack_Overview.png)

#### Data flow description:

| Data flow | Source | Destination |Schedule  |
| --- | --- | --- | --- |
| User interaction | User | BookStack | On user query |
| User interaction | BookStack | User | On user query |
| Authentication | User | ADFS | On user query |
| Authentication | ADFS | User | On user query |

#### Responsibility Matrix

| System | Vendor | Administrator |
| --- | --- | --- |
| BookStack | BookStack | Ivan Ivanov |
| ADFS | Microsoft | Sergey Sergeev |

### Configuration
#### App
##### Docker-compose.yml
```
# This is a Docker Compose configuration
# intended for development purposes only

volumes:
  db: {}

services:
  db:
    image: mysql:8.4
    environment:
      MYSQL_DATABASE: bookstack-dev
      MYSQL_USER: bookstack-test
      MYSQL_PASSWORD: bookstack-test
      MYSQL_RANDOM_ROOT_PASSWORD: 'true'
    volumes:
      - ./dev/docker/init.db:/docker-entrypoint-initdb.d
      - db:/var/lib/mysql
  app:
    build:
      context: .
      dockerfile: ./dev/docker/Dockerfile
    environment:
      APP_URL: http://localhost:${DEV_PORT:-8080}
      DB_CONNECTION: mysql
      DB_HOST: db
      DB_PORT: 3306
      DB_DATABASE: bookstack-dev
      DB_USERNAME: bookstack-test
      DB_PASSWORD: bookstack-test
      TEST_DATABASE_URL: mysql://bookstack-test:bookstack-test@db/bookstack-test
      MAIL_DRIVER: smtp
      MAIL_HOST: mailhog
      MAIL_PORT: 1025
    ports:
      - ${DEV_PORT:-8080}:80
    volumes:
      - ./:/app
      - ./dev/docker/php/conf.d/xdebug.ini:/usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
    entrypoint: /app/dev/docker/entrypoint.app.sh
    extra_hosts:
    - "host.docker.internal:host-gateway"
  node:
    image: node:22-alpine
    working_dir: /app
    user: node
    volumes:
      - ./:/app
    entrypoint: /app/dev/docker/entrypoint.node.sh
  mailhog:
    image: mailhog/mailhog
    ports:
      - ${DEV_MAIL_PORT:-8025}:8025
```