import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Streams API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("Create stream", () => {
    it("should create a stream and match the structure of direct API call", async () => {
      const body = {
        name: "My Stream",
				profiles: null
      };

      const { stream } = await sdk.stream.create(body);

      const response = await fetch(`${API_BASE_URL}/stream`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const directApiResponse = await response.json();

      const isStructureEqual = compareResponseStructures(
        stream,
        directApiResponse
      );
      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Get a stream", () => {
    it("should get a stream and match the structure of direct API call", async () => {
      const streamId = "b1aac6bc-6a2c-41d3-a95c-0c41864ddd4e";

      const { stream } = await sdk.stream.get(streamId);

      const response = await fetch(`${API_BASE_URL}/stream/${streamId}`, {
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
        stream,
        directApiResponse
      );
      expect(isStructureEqual).toBe(true);
    });
  });

  describe("List streams", () => {
    it("should list all streams and match the structure of direct API call", async () => {
      const { data: streams } = await sdk.stream.getAll();

      const response = await fetch(`${API_BASE_URL}/stream`, {
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
        streams,
        directApiResponse
      );
      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Update a stream", () => {
    it("should update a stream and match the structure of direct API call", async () => {
      const streamId = "b1aac6bc-6a2c-41d3-a95c-0c41864ddd4e";
      const body = {
        record: true,
      };

      const { statusCode } = await sdk.stream.update(streamId, body);

      const response = await fetch(`${API_BASE_URL}/stream/${streamId}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      expect(statusCode).toBe(204);
      expect(response.status).toBe(204);
    });
  });
});
