import { compareResponseStructures, sdk } from "./utils";

describe("Webhooks API", () => {
	describe("Retrieve a webhook", () => {
		it("should list webhooks and match the structure of direct API call", async () => {
			const webhookId = "56ee9cb4-784c-4847-8787-608119497260";
			const { webhook } = await sdk.webhook.get(webhookId);

			const response = await fetch(
				`${process.env.API_BASE_URL}/webhook/${webhookId}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${process.env.API_KEY}`,
					},
				},
			);

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const directApiResponse = await response.json();

			const isStructureEqual = compareResponseStructures(
				webhook,
				directApiResponse,
			);

			expect(isStructureEqual).toBe(true);
		});
	});

	describe("List webhooks", () => {
		it("should list webhooks and match the structure of direct API call", async () => {
			const { data: webhooks } = await sdk.webhook.getAll();

			const response = await fetch(`${process.env.API_BASE_URL}/webhook`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`,
				},
			});

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const directApiResponse = await response.json();

			const isStructureEqual = compareResponseStructures(
				webhooks,
				directApiResponse,
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

			const response = await fetch(`${process.env.API_BASE_URL}/webhook`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`,
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
				directApiResponse,
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

			const response = await fetch(
				`${process.env.API_BASE_URL}/webhook/${webhookId}`,
				{
					method: "PUT",
					headers: {
						Authorization: `Bearer ${process.env.API_KEY}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(body),
				},
			);

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const directApiResponse = await response.json();

			const isStructureEqual = compareResponseStructures(
				webhook,
				directApiResponse,
			);

			expect(isStructureEqual).toBe(true);
		});
	});
});
