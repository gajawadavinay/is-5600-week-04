const fs = require('fs').promises
const path = require('path')

const productsFile = path.join(__dirname, 'data/full-products.json')

async function list(options = {}) {
  const { offset = 0, limit = 25, tag } = options
  const data = await fs.readFile(productsFile)
  let products = JSON.parse(data)

  if (tag) {
    products = products.filter(p => p.tags.includes(tag))
  }

  return products.slice(offset, offset + limit)
}

async function get(id) {
  const data = await fs.readFile(productsFile)
  const products = JSON.parse(data)
  return products.find(p => p.id === id) || null
}

async function remove(id) {
  console.log(`Stub: Product ${id} would be deleted`)
  return true
}

async function update(id, updatedProduct) {
  console.log(`Stub: Product ${id} would be updated with:`, updatedProduct)
  return true
}

module.exports = {
  list,
  get,
  remove,
  update
}
