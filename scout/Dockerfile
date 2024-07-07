# Use the official Docker Scout CLI image as the base image
FROM docker/scout-cli

# Define build-time arguments
ARG DOCKER_USERNAME
ARG DOCKER_PASSWORD

# Set environment variables from build-time arguments
ENV DOCKER_SCOUT_HUB_USER=${DOCKER_USERNAME}
ENV DOCKER_SCOUT_HUB_PASSWORD=${DOCKER_PASSWORD}

# Define the command to run when the container starts
CMD ["cves", "mitin20/hello-world-node:latest","--exit-code", "--only-severity", "critical,high"]

# Build using ARGS
#docker build --build-arg DOCKER_USERNAME=%DOCKER_USERNAME% --build-arg DOCKER_PASSWORD=%DOCKER_PASSWORD% -t my-scout-cli .

# Run it
# docker run -it \
#   -e DOCKER_SCOUT_HUB_USER=%DOCKER_USERNAME% \
#   -e DOCKER_SCOUT_HUB_PASSWORD=%DOCKER_PASSWORD% \
#   my-scout-cli \
#   cves mitin20/hello-world-node:latest --exit-code --only-severity critical,high 