import http from '../http-common'

export class ReportService {
  async getAll() {
    return (await http.get<any>('/report')).data
  }
  
}
