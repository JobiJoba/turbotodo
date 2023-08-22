import cors from "cors"
import express from "express"

const app = express()
const port = 5001

app.use(cors({ origin: "http://localhost:3000" }))

app.get("/worldHello", (_, response) => {
  response.json({ data: { worldd: "Hello" } })
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
