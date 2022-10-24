/**
 * Post track
 * @openapi
 * /api/v1/user/addUser:
 *    post:
 *      tags:
 *        - users
 *      summary: "Create new user"
 *      description: "Create new user"
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/userSchemas/addUser"
 *      responses:
 *        '200':
 *          description: Return to new user
 *        '500':
 *          description: Validation error
 *      security:
 *       - ffofofof: []
 * /api/v1/user/allUser:
 *    get:
 *      tags:
 *        - users
 *      summary: "List all users exist on database"
 *      description: "List all users exist on array"
 *      responses:
 *        '200':
 *         content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/userSchemas/allUser"
 *      security:
 *       - ffofofof: []
 * /api/v1/user/updateUser:
 *    put:
 *      tags:
 *        - users
 *      summary: "Update user"
 *      description: Update user where id
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/userSchemas/updateUser"
 *      responses:
 *        '200':
 *          description: Return to update user
 *        '500':
 *          description: Error validation.
 *      security:
 *       - ffofofof: []
 */