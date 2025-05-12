module.exports = {
  apps: [
    {
      name: 'static-admin',
      script: './manage.py',
      args: 'runserver 0.0.0.0:8000',
      interpreter: '/var/www/html/app/venv/bin/python',
      cwd: '/var/www/html/app',
      env: {
        DJANGO_SETTINGS_MODULE: 'admin.settings',
        PYTHONUNBUFFERED: '1'
      }
    }
  ]
};

