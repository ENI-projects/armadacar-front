FROM node:lts-slim as build-stage

WORKDIR /app
# copy project files, install dependencies and build it
COPY . .
RUN npm ci && npm run build

# Build production image with the result of the previous stage
FROM nginx:1.17-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html/
