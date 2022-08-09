// const express = require("express");
// const router = express.Router();
import { Router } from "express";
import { Request, Response } from "express";

/**
 * GET product list.
 *
 * @return product list | empty.
 */
export async function product(req: Request, res: Response){
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
}

