import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Playback API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("Retrieve a playback", () => {
    it("should retrieve a playback and match the structure of direct API call", async () => {
      const playbackId = "32a5kyjjh8yf6wy5";

      const { playbackInfo } = await sdk.playback.get(playbackId);

      const response = await fetch(`${API_BASE_URL}/playback/${playbackId}`, {
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
        playbackInfo,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });
});
