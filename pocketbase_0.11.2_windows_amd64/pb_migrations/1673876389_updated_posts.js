migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhbu3iysy7xlvok")

  // remove
  collection.schema.removeField("2tcpyosk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhbu3iysy7xlvok")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
