import { Request, Response } from 'express';
import { UpdateOptions, DestroyOptions } from 'sequelize';

import { Node, NodeInterface } from '../models/NodeModel';

export class NodesController {
  async index(req: Request, res: Response) {
    try {
      const nodes: Array<Node> = await Node.findAll<Node>({});

      return res.json(nodes);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async create(req: Request, res: Response) {
    const params: NodeInterface = req.body;

    try {
      const node = await Node.create<Node>(params);

      return res.status(201).json(node);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async show(req: Request, res: Response) {
    const nodeId: number = Number(req.params.id);

    try {
      const node = await Node.findByPk<Node>(nodeId);
      if (!node) {
        return res.status(404).json('Bagaça não encontrada');
      }

      return res.json(node);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async update(req: Request, res: Response) {
    const nodeId: number = Number(req.params.id);
    const params: NodeInterface = req.body;

    const update: UpdateOptions = {
      where: { id: nodeId },
      limit: 1
    };

    try {
      const node = await Node.update(params, update);

      return res.status(202).json({ node });
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    const nodeId: number = Number(req.params.id);
    const options: DestroyOptions = {
      where: { id: nodeId },
      limit: 1,
    };

    try {
      await Node.destroy(options);

      res.status(204).json({ message: 'success' });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
