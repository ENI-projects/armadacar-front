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
  }`,
  insertStoragePlace: 
  `mutation (
    $libelle: String!, 
    $adresse: String!, 
    $ville: String!, 
    $departement: String!, 
    $code_postal: String!)
    {      
      insert_armadacar_lieux_de_stockage (          
        objects: 
        {
          libelle: $libelle
          id_entreprise: 1
          adresse: $adresse
          ville: $ville
          departement: $departement
          code_postal: $code_postal
        }
      )
      {
        returning
        {
          id
          libelle
          id_entreprise
          adresse
          ville
          departement
          code_postal   
        }
      }
  }`,
  updateStoragePlace: 
  `mutation (
    $libelle: String!, 
    $adresse: String!, 
    $ville: String!, 
    $departement: String!, 
    $code_postal: String!,
    $idStoragePlace: Int!,
    $id_entreprise: Int!)
    {
    update_armadacar_lieux_de_stockage (
      where: {id: {_eq: $idStoragePlace} _and: {id_entreprise: {_eq: $id_entreprise}}}, 
      _set: {
        libelle: $libelle
        adresse: $adresse
        ville: $ville
        departement: $departement
        code_postal: $code_postal        
      })
    {    
        returning
          {
            id
            libelle
            id_entreprise
            adresse
            ville
            departement
            code_postal
          }
    }
  }`,
  deleteStoragePlace:
  `mutation ($idStoragePlace: Int!)
  {
    delete_armadacar_lieux_de_stockage (where: {id: {_eq: $idStoragePlace}} )
    {
      affected_rows
    }
  }`,
}