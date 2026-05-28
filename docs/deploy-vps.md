# Deploy da Sulapraia em VPS Linux

## Erro `SyntaxError: Unexpected token '?'` no `npm run build`

Esse erro normalmente acontece quando a VPS está usando uma versão antiga do Node.js. Versões atuais do Next.js usam recursos modernos de JavaScript que não existem em Node antigo, por isso o erro aparece antes mesmo do projeto compilar.

Este projeto exige Node.js **20.11.0 ou superior**. A versão esperada está registrada em:

- `.nvmrc`
- `.node-version`
- `package.json` em `engines`
- `scripts/check-node-version.cjs`

## Erro `Could not find a production build in the '.next' directory`

Esse erro significa que o PM2 está tentando executar `next start` sem existir um build válido na pasta `.next`. O servidor Next.js de produção **não compila automaticamente**; ele apenas serve o resultado criado previamente por `npm run build`.

### Correção rápida na VPS

```bash
cd /home/deploy/sulapraia
pm2 stop sulapraia || true
rm -rf .next
npm ci
npm run build
pm2 restart sulapraia --update-env || pm2 start ecosystem.config.cjs
pm2 save
pm2 status
```

Se ainda não existir `package-lock.json`, troque `npm ci` por `npm install` na primeira instalação.

Se o processo estiver travado como `errored`, recrie o app no PM2:

```bash
cd /home/deploy/sulapraia
pm2 delete sulapraia || true
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 logs sulapraia
```

## Conferir versão atual na VPS

```bash
node -v
npm -v
which node
```

Se o Node for 12, 14, 16 ou 18 antigo, atualize antes de rodar o build.

## Opção A: atualizar usando nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
nvm alias default 20
node -v
npm -v
```

Depois, dentro do projeto:

```bash
cd /home/deploy/sulapraia
rm -rf node_modules .next
npm ci
npm run build
npm run start
```

Se ainda não existir `package-lock.json`, use `npm install` no lugar de `npm ci` na primeira instalação.

## Opção B: atualizar usando NodeSource

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

Depois:

```bash
cd /home/deploy/sulapraia
rm -rf node_modules .next
npm ci
npm run build
pm2 restart sulapraia --update-env
```

## Variáveis de ambiente de produção

Crie `.env.production` na raiz do projeto:

```env
NEXT_PUBLIC_SITE_URL=https://sulapraia.com.br
NEXT_PUBLIC_WHATSAPP=5511999999999
NEXT_PUBLIC_MERCADO_PAGO_LINK=https://www.mercadopago.com.br/seu-link-real
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
```

Depois de alterar variáveis de ambiente públicas do Next.js, rode o build novamente, porque variáveis `NEXT_PUBLIC_*` são embutidas no bundle no momento do build:

```bash
npm run build
pm2 restart sulapraia --update-env
```

## Comandos de produção recomendados

```bash
npm run check:node
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save
```

## Atualizar um deploy existente

```bash
cd /home/deploy/sulapraia
git pull
npm run check:node
npm ci
npm run build
pm2 restart sulapraia --update-env
```

## Verificações úteis

```bash
ls -la .next
cat .next/BUILD_ID
pm2 status
pm2 logs sulapraia --lines 50
curl -I http://localhost:3000
```
