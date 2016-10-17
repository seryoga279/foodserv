import { Router, Response, Request, NextFunction } from "express";

const recipeApi: Router = Router();

const db = require("../../../../models");

recipeApi.get("/", (request: Request, response: Response) => {
    db.Recipe
        .findAll({})
        .then(items => response.send(items));
});


export { recipeApi };