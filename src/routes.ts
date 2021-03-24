import express from 'express';
import { NodesController } from './controllers/NodesController';

export class Routes {
  public nodesController: NodesController = new NodesController();

  public routes(app: express.Application): void {
    app
      .route('/nodes')
      .get(this.nodesController.index)
      .post(this.nodesController.create);

    app
      .route('/nodes/:id')
      .get(this.nodesController.show)
      .put(this.nodesController.update)
      .delete(this.nodesController.delete);
  }
}
