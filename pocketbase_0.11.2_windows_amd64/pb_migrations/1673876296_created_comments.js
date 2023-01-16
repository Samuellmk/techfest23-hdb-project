migrate((db) => {
  const collection = new Collection({
    "id": "s2n32nxfc9ceeyt",
    "created": "2023-01-16 13:38:16.099Z",
    "updated": "2023-01-16 13:38:16.099Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4pq7lzc9",
        "name": "username",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 26,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tmdmgckl",
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
        "id": "mvvhktf9",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1024,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("s2n32nxfc9ceeyt");

  return dao.deleteCollection(collection);
})
