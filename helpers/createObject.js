const createError = require("http-errors");

module.exports =
  (model) =>
  (...fieldList) =>
  async (req, res, next) => {
    try {
      req.body["userId"] = req.decoded.id;
      if (req.decoded.role) req.body[req.decoded.role + "Id"] = req.decoded.id;
      
      const objectInfo = {};
      fieldList.forEach((i) =>
        typeof i === "string"
          ? (objectInfo[i] = req.body[i])
          : (objectInfo[i[1]] = req.body[i[0]])
      );

      res.createdObject = await model.create(objectInfo);

      next();
    } catch (error) {
      console.error(error);
      if (error.name === "SequelizeUniqueConstraintError")
        return next(
          createError.BadRequest(model.tableName + " already existed")
        );
      return next(error);
    }
  };
