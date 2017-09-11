---
talk_id: 19
title: 'Deploying Drupal with Fabric'
type: Talk
slides:
    url: ~
    embed: ~
video:
    embed: ~
    url: ~
tags: [meetup, conference, php, fabric, drupal]
meta:
    og:
        title: Deploying Drupal with Fabric
        description: "You've built your Drupal site, now learn how to deploy it with Fabric."
        type: website
---
You’ve built your website, and now you just need to deploy it. There are various ways that this could be done - from (S)FTP, to SCP and rsync, to running commands like “git pull” and “composer install” directly on the server (not recommended).

My favourite deployment tool of late is [Fabric][1] - a Python based command line tool for running commands locally as well as on remote servers. It’s language and framework agnostic, and unopinionated so you define the steps and workflow that you need - from a basic few-step deployment to a full Capistrano style zero-downtime deployment.

This talk will cover some introduction to Fabric and how to write your own fabfiles, to then covering some examples and demos of different use case deployments for your Drupal project.

[1]: http://www.fabfile.org