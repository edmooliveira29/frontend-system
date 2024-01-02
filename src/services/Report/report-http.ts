import http from '../http-common'

export class ReportService {
  async getAll(companyId: any) {
    const params = { companyId: companyId };
    const reportResponse = (await http.get<any>(`/report`,{ params }))
    return reportResponse.data
  }
}
