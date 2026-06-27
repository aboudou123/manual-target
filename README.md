# manual-target

> Provisioned via **Koffi IDP** — golden path `node`.


## Endpoints
- `GET /` — service info
- `GET /health` — liveness probe

## Run locally
```bash
npm install
npm start          # http://localhost:3000
npm test
```

## Docker
```bash
docker build -t manual-target . && docker run -p 3000:3000 manual-target
```