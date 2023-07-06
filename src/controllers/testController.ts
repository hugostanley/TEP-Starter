import BaseController from './baseController'
import { pool } from '../db/'

export class TestController extends BaseController {
  async test() {
    try {
      const data = await pool.query<{ id: number }>('select * from messages')
      console.log(data.rows[0].id)

      this.handleSuccess({ message: 'Success' })
    } catch (error) {
      this.handleError({ message: 'error' })
    }
  }
}
