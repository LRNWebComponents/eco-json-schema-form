var demoSchema = {
    "$schema": "http://json-schema.org/schema#",
    "title": "Store",
    "type": "object",
  "properties": {
    "branch": {
      "title": "Branch",
      "type": "string"
    },
    Roles: {
      title: "Roles",
      type: "array",
      "x-reference": "true",
      "x-labelAttr": "Name",
      "x-valueAttr": "Moid",
      "x-referenceDataPath": "Results",
      "x-referenceUri": "/api/v1/iam/Roles",
      "x-referenceMandatory": "yes"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "address": {
      "title": "Address",
      "type": "string",
      "minLength": 3
    },
    "city": {
      "title": "City",
      "type": "string",
      "minLength": 3
    },
    "province": {
      "title": "Province",
      "type": "string",
      "minLength": 2
    },
    "country": {
      "title": "Country",
      "type": "string",
      "minLength": 2
    },
    "postalCode": {
      "title": "Postal/Zip Code",
      "type": "string",
      "pattern": "[a-zA-Z][0-9][a-zA-Z]\\s*[0-9][a-zA-Z][0-9]|[0-9]{5}(-[0-9]{4})?"
    },
    "email": {
      "title": "Email",
      "type": "string",
      "pattern": "(?:^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$)|(?:^$)"
    },
    "website": {
      "title": "Website",
      "type": "string",
      "format": "uri"
    },
    "establishedDate": {
      "title": "Established Date",
      "type": "string",
      "format": "date-time"
    },
    "closedDate": {
      "title": "Closed Date",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    }
  }
};
