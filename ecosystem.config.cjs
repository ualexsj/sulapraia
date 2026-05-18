module.exports = {
  apps: [
    {
      name: 'sulapraia',
      cwd: __dirname,
      script: 'npm',
      args: 'run start',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: 'production',
        PORT: '3000'
      }
    }
  ]
};
