const AppConfig = {
  port: process.env.PORT || 8081,
  pageLimit: process.env.PAGE_LIMIT || 15,
  apiBaseUrl:
    'https://us-central1-wongnai-frontend-assignment.cloudfunctions.net',
};

export default AppConfig;
