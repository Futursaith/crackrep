let password = '4321dlrowssap'

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'passworld1234') {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)
