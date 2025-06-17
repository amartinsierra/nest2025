CREATE DATABASE  IF NOT EXISTS `libros` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `libros`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: libros
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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idCliente` int unsigned NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telefono` int unsigned NOT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'test1','test1','test1@gmail.com',22222),(2,'test2','test2','test2@gmail.com',3333),(3,'test3','test3','afas',444),(4,'profe','profe','sadasd',234),(5,'ere','ff','aseea',23),(7,'fulano','mipassword','dfsfs@.es',343434),(8,'usuario_ejemplo','password_ejemplo','email@email.com',33333),(9,'miuser','mipass1','faddfs',3434),(14,'persiste','persiste','ddd',34),(16,'pepito','grillo','jajajaj',777777),(17,'mvc1','mvc1','sadas',1111),(18,'p1','p1','wwww',1111),(50,'mitienda','mitienda','mitienda@gmail.com',555),(51,'a','a','ajms66@gmail.com',333),(52,'asdas','q','servlet@gmail.com',333);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libros` (
  `isbn` int unsigned NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `autor` varchar(45) DEFAULT NULL,
  `precio` double NOT NULL,
  `paginas` int unsigned DEFAULT NULL,
  `idTema` int unsigned NOT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES (888,'Java 8','Gomez',26.62,300,1),(900,'Java 11','hilton',41.14,300,1),(987,'docker','sa',23,245,7),(6723,'Windows 20103','pears',19,170,2),(8767,'word','roberts',14,123,4),(9009,'excel','anónimo',27,300,4),(9999,'administración linux','angel lopez',30,370,2),(11123,'spring security','l2',24.2,0,1),(13667,'Machine Learning','Nelson',31,370,3),(26003,'docker','dfs',44,343,5),(27883,'Hadoop','Bryan',30,260,3),(30303,'Microservices','otro',54.45,600,1),(34215,'cisco','Martín',30,450,6),(40004,'diseño de página Web','alumnos',15,0,5),(43944,'programación python','engels',33.88,240,1),(60006,'JQuery','curso de Java',45,0,5),(70990,'docker','sa',66.55,22,1),(78011,'Java 15','Martín',36.3,450,1),(78080,'Angular xx',NULL,0,0,1),(93345,'Angular','pears',24,345,5),(123345,'Java 19','AA',26.62,300,1),(54654654,'fe','few',44,0,5);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temas`
--

DROP TABLE IF EXISTS `temas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temas` (
  `idTema` int unsigned NOT NULL AUTO_INCREMENT,
  `tema` varchar(45) NOT NULL,
  PRIMARY KEY (`idTema`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temas`
--

LOCK TABLES `temas` WRITE;
/*!40000 ALTER TABLE `temas` DISABLE KEYS */;
INSERT INTO `temas` VALUES (1,'programación'),(2,'sistemas operativos'),(3,'big data'),(4,'ofimatica'),(5,'web'),(6,'redes'),(7,'devops'),(20,'r');
/*!40000 ALTER TABLE `temas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `idVenta` int unsigned NOT NULL AUTO_INCREMENT,
  `idCliente` int unsigned NOT NULL,
  `idLibro` int unsigned NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`idVenta`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` VALUES (1,1,9999,'2010-09-01 11:49:21'),(2,1,11123,'2011-09-01 11:49:21'),(3,1,11123,'2012-09-01 11:49:21'),(4,1,11123,'2012-09-02 12:38:23'),(5,1,9999,'2012-09-02 12:38:23'),(6,1,8767,'2013-02-16 00:00:00'),(7,2,11123,'2015-02-16 00:00:00'),(8,1,9999,'2015-02-16 00:00:00'),(10,1,9999,'2016-06-05 00:00:00'),(11,1,900,'2018-08-13 11:29:10'),(12,1,43944,'2018-08-13 11:29:10'),(13,1,13667,'2021-11-17 12:29:00'),(14,1,78011,'2021-11-18 09:38:47'),(15,1,900,'2021-11-29 11:05:20'),(16,1,9999,'2021-11-29 11:05:20'),(17,1,27883,'2021-11-29 11:05:20'),(18,1,13667,'2022-03-07 12:22:45'),(19,1,27883,'2022-03-07 12:22:45'),(20,1,26003,'2022-03-07 12:44:13'),(21,1,27883,'2022-03-07 12:45:23'),(22,1,900,'2022-03-17 09:45:43'),(23,1,70990,'2022-03-17 09:45:43'),(24,1,888,'2022-03-22 12:02:47'),(25,1,888,'2022-03-22 12:02:47'),(26,1,27883,'2022-03-22 12:02:47'),(27,1,27883,'2022-03-22 12:02:47'),(28,1,78011,'2022-03-22 12:03:44'),(29,1,27883,'2022-03-28 10:04:45'),(30,1,43944,'2022-03-30 10:42:15'),(31,1,888,'2022-03-30 10:42:15');
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-17 11:01:01
