CREATE DATABASE  IF NOT EXISTS `tiendavirtual` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tiendavirtual`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tiendavirtual
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
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `codigoProducto` int DEFAULT NULL,
  `unidades` int DEFAULT NULL,
  `total` double DEFAULT NULL,
  `fechaPedido` datetime DEFAULT NULL,
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,11,2,5,'2020-08-04 16:37:55'),(12,230,2,1.8,'2021-01-21 11:12:12'),(13,123,5,6.5,'2021-01-21 12:22:50'),(24,11,5,12.5,'2021-01-26 16:30:15'),(59,230,3,2.7,'2022-09-12 18:09:52'),(60,230,3,2.7,'2022-09-13 16:31:01'),(61,230,2,1.8,'2022-09-13 17:14:03'),(62,230,2,1.8,'2022-10-25 19:53:27'),(63,37,4,28,'2022-10-26 15:32:48'),(64,140,1,3,'2022-10-27 13:46:48'),(65,11,2,14,'2022-11-07 11:13:46'),(66,230,3,2.7,'2022-11-07 11:14:38'),(67,37,2,14,'2022-11-08 11:25:12'),(68,37,10,70,'2022-11-08 11:25:34'),(69,11,3,21,'2022-11-08 12:06:29'),(70,11,1,7,'2022-11-09 08:10:23'),(71,37,1,7,'2022-11-09 10:53:26'),(72,230,5,4.5,'2022-11-11 09:37:26'),(73,140,5,15,'2023-01-25 15:12:02'),(74,123,1,1.3,'2023-01-25 15:13:10'),(75,140,1,3,'2023-01-25 15:51:01');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `codigoProducto` int NOT NULL,
  `producto` varchar(45) DEFAULT NULL,
  `precioUnitario` double DEFAULT NULL,
  `stock` int DEFAULT NULL,
  PRIMARY KEY (`codigoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (11,'vino',7,2),(37,'vino',7,6),(123,'macarrones',1.3,1),(140,'balón',3,3),(230,'leche 1.5L',0.9,10);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-09 10:05:39
