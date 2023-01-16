migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhbu3iysy7xlvok")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "akshmncg",
    "name": "imagestring",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xhbu3iysy7xlvok")

  // remove
  collection.schema.removeField("akshmncg")

  return dao.saveCollection(collection)
})
