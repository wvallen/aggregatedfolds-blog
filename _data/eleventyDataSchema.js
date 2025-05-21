const { z } = require("zod");
const { fromZodError } = require("zod-validation-error");

module.exports = function (data) {
  const result = z.object({
    draft: z.boolean().or(z.undefined()),
  }).safeParse(data);

  if (result.error) {
    throw fromZodError(result.error);
  }

  return result.data;
};