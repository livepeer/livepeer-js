import { compareResponseStructures, sdk } from "./utils";

describe("Playback API", () => {
	describe("Retrieve a playback", () => {
		it("should retrieve a playback and match the structure of direct API call", async () => {
			const playbackId = process.env.EXISTING_PLAYBACK_ID ?? "";

			const { playbackInfo } = await sdk.playback.get(playbackId);

			const response = await fetch(
				`${process.env.API_BASE_URL}/playback/${playbackId}`,
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
				playbackInfo,
				directApiResponse,
			);

			expect(isStructureEqual).toBe(true);
		});
	});
});
