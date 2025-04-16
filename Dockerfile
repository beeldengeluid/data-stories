FROM docker.io/node:23.11@sha256:c5bfe90b30e795ec57bcc0040065ca6f284af84a1dafd22a207bd6b48c39ce01

COPY ./ /src

WORKDIR /src

RUN npm i
RUN npm run build
