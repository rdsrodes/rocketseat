import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import './styles.css'

export function Card (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; time: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
  return (
    <div className='card'>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}