import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Metrics (Viewership) API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("Query usage metrics", () => {
    it("should query usage metrics and match the structure of direct API call", async () => {
      const { usageMetric } = await sdk.metrics.getUsage();

      const response = await fetch(`${API_BASE_URL}/data/usage/query`, {
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
        usageMetric,
        directApiResponse
      );
      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Query public total views metrics  ", () => {
    it("should query public total views metrics and match the structure of direct API call", async () => {
      const playbackId = "e902a7c8if1i0isv";

      const { data } = await sdk.metrics.getPublicViewership(playbackId);

      const response = await fetch(
        `${API_BASE_URL}/data/views/query/total/${playbackId}`,
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
});
