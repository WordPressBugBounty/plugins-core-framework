<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit29b5ecd9b3c9a70af2360483a19635eb
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInit29b5ecd9b3c9a70af2360483a19635eb', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit29b5ecd9b3c9a70af2360483a19635eb', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit29b5ecd9b3c9a70af2360483a19635eb::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
