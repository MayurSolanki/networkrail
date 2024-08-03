const { Kafka } = require("kafkajs");

// https://datafeeds.networkrail.co.uk/ntrod/account/profile
exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.1.4:9092"],
});