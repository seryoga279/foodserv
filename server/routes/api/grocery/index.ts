import { Router, Response, Request, NextFunction } from "express";

const groceryApi: Router = Router();

const db = require("../../../../models");

groceryApi.get("/", (request: Request, response: Response) => {
    db.GroceryItem
        .findAll({})
        .then(items => response.send(items));
});

export { groceryApi };