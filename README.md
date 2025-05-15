# Introduction

The DeepHub® is a lightweight, high-performance locating-middleware, that enables seamless indoor and outdoor tracking of objects by integrating any locating technology (UWB, BLE, RFID, 5G, etc.) of any vendor through one single modern API.

The DeepHub is the premier implementation of an omlox hub, specified in omlox - the open locating standard.

# DeepHub® Advanced Setup

This project provides a completely configured “system” consisting of a Keycloak OpenID server, a corresponding PostgreSQL DB, the DeepHub®, the DeepHub® UI, and a containerized web server that acts as a reverse proxy to simplify the overall usage and interaction of these components. For the orchestration between these five containers, Docker Compose is used.

## Prerequisites

* [Docker](https://docs.docker.com/engine/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

| :point_up: | We only support the operation of a DeepHub docker image in the native version for a CPU. On Windows and Linux this is typically the Intel x86_64 version, same for Intel-based macOS devices. In case you have a new ARM-based macOS device, the native ARM docker image should be pulled automatically. |
| ---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| :point_up: | Please request a trial license key for testing at partners@flowcate.com or via our [contact form on our homepage](https://flowcate.com/contact-us/).                                                                                                                                                     |

## Running the application for the first time

When first starting the system of five containers, the Keycloak instance will create database tables and this may take a while.
After its initialization, keycloak will automatically import the "omlox-realm.json" file provided with this repository.

Furthermore, keycloak usually requires SSL to be enabled (which is the default).
In this example, for simplification reasons, keycloak will run on http only.
This should be used only for testing!

Now let's start the system with `docker compose up`

As mentioned before, you may have to wait a moment (usually no more than 30 seconds) for keycloak to start, but otherwise, that's it!
You should now be able to connect to the DeepHub UI via a web browser at https://localhost/deephub-ui/admin/ or https://localhost/deephub-ui/.
In your browser, you will encounter a warning because this repository only contains a self-signed certificate for the https connection.
Accept it within the browser's warning dialog and you should be redirected to the UI and from there immediately to the keycloak authentication request.
Use `deephub-tester` as username and password, after which you will be asked to set a new password.
You will then be redirected to the DeepHub UI.

If you want to change the keycloak configuration:
* Open http://localhost/admin/master/console/#/omlox to access the local Keycloak instance (if this does not work, wait for a minute - Keycloak is likely still in the process of creating the necessary tables)
* Log in with the user `user` and the password `bitnami`

Have fun with the DeepHub!

## Running the application

* Open a shell.
* Invoke Docker Compose in the directory where your docker-compose.yml file resides.` 
```
docker compose up
```

This command will automatically pull the necessary docker images from hub.docker.com, create docker containers, and start the containers. In case you want to see all log output immediately, invoke the former command omitting the "-d" parameter (deamon mode).

| :point_up: | It may become necessary to manually call ```docker compose pull``` first. This is the case if a newer docker image with the same name was published and therefore needs to get "re-pulled". This should not happen in general as we release updates as docker images with a different/newer tag. |
| ---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Now you have your own running DeepHub® instance that can be accessed with any modern web browser at the address: https://localhost

To complement the DeepHub UI shown above, you may also make API calls to the [DeepHub REST API](https://docs.deephub.io/docs/deephub/the-apis/api#/) while running the DeepHub locally. This can be done with a tool such as Postman or cURL BUT you need to add an access token to each request due to the enabled authorization mechanism.

For more information, visit [docs.deephub.io](https://docs.deephub.io/docs/testing-deephub/running_dh_locally/).
