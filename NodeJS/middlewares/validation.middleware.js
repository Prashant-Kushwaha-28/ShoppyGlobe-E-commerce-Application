import { body, validationResult } from "express-validator";

//  Validation for creating a product
export const validateProduct = [
  body("title").notEmpty().withMessage("Title is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("description").notEmpty().withMessage("Description is required"),
  body("quantity").isNumeric().withMessage("stockQuantity must be a number"),
  body("images").isArray({ min: 1 }).withMessage("At least one image is required"),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];