import express from "express";
import AdsController from "../controllers/AdvertisingController";

const objAds = new AdsController();
const AdsRoute = express.Router();

AdsRoute.get("/", objAds.getAdvertiseList);

export default AdsRoute;
