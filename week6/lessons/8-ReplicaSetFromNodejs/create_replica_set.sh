#!/bin/bash
mkdir -p /data/rs1 /data/rs2 /data/rs3
mongod --replSet m101 --logpath "1.log" --dbpath /data/rs1 --port 30001 --oplogSize 64 --smallfiles --fork
mongod --replSet m101 --logpath "2.log" --dbpath /data/rs2 --port 30002 --oplogSize 64 --smallfiles --fork
mongod --replSet m101 --logpath "3.log" --dbpath /data/rs3 --port 30003 --oplogSize 64 --smallfiles --fork
