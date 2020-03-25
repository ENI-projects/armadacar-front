FROM node:lts-slim as build-stage

WORKDIR /app
# copie les fichiers de l'application et build
COPY . .

RUN npm ci && npm run build

# Stage de build de l'image finale
FROM nginx:1.17-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html/
