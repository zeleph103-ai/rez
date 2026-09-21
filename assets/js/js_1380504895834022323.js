(function (window) {
     window["env"] = window["env"] || {};

     //Environnement variable
     window["env"]["apiUrl"] = 'https://paiement-multicanal-api.ca.gouv.fr'; // not actualized, for local testing
     window["env"]["production"] = true; // not actualized, for local testing
     window["env"]["jwt"]={STRING: 'E27D5C9827726BC8FE7510B1BDD3D138',VARCHAR: '4FF2EC319C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A58',BLOB: 'troiscitronbosechatjouerbelierlawingssourisfermentpoids',KEY_SIZE: 128,ITERATION_COUNT: 10};
     window["env"]["webAppFpsUrl"] = 'https://fps.gouv.fr/fps';
   })(this);
