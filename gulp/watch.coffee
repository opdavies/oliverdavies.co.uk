g = require 'gulp'

g.task 'watch', ->
  g.p.livereload.listen()

  g.watch 'styles/*.sass', ['styles']
