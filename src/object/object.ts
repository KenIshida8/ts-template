export default function objectSample() {
  let country: {
    language: string
    name: string
  } = {
    language: 'japanese',
    name: 'Japan',
  }

  console.log('Object sample 1 : ', country)

  country = {
    language: 'English',
    name: 'USA',
  }
  console.log('Object sample 2 : ', country)

  // オプショナルとreadonly
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Ken',
  }
  torahack.gender = 'male'
  torahack.lastName = 'Kamado'
  // torahack.firstName = 'tanjiro'

  console.log('Object sample 3 : ', torahack)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'china'
  capitals.canada = 'Ottawa'

  console.log('Object sample 3 : ', capitals)
}
