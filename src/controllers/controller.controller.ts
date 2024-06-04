import { Request, Response } from 'express';

import Phrase from '../model/pg.model'

export const begin = async (req: Request, res: Response) => {
    res.status(200).send('Tudo ok por aqui')

}


export const createApi = async (req: Request, res: Response) => {
    let { id, author, frases } = req.body;

    let newPhrase = await Phrase.create({ author, frases, id })
    res.json({ id, author, frases })

}

export const getAll = async (req: Request, res: Response) => {
    let backof = await Phrase.findAll()
    res.json({ backof: backof })
}

export const getOne = async (req: Request, res: Response) => {
    let { id } = req.params
    let bankfindOne = await Phrase.findByPk(id)

    res.json({ bankfindOne })
}


export const updatePhrase = async (req: Request, res: Response) => {
    let { id } = req.params
    let { author, frases } = req.body

    let Phrasea = await Phrase.findByPk(id)
    if (Phrasea) {
        Phrasea.author = author;
        Phrasea.frases = frases;
        await Phrasea.save()
        res.json({ Phrasea })
    } else {
        res.json({ err: 'Não encontado o que buscar' })
    }
}


export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params
    await Phrase.destroy({ where: { id } })
    res.json({})
}