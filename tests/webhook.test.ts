import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Webhooks API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("Retrieve a webhook", () => {
    it("should list webhooks and match the structure of direct API call", async () => {
      const webhookId = "56ee9cb4-784c-4847-8787-608119497260";
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
        name: "test-webhook",
        url: "https://example.com/webhook",
        events: ["stream.created"],
      };

      // @ts-expect-error - need to update schema types
      const { webhook } = await sdk.webhook.create(body);

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

      const directApiResponse = await response.json();

      const isStructureEqual = compareResponseStructures(
        webhook,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Update a webhook", () => {
    it("should update a webhook and match the structure of direct API call", async () => {
      const webhookId = "56ee9cb4-784c-4847-8787-608119497260";
      const body = {
        name: "test-webhook-updated",
      };

      // @ts-expect-error - need to update schema types
      const { webhook } = await sdk.webhook.update(webhookId, body);

      const response = await fetch(`${API_BASE_URL}/webhook/${webhookId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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
});
