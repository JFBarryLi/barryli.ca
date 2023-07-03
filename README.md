![Deploy](https://github.com/JFBarryLi/barryli.ca/actions/workflows/ci.yml/badge.svg)

# barryli.ca
[Barryli.ca](https://barryli.ca)

This is my personal website.

My travels around the world are visualized on this website.

Core packages used for visualization are: Nivo, and react-globe.gl.

The travel data are processed everyday using AWS Fargate and updated to a DynamoDB table.

Which can be then fetched by this website via API Gateway.

The backend code can be viewed here: [travel](https://github.com/JFBarryLi/travel).

## Setup
Setup the following environment variables.
```bash
export REACT_APP_TRAVELLOG_API_KEY=
```
This is used for accessing the api to fetch travel data. This key is not used for authentication or security purposes.

## Local Development
Install Node.js and required packages.
```bash
npm install
```
To start local development server run:
```bash
npm run
```

## Remote Development
ssh into the remote development machine, and follow the same steps as local development.

Then setup local port forwarding:
```
Host: user@remote-machine-address
Port From: 3000
Destination: localhost
Port To: 3000
Bind Address: 0.0.0.0
```
Access the development site at [localhost:3000](localhost:3000) on your local machine.

## Deployment
This project is using GitHub Actions to build and deploy as a static website to AWS.

The infrastructure for this website can be viewed here: [Infra: Static Site](https://github.com/JFBarryLi/infra/tree/main/terraform/modules/static-site).

## License
See [LICENSE](./LICENSE) for more information.
