/* eslint-disable max-lines */
import React, { useEffect } from 'react'
import * as echarts from 'echarts'
import { FcConferenceCall, FcMoneyTransfer, FcBullish } from 'react-icons/fc'
import './styles.sass'
import { Link } from 'react-router-dom'
export const Dashboard = () => {

  useEffect(() => {
    bestSellingProductsChart()
    last6MonthsSales()
  }, [])

  const bestSellingProductsChart = () => {
    const dom = document.getElementById('best-selling-products-chart')
    const myChart = echarts.init(dom)
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
          data: [
            { value: 1048, name: 'Vestido' },
            { value: 735, name: 'Tênis' },
            { value: 580, name: 'Cinto' },
            { value: 484, name: 'Meia' },
            { value: 300, name: 'Carteira' }
          ],
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
    window.addEventListener('resize', () => myChart.resize(), { passive: true })
    window.removeEventListener('resize', () => myChart.resize())

  }

  const last6MonthsSales = () => {
    const dom = document.getElementById('last-6-months-sales')
    const myChart = echarts.init(dom)
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
          data: ['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Vendas',
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
          name: 'Vendas',
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
          name: 'Vendas',
          type: 'bar',
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: 'Média',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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

  return (
    <>
      <div className="m-2">
        <div className='row'>
          <div className="col-md-9 col-sm-12">
            <div className="card border bg-light rounded shadow-sm" style={{ padding: '30px 10px' }} >
              <div className="card-body">
                <h4>Seja bem vindo <strong> {JSON.parse(localStorage.getItem('userLogged') as any).name}</strong>!</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card border bg-light rounded shadow-sm" style={{ padding: '7px 10px' }}>
              <div className="card-body d-flex flex-column align-items-center">
                <h1 style={{ textShadow: '1px 1px 3px black' }}>{new Date().toLocaleTimeString('pt-BR')} </h1>
                <h6>{new Date().toLocaleString('pt-BR')} </h6>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-4 col-sm-12 my-2">
            <div className="card border bg-light rounded shadow-sm" id='cards'>
              <Link to='/vendas'>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6" >
                      <span style={{ fontSize: '30px', color: 'CaptionText' }}><strong> 197 &nbsp;&nbsp;&nbsp;&nbsp;</strong><h5>vendas realizadas</h5></span>
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
                      <span style={{ fontSize: '30px', color: 'CaptionText' }}><strong> 126 &nbsp;&nbsp;&nbsp;&nbsp;</strong><h5>clientes cadastrados</h5></span>
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
                      <span style={{ fontSize: '30px', color: 'CaptionText' }}><strong> R$ 3985,58 </strong><h5>de lucro</h5></span>
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
      </div >
    </>
  )
}
