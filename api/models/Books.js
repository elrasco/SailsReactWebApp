module.exports = {
  attributes: {
    title: { type: "string", required: true },
    isbn: { type: "string", unique: true },
    total: { type: "integer", required: true },
    productionYear: { type: "string" },
    categoryId: "integer",
    cover: "string",
    author: "string",
    description: "text"
  }
};
