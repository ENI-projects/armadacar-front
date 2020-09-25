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
      }`,
    storagePlaceList: 
        `query
        {
          armadacar_lieux_de_stockage (order_by: {id: asc}) {
          id
          libelle
          id_entreprise
          adresse
          ville
          departement
          code_postal         
      }
    }`, 
      selectIdCarAvailable: 
      `query ($dateDebut: date!, $nbrePassager: Int!){
        armadacar_search_course_by_date_and_nbplace(args: {datedebut: $dateDebut, nbdeplace: $nbrePassager}) {    
          id
        }
      }`,
      selectAllCourse: 
      `query {
        armadacar_courses {
          id
          date_fin
          date_debut
          id_voiture
          lieu_arrivee
          lieu_depart
          remarque
          voiture {
            id
            marque
            modele
            immatriculation
          }
        }
      }`,
      selectFourLastCourse :
      `query {
        armadacar_courses (order_by: {id: desc}, limit: 4) {
          id
          lieu_arrivee
          lieu_depart
        }
      }`,
      selectCountImmatriculationExist:
      `query MyQuery ($immatriculation: String!) {
        armadacar_voitures_aggregate(where: {immatriculation: {_eq: $immatriculation}}) {
          aggregate {
            count
          }
        }
      }`,
      selectCourseDeplacementsByUser:
      `query MyQuery ($id: String!){
        armadacar_courses(where: {utilisateurs_courses: {id_utilisateur: {_eq: $id}, createur: {_eq: false}}}) {
          id
          lieu_arrivee
          lieu_depart
          date_fin
          date_debut
          aller_retour
          voiture {
            modele
          }    
        }
      }
      `,
      selectCourseEmpruntsByUser: 
      `query MyQuery ($id: String!){
        armadacar_courses(where: {utilisateurs_courses: {id_utilisateur: {_eq: $id}, createur: {_eq: true}}}) {
          id
          lieu_arrivee
          lieu_depart
          date_fin
          date_debut
          aller_retour
          voiture {
            modele
          }    
        }
      }
      `,
      selectCourseResume: 
      `query ($idCourse: Int!) {
        armadacar_courses (where: {id: {_eq: $idCourse}}) 
        {
            id
            date_fin
            date_debut
            aller_retour
            id_voiture
            lieu_arrivee
            lieu_depart
            remarque
            voiture {
              id
              immatriculation
              modele
              marque
              nombre_de_places
            }            
          }  
      }
      `,
      selectIdEnterpriseByUserId: 
      `
        query
        {
          armadacar_utilisateurs{
            id_entreprise
          }
        }
      `,
      selectTwoLastActionByAdmin: 
      `query MyQuery {
        armadacar_lieux_de_stockage(order_by: {created_at: desc}, limit: 2) {
          libelle
          ville
        }
        armadacar_voitures(order_by: {created_at: desc}, limit: 2) {
          marque
          modele
          created_at
        }
      }`,
      selectUtilisateurCourse:
      `query MyQuery($idUtilisateur: String!, $idCourse: Int!) {
        armadacar_utilisateurs_courses(where: {_and: {id_utilisateur: {_eq: $idUtilisateur}, id_course: {_eq: $idCourse}, createur: {_eq: true}}}) {
          id_course
          id_utilisateur
        }
      }
      `
};