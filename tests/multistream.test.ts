import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Multistream API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("Create a multistream", () => {
    it("should create a multistream and match the structure of direct API call", async () => {
      const body = {
        name: "my first multistream",
        url: "rtmps://live.my-service.tv/channel/secretKey",
      };

      const { data: multistream } = await sdk.multistream.create(body);

      const response = await fetch(`${API_BASE_URL}/multistream/target`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const directApiResponse = await response.json();

      const isStructureEqual = compareResponseStructures(
        multistream,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Get a multistream", () => {
    it("should get a multistream and match the structure of direct API call", async () => {
      const multistreamId = "0b8bda03-e137-4ae9-8f91-252da467be64";

      const { multistreamTarget } = await sdk.multistream.get(multistreamId);

      const response = await fetch(
        `${API_BASE_URL}/multistream/target/${multistreamId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const directApiResponse = await response.json();

      const isStructureEqual = compareResponseStructures(
        multistreamTarget,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("List multistreams", () => {
    it("should list multistreams and match the structure of direct API call", async () => {
      const { data } = await sdk.multistream.getAll();

      const response = await fetch(`${API_BASE_URL}/multistream/target`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const directApiResponse = await response.json();

      const isStructureEqual = compareResponseStructures(
        data,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Update a multistream", () => {
    it("should update a multistream and match the structure of direct API call", async () => {
      const multistreamId = "0b8bda03-e137-4ae9-8f91-252da467be64";
      const body = {
        name: "my updated multistream",
        url: "rtmps://live.new.my-service.tv/channel/secretKey",
      };

      const { statusCode } = await sdk.multistream.update(multistreamId, body);

      const response = await fetch(
        `${API_BASE_URL}/multistream/target/${multistreamId}`,
        {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      expect(statusCode).toBe(204);
      expect(response.status).toBe(204);
    });
  });
});
