const { expect } = require("chai");
const uuid = require("@sustainers/uuid");
const logger = require("@sustainers/logger");

const request = require("@sustainers/request");

const url = "http://staged:3000";

process.env.NODE_ENV = "staging";

/**
 *
 * TODO:
 *   Write integration tests that verify the schema and indexes you added.
 *   Add tests for POST and GET methods, and make sure to test
 *   error states and edge cases.
 *
 */
describe("Event store", () => {
  it("should return successfully", async () => {
    const root = uuid();
    const topic = "some-topic";
    const version = 0;
    const created = "now";
    const id = "some-id";
    const action = "some-action";
    const domain = "some-domain";
    const service = "some-service";
    const network = "some-network";
    const issued = "now";

    const response0 = await request.post(url, {
      headers: {
        root,
        topic,
        version,
        created,
        command: {
          id,
          action,
          domain,
          service,
          network,
          issued
        }
      },
      payload: {
        name: "some-name"
      }
    });

    logger.info("some res: ", { response0 });
    expect(response0.statusCode).to.equal(204);

    const response1 = await request.get(`${url}/${root}`);

    expect(response1.statusCode).to.equal(200);
    expect(JSON.parse(response1.body).payload.name).to.equal("some-name");

    const response2 = await request.post(url, {
      headers: {
        root,
        topic,
        version,
        created,
        command: {
          id,
          action,
          domain,
          service,
          network,
          issued
        }
      },
      payload: {
        name: "some-other-name"
      }
    });
    expect(response2.statusCode).to.equal(204);

    const response3 = await request.get(`${url}/${root}`);

    expect(response3.statusCode).to.equal(200);
    expect(JSON.parse(response1.body).payload.name).to.equal("some-other-name");
  });
  // it("should return an error if incorrect params", async () => {
  //   const response = await request.post(url, { name: 1 });
  //   expect(response.statusCode).to.be.at.least(400);
  // });
});
