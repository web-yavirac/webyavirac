build-dev:
	@ docker build -f devops/Dockerfile -t webyavirac:latest .
deploy:
	@docker stuck deploy -C devops/stack.yml webyavirac-na
rm:
	@ docker stack rm webyavirac-na
network:
	@ docker network create --driver overlay  --attachable --scope swarm  webyavirac-networks 