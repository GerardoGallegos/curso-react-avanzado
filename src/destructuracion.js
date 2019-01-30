

const user1 = {
  name: 'Gerardo Gallegos',
  username: 'luxfenix',
  country: 'Mexico',
  social: {
    facebook: 'https://fb....',
    twitter: 'https://tw....'
  } 
}

const saluda = (user) => {
  var { username: aliasCool, social: { twitter: tw } } = user

  const orden = [ 'pizza', 'te verde', 'pay', 124, false, 'otro' ]

  const [ comida, bebida, postre, ...restantes ] = orden

  console.log(
    restantes
  )
}

saluda(user1)
