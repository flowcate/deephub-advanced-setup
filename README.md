# Introduction

The DeepHub® is a lightweight, high-performance locating-middleware, that enables a seamless indoor and outdoor tracking of objects by integrating any locating technology (UWB, BLE, RFID, 5G, etc.) of any vendor through one single modern API.

The DeepHub is the premier implementation of an omlox hub, specified in the open locating standard omlox.

# DeepHub® Advanced Setup

This project provides a completely configured “system” consisting of a keycloak OpenID server and a PostgreSQL DB for the former, the DeepHub®, the DeepHub® UI and a containerized web server, acting as a reverse proxy, to simplify the overall usage and interaction of these components. For the orchestration between these five containers docker compose is used.

## Prerequisites
* [Docker](https://docs.docker.com/engine/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

|:point_up: | We only support the operation of a DeepHub docker image in the native version for a CPU. On Windows and Linux this is typically the Intel x86_64 version, same for Intel-based macOS devices. In case you have a new ARM-based macOS device, please use the native ARM docker image named flowcate/deephub-experimental. You can choose the docker image within the docker-compose.yml file in line 5. Choose the appropriate image you need. The list of all docker images provided by flowcate can be found here: https://hub.docker.com/repositories/flowcate. The docker-compose.yml within this repo is always set to the latest Intel x86_64 image of the DeepHub. |
|-----------|:---------------------------------------------------------------------------------------------------------------------------|

## Running the application for the first time

When first starting up the system of five containers, the keycloak instance will create DB tables and this may take a while. After that table creation step, the keycloak is still in a virgin state and needs to get the correct clients, client scopes, roles and users set. You can do so by following a separately available documentation of us or you import almost all of the settings via the "omlox-realm.json" file that is part of this repository. Here is a description of the steps you need to do:

* Start the system with docker-compose up
* In a browser, open http://localhost to access your new local keycloak instance (if this does not work, wait for a minute, keycloak is most probably still in the process of creating the necessary DB tables)
* Choose "Administration Console"
* Login the keycloak instance with user "user" and the passwort "bitnami"
* Create a new realm called "omlox"
* Select that new realm.
* In the left vertical navigatio nmenu, go down to "Configure" where you'll find the sub-menu "Realm settings". Click the latter.
* In the top right corner of the screen, you'll see a drop-down menu named "Action": open it up and select "Partial import".
* Choose "Browse" button in the upcoming dialog to select the "omlox-realm.json" provided with this repo.
* The file gets parsed and as result, the number of "Clients", "Realm roles" and "Client roles" are displayed. Mark the checkboxes in front of all these three categories to import all of those.
* Choose "Overwrite" from the "If a resource already exists, specify what should be done" drop down menu below.
* Click "Import".
* Click "Close" in the upcoming dialog that should indicate the import success.
* Click "Users" in the vertical left main menu to add a new user.
* Choose "Add User" and create a new user named "deephub-tester" (rest of this example relies on it)
* Set a password you want to use for this user in the "Credentials" tab of the newly created user. Disable the "Temporary" option to just keep the new password at next login.
* Go to the "Role mapping" tab and click "Assign role".
* Mark the checkbox in front of "deephub-test-role" and click the "Assign" button below all assignable roles.

THAT's it!

While you did all this, you may have looked at the console where you started all the containers and noticed the following error message from within the DeepHub container:

```Failed to request OpenID configuration from URL http://host.docker.internal/realms/omlox/.well-known/openid-configuration.```

This happened because the keycloak was not configured properly ... sofar. Now after all the steps above, your local keycloak instance is setup correctly and the error message should have disappeared. Instead the following message may have caught your attention:

```Done fetching OpenID configuration```

If you spot the latter, this is a clear sign, that everything is configured correctly now.

Note: You may nevertheless have to stop the system and restart it again because the DeepHub may not have gotten all the latest roles and scopes because the keycloak configuration was ongoing.

In your browser, you may now head over to https://localhost/deephub-ui to access the DeepHub UI. This will cause a warning from your internet browser because this repo only contains a self-signed certificate for the https connection. Except it within the browser's warning dialog and you should be redirected to the UI and from there immediately to the keycloak authentication request. Enter the credentials "deephub-tester" as user name plus the password you've chosen and login. Immediately you get a redirect to the DeepHub-UI in case the credentials were correct.

Have fun with the DeepHub!

## Running the application
* Open a shell.
* Invoke Docker Compose in the directory where your docker-compose.yml file resides.
```
docker-compose up
```

This command will automatically pull the necessary docker images from hub.docker.com and create docker containers before starting the latter. In case you want to see all log output immediately, invoke the former command omitting the "-d" parameter (deamon mode).

|:point_up: | It may become necessary to manually call ```docker-compose pull``` first. This is the case if a newer docker image with the same name got published and therefore needs to get "re-pulled". This should not happen in general as we release updates as docker images with a different/newer tag.|
|-----------|:---------------------------------------------------------------------------------------------------------------------------|

Now you have your own running DeepHub® instance that can be accessed with any modern web browser at the address: http://localhost:8081

To complement the DeepHub UI shown above, you may also make API calls to the [DeepHub REST API](https://docs.deephub.io/api_reference/restApi.html#/deep-hub-api-rest-api) while running the DeepHub locally. This can be done with a tool such as Postman or cURL. <br />
To interact with the REST API, you will need to use the following baseURL: http://localhost:8081/deephub/v1 <br />

Example:
```
curl http://localhost:8081/deephub/v1/zones/summary
```

For further information visit [docs.deephub.io](https://docs.deephub.io/installation_instructions/).
