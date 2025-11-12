# Utilisation de l'image Node.js pour construire le projet
FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --prefer-offline
COPY . .

# Définition de la variable d'environnement pour le build
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

ARG VITE_API_WEBSOCKET_URL
ENV VITE_API_WEBSOCKET_URL=$VITE_API_WEBSOCKET_URL

RUN npm run build

#utilisation de  Nginx pour servir les fichers statiques/
FROM nginx:stable
# config nginx avec fallback SPA
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# fichier statique
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8086
CMD ["nginx", "-g", "daemon off;"]
