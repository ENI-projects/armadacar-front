export const queries = {
    carsList: 
        `query
        {
            armadacar_voitures (order_by: {id: asc}) {
            id
            marque
            modele
            nombre_de_places
            energie
            immatriculation
            id_lieux_de_stockage
            nombre_de_chevaux       
            lieux_de_stockage {
                id
                libelle
            }     
        }
      }`
};