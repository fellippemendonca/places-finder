module.exports = (schema, options) => {
  options = Object.assign({size: {default: 10, min: 1}, number: {default: 1, min: 1}}, options);

  schema.statics.paginate = function (query, size, number, cb) {
    size = +size || options.size.default;
    if (size < options.size.min) {
      size = options.size.min;
    }

    number = +number || options.number.default;
    if (number < options.number.min) {
      number = options.number.min;
    }

    const q = query.limit(size).skip(size * (number - 1));
    return cb ? q.exec(cb) : q;
  };
};
