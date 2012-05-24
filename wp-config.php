<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
//define('WP_CACHE', true); //Added by WP-Cache Manager
define('DB_NAME', 'clearkudt_wpb');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'Admin123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'eVrv(75R5!I1{bO|$bPKEm$B(DZ!$)h*Wm-0*rA=X BIL!vV6tgL2MTPEH< !?WH');
define('SECURE_AUTH_KEY',  'nDVK)v[b)+ThKz9LOqERg$IB*Vb+pi`p|i{Oyzwj4$F6?bXrsQJ4sqp?_PL+qR&_');
define('LOGGED_IN_KEY',    'oLXO|^W>C,V=vGD#03oZth+xae}oVLke|{7mMn.)/-JR5T<p9G#f^MpY#`%*DFBm');
define('NONCE_KEY',        '$/pKs:?&aTcH|p`y C* ^};Z<cfEr,E~z7-s97IdSi|abe4P_Bw^!ik|7)jAUk,L');
define('AUTH_SALT',        'kvd8Nh@vkFPgY)&mg4/ )M@;4]n>%1 W-kKIxnw$P|F!nB7f5-6HFTjy^,?d+@RJ');
define('SECURE_AUTH_SALT', 't$PY/`SW+~kfbm4^M-_jn=QS6,vDjMq~sl</_NT~ndIuZkVa-9xAjR%~{2N{~MVp');
define('LOGGED_IN_SALT',   'V=[<gXs=T~~R?Bc({]wBVnFPuzi2Fp<wWm[|RKhGznrpd-|)V8v6K<gB=RN1SS{6');
define('NONCE_SALT',       'Q4nQ44>BxGZHKz%Ji%NxoN%x/:u+7;9{N*.z[L)6A@;}bwW:@!hZZiX@z+hUq7C ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'clearkudt_wpb';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
