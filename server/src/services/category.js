import db from "../models";

//GET ALL CATEGORY
export const getCategoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
        attributes: ["code", "value"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "ok" : "failed to get catogory",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
