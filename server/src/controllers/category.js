import * as services from "../services/category";

export const getCategorise = async (req, res) => {
  try {
    const response = await services.getCategoriesService();
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ err: -1, msg: "Flaied to categoery controller", error });
  }
};