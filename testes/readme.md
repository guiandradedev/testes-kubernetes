kubectl [command] [type] [name] [flags]

```sh
kubectl config current-context # Indica qual cluster está mexendo
kubectl get nodes # Visualiza os nodes 
kubectl get nodes -o wide # Visualiza mais informações dos nodes
kubectl get pods # Obtem os pods
kubectl apply -f pod.yaml # Aplica o conteudo
kubectl delete pod nginx
kubectl describe pod <nome> # ver eventos
kubectl logs <nome-do-pod> # ver logs
kubectl scale deployment nginx --replicas=3 # escalar
```

O problema do replicaset: problemas com imagens precisa recriar todos os pods de forma manual. Para facilitar o gerenciamento, utiliza o Deployment, que são gerenciadores de ReplicaSets





```sh
minikube addons enable metrics-server
minikube addons enable ingress
```