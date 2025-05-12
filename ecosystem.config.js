module.exports = {
  apps: [
    {
      name: 'static-admin',
      script: './app/manage.py',
      args: 'runserver 0.0.0.0:8000',
      interpreter: '/var/www/html/app/venv/bin/python',
      cwd: '/var/www/html/app',
      env: {
        DJANGO_SETTINGS_MODULE: 'admin.settings',
        PYTHONUNBUFFERED: '1'
      }
    },
    {
      name: 'landing-page',
      script: './frontend/node_modules/.bin/next',
      args: 'start',
      cwd: './frontend',
      env: {
        APP_ENV: 'local',
        NEXTAUTH_URL: 'http://localhost:3000'
      }
    }
  ]
};

