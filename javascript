<script>
    document.getElementById("searchbtn").addEventListener("click",function() {
        let valeur = document.getElementById("searchInput").value;

        if (valeur.trim() ===""){
            alert("veuillez entrer un nom de patient !");
                    }else{
                        console.log("Recherche de :",valeur);
         }
    });
</script>
