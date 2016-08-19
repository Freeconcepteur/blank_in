# blank_in
Plugin Jquery pour remplacer "target=_blank"

Ce plugin a pour objectif d'ouvrir des liens internes ou externes tout en restant sur la page courante.

Testez-le :
- Importez le dernier Jquery dans votre page HTML.
- Dans le body, créez un lien comportant la class "blank_in".
- dans le header de votre HTML, ajoutez :
<script>
jQuery( document ).ready(function() {
    jQuery('a.blank_in').blank_in();
});
</script>

Pour le moment, ce script est encore imparfait et n'accepte aucun paramètre.
C'est pour bientôt ;-)
