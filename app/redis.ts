import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

if (process.env.UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: "https://refined-tapir-19395.upstash.io",
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

export default redis;
