#!/usr/bin/env node
var requiredMajor = 20;
var requiredMinor = 11;
var current = process.versions.node.split('.').map(function (part) { return parseInt(part, 10); });
var major = current[0];
var minor = current[1];

if (major < requiredMajor || (major === requiredMajor && minor < requiredMinor)) {
  console.error('\nErro: Node.js incompatível para buildar/rodar este projeto Next.js.');
  console.error('Versão atual: ' + process.versions.node);
  console.error('Versão mínima recomendada: ' + requiredMajor + '.' + requiredMinor + '.0 LTS ou superior.');
  console.error('\nNa VPS, atualize com um dos comandos abaixo:');
  console.error('  nvm install 20 && nvm use 20');
  console.error('ou');
  console.error('  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs');
  console.error('\nDepois rode novamente: npm ci && npm run build\n');
  process.exit(1);
}
