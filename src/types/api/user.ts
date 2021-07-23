export type UserProp = {
  id: number
  name: string
  username: string
  email: string
  address: AddressProp
}

type AddressProp = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoProp
}

type GeoProp = {
  lat: string
  lng: string
}
