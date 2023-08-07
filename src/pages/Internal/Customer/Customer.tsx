import React from 'react'
import { TableComponent } from '../../../components/table'
import './styles.sass'
import { faker } from '@faker-js/faker'
export const Customer = () => {
  function createData(): any {
    return {
      name: faker.person.fullName(),
      calories: faker.number.int({ min: 10, max: 50 }),
      fat: faker.number.int({ min: 10, max: 50 }),
      carbs: faker.number.int({ min: 10, max: 50 }),
      protein: faker.number.int({ min: 10, max: 50 }),
      price: faker.commerce.price({ min: 10, max: 50 }),
      history: new Date().toLocaleString()
    }
  }

  const data: any[] = Array.from({ length: 50 }, () => createData())

  const columnHeaders = [
    { id: 'name', label: 'Dessert (100g serving)', sortable: true },
    { id: 'calories', label: 'Calories', sortable: true },
    { id: 'fat', label: 'Fat (g)', sortable: true },
    { id: 'carbs', label: 'Carbs (g)', sortable: true },
    { id: 'protein', label: 'Protein (g)', sortable: true },
    { id: 'price', label: 'Price ($)', sortable: true },
    { id: 'history', label: 'History', sortable: true },
    { id: 'actions', label: 'Actions', sortable: false },
  ]
  return (<>

    <div className="row border border-secondary rounded" id="div-list-customer">
      <h4 id="title-customer-data">Clientes Jurídicos</h4>
      <TableComponent data={data} head={columnHeaders} />
    </div>
  </>
  )
}