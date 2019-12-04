#step 1: build frontend
FROM node:10-alpine as build-frontend
WORKDIR /app
COPY frontend .
RUN npm install
RUN $(npm bin)/ng build --prod

#step 2: build backend
FROM mcr.microsoft.com/dotnet/core/sdk AS build-backend
RUN mkdir app
WORKDIR /app
COPY backend .
COPY --from=build-frontend /app/dist/frontend/ /wwwroot
RUN dotnet restore
RUN dotnet publish -r linux-arm -c Release -o out

#step 3: run
FROM mcr.microsoft.com/dotnet/core/aspnet
WORKDIR /app
COPY --from=build-backend /app/out .
ENTRYPOINT dotnet backend.dll