/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import { init } from 'echarts'
import { FcConferenceCall, FcMoneyTransfer, FcBullish } from 'react-icons/fc'
import './styles.sass'
import { Link, useLocation } from 'react-router-dom'
import { ReportService } from '../../../services/Report'
import { AlertGeneral } from '../../../components'
import { jwtDecode } from 'jwt-decode'
export const Dashboard = () => {
  const report = new ReportService()
  const [userLogged, setUserLogged] = useState<any>({})
  const [loadingData, setLoadingData] = useState(true)
  const [expireSession, setExpireSession] = useState<any>(['', ''])
  const [data, setData] = useState<
    {
      products: any[],
      bestSellingProducts: any[],
      salesIntheLast6Months: any,
      quantityOfSales: number,
      quantityOfCustomers: number,
      totalOfSales: string
    }>({
      products: [],
      bestSellingProducts: [],
      salesIntheLast6Months: {},
      quantityOfSales: 0,
      quantityOfCustomers: 0,
      totalOfSales: '0.00',
    })
  const location = useLocation()
  const currentPath = location.pathname

  useEffect(() => {
    const getDataToDashboard = async () => {
      let data
      try {
        data = await report.getAll(JSON.parse(localStorage.getItem('company') as any)._id)
        data = data.data
      } catch (error: any) {
        AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
        return
      }
      setData(data)
      const dom = document.getElementById('best-selling-products-chart')
      const myChart = init(dom)

      const option: echarts.EChartsOption = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right: '2%',
          bottom: '10%',
          itemWidth: 10
        }, toolbox: {
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Produto',
            type: 'pie',
            radius: '60%',
            data: data.products,
            emphasis: {
              itemStyle: {
                shadowBlur: 50,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.9)'
              }
            }
          }
        ]
      }

      myChart.setOption(option)

      if (window.innerWidth < 768) {
        myChart.setOption({ ...option, legend: { orient: 'horizontal', bottom: '0%' } })

        myChart.resize({ width: 300, height: 300 })
      } else {
        myChart.resize()
      }
      salesIntheLast6Months(data)

      window.addEventListener('resize', () => myChart.resize(), { passive: true })
      window.removeEventListener('resize', () => myChart.resize())
    }

    const salesIntheLast6Months = (data: any) => {

      const dom = document.getElementById('last-6-months-sales')
      const myChart = init(dom)
      myChart.setOption({})

      const colors = ['#5470C6', '#91CC75', '#EE6666']
      const option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },

        toolbox: {
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['Vendas', 'Média']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: data.salesIntheLast6Months.monthsName
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Média das vendas',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: 'Média',
            type: 'line',
            yAxisIndex: 1,
            data: data.salesIntheLast6Months.average
          }
        ]
      }
      myChart.setOption(option)
      if (window.innerWidth < 768) {
        myChart.setOption({ ...option, legend: { orient: 'horizontal', bottom: '0%' } })
        myChart.resize({ width: 300, height: 300 })
      } else {
        myChart.resize()
      }

      window.addEventListener('resize', () => myChart.resize(), { passive: true })
      window.removeEventListener('resize', () => myChart.resize())
    }
    const expireSession = () => {
      const userLogged: any = JSON.parse(localStorage.getItem('userLogged') as any)
      setUserLogged(userLogged)
      const endSession = jwtDecode(userLogged.sessionToken) as any
      setExpireSession((new Date(endSession.exp * 1000).toLocaleString('pt-BR')).split(','))
    }
    expireSession()
    
    if (currentPath == '/dashboard') {
      setTimeout(() => {
        setLoadingData(true)
        getDataToDashboard()
        setLoadingData(false)
      }, 2000)
    }

  }, [])


  return (
    <>
      <div className="m-2">
        <div className='row'>
          <div className="col-md-9 col-sm-12">
            <div className="card border bg-light rounded shadow-sm" style={{ padding: '27px 10px' }} >
              <div className="card-body" id="welcome-message">
                <h4 id="welcome-message">Seja bem vindo(a) <strong>{userLogged.name}</strong>!</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card border bg-light rounded shadow-sm" style={{ padding: '7px 10px' }}>
              <div className="card-body d-flex flex-column align-items-center" id="expire-session">
                <h3>Sua sessão expira no dia {expireSession[0]} às{expireSession[1]}</h3>
              </div>
            </div>
          </div>
        </div>
        {loadingData ?
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="spinner-border" role="status" style={{ height: '100px', width: '100px' }}>
              <span className="visually-hidden" >Loading...</span>
            </div>
          </div> :
          <div>
            <div className='row'>
              <div className="col-md-4 col-sm-12 my-2">
                <div className="card border bg-light rounded shadow-sm" id='cards'>
                  <Link to='/vendas'>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6" >
                          <span style={{ fontSize: '30px', color: 'CaptionText' }}><strong> {data.quantityOfSales} &nbsp;&nbsp;&nbsp;&nbsp;</strong><h5>{data.quantityOfSales > 1 ? 'vendas' : 'venda'} realizadas</h5></span>
                        </div>
                        <div className="col-6 py-2 d-flex justify-content-center align-items-center">
                          <FcMoneyTransfer size={50} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 my-2">
                <div className="card border bg-light rounded shadow-sm" id='cards' >
                  <Link to='/clientes'>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6" >
                          <span style={{ fontSize: '30px', color: 'CaptionText' }}><strong> {data.quantityOfCustomers} &nbsp;&nbsp;&nbsp;&nbsp;</strong><h5>{data.quantityOfCustomers > 1 ? 'clientes cadastrados' : 'cliente cadastrado'} </h5></span>
                        </div>
                        <div className="col-6 py-2 d-flex justify-content-center align-items-center">
                          <FcConferenceCall size={50} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 my-2">
                <div className="card border bg-light rounded shadow-sm" id='cards' >
                  <div className="card-body">
                    <Link to='/vendas'>
                      <div className="row">
                        <div className="col-6">
                          <span style={{ fontSize: '30px', color: 'CaptionText' }}><strong> R$ {data.totalOfSales} </strong><h5>de lucro</h5></span>
                        </div>
                        <div className="col-6 py-2 d-flex justify-content-center align-items-center">
                          <FcBullish size={50} />
                        </div>
                      </div>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6 col-sm-12 my-2">
                <div className="card border bg-light rounded shadow-sm" id='cards-profit'>
                  <div className="card-body">
                    <span style={{ fontSize: '30px', color: 'CaptionText' }}><strong> Produtos mais vendidos</strong> </span>
                    <div id="best-selling-products-chart" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 my-2">
                <div className="card border bg-light rounded shadow-sm" id='cards-profit'>
                  <div className="card-body">
                    <span style={{ fontSize: '30px', color: 'CaptionText' }}><strong> Vendas em relação aos últimos 6 meses</strong> &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div id="last-6-months-sales" />
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div >
    </>
  )
}
