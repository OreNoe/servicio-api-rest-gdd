# API de Gestión de Reportes Diarios, Barrios y Personas

## Descripción General
Esta API proporciona servicios para gestionar reportes diarios, barrios y personas asociadas con un programa de distribución de alimentos. La API cuenta con tres endpoints principales: generación de reportes diarios, obtención de barrios y personas con su barrio asociado.

## URL Base
```
http://localhost:3000
```

## Estilo de Respuesta
- **Código de estado**: `200 OK`
- **Tipo**: `application/json`

### Respuesta de Error
- **Código de estado**: `500 Internal Server Error`
- **Formato**:
  ```json
  {
    "error": "Error Interno del Servidor"
  }
  ```

---

## Endpoints

### 1. **GET /reporte**

#### Descripción
Genera un reporte diario de los barrios y la cantidad de residentes que han solicitado comida en ese día.

#### Solicitud
- **Método**: `GET`
- **URL**: `/reporte`

#### Ejemplo de Respuesta
```json
[
  {
    "barrio": "Barrio 1",
    "cantidad": 1,
    "personas": [
      "Persona 1"
    ]
  },
  {
    "barrio": "Barrio 2",
    "cantidad": 1,
    "personas": [
      "Persona 3"
    ]
  },
  {
    "barrio": "Barrio 3",
    "cantidad": 1,
    "personas": [
      "Persona 5"
    ]
  }
]
```

---

### 2. **GET /barrios**

#### Descripción
Obtiene la lista de todos los barrios registrados en la base de datos.

#### Solicitud
- **Método**: `GET`
- **URL**: `/barrios`

#### Ejemplo de Respuesta
```json
[
  {
    "id": 1,
    "nombre": "Barrio 1"
  },
  {
    "id": 2,
    "nombre": "Barrio 2"
  },
  {
    "id": 3,
    "nombre": "Barrio 3"
  }
]
```

---

### 3. **GET /personas**

#### Descripción
Obtiene una lista de personas junto con el barrio al que pertenecen.

#### Solicitud
- **Método**: `GET`
- **URL**: `/personas`

#### Ejemplo de Respuesta
```json
[
  {
    "id": 1,
    "nombre": "Persona 1",
    "pidioComida": true,
    "barrio": {
      "id": 1,
      "nombre": "Barrio 1"
    }
  },
  {
    "id": 2,
    "nombre": "Persona 2",
    "pidioComida": false,
    "barrio": {
      "id": 1,
      "nombre": "Barrio 1"
    }
  },
  {
    "id": 3,
    "nombre": "Persona 3",
    "pidioComida": true,
    "barrio": {
      "id": 2,
      "nombre": "Barrio 2"
    }
  },
  {
    "id": 4,
    "nombre": "Persona 4",
    "pidioComida": false,
    "barrio": {
      "id": 2,
      "nombre": "Barrio 2"
    }
  },
  {
    "id": 5,
    "nombre": "Persona 5",
    "pidioComida": true,
    "barrio": {
      "id": 3,
      "nombre": "Barrio 3"
    }
  },
  {
    "id": 6,
    "nombre": "Persona 6",
    "pidioComida": false,
    "barrio": {
      "id": 3,
      "nombre": "Barrio 3"
    }
  }
]
```

---

## Entidades

### 1. **Barrio**
- Representa un barrio.
- Cada barrio tiene una lista de residentes.

### 2. **Persona**
- Representa a un individuo que reside en un barrio.
- Una persona puede solicitar comida, y esta información se utiliza para generar reportes.

---

## Manejo de Errores
Si ocurre un error durante las operaciones de la base de datos, la API responderá con un estado `500 Internal Server Error` y un mensaje de error indicando la naturaleza del problema.