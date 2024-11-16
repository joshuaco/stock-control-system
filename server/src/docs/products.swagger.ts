/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - id
 *        - name
 *        - price
 *        - inStock
 *      properties:
 *        id:
 *          type: integer
 *          description: Product ID
 *          example: 1
 *        name:
 *          type: string
 *          description: Product name
 *          example: SMART TV 40 INCH
 *        price:
 *          type: number
 *          description: Product price
 *          example: 199.99
 *        inStock:
 *          type: boolean
 *          description: Product stock availability
 *          example: true
 *      example:
 *        id: 1
 *        name: SMART TV 40 INCH
 *        price: 199.99
 *        inStock: true
 */

// GET /api/products

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Get a list of products.
 *    tags:
 *      - Products
 *    description: Returns a list of products.
 *    responses:
 *      200:
 *        description: successful response.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */

// GET /api/products/{id}

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Get a product by ID.
 *    tags:
 *      - Products
 *    description: Returns a product by ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Product ID
 *    responses:
 *      200:
 *        description: successful response.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Invalid ID supplied.
 *      404:
 *        description: Product not found.
 */

// POST /api/products

/**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Create a product.
 *    tags:
 *      - Products
 *    description: Returns a new product in the database.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - price
 *            properties:
 *              name:
 *                type: string
 *                description: Product name
 *                example: SMART TV 40 INCH
 *              price:
 *                type: number
 *                description: Product price
 *                example: 199.99
 *    responses:
 *      201:
 *        description: successful response.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Invalid product data.
 */

// PUT /api/products/{id}

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Updates a product with user input.
 *    tags:
 *      - Products
 *    description: Returns the updated product.
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Product ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - price
 *            properties:
 *              name:
 *                type: string
 *                description: Product name
 *                example: SMART TV 40 INCH
 *              price:
 *                type: number
 *                description: Product price
 *                example: 199.99
 *              inStock:
 *                type: boolean
 *                description: Product stock availability
 *                example: true
 *    responses:
 *      200:
 *        description: successful response.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Invalid product data.
 *      404:
 *        description: Product not found.
 */

// PATCH /api/products/{id}

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *    summary: Updates a product stock availability.
 *    tags:
 *      - Products
 *    description: Returns the updated product.
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Product ID
 *    responses:
 *      200:
 *        description: successful response.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Invalid product data.
 *      404:
 *        description: Product not found.
 */

// DELETE /api/products/{id}

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    summary: Delete a product.
 *    tags:
 *      - Products
 *    description: Returns a confirmation message.
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Product ID
 *    responses:
 *      200:
 *        description: successful response.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Confirmation message
 *                  example: Product deleted
 *                  value: Product deleted
 *      400:
 *        description: Invalid ID supplied.
 *      404:
 *        description: Product not found.
 */
