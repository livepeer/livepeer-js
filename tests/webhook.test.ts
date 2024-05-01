import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Webhooks API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("Retrieve a webhook", () => {
    it("should list webhooks and match the structure of direct API call", async () => {
      const webhookId = "6184e7eb-1cc9-4278-a099-f71721d116c7";
      const { webhook } = await sdk.webhook.get(webhookId);

      const response = await fetch(`${API_BASE_URL}/webhook/${webhookId}`, {
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
        webhook,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("List webhooks", () => {
    it("should list webhooks and match the structure of direct API call", async () => {
      const { data: webhooks } = await sdk.webhook.getAll();

      const response = await fetch(`${API_BASE_URL}/webhook`, {
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
        webhooks,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Create a webhook", () => {
    it("should create a webhook and match the structure of direct API call", async () => {
      const body = {
        name: "test-webhook 1",
        url: "https://example.com/webhook",
        events: ["stream.started"],
      };

      // @ts-expect-error - need to import events type from sdk
      const { statusCode } = await sdk.webhook.create(body);

      const response = await fetch(`${API_BASE_URL}/webhook`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      expect(statusCode).toBe(201);
      expect(response.status).toBe(201);
    });
  });
});
