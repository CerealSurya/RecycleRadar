#!/bin/bash

# Start Trash AI Docker container
docker run -p 5150:5150 -d code4sac/trashai:latest

# Start your Flask app
