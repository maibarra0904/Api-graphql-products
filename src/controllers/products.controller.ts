import { Request, Response } from "express"
import Product from "../models/products.model"

export const getAllProducts = async (req: Request, res: Response) => {

    const products = await Product.findAll()

    return res.status(200).json({
        products
    })
}