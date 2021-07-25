export type UserProp = {
  id: number
  name: string
  username: string
  email: string
  address: AddressProp
  phone: string
  website: string
  company: CompanyProp
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

type CompanyProp = {
  name: string
  catchPhrase: string
  bs: string
}
