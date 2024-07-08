# Install the Docker Scout CLI

curl -sSfL
https://raw.githubusercontent.com/docker/scout-cli/main/install.sh |
sh -s --

# Login to Docker Hub required for Docker Scout CLI

docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%

# Get a CVE report for the built image and fail the pipeline when critical or high CVEs are detected

docker scout cves mitin20/hello-world-node:latest --exit-code --only-severity critical,high

## Container image
### Full scan
docker run \
  -e DOCKER_SCOUT_HUB_USER=%DOCKER_USERNAME% \
  -e DOCKER_SCOUT_HUB_PASSWORD=%DOCKER_PASSWORD% \
  docker/scout-cli \
  cves mitin20/hello-world-node:latest --exit-code --only-severity critical,high

### Quickview
docker run \
  -e DOCKER_SCOUT_HUB_USER=%DOCKER_USERNAME% \
  -e DOCKER_SCOUT_HUB_PASSWORD=%DOCKER_PASSWORD% \
  docker/scout-cli \
  cves mitin20/hello-world-node:latest 

# code scan

## Monitor local projects
npm install -g snyk 
snyk auth %SNYK_TOKEN%
snyk monitor

