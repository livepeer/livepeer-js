import { compareResponseStructures, sdk } from "./utils";

describe("Streams API", () => {
	describe("Create stream", () => {
		it("should create a stream and match the structure of direct API call", async () => {
			const body = {
				name: "My Stream",
			};

			const { stream } = await sdk.stream.create(body);

			const response = await fetch(`${process.env.API_BASE_URL}/stream`, {
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`,
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const directApiResponse = await response.json();

			const isStructureEqual = compareResponseStructures(
				stream,
				directApiResponse,
			);
			expect(isStructureEqual).toBe(true);
		});
	});

	describe("Get a stream", () => {
		it("should get a stream and match the structure of direct API call", async () => {
			const streamId = process.env.EXISTING_STREAM_ID ?? "";

			const { stream } = await sdk.stream.get(streamId);

			const response = await fetch(
				`${process.env.API_BASE_URL}/stream/${streamId}`,
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
				stream,
				directApiResponse,
			);
			expect(isStructureEqual).toBe(true);
		});
	});

	describe("List streams", () => {
		it("should list all streams and match the structure of direct API call", async () => {
			const { data: streams } = await sdk.stream.getAll();

			const response = await fetch(`${process.env.API_BASE_URL}/stream`, {
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
				streams,
				directApiResponse,
			);
			expect(isStructureEqual).toBe(true);
		});
	});

	describe("Update a stream", () => {
		it("should update a stream and match the structure of direct API call", async () => {
			const streamId = process.env.EXISTING_STREAM_ID ?? "";
			const body = {
				record: true,
			};

			const { statusCode } = await sdk.stream.update(streamId, body);

			const response = await fetch(
				`${process.env.API_BASE_URL}/stream/${streamId}`,
				{
					method: "PATCH",
					body: JSON.stringify(body),
					headers: {
						Authorization: `Bearer ${process.env.API_KEY}`,
						"Content-Type": "application/json",
					},
				},
			);

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			expect(statusCode).toBe(204);
			expect(response.status).toBe(204);
		});
	});
});
