'use client'

export default function EmployeePage() {
  const data = [
    { id: 1, name: 'Lewis', company: 'SilverStar' },
    { id: 2, name: 'Charles', company: 'BlackHorse' },
    { id: 3, name: 'Max', company: 'FlyingBull' }
  ]

  return (
    <div>
      <header>
        <div>
          <span>Mentoring App</span> 
        </div>
        Employees
      </header>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Company</th>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.company}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}