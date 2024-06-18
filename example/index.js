import {Livepeer} from "livepeer"

const livepeer = new Livepeer({
  apiKey: "LP_API_KEY"
})

const main = async () => {
  const {stream} = await livepeer.stream.create({
    name: "My first stream"
  })

  console.log("Stream created: ",stream)
}

main()