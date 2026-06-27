# manual-target

> Provisioned via **Koffi IDP** — golden path `go`.


## Endpoints
- `GET /` — service info
- `GET /health` — liveness probe

## Run locally
```bash
go run .            # http://localhost:8080
go test ./...
```

## Docker
```bash
docker build -t manual-target . && docker run -p 8080:8080 manual-target
```