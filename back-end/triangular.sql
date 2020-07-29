SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;


DROP TABLE IF EXISTS `points`;
CREATE TABLE `points`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `latitude` decimal(20, 6) NOT NULL,
  `longitude` decimal(20, 6) NOT NULL,
  `local` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `report_points`;
CREATE TABLE `report_points`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `latitude` double(90, 6) NOT NULL,
  `longitude` double(90, 6) NOT NULL,
  `local` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
