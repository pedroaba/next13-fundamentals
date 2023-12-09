import { AddToCardButton } from './add-to-card-button'
import { Test } from './test'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product(props: ProductProps) {
  const [productId, size, color] = props.params.data

  const response = await fetch('https://api.github.com/users/pedroaba')
  const user = await response.json()

  return (
    <div>
      <h1>Product: {productId}</h1>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCardButton>
        <Test />
      </AddToCardButton>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
