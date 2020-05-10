FROM golang:1.14

EXPOSE 80/udp

LABEL maintainer="elmundio87"

WORKDIR /go/src/app
COPY . .

RUN apt-get clean \
    && apt-get -y update
RUN apt-get -y install nginx
COPY nginx.conf /etc/nginx
RUN go get -d -v ./...
RUN go install -v ./...

CMD service nginx start && app