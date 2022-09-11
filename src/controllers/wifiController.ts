import {Request, Response} from 'express';
import {schemaWifis} from '../types/types';
import {createWifi, getWifi, getwifiId, canDelete, deleteWifiById} from '../services/wifiServices';

export async function createWifis(req:Request, res:Response){
    const wifi : schemaWifis = req.body;
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    await createWifi(wifi, userId);
    res.sendStatus(201);
}

export async function showWifis(req: Request, res: Response){
    const {payload}: any = res.locals;
    const userId : number = parseInt(payload.userId);
    const wifis = await getWifi(userId);
    res.status(200).send(wifis);
}

export async function showWifisById(req: Request, res: Response){
    const {payload}: any = res.locals;
    const id : number = parseInt(req.params.id);
    const userId : number = parseInt(payload.userId);
    const wifis = await getwifiId(userId, id);
    res.status(200).send(wifis);
}

export async function deleteWifis (req: Request, res: Response){
    const {payload}: any = res.locals;
    const id : number = parseInt(req.params.id);
    const userId : number = parseInt(payload.userId);
    await canDelete(id, userId);
    await deleteWifiById(id)
    res.status(201).send('Deleted');
}