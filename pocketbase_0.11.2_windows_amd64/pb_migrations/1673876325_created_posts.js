migrate((db) => {
  const collection = new Collection({
    "id": "xhbu3iysy7xlvok",
    "created": "2023-01-16 13:38:45.585Z",
    "updated": "2023-01-16 13:38:45.585Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "utpygi5n",
        "name": "username",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 24,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "n5gyd449",
        "name": "community",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ly6e0rwb",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1024,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "drmvvkkh",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 124,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xddmhnu6",
        "name": "votes",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "0nqoj9cs",
        "name": "imagelink",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "krz8qpum",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "2tcpyosk",
        "name": "time",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "oxl6wpzy",
        "name": "comments",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "s2n32nxfc9ceeyt",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xhbu3iysy7xlvok");

  return dao.deleteCollection(collection);
})
