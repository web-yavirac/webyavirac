build-dev:
	@ docker build -f devops/Dockerfile -t webyavirac:latest .
deploy:
	@ docker stack deploy -c devops/stack.yml webyavirac-na
rm:
	@ docker stack rm webyavirac-na
network:
	@ docker network create --driver overlay  --attachable --scope swarm  webyavirac-networks