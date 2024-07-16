import { query } from '../config/db.js';

const createProduct = async (productData) => {
    const { user_id, category, name, price, description, image, address, contact_number } = productData;
    const result = await query(
        'INSERT INTO Products (user_id, category, name, price, description, image, address, contact_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [user_id, category, name, price, description, image, address, contact_number]
    );
    return result.rows[0];
};

const getProductById = async (id) => {
    const result = await query(
        'SELECT * FROM Products WHERE id = $1',
        [id]
    );
    return result.rows[0];
};

const getProducts = async (filter) => {
    const { categories } = filter;
    let queryText = 'SELECT * FROM Products';
    let queryParams = [];

    // Handle categories filter if provided
    if (categories && categories.length > 0) {
        // Generate placeholders like $1, $2, etc., for each category
        const placeholders = categories.map((_, index) => `$${index + 1}`).join(', ');
        queryText += ` WHERE category IN (${placeholders})`;
        queryParams = [...categories];
    }

    try {
        const result = await query(queryText, queryParams);
        return result.rows;
    } catch (error) {
        throw error;
    }
};

const searchProductsByName = async (productName) => {
    let queryText = 'SELECT * FROM Products WHERE name LIKE $1';
    let queryParams = [`%${productName}%`]; // Use % for partial matching

    try {
        const result = await query(queryText, queryParams);
        return result.rows;
    } catch (error) {
        throw error;
    }
};

const updateProductById = async (id, productData) => {
    const { category, name, price, description, image, address, contact_number } = productData;
    const result = await query(
        'UPDATE Products SET category = $1, name = $2, price = $3, description = $4, image = $5, address = $6, contact_number = $7 WHERE id = $8 RETURNING *',
        [category, name, price, description, image, address, contact_number, id]
    );
    return result.rows[0];
};

const deleteProductById = async (id) => {
    const result = await query(
        'DELETE FROM Products WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

export { createProduct, getProductById, getProducts, updateProductById, deleteProductById, searchProductsByName };
