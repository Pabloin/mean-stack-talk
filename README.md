# 2017-09-05 CODE LABS SOBRE MEAN STACK: PARTE I


## 1. Introduction

### 1.1. Links y Resources

- https://github.com/Pabloin
- [Place2Go]
- [Place2Go Api]
- [Place2Go BD]
- https://hub.docker.com/u/pabloezequiel


### 1.2. Clonamos el repo de GitHub 

- En el escritorio creamos una carpeta "mean"
- En el browser accedemos a https://github.com/Pabloin

```sh
$ cd Escritorio
$ mkdir mean
$ cd mean
$ git clone https://github.com/Pabloin/mean-stack-talk.git
$ cd mean-stack-talk
$ ls -la
```

### 1.3. Software Visual Studio Code

- [Visual Studio Code](https://code.visualstudio.com) 

Está instalado (sino el .deb)

Abrimos la carpeta "mean/mean-stack-talk" en el Visual Studio Code.


### 1.4. Software Robomongo

- [Robomongo](https://robomongo.org)

```sh
$ cd ~/Descargas
$ tar -zxvf robo3t-1.1.1-linux-x86_64-c93c6b0.tar.gz 
$ cd robo3t-1.1.1-linux-x86_64-c93c6b0/ 
$ cd bin 
$ ./robo3t
```
Dejamos el robo3t abierto


## 2. MongoDB

### 2.1. Conexion Robomongo a MongoDB en AWS

**Objetivos**:
- Utilizar MongoDB sin instalarla localmente aún
- Conectar Robomongo a MongoDB en AWS
- Insert sobre una base que no existe
- 





### Licence

MIT




[Visual Studio Code]: <https://code.visualstudio.com>
[Robomongo]: <https://robomongo.org>
[Place2Go]: <http://54.68.83.6:4200>
[Place2Go Api]: <http://54.68.83.6:3000>
[Place2Go BD]: <54.68.83.6:27017>
