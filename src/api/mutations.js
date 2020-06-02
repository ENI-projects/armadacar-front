export const mutations = 
{
  insertCar: 
  `mutation (
    $marque: String!, 
    $modele: String!, 
    $nombre_de_places: Int!, 
    $energie: String!, 
    $immatriculation: String!, 
    $id_lieux_de_stockage: Int!,
    $nombre_de_chevaux: Int!)
    {      
      insert_armadacar_voitures (          
        objects: 
        {
          marque: $marque
          modele: $modele
          nombre_de_places: $nombre_de_places
          energie: $energie
          immatriculation: $immatriculation
          id_lieux_de_stockage: $id_lieux_de_stockage
          nombre_de_chevaux: $nombre_de_chevaux
          id_entreprise: 1
        }
      )
      {
        returning
        {
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
      }
  }`,  
  deleteCar:
  `mutation ($idVoiture: Int!)
  {
    delete_armadacar_voitures (where: {id: {_eq: $idVoiture}} )
    {
      affected_rows
    }
  }`,
  updateCar: 
  `mutation (
      $marque: String!, 
      $modele: String!, 
      $nombre_de_places: Int!, 
      $energie: String!, 
      $immatriculation: String!, 
      $id_lieux_de_stockage: Int!,
      $nombre_de_chevaux: Int!,
      $idVoiture: Int!,
      $idEntreprise: Int!)
    {
    update_armadacar_voitures (
      where: {id: {_eq: $idVoiture} _and: {id_entreprise: {_eq: $idEntreprise}}}, 
      _set: {
          marque: $marque,
          modele: $modele,
          nombre_de_places: $nombre_de_places,
          energie: $energie,
          immatriculation: $immatriculation,
          id_lieux_de_stockage: $id_lieux_de_stockage,
          nombre_de_chevaux: $nombre_de_chevaux        
      })
    {    
        returning
          {
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
    }
  }`
}