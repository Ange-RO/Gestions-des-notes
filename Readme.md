Projet 2 : Application de Gestion de Notes
### **Objectif du Projet**

Développer une application web permettant aux utilisateurs de créer, organiser, et rechercher des notes personnelles avec une interface utilisateur simple.

### **Fonctionnalités**

1. **CRUD pour les Notes :**
   - **Créer** une nouvelle note.
   - **Lire** la liste des notes.
   - **Mettre à jour** une note existante.
   - **Supprimer** une note.

2. **Organisation des Notes :**
   - **Catégoriser** les notes avec des tags ou des catégories.
   - **Filtrer** les notes par catégorie ou tag.

3. **Recherche de Notes :**
   - Rechercher des notes par titre ou contenu.

4. **Interface Utilisateur :**
   - Utiliser Angular pour créer des pages HTML permettant aux utilisateurs de gérer leurs notes.

### **Technologies**

- **Backend :** Spring Boot
- **Frontend :** Angular

 **6h**




Relations
# Relation One-to-Many : Un utilisateur (User) peut avoir plusieurs notes (Note). Cela est représenté par la relation @OneToMany dans la classe User et @ManyToOne dans la classe Note.
# Clé Étrangère : La table Note contient une colonne user_id qui est une clé étrangère vers la table User.


