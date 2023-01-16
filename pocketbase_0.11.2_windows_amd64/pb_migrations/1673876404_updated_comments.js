migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s2n32nxfc9ceeyt")

  // remove
  collection.schema.removeField("tmdmgckl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s2n32nxfc9ceeyt")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
