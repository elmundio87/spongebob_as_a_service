# Spongebob As A Service

This API will allow you to spongebob-ify any string of text passed in via HTTP POST.

Reference: https://knowyourmeme.com/memes/mocking-spongebob


## Example usage:

After building the binary and running it, you can make POST requests with string data.

```shell
spongebob@bikinibottom:~$ curl -L localhost:10000 -d "hello world"
HeLlo WOrLd
```

## Build and run locally

Install golang 1.14 or higher and then run;

```shell
go build .
./spongebob_as_a_service
```

## Docker

The API can be hosted in a docker container, with an example application listening on port 80.

```shell
docker build . -t spongebob-as-a-service
docker run -i spongebob-as-a-service -p 8080:80
```