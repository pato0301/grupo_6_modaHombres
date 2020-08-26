-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: braydsdb
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admins` (
  `idadmin` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(80) NOT NULL,
  `email` varchar(45) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idadmin`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'prueba','$2b$12$9migdpXxRI0NiWwpSZwj.efSCfduApcL9T0GqOm8Vd7Xa1T.mSqLS','email@gmail.com','2020-08-25 23:37:36','2020-08-25 23:37:36');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `idcategorias` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(45) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcategorias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direcciones` (
  `iddirecciones` int(11) NOT NULL AUTO_INCREMENT,
  `idusuario` int(11) NOT NULL,
  `localidad` varchar(45) DEFAULT NULL,
  `calle` varchar(45) DEFAULT NULL,
  `altura` int(11) DEFAULT NULL,
  `codigo postal` int(11) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`iddirecciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `idproductos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `talle` text,
  `precio` float NOT NULL,
  `imagen` text NOT NULL,
  `descripcion` text NOT NULL,
  `current_season` int(11) DEFAULT NULL,
  `id_categoria` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idproductos`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (4,'Producto 1',NULL,NULL,999,'img_modelo_.jpg','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla velit praesentium aliquam atque sint ipsa autem tenetur cupiditate dolorum? At quas optio maxime accusantium, rerum fuga. Architecto rem similique sunt, possimus accusantium labore nobis quos, fugit, quibusdam voluptate soluta aspernatur!',1,1,1,'2020-08-26 16:05:54','2020-08-26 16:05:54'),(5,'Producto 2',NULL,NULL,999,'img_modelo1_.jpg','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla velit praesentium aliquam atque sint ipsa autem tenetur cupiditate dolorum? At quas optio maxime accusantium, rerum fuga. Architecto rem similique sunt, possimus accusantium labore nobis quos, fugit, quibusdam voluptate soluta aspernatur!',1,1,1,'2020-08-26 16:07:24','2020-08-26 18:27:08'),(6,'Producto 3',NULL,NULL,999.99,'img_modelo2_.jpg','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla velit praesentium aliquam atque sint ipsa autem tenetur cupiditate dolorum? At quas optio maxime accusantium, rerum fuga. Architecto rem similique sunt, possimus accusantium labore nobis quos, fugit, quibusdam voluptate soluta aspernatur!',1,1,1,'2020-08-26 16:07:50','2020-08-26 18:23:07'),(7,'Producto 4',NULL,NULL,999,'img_modelo3_.jpg','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla velit praesentium aliquam atque sint ipsa autem tenetur cupiditate dolorum? At quas optio maxime accusantium, rerum fuga. Architecto rem similique sunt, possimus accusantium labore nobis quos, fugit, quibusdam voluptate soluta aspernatur!',1,1,1,'2020-08-26 16:08:09','2020-08-26 16:08:09'),(8,'Producto 5',NULL,NULL,999,'img_modelo4_.jpg','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla velit praesentium aliquam atque sint ipsa autem tenetur cupiditate dolorum? At quas optio maxime accusantium, rerum fuga. Architecto rem similique sunt, possimus accusantium labore nobis quos, fugit, quibusdam voluptate soluta aspernatur!',1,1,1,'2020-08-26 16:08:16','2020-08-26 16:08:16'),(9,'Producto 6',NULL,NULL,999,'img_modelo5_.jpg','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla velit praesentium aliquam atque sint ipsa autem tenetur cupiditate dolorum? At quas optio maxime accusantium, rerum fuga. Architecto rem similique sunt, possimus accusantium labore nobis quos, fugit, quibusdam voluptate soluta aspernatur!',0,1,1,'2020-08-26 16:08:25','2020-08-26 16:08:25'),(10,'Producto 7',NULL,NULL,999,'img_modelo6_.jpg','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla velit praesentium aliquam atque sint ipsa autem tenetur cupiditate dolorum? At quas optio maxime accusantium, rerum fuga. Architecto rem similique sunt, possimus accusantium labore nobis quos, fugit, quibusdam voluptate soluta aspernatur!',0,1,1,'2020-08-26 16:08:32','2020-08-26 16:08:32'),(11,'Producto 8',NULL,NULL,999,'img_modelo7_.jpg','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla velit praesentium aliquam atque sint ipsa autem tenetur cupiditate dolorum? At quas optio maxime accusantium, rerum fuga. Architecto rem similique sunt, possimus accusantium labore nobis quos, fugit, quibusdam voluptate soluta aspernatur!',1,1,1,'2020-08-26 16:08:39','2020-08-26 16:08:39');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `talles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `talle` varchar(50) DEFAULT NULL,
  `prenda` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,'38','calzado','2020-08-26 20:24:19','2020-08-26 20:24:19'),(2,'39','calzado','2020-08-26 20:24:31','2020-08-26 20:24:31'),(3,'40','calzado','2020-08-26 20:25:09','2020-08-26 20:25:09'),(4,'41','calzado','2020-08-26 20:26:43','2020-08-26 20:26:43'),(5,'42','calzado','2020-08-26 20:26:44','2020-08-26 20:26:44'),(6,'43','calzado','2020-08-26 20:26:45','2020-08-26 20:26:45'),(7,'44','calzado','2020-08-26 20:26:46','2020-08-26 20:26:46'),(8,'45','calzado','2020-08-26 20:26:47','2020-08-26 20:26:47'),(9,'46','calzado','2020-08-26 20:26:47','2020-08-26 20:26:47'),(10,'47','calzado','2020-08-26 20:26:48','2020-08-26 20:26:48'),(11,'48','calzado','2020-08-26 20:26:49','2020-08-26 20:26:49'),(12,'49','calzado','2020-08-26 20:26:50','2020-08-26 20:26:50'),(13,'37','calzado','2020-08-26 20:26:51','2020-08-26 20:26:51'),(14,'36','calzado','2020-08-26 20:26:51','2020-08-26 20:26:51'),(15,'35','calzado','2020-08-26 20:26:52','2020-08-26 20:26:52'),(16,'34','calzado','2020-08-26 20:26:53','2020-08-26 20:26:53'),(17,'33','calzado','2020-08-26 20:26:54','2020-08-26 20:26:54'),(18,'XXS','pantalon','2020-08-26 20:30:08','2020-08-26 20:30:08'),(19,'XS','pantalon','2020-08-26 20:30:09','2020-08-26 20:30:09'),(20,'S','pantalon','2020-08-26 20:30:10','2020-08-26 20:30:10'),(21,'M','pantalon','2020-08-26 20:30:11','2020-08-26 20:30:11'),(22,'L','pantalon','2020-08-26 20:30:12','2020-08-26 20:30:12'),(23,'XL','pantalon','2020-08-26 20:30:13','2020-08-26 20:30:13'),(24,'XXL','pantalon','2020-08-26 20:30:14','2020-08-26 20:30:14'),(25,'XXXL','pantalon','2020-08-26 20:30:15','2020-08-26 20:30:15'),(26,'XXS','torso','2020-08-26 20:30:20','2020-08-26 20:30:20'),(27,'XS','torso','2020-08-26 20:30:40','2020-08-26 20:30:40'),(28,'S','torso','2020-08-26 20:30:41','2020-08-26 20:30:41'),(29,'M','torso','2020-08-26 20:30:42','2020-08-26 20:30:42'),(30,'L','torso','2020-08-26 20:30:43','2020-08-26 20:30:43'),(31,'XL','torso','2020-08-26 20:30:44','2020-08-26 20:30:44'),(32,'XXL','torso','2020-08-26 20:30:44','2020-08-26 20:30:44'),(33,'XXXL','torso','2020-08-26 20:30:45','2020-08-26 20:30:45');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjetas` (
  `idtarjetas` int(11) NOT NULL AUTO_INCREMENT,
  `idusuario` int(11) DEFAULT NULL,
  `nombre_tarjeta` varchar(45) DEFAULT NULL,
  `nro_tarjeta` bigint(16) DEFAULT NULL,
  `cod_seguridad` int(11) DEFAULT NULL,
  `nombre_titular` varchar(45) DEFAULT NULL,
  `fecha_venc` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idtarjetas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `idusuarios` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(80) NOT NULL,
  `altura` decimal(2,0) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `tarjeta_id` int(11) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idusuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,NULL,NULL,'prueba','email@gmail.com','$2b$12$L0EJnfByvanOsL.EpuRRR.0ogQ6hu/0bktEq6xnrgUC1A4tHG5zqS',NULL,NULL,NULL,'2020-08-25',NULL,'default_avatar.png','2020-08-25 23:26:46','2020-08-25 23:26:46'),(2,NULL,NULL,'prueba1','email1@gmail.com','$2b$12$c0K/eYba9bioIN7yZ2Bd1eKBJpMbHlhl0aSZfid4ODzAFmstDMFlG',NULL,NULL,NULL,'2020-08-25',NULL,'avatars_email1@gmail.com_1598399363402.jpg','2020-08-25 23:49:23','2020-08-25 23:49:23');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta_productos`
--

DROP TABLE IF EXISTS `venta_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venta_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idventas` int(11) NOT NULL,
  `idproductos` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta_productos`
--

LOCK TABLES `venta_productos` WRITE;
/*!40000 ALTER TABLE `venta_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `idventas` int(11) NOT NULL AUTO_INCREMENT,
  `nro_factura` int(11) DEFAULT NULL,
  `nro_orden` int(11) DEFAULT NULL,
  `precio_total` float DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idventas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
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

-- Dump completed on 2020-08-26 18:12:07
