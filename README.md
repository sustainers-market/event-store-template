An interface to the /**TODO replace**/ Some-domain /**/replace**/ event store.

Once a Cloud Build trigger is created, this repo will run tests and deploy a Cloud Run server.

It is recommended to make three triggers, one for changes to a `staging` branch that builds `build-staging.yaml`, another for changes to the `master` branch that builds `build-sandbox.yaml`, and finally one for a release tag that builds `build.yaml`.

All development should happen on the staging environment. The sandbox and production environments should always be stable.
