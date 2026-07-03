---
title: BookStack API Reference
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="bookstack-api">BookStack API Reference</h1>

!!! note ""
    Scroll down for code samples, example requests and responses.

OpenAPI 3.1.0 specification for the self-hosted BookStack platform.

Base URLs:

* <a href="https://bookstack.internal.sample.com/api">https://bookstack.internal.sample.com/api</a>

# Authentication

* API Key (BookStackAuth)
    - Parameter Name: **Authorization**, in: header. Format: Token [Token_ID]:[Token_Secret] (Created in User Profile → API Tokens)

<h1 id="bookstack-api-default">Default</h1>

## getPages

<a id="opIdgetPages"></a>

!!! note ""
    Code samples

??? note "shell"

        # You can also use wget
        curl -X GET https://bookstack.internal.sample.com/api/pages \
          -H 'Accept: application/json' \
          -H 'Authorization: API_KEY'

??? note "http"

        GET https://bookstack.internal.sample.com/api/pages HTTP/1.1
        Host: bookstack.localhost
        Accept: application/json

??? note "javascript"

        const headers = {
          'Accept':'application/json',
          'Authorization':'API_KEY'
        };

        fetch('https://bookstack.internal.sample.com/api/pages',
        {
          method: 'GET',

          headers: headers
        })
        .then(function(res) {
            return res.json();
        }).then(function(body) {
            console.log(body);
        });

??? note "ruby"

        require 'rest-client'
        require 'json'

        headers = {
          'Accept' => 'application/json',
          'Authorization' => 'API_KEY'
        }

        result = RestClient.get 'https://bookstack.internal.sample.com/api/pages',
          params: {
          }, headers: headers

        p JSON.parse(result)

??? note "python"

        import requests
        headers = {
          'Accept': 'application/json',
          'Authorization': 'API_KEY'
        }

        r = requests.get('https://bookstack.internal.sample.com/api/pages', headers = headers)

        print(r.json())

??? note "php"

        <?php

        require 'vendor/autoload.php';

        $headers = array(
            'Accept' => 'application/json',
            'Authorization' => 'API_KEY',
        );

        $client = new \GuzzleHttp\Client();

        // Define array of request body.
        $request_body = array();

        try {
            $response = $client->request('GET','https://bookstack.internal.sample.com/api/pages', array(
                'headers' => $headers,
                'json' => $request_body,
              )
            );
            print_r($response->getBody()->getContents());
        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {
            // handle exception or api errors.
            print_r($e->getMessage());
        }

        // ...

??? note "java"

        URL obj = new URL("https://bookstack.internal.sample.com/api/pages");
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        int responseCode = con.getResponseCode();
        BufferedReader in = new BufferedReader(
            new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();
        System.out.println(response.toString());

??? note "go"

        package main

        import (
              "bytes"
              "net/http"
        )

        func main() {

            headers := map[string][]string{
                "Accept": []string{"application/json"},
                "Authorization": []string{"API_KEY"},
            }

            data := bytes.NewBuffer([]byte{jsonReq})
            req, err := http.NewRequest("GET", "https://bookstack.internal.sample.com/api/pages", data)
            req.Header = headers

            client := &http.Client{}
            resp, err := client.Do(req)
            // ...
        }

`GET /pages`

*List pages*

!!! note ""
    Example responses

!!! note ""
    200 Response

```json
{
  "data": [
    {}
  ],
  "total": 0,
  "current_page": 0,
  "last_page": 0
}
```

<h3 id="getpages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of pages|[PaginatedResponse](#schemapaginatedresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of BookStackAuth
</aside>

## createPage

<a id="opIdcreatePage"></a>

!!! note ""
    Code samples

??? note "shell"

        # You can also use wget
        curl -X POST https://bookstack.internal.sample.com/api/pages \
          -H 'Content-Type: application/json' \
          -H 'Authorization: API_KEY'

??? note "http"

        POST https://bookstack.internal.sample.com/api/pages HTTP/1.1
        Host: bookstack.localhost
        Content-Type: application/json

??? note "javascript"

        const inputBody = '{
          "book_id": 0,
          "chapter_id": 0,
          "name": "string",
          "html": "string"
        }';
        const headers = {
          'Content-Type':'application/json',
          'Authorization':'API_KEY'
        };

        fetch('https://bookstack.internal.sample.com/api/pages',
        {
          method: 'POST',
          body: inputBody,
          headers: headers
        })
        .then(function(res) {
            return res.json();
        }).then(function(body) {
            console.log(body);
        });

??? note "ruby"

        require 'rest-client'
        require 'json'

        headers = {
          'Content-Type' => 'application/json',
          'Authorization' => 'API_KEY'
        }

        result = RestClient.post 'https://bookstack.internal.sample.com/api/pages',
          params: {
          }, headers: headers

        p JSON.parse(result)

??? note "python"

        import requests
        headers = {
          'Content-Type': 'application/json',
          'Authorization': 'API_KEY'
        }

        r = requests.post('https://bookstack.internal.sample.com/api/pages', headers = headers)

        print(r.json())

??? note "php"

        <?php

        require 'vendor/autoload.php';

        $headers = array(
            'Content-Type' => 'application/json',
            'Authorization' => 'API_KEY',
        );

        $client = new \GuzzleHttp\Client();

        // Define array of request body.
        $request_body = array();

        try {
            $response = $client->request('POST','https://bookstack.internal.sample.com/api/pages', array(
                'headers' => $headers,
                'json' => $request_body,
              )
            );
            print_r($response->getBody()->getContents());
        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {
            // handle exception or api errors.
            print_r($e->getMessage());
        }

        // ...

??? note "java"

        URL obj = new URL("https://bookstack.internal.sample.com/api/pages");
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("POST");
        int responseCode = con.getResponseCode();
        BufferedReader in = new BufferedReader(
            new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();
        System.out.println(response.toString());

??? note "go"

        package main

        import (
              "bytes"
              "net/http"
        )

        func main() {

            headers := map[string][]string{
                "Content-Type": []string{"application/json"},
                "Authorization": []string{"API_KEY"},
            }

            data := bytes.NewBuffer([]byte{jsonReq})
            req, err := http.NewRequest("POST", "https://bookstack.internal.sample.com/api/pages", data)
            req.Header = headers

            client := &http.Client{}
            resp, err := client.Do(req)
            // ...
        }

`POST /pages`

*Create a page*

!!! note ""
    Body parameter

```json
{
  "book_id": 0,
  "chapter_id": 0,
  "name": "string",
  "html": "string"
}
```

<h3 id="createpage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» book_id|body|integer|true|none|
|» chapter_id|body|integer|false|none|
|» name|body|string|true|none|
|» html|body|string|true|none|

<h3 id="createpage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Created page|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of BookStackAuth
</aside>

## getBooks

<a id="opIdgetBooks"></a>

!!! note ""
    Code samples

??? note "shell"

        # You can also use wget
        curl -X GET https://bookstack.internal.sample.com/api/books \
          -H 'Accept: application/json' \
          -H 'Authorization: API_KEY'

??? note "http"

        GET https://bookstack.internal.sample.com/api/books HTTP/1.1
        Host: bookstack.localhost
        Accept: application/json

??? note "javascript"

        const headers = {
          'Accept':'application/json',
          'Authorization':'API_KEY'
        };

        fetch('https://bookstack.internal.sample.com/api/books',
        {
          method: 'GET',

          headers: headers
        })
        .then(function(res) {
            return res.json();
        }).then(function(body) {
            console.log(body);
        });

??? note "ruby"

        require 'rest-client'
        require 'json'

        headers = {
          'Accept' => 'application/json',
          'Authorization' => 'API_KEY'
        }

        result = RestClient.get 'https://bookstack.internal.sample.com/api/books',
          params: {
          }, headers: headers

        p JSON.parse(result)

??? note "python"

        import requests
        headers = {
          'Accept': 'application/json',
          'Authorization': 'API_KEY'
        }

        r = requests.get('https://bookstack.internal.sample.com/api/books', headers = headers)

        print(r.json())

??? note "php"

        <?php

        require 'vendor/autoload.php';

        $headers = array(
            'Accept' => 'application/json',
            'Authorization' => 'API_KEY',
        );

        $client = new \GuzzleHttp\Client();

        // Define array of request body.
        $request_body = array();

        try {
            $response = $client->request('GET','https://bookstack.internal.sample.com/api/books', array(
                'headers' => $headers,
                'json' => $request_body,
              )
            );
            print_r($response->getBody()->getContents());
        }
        catch (\GuzzleHttp\Exception\BadResponseException $e) {
            // handle exception or api errors.
            print_r($e->getMessage());
        }

        // ...

??? note "java"

        URL obj = new URL("https://bookstack.internal.sample.com/api/books");
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        int responseCode = con.getResponseCode();
        BufferedReader in = new BufferedReader(
            new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();
        System.out.println(response.toString());

??? note "go"

        package main

        import (
              "bytes"
              "net/http"
        )

        func main() {

            headers := map[string][]string{
                "Accept": []string{"application/json"},
                "Authorization": []string{"API_KEY"},
            }

            data := bytes.NewBuffer([]byte{jsonReq})
            req, err := http.NewRequest("GET", "https://bookstack.internal.sample.com/api/books", data)
            req.Header = headers

            client := &http.Client{}
            resp, err := client.Do(req)
            // ...
        }

`GET /books`

*List books*

!!! note ""
    Example responses

!!! note ""
    200 Response

```json
{
  "data": [
    {}
  ],
  "total": 0,
  "current_page": 0,
  "last_page": 0
}
```

<h3 id="getbooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of books|[PaginatedResponse](#schemapaginatedresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of BookStackAuth
</aside>

# Schemas

<h2 id="tocS_PaginatedResponse">PaginatedResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponse"></a>
<a id="schema_PaginatedResponse"></a>
<a id="tocSpaginatedresponse"></a>
<a id="tocspaginatedresponse"></a>

```json
{
  "data": [
    {}
  ],
  "total": 0,
  "current_page": 0,
  "last_page": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|total|integer|false|none|none|
|current_page|integer|false|none|none|
|last_page|integer|false|none|none|

