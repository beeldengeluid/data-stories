FROM docker.io/node:16.20@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b

COPY ./ /src

WORKDIR /src

RUN npm i
RUN npm run build
