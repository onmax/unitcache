// Reads and hashes `workerData.files` on a worker thread while the build runs on the main one.
import { parentPort, workerData } from 'node:worker_threads'
import { digestOf } from './files.mjs'

const digests = workerData.files.map((path) => {
  try { return digestOf(path) } catch { return null }
})
parentPort.postMessage(digests)
