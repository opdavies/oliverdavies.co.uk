g = require 'gulp'

g.task 'build', ['clean'], ->
  g.start 'fonts', 'images', 'styles', 'vendor'
