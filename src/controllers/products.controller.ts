import { Request, Response } from "express"
import Product from "../models/products.model"

export const getAllProducts = async (req: Request, res: Response) => {

    const products = await Product.findAll({
        where: {
            active: true
        }
    })

    return res.status(200).json({
        products
    })
}


export const getProductById = async (req: Request, res: Response) => {

    const { id } = req.params

    if (!id) return res.status(404).json({ msg: "Not Id Selected" })

    const product = await Product.findOne({ 
        where: { id, active: true },
      })

    if (!product) return res.status(404).json({ msg: "Product not found" })

    return res.status(200).json({
        product
    })
}

export const createProduct = async (req: Request, res: Response) => {

    const { name, price, stock } = req.body


    try {
        const product = await Product.create({ name, price, stock })

        return res.status(200).json({
            product
        })
    } catch (error) {

        return res.status(500).json({
            msg: "Error al crear el producto",
            error
        })
    }

}

export const updateProduct = async (req: Request, res: Response) => {

    const { name, price, stock } = req.body

    const { id } = req.params

    if (!id) return res.status(404).json({ msg: "Not Id Selected" })

    try {
        const [affectedRows] = await Product.update(
            { name, price, stock },
            {
                where: {
                    id,
                    active: true
                }
            }
        )

        if (affectedRows === 0) {
            return res.status(404).json({ msg: "Producto no encontrado" });
        }

        return res.status(200).json({
            msg: "Producto actualizado exitosamente"
        });
    } catch (error) {

        return res.status(500).json({
            msg: "Error al crear el producto",
            error
        })
    }

}

export const deleteProduct = async (req: Request, res: Response) => {

    const { id } = req.params

    if (!id) return res.status(404).json({ msg: "Not Id Selected" })




    try {
        const [affectedRows] = await Product.update(
            {active: false},
            {
                where: {
                    id,
                    active: true
                }
            }
        )

        if (affectedRows === 0) {
            return res.status(404).json({ msg: "Producto no encontrado" });
        }

        return res.status(200).json({
            msg: "Producto eliminado exitosamente"
        });
    } catch (error) {

        return res.status(500).json({
            msg: "Error al borrar el producto",
            error
        })
    }

}