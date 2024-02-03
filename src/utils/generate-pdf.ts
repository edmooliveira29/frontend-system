import { Content, ContentTable, ContentText, TDocumentDefinitions } from 'pdfmake/interfaces'
import { alertLoading } from '../components'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs

export const generatePDF = (data: any[], header: any[], tableName: string, fields: any[]) => {
  alertLoading('open', 'Estamos gerando o PDF...')
  const titleOfReport: ContentText = { text: `Lista de ${tableName}`, style: 'title', bold: true, alignment: 'center', marginBottom: 20 }
  const headerTable: ContentText[] = header.map(text => ({ text, bold: true, fontSize: 10 }))
  const bodyTable: any[] = []
  for (const item of data) {
    const row: any[] = []
    for (const field of fields) {
      const [father, children] = field.split('.')
      if (field.includes('hiringDate') || field.includes('date')) {
        row.push(new Date(item[field]).toLocaleDateString('pt-BR'))
      } else if (field.includes('.')) {
        row.push(item[father][children])
      } else if (Object.prototype.hasOwnProperty.call(item, field)) {

        row.push(item[field])
      }
    }
    bodyTable.push(row)
  }
  const tableData: ContentTable = {
    table: {
      widths: header.map(() => ('*')),
      headerRows: 1,
      body: [
        headerTable,
        ...bodyTable
      ],
    },
    style: 'table',
    alignment: 'center',
    layout: {
      hLineColor: '#222222',
      vLineColor: '#222222',
      fillColor: function (rowIndex) {
        if (rowIndex === 0) {
          return '#CCCCCC'
        } else {
          return (rowIndex % 2 === 0) ? '#EEEEEE' : null
        }
      }
    }
  }


  const currentDate = new Date()
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} às ${currentDate.getHours()}:${currentDate.getMinutes()}`

  const headerPages = function (): Content {
    return {
      text: `Relatório exportado dia ${formattedDate}`,
      alignment: 'right',
      fontSize: 8,
      margin: [0, 10, 10, 10]
    }
  }

  const footer = function (currentPage: any, pageCount: any): Content {
    return {
      text: `Página ${currentPage.toString()} de ${pageCount}`,
      alignment: 'center',
      fontSize: 8,
      margin: [0, 0, 0, 10]
    }
  }

  const pdfDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    content: [titleOfReport, tableData],
    header: headerPages,
    footer: footer,
    styles: {
      title: {
        fontSize: 16,
        alignment: 'center',
        bold: true
      },
      table: {
        fontSize: 10,
        alignment: 'center',
        margin: [0, 10, 0, 10]
      },
    },
    defaultStyle: {
      fontSize: 8,
    },
    pageMargins: [20, 30, 20, 30],
  }

  pdfMake.createPdf(pdfDefinition).download(`Lista de ${tableName}.pdf`)
  alertLoading('close')
}