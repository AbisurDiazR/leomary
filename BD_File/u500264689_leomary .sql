-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-06-2020 a las 05:41:45
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u500264689_leomary`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(100) NOT NULL,
  `nombre_categoria` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

/*INSERT INTO `categorias` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Test categoria'),
(2, 'Test categoria'),
(3, 'Test categoria'),
(4, 'Another category');*/

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(100) NOT NULL,
  `nombre_cliente` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

/*INSERT INTO `clientes` (`id_cliente`, `nombre_cliente`) VALUES
(1, 'Samsung'),
(2, 'Mitsubishi'),
(3, 'Toshiba'),
(4, 'Apple');*/

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id_departamento` int(100) NOT NULL,
  `nombre_departamento` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamentos`
--

/*INSERT INTO `departamentos` (`id_departamento`, `nombre_departamento`) VALUES
(1, 'Ferreteria'),
(2, 'Plomeria'),
(3, 'Electricidad');*/

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE TABLE `fotos` (
  `id_foto` int(100) NOT NULL,
  `nombre_foto` varchar(200) DEFAULT NULL,
  `proyecto_foto` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fotos`
--

/*INSERT INTO `fotos` (`id_foto`, `nombre_foto`, `proyecto_foto`) VALUES
(104, 'believe_in_fox_god-20160828-0001-20200611010753.jpg', 27),
(105, 'moa-20200611010753.jpg', 27),
(106, 'otfgk_metal-20160828-0001-20200611010753.jpg', 27);*/

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(100) NOT NULL,
  `clave_producto` varchar(50) DEFAULT NULL,
  `categoria_producto` int(100) DEFAULT NULL,
  `departamento_producto` int(100) DEFAULT NULL,
  `concepto_producto` varchar(50) DEFAULT NULL,
  `precio_producto` int(100) DEFAULT NULL,
  `foto_producto` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

/*INSERT INTO `productos` (`id_producto`, `clave_producto`, `categoria_producto`, `departamento_producto`, `concepto_producto`, `precio_producto`, `foto_producto`) VALUES
(7, 'CL04', 1, 3, 'Chun Li', 234, '99010919_10158285283754844_2396554406427361280_o.jpg'),
(8, 'CL05', 4, 2, 'Gorgon', 500, 'a5ehI15EeKSc9Ap1AkztQ2iAoSCNrn5RiAI2Qh30vVU.jpg'),
(9, 'CLA33', 1, 1, 'Concept test', 124, '17evjv7ms8pcwjpg.jpg'),
(10, 'CALA', 2, 2, 'CNC', 5555, '63472_880664348646041_2652543141420487093_n.jpg'),
(11, 'OOL', 1, 2, 'CCCC', 233, '1510726_10204931208667217_9130594845715522394_n.jpg');*/

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id_proyecto` int(100) NOT NULL,
  `nombre_proyecto` varchar(50) DEFAULT NULL,
  `ubicacion_proyecto` varchar(50) DEFAULT NULL,
  `inicio_proyecto` date DEFAULT NULL,
  `fin_proyecto` date DEFAULT NULL,
  `rol_proyecto` varchar(50) DEFAULT NULL,
  `cliente_proyecto` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proyectos`
--

/*INSERT INTO `proyectos` (`id_proyecto`, `nombre_proyecto`, `ubicacion_proyecto`, `inicio_proyecto`, `fin_proyecto`, `rol_proyecto`, `cliente_proyecto`) VALUES
(27, 'aaaaaaaaaa', 'aaaaa', '2020-12-31', '2020-12-31', 'aaaaaaaaaa', 2);*/

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(100) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `passwd` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rol` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

/*INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `username`, `email`, `passwd`, `rol`) VALUES
(1, 'Abisur', 'Diaz Ramirez', 'admin', 'abisurdiazramirez@gmail.com', 'aiShinozaki23', 'administrador'),
(6, 'Abisur Simei', 'Ramirez', 'koizumi1993', 'abisurdiazramirez@gmail.com', 'aiShinozaki23', 'Administrador');*/

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id_departamento`);

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id_foto`),
  ADD KEY `proyecto_foto` (`proyecto_foto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `categoria_producto` (`categoria_producto`),
  ADD KEY `departamento_producto` (`departamento_producto`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id_proyecto`),
  ADD KEY `cliente_proyecto` (`cliente_proyecto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id_departamento` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id_foto` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id_proyecto` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD CONSTRAINT `fotos_ibfk_1` FOREIGN KEY (`proyecto_foto`) REFERENCES `proyectos` (`id_proyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_producto`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`categoria_producto`) REFERENCES `categorias` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`departamento_producto`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `proyectos_ibfk_1` FOREIGN KEY (`cliente_proyecto`) REFERENCES `clientes` (`id_cliente`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
