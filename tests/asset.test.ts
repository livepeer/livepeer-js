import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Asset API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("Create asset", () => {
    it("should create an asset and match the structure of direct API call", async () => {
      const body = {
        name: "My Asset",
      };

      const { data: asset } = await sdk.asset.create(body);

      const response = await fetch(`${API_BASE_URL}/asset/request-upload`, {
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
        asset,
        directApiResponse
      );
      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Get an asset", () => {
    it("should get an asset and match the structure of direct API call", async () => {
      const assetId = "cc01c1a7-ca44-41ee-9a7d-897dcab5b217";

      const { asset } = await sdk.asset.get(assetId);

      const response = await fetch(`${API_BASE_URL}/asset/${assetId}`, {
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
        asset,
        directApiResponse
      );
      expect(isStructureEqual).toBe(true);
    });
  });

  describe("List assets", () => {
    it("should list assets and match the structure of direct API call", async () => {
      const { data: assets } = await sdk.asset.getAll();

      const response = await fetch(`${API_BASE_URL}/asset`, {
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
        assets,
        directApiResponse
      );
      expect(isStructureEqual).toBe(true);
    });
  });
});
