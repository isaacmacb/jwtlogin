import express, {Application} from 'express';

export default class App {
    app : express.Application


    constructor(nodeEnv: 'development' | 'production') {
        this.app = express()
        this.middlewares()
        this.routes()
        this.exceptionHandler()
    }

    public listen(port: number): void {
        this.app.listen(port, () => {
          console.log(`⚡ server running on port ${port}`)
        })
      }

    private middlewares() {}
    private routes() {}
    private exceptionHandler() {}
}
