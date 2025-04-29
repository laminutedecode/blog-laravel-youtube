# Blog Complet avec Laravel 12, InertiaJS et React

![Cover du tutoriel](https://cdn.sanity.io/images/htniyx9j/production/183ecabc4636cc1ddfab8c5721f914e85c34f76d-1280x720.webp)

## 📝 Description

Ce projet est un blog complet développé avec Laravel 12, InertiaJS et ReactJS. Il met en œuvre un système de gestion de contenu (CRUD) complet et utilise Laravel Breeze pour l'authentification des utilisateurs.

## 🎯 Fonctionnalités

- **Authentification complète** : Inscription, connexion et gestion des sessions utilisateurs avec Laravel Breeze
- **Interface moderne SPA** : Application à page unique construite avec InertiaJS et ReactJS
- **CRUD d'articles** : Création, lecture, mise à jour et suppression d'articles de blog
- **Interface réactive** : UI dynamique et responsive grâce à React et Tailwind CSS

## 🛠️ Technologies utilisées

- **PHP/Laravel 12** : Framework back-end
- **React JS** : Bibliothèque front-end
- **InertiaJS** : Pour intégrer React avec Laravel
- **Tailwind CSS** : Framework CSS utilitaire
- **Laravel Breeze** : Starter kit d'authentification

## 🚀 Installation et configuration

```bash
# Cloner le dépôt
git clone https://github.com/votre-compte/blog-laravel.git
cd blog-laravel

# Installer les dépendances PHP
composer install

# Installer les dépendances JavaScript
npm install

# Configurer le fichier d'environnement
cp .env.example .env
php artisan key:generate

# Configurer la base de données dans .env puis migrer
php artisan migrate

# Compiler les assets
npm run dev

# Démarrer le serveur
php artisan serve
```

## 📚 Apprentissage

Ce projet vous permettra d'apprendre à :

- Configurer l'authentification avec Laravel Breeze
- Intégrer React et Laravel via InertiaJS
- Développer un CRUD complet pour une application de blog
- Gérer à la fois le back-end et le front-end d'une application web moderne

## 🔗 Liens utiles

- [Tutoriel complet sur La Minute De Code](https://www.laminutedecode.com/tutoriels/creez-un-blog-complet-avec-laravel)
- [Documentation Laravel](https://laravel.com/docs)
- [Documentation InertiaJS](https://inertiajs.com/)
- [Documentation React](https://reactjs.org/docs/getting-started.html)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)

