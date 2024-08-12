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
   Ensure that the data is arranged in alphabetical format as required by the application.

3. **npm run start:dev**
   Runs the app in the development mode.
   Open http://localhost:3001 to view it in the browser.

4. **npm run build**
   It correctly bundles React in production mode and optimizes the build for the best performance.

5. **npm run test**
   It executes the test suite to ensure the application behaves as expected.

## env

It is run multiple environment local , production and stage environment

## docker

docker file run image name your_image_name

## Logging

The application uses `winston` for logging. Logs are output to the console and stored in `app.log`.

## Logger Service

A custom logger service (`CustomLoggerService`) is provided in `src/logger.service.ts` and integrates `winston` for logging in different environments.

## Configuration

The logging level and format are configured in `src/logger.service.ts`.

## Troubleshooting

- Ensure `winston` and `nest-winston` are correctly installed and configured.
- Check the `app.log` file for application logs.
