# API RESTfull

## Technologies:

Node.
Javascript.
HTML.
Express.
Firebase.

## Create Product

method: POST

endpoint: /api/products

body:

```json
{
  "description": "Producto 1",
  "price": 100.99,
  "stock": 15,
  "title": "Producto 1"  
}
```

response:

```json
{
  "id": "dnz3EeB30StnZmsehy9C",
  "description": "Producto 1",
  "price": 100.99,
  "stock": 15,
  "title": "Producto 1"  
}
```

status: 201

## Error Create Product

method: POST

endpoint: /api/products

body:

```json
{
  "title": "Producto 1"
}
```

response:

```json
{
  "error": "El campo price es requerido"
}
```

status: 422

## Testing

### Install dependencies

```shell
npm install -D jest supertest
```

### Run tests

```shell
npm test
```

### package.json

```json
{
  "scripts": {
    ...
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "devDependencies": {
    "jest": "^26.6.3",
    "supertest": "^6.1.3"
  }
}
```
