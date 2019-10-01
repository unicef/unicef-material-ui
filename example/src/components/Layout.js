import React, { useEffect, useState } from 'react'
import { Buttons, Alert, CardWithTabs, CardsExample } from '../components'

const options = [
  { id: 1, title: 'Juan Merlos Tevar', subtitle: 'Manager', imageUrl: null },
  { id: 2, title: 'Suresh Sevarthi', subtitle: 'Front-end Developer', imageUrl: null },
  { id: 3, title: 'Kundal Singh Mehra', subtitle: 'Back-end Developer', imageUrl: null },
  { id: 4, title: 'Gia Zarina Santos', subtitle: 'Manager', imageUrl: null },
  { id: 5, title: 'Cory Kleinschmidt', subtitle: 'Information technology specialist', imageUrl: null },
  { id: 6, title: 'Riddhi Poladia', subtitle: 'Database Specialist', imageUrl: null },
  { id: 7, title: 'Mahananda Talgaonkar', subtitle: 'Sharepoint Developer', imageUrl: null },
  { id: 8, title: 'Mary Anne Alde', subtitle: 'Sharepoint analyst', imageUrl: null },
  { id: 9, title: 'Renga Narayanan', subtitle: 'Back-end Developer', imageUrl: null },
].map(option => ({
  value: option.id,
  label: option.title,
  subtitle: option.subtitle,
  imageUrl: option.imageUrl,
}))

export default function Layout() {
  const [isLoading, setLoading] = useState(true)
  const [gotOptions, setOptions] = useState([''])

  useEffect(() => {
    setTimeout(() => {
      setOptions(options)
      setLoading(false)
    }, 3000);
    return () => clearTimeout();
  }, []);

  return (
    <React.Fragment>
      <Buttons />
      <Alert />
      <CardWithTabs />
      <CardsExample />
    </React.Fragment>
  )
}
