# syntax=docker/dockerfile:1

FROM golang:1.24

WORKDIR /app

# Install Git & build tools using apt
RUN apt-get update && apt-get install -y git

# Install air
RUN go install github.com/air-verse/air@latest

# Copy modul Go dan download dependencies dulu supaya caching efisien
COPY go.mod go.sum ./
RUN go mod download

# Copy semua source code
COPY . .

# Jalankan binary
CMD ["air"]
