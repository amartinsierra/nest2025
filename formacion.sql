CREATE DATABASE  IF NOT EXISTS `formacion` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `formacion`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: formacion
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `usuario` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `edad` int unsigned NOT NULL,
  PRIMARY KEY (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES ('aaa','sseeeee','ordenador','ss@dd.es',45),('admin','a','tomates','servlet@gmail.com',22),('admin5','aaaa','dsd','dssd',22),('dd','m37MbuuDq/mt4Q/jiGXfRJm+NWjcxQeuLsO0SYnLAJM=','fdsf','dsfds@gg.es',11),('dfds','ddeeeeee','tomates','ssd@dd.es',22),('diego armando','diego','diego','diego',0),('fd','g','df','g',4),('java','OKCWOmNksJrYZ6qaZsbQCWc8IeGCAVRh2iNuw2GHf3c=','java','java@dd.com',33),('javato','T6GEvvueoevbXxbeTLMz6fk5FLZHd1RtUBcKFUes8U0=','aaa','asas@fff.es',33),('model','model','model','model@gmail',55),('mvcform','mvcform','form','form@gmail.com',22),('noexiste','wq','tomates','mvc@gmail.com',22),('nuevo','nuevo','h','nuevo@gmail.com',22),('nuevo10','nuevo10','nuevo','nuevo@gmail.com',22),('paco','aaa','paco','dsfads',333),('paquito','aaaa','dsdas','asdas',55),('probando','qqqqqqq','probando','probando@gmail.com',23),('prof','UdHmo5isvafhW2h950fn3+lfoTFU3LQKqKs38eKzk6A=','servlet@gmail.com','profe',33),('qa','qaq','ww','qw',34),('qq','qq','qqqqqqqqqq','qq',22),('qqq','qqqqqqqq','sdsad','asdasd@dd.es',45),('test1','test1','test1','test1@gmail.com',99),('uno','vw7DaU4SLgZ9mWSjjsfYQVeB30sk9EKtdntGIfuY+MU=','profe','profe@gmail.com',22),('webmvc','webmvc','webmvc','webmvc',333);
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursos` (
  `idCurso` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `duracion` int unsigned NOT NULL,
  `fechaInicio` date DEFAULT NULL,
  `precio` double DEFAULT NULL,
  PRIMARY KEY (`idCurso`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
INSERT INTO `cursos` VALUES (1,'java 10',100,'2020-08-20',250),(2,'python',50,'2020-10-12',125),(3,'php',25,'2020-10-30',345),(4,'jsf',30,'2020-04-15',100),(5,'ordenador',120,'2020-11-08',2),(6,'angular 9',60,'2020-11-19',170),(7,'javascript',60,'2020-11-26',160),(8,'microservicios spring boot',70,'2020-11-24',390),(9,'servlet',60,'2020-11-17',0),(10,'php7',11,'2020-11-18',0),(11,'ordenador',67,'2020-12-03',0),(12,'jpa',12,'2020-12-03',0),(13,'myjava',45,'2020-12-08',0),(14,'Kubernates',60,'2021-02-11',0),(15,'dockers completo',70,'2020-12-20',0),(16,'Spring',50,'2021-05-17',0),(17,'kafka',70,'2021-06-30',0),(18,'ww',23,'2021-05-14',0);
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matriculas`
--

DROP TABLE IF EXISTS `matriculas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matriculas` (
  `usuario` varchar(45) NOT NULL,
  `idCurso` int unsigned NOT NULL,
  `nota` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`usuario`,`idCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matriculas`
--

LOCK TABLES `matriculas` WRITE;
/*!40000 ALTER TABLE `matriculas` DISABLE KEYS */;
INSERT INTO `matriculas` VALUES ('aaa',1,7),('aaa',4,5),('aaa',17,4),('admin',1,7),('admin',2,6),('admin',6,3),('admin',14,4),('dd',17,1),('dfds',1,5),('diego armando',2,5),('diego armando',13,7),('model',1,5),('model',3,3),('model',7,7),('paco',1,7),('paco',2,8),('probando',1,8),('prof',17,5),('test1',1,3),('uno',1,2),('uno',7,5),('uno',17,6),('webmvc',1,4),('webmvc',2,6),('webmvc',5,7),('webmvc',6,3),('webmvc',9,5),('webmvc',12,9),('webmvc',13,2);
/*!40000 ALTER TABLE `matriculas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preguntas` (
  `idPregunta` int unsigned NOT NULL AUTO_INCREMENT,
  `idCurso` int unsigned NOT NULL,
  `enunciado` varchar(200) NOT NULL,
  PRIMARY KEY (`idPregunta`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas`
--

LOCK TABLES `preguntas` WRITE;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
INSERT INTO `preguntas` VALUES (1,1,'¿Cuantos bytes ocupa el tipo int?'),(2,1,'¿Cual es una palabra reservada de Java?');
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuestas`
--

DROP TABLE IF EXISTS `respuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respuestas` (
  `idRespuesta` int unsigned NOT NULL AUTO_INCREMENT,
  `idPregunta` int unsigned NOT NULL,
  `texto` varchar(150) NOT NULL,
  `correcta` tinyint(1) NOT NULL,
  PRIMARY KEY (`idRespuesta`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestas`
--

LOCK TABLES `respuestas` WRITE;
/*!40000 ALTER TABLE `respuestas` DISABLE KEYS */;
INSERT INTO `respuestas` VALUES (1,1,'2',0),(2,1,'4',1),(3,1,'3',0),(4,1,'8',0),(5,2,'red',0),(6,2,'main',0),(7,2,'scanner',0),(8,2,'import',1);
/*!40000 ALTER TABLE `respuestas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-02 12:17:15
