# AI Accelerator Hub — Enterprise production image (Angular 20 + Nginx)
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist/ai-accelerator-hub/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost/health || exit 1
CMD ["nginx","-g","daemon off;"]
