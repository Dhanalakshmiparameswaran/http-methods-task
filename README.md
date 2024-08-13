# NestJS Music Festival API

## Overview

This application provides an API for fetching and transforming data related to music festivals and their associated bands. It is built using NestJS and is dockerized for easy deployment and scaling.

## Setup

## npm install

It will download and install all the required dependencies for the application.

1. **Get data from URL:**
   ```bash
    https://github.com/your-repo/music-festival-api.git
   cd music-festival-api
   ```
2. **Set data to getTransformedData file**
   Ensure that your data is arranged in alphabetical format as required by the application and placed in the getTransformedData file.
3. **npm run start:dev**
   This is runs the app in development mode. You can view it by opening http://localhost:3001 in your browser.

4. **npm run build**
   Its bundles the application for production and optimizes it for the best performance.

5. **npm run test**
   This is executes the test suite to ensure the application behaves as expected.

## env

The application supports multiple environments, including local, production, and staging. Make sure to configure the environment variables as needed for each environment.

## docker

1. **docker build -t your_image_name**
2. **docker run your_image_name**

Replace your_image_name with your desired image name.

## Logging

The application uses `winston` for logging. Logs are output to the console and stored in `app.log`.

## Logger Service

A custom logger service (`CustomLoggerService`) is provided in `src/logger.service.ts` and integrates `winston` for logging in different environments.

## Configuration

The logging level and format are configured in `src/logger.service.ts`.

## Troubleshooting

- Ensure `winston` and `nest-winston` are correctly installed and configured.
- Check the `app.log` file for application logs.
