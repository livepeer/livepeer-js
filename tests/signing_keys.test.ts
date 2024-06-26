import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Signing Keys API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("Get a signing key", () => {
    it("should get a signing key and match the structure of direct API call", async () => {
      const signingKeyId = "28ba4387-ff25-4c73-8fce-74530e39a741";

      const { signingKey } = await sdk.accessControl.get(signingKeyId);

      const response = await fetch(
        `${API_BASE_URL}/access-control/signing-key/${signingKeyId}`,
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
        signingKey,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("List signing keys", () => {
    it("should list all signing keys and match the structure of direct API call", async () => {
      const { data } = await sdk.accessControl.getAll();

      const response = await fetch(
        `${API_BASE_URL}/access-control/signing-key`,
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
        data,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Update a signing keys", () => {
    it("should update a signing key and match the structure of direct API call", async () => {
      const signingKeyId = "28ba4387-ff25-4c73-8fce-74530e39a741";

      const { statusCode } = await sdk.accessControl.update(signingKeyId, {
        name: "My Signing Key",
      });

      const response = await fetch(
        `${API_BASE_URL}/access-control/signing-key/${signingKeyId}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name: "My Signing Key",
          }),
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
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
