#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

var buildIdPath = path.join(process.cwd(), '.next', 'BUILD_ID');
var appBuildManifestPath = path.join(process.cwd(), '.next', 'app-build-manifest.json');

if (!fs.existsSync(buildIdPath) || !fs.existsSync(appBuildManifestPath)) {
  console.error('\nErro: build de produção não encontrado em .next/.');
  console.error('O comando `next start` só funciona depois de gerar o build com `npm run build`.');
  console.error('\nNa VPS, execute:');
  console.error('  cd /home/deploy/sulapraia');
  console.error('  npm ci   # ou npm install se ainda não houver package-lock.json');
  console.error('  npm run build');
  console.error('  pm2 restart sulapraia --update-env');
  console.error('\nSe o PM2 estiver em estado errored, use:');
  console.error('  pm2 delete sulapraia');
  console.error('  pm2 start ecosystem.config.cjs');
  console.error('  pm2 save\n');
  process.exit(1);
}
