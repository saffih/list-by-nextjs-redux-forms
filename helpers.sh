alias build='sudo docker-compose build dev'
alias yarnupdate='sudo docker-compose run dev yarn upgrade'

updev ()
{
  sudo docker-compose up dev
}

alias yarndevstop='sudo docker-compose stop dev'

# dcleanup is a function
dcleanup ()
{
    docker ps --filter status=exited -q 2> /dev/null | xargs docker rm -v 2> /dev/null;
    docker images --filter dangling=true -q 2> /dev/null | xargs docker rmi 2> /dev/null
}
alias drmi='sudo docker rmi $(docker images --filter "dangling=true" -q --no-trunc)'
alias drmae='sudo docker rm $(docker ps -qa --no-trunc --filter "status=exited")'
