import { Livepeer } from "../dist/index.js";

const livepeer = new Livepeer({
  apiKey: "", // Your API key here
});

(async function () {
  try {
    const res = await livepeer.stream.create({
      name: "test",
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
})();
