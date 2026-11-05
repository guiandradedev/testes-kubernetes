#!/bin/bash
set -e
kubectl create secret generic mysql-secret --from-env-file=../../.env \
  --dry-run=client -o yaml > mysql-secret.yaml
kubectl apply -f mysql-secret.yaml
kubectl rollout restart deployment mysql