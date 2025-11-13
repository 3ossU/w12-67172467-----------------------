const users = [
  {
    user: 'user',
    pass: 'pass',
    role: 'admin',
    token: 'user'
  }
]

export function verifyUser(user, pass) {
  const userInfo = users.find((u) => u.user === user && u.pass === pass)
  return userInfo ? { role: userInfo.role, token: userInfo.token } : null
}
