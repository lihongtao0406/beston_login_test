-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主机： us-cdbr-east-05.cleardb.net
-- 生成日期： 2021-12-23 08:46:55
-- 服务器版本： 5.6.50-log
-- PHP 版本： 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `heroku_7a2e3a7210f9a2f`
--

-- --------------------------------------------------------

--
-- 表的结构 `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(4, '2014_10_12_000000_create_users_table', 1),
(14, '2014_10_12_100000_create_password_resets_table', 1),
(24, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(34, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(44, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(54, '2016_06_01_000004_create_oauth_clients_table', 1),
(64, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(74, '2019_08_19_000000_create_failed_jobs_table', 1),
(84, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- 表的结构 `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('15aeea672260217418ba7d79aedd78712b8bfc6cff11f0d8c87e3b968c217ddf4ee2e31bc58d02c6', 84, 4, 'MyLaravelApp', '[]', 0, '2021-12-23 04:58:05', '2021-12-23 04:58:05', '2022-12-23 04:58:05'),
('206f816a1afcad50a684cb4e61d4bbeff976d576637562482b666ede0231b90221910813b11abc71', 64, 4, 'MyLaravelApp', '[]', 0, '2021-12-23 03:47:27', '2021-12-23 03:47:27', '2022-12-23 03:47:27'),
('6701529b651db4ad7be0d8fc930cc385c195f45b312b4d7a332a4b094a2a7fac8f9f21be03eca2f7', 34, 4, 'MyLaravelApp', '[]', 0, '2021-12-23 03:47:42', '2021-12-23 03:47:42', '2022-12-23 03:47:42'),
('7705bf7819dc9109fc81dd31829ef2a913400bfd0d10c2cd6359ac041bddfefa71d94d53bb129c9c', 34, 4, 'MyLaravelApp', '[]', 0, '2021-12-23 03:55:16', '2021-12-23 03:55:16', '2022-12-23 03:55:16'),
('c917a6a09cef6429e02f2d7a362f5ba5dbe5e1a6837f951f6e9217415046d4bca40eb72e550f97da', 44, 4, 'MyLaravelApp', '[]', 0, '2021-12-23 03:48:25', '2021-12-23 03:48:25', '2022-12-23 03:48:25'),
('db4cece24bc63eaeedc3ae64dd17733ff57ba4359a6ee8fd63fa1d9f5f762f7dfc6462d664b50c65', 74, 4, 'MyLaravelApp', '[]', 0, '2021-12-23 03:48:54', '2021-12-23 03:48:54', '2022-12-23 03:48:54');

-- --------------------------------------------------------

--
-- 表的结构 `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(4, NULL, 'Laravel Personal Access Client', '3lraWKPGoeMamV2Mx0kyc8W76wkKMX8Z7iXduNmm', NULL, 'http://localhost', 1, 0, 0, '2021-12-23 03:45:05', '2021-12-23 03:45:05'),
(14, NULL, 'Laravel Password Grant Client', 'j2elUXMo4jLv91y0ZEb2absXFyYY9zPA8VLQVOWG', 'users', 'http://localhost', 0, 1, 0, '2021-12-23 03:45:08', '2021-12-23 03:45:08');

-- --------------------------------------------------------

--
-- 表的结构 `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(4, 4, '2021-12-23 03:45:08', '2021-12-23 03:45:08');

-- --------------------------------------------------------

--
-- 表的结构 `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(4, 'tttt', '123@gmail.com', NULL, '$2y$10$QTeNdKmmS3szRn6q7HVdf.mJAwSu7H2.5iLGshd8lF3mCbVYW0G3a', NULL, '2021-12-23 03:27:53', '2021-12-23 03:27:53'),
(14, '123', '444123@gmail.com', NULL, '$2y$10$JHMc7MvMFHTf5bi./dptZeBssbL4gBuTZg7FeCVgEuMMGj0.8fAFm', NULL, '2021-12-23 03:28:09', '2021-12-23 03:28:09'),
(24, '123', '443@gmail.com', NULL, '$2y$10$vBcxWx1VC7cA610MfxV0Eu18SzpwBZtBxlKbfiobjGYvSR6s/7Vb.', NULL, '2021-12-23 03:29:33', '2021-12-23 03:29:33'),
(34, '32', '1@gmail.com', NULL, '$2y$10$6p3BfDmJ0qT23VQ4zh9xbuHPvE8udTz2sVVbD7H/zwARqKolvyRk.', NULL, '2021-12-23 03:31:33', '2021-12-23 03:31:33'),
(44, '123', '444@gmail.com', NULL, '$2y$10$leBSQhl2gJC4.AsQrMHqNuQiy7N.ISd3bP5oCxa3NHuleGvg9XvVK', NULL, '2021-12-23 03:42:11', '2021-12-23 03:42:11'),
(54, '123', '4441@gmail.com', NULL, '$2y$10$ucktWE8lc.SJ7bUFWkqNM.iN7Bf5yglMfHtsVLrtJXYKGsC8bNlca', NULL, '2021-12-23 03:44:01', '2021-12-23 03:44:01'),
(64, '123', '1234@gmail.com', NULL, '$2y$10$Ch.kY62ZZh7Msjnw0/qQg.2E1gkzy0rhPf5ckn12oDQ3RWIvz/hl6', NULL, '2021-12-23 03:47:27', '2021-12-23 03:47:27'),
(74, '123', '123@qq.com', NULL, '$2y$10$ZHRf5FZEm3UfAxYmYhYtmOQy4m43naUucMb1KChq4FJy0F1t3t2mO', NULL, '2021-12-23 03:48:53', '2021-12-23 03:48:53'),
(84, 'ad', 'test@troposal.com', NULL, '$2y$10$s1msJ9lyg494GJP9JNhzXuIOhYsz9z7PE4V7v/m1ELwu3TIeeBPsq', NULL, '2021-12-23 04:58:03', '2021-12-23 04:58:03');

--
-- 转储表的索引
--

--
-- 表的索引 `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- 表的索引 `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- 表的索引 `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- 表的索引 `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- 表的索引 `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- 表的索引 `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- 表的索引 `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- 使用表AUTO_INCREMENT `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- 使用表AUTO_INCREMENT `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用表AUTO_INCREMENT `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
