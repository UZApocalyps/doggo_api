-- -----------------------------------
-- Titre    : cyno.sql
-- Auteur   : Loïc Viret
-- Date     : 29.10.2020
-- Version  : 1
-- -----------------------------------

-- -----------------------------------------------------
-- Schema CynoClient
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `CynoClient` ;

-- -----------------------------------------------------
-- Schema CynoClient
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `CynoClient` DEFAULT CHARACTER SET utf8 ;
USE `CynoClient` ;

-- -----------------------------------------------------
-- Table `CynoClient`.`diseases`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`diseases`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`diseases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `noun` VARCHAR(45) NOT NULL,
  `description` VARCHAR(2500) NOT NULL,
  `symptoms` VARCHAR(1000) NOT NULL,
  `preventive` VARCHAR(2000) NOT NULL,
  `curative` VARCHAR(2000) NOT NULL,
  `vaccinable` BOOLEAN NOT NULL,
  `zoonosis` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `CynoClient`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`categories`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `noun` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `CynoClient`.`breed`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`breeds`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`breeds` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `link` VARCHAR(255) NULL,
  `picture` VARCHAR(255) NULL,
  `noun` VARCHAR(50) NOT NULL,
  `id_category` INT NULL,
  `morphotype` VARCHAR(255) NULL,
  `classification` VARCHAR(255) NULL,
  `min_size_female` INT NULL,
  `max_size_female` INT NULL,
  `min_size_male` INT NULL,
  `max_size_male` INT NULL,
  `min_weight_female` INT NULL,
  `max_weight_female` INT NULL,
  `min_weight_male` INT NULL,
  `max_weight_male` INT NULL,
  `life_expectancy` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_breeds_categories_idx` (`id_category` ASC),
  CONSTRAINT `fk_breeds_categories` FOREIGN KEY (`id_category`) REFERENCES `CynoClient`.`categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `CynoClient`.`localities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`localities`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`localities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `noun` VARCHAR(45) NOT NULL,
  `zip` INT NOT NULL,
  `zip_complement` INT NOT NULL,
  `toponym` VARCHAR(45) NOT NULL,
  `department` VARCHAR(2) NOT NULL,
  `language` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CynoClient`.`clients`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`clients`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`clients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `female` BOOLEAN NOT NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(15) NOT NULL,
  `street` VARCHAR(255) NULL,
  `id_locality` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clients_localities_idx` (`id_locality` ASC),
  CONSTRAINT `fk_clients_localities` FOREIGN KEY (`id_locality`) REFERENCES `CynoClient`.`localities` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CynoClient`.`dogs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`dogs`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`dogs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `noun` VARCHAR(100) NOT NULL,
  `female` BOOLEAN NOT NULL,
  `birthdate` DATE NOT NULL,
  `sterilized` BOOLEAN NOT NULL,
  `chemical` BOOLEAN NOT NULL,
  `color` VARCHAR(50) NULL,
  `dead` BOOLEAN NOT NULL,
  `id_client` INT NOT NULL,
  `breed` INT NOT NULL,
  `crossbreed` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dogs_clients_idx` (`id_client` ASC),
  INDEX `fk_dogs_breeds_idx` (`breed` ASC),
  INDEX `fk_dogs_crossbreeds_idx` (`crossbreed` ASC),
  CONSTRAINT `fk_dogs_clients` FOREIGN KEY (`id_client`) REFERENCES `CynoClient`.`clients` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_dogs_breeds` FOREIGN KEY (`breed`) REFERENCES `CynoClient`.`breeds` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_dogs_crossbreeds` FOREIGN KEY (`crossbreed`) REFERENCES `CynoClient`.`breeds` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CynoClient`.`services`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`services`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `moment` DATE NOT NULL,
  `duration` DECIMAL(2,1) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NULL,
  `street` VARCHAR(255) NULL,
  `id_locality` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_services_localities_idx` (`id_locality` ASC),
  CONSTRAINT `fk_services_localities` FOREIGN KEY (`id_locality`) REFERENCES `CynoClient`.`localities` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CynoClient`.`clients_take_services`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`clients_take_services`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`clients_take_services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_client` INT NOT NULL,
  `id_service` INT NOT NULL,
  `paid` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clients_clients_take_services_idx` (`id_client` ASC),
  INDEX `fk_services_clients_take_services_idx` (`id_service` ASC),
  CONSTRAINT `fk_clients_clients_take_services` FOREIGN KEY (`id_client`) REFERENCES `CynoClient`.`clients` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_services_clients_take_services` FOREIGN KEY (`id_service`) REFERENCES `CynoClient`.`services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CynoClient`.`dogs_have_services`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`dogs_have_services`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`dogs_have_services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_dog` INT NOT NULL,
  `id_service` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dogs_dogs_have_services_idx` (`id_dog` ASC),
  INDEX `fk_services_dogs_have_services_idx` (`id_service` ASC),
  CONSTRAINT `fk_dogs_dogs_have_services` FOREIGN KEY (`id_dog`) REFERENCES `CynoClient`.`dogs` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_services_dogs_have_services` FOREIGN KEY (`id_service`) REFERENCES `CynoClient`.`services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CynoClient`.`dogs_have_diseases`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`dogs_have_diseases`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`dogs_have_diseases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_dog` INT NOT NULL,
  `id_disease` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dogs_dogs_have_services_idx` (`id_dog` ASC),
  INDEX `fk_diseases_dogs_have_diseases_idx` (`id_disease` ASC),
  CONSTRAINT `fk_dogs_dogs_have_diseases` FOREIGN KEY (`id_dog`) REFERENCES `CynoClient`.`dogs` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_diseases_dogs_have_diseases` FOREIGN KEY (`id_disease`) REFERENCES `CynoClient`.`diseases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CynoClient`.`consultations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `CynoClient`.`consultations`;

CREATE TABLE IF NOT EXISTS `CynoClient`.`consultations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `situation` VARCHAR(2000) NOT NULL,
  `goal` VARCHAR(500) NULL,
  `deadline` VARCHAR(250) NULL,
  `solution` VARCHAR(2000) NULL,
  `medicines` VARCHAR(100) NULL,
  `argumentation` VARCHAR(2000) NULL,
  `id_service` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_consultations_services_idx` (`id_service` ASC),
  CONSTRAINT `fk_consultations_services` FOREIGN KEY (`id_service`) REFERENCES `CynoClient`.`services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE = InnoDB;