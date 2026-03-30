Package.describe({
  name: 'catimos:accounts-linkedin',
  summary:
    'Login service for LinkedIn accounts, use with Meteor 1.10.2 & up',
  version: '6.0.0',
  git:
    'https://github.com/catimos/meteor-accounts-linkedin.git',
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')
  api.use('ecmascript')
  api.use('accounts-base', ['client', 'server'])
  api.imply('accounts-base', ['client', 'server'])
  api.use('accounts-oauth', ['client', 'server'])
  api.use('catimos:linkedin-oauth@6.0.0', [
    'client',
    'server',
  ])
  api.imply('catimos:linkedin-oauth')

  api.use('http', ['client', 'server'])

  // If users use accounts-ui but not linkedin-config-ui, give them a tip.
  api.use(
    ['accounts-ui', 'pauli:linkedin-config-ui@5.0.0'],
    ['client', 'server'],
    { weak: true },
  )
  api.addFiles('notice.js')

  api.addFiles('linkedin.js')
})
