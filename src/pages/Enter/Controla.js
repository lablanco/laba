//**************/
// Programa: Password Active Directory
// *************/

// funcion que procesa la info y genera el informe

export const control = (dispatch, desc) => {
    let d = ""; //Defino la descripcion del parametro
    let v = "";

    // desc.forEach(e => {
    //     Object.values(e).forEach(([key, value]) => {
    //         switch (value[0]) {
    //             case 'MinPasswordAge':
    //                 d = "The Minimum password age policy setting determines the period of time (in days) that a password must be used before the user can change it.";
    //                 v = value[1];
    //         }
    //         console.log(d);
    //     })
    // })

};

//     desc.forEach((value) => {
//         let arrayOfKeyValues = value.split(' : ');
//         let k = arrayOfKeyValues[0].trim();
//         console.log({ k })
//     });
// };


// Object.keys(desc).forEach(function (key) {
//     desc[key] = typeof desc[key] === 'string' ? desc[key].split(' : ') : desc[key];
// });

// console.log(desc);


    // const otro = desc.map((item) => item + ".");

    // console.log(otro);
    // desc.forEach((value) => {
    //     let arrayOfKeyValues = value.split(' : ');
    //     let k = arrayOfKeyValues[0].trim();
    //     console.log({ k })
    // });


//     console.log(myArray)

//     myArray.forEach((value) => {
//         let arrayOfKeyValues = value.split(' : ');
//         let k = arrayOfKeyValues[0].trim();
//         console.log({ k })
//     });
// };

//     // *** Tomo el dato que viene del textarea del HTML
//     var x = document.getElementById('cnsl').value;
//     const myArray = x.split("\n");
//     //**********************************************
//     // obtengo el JSON con el estandard.
//     var jqxhr = $.getJSON("data.json", function (data) { });
//     //**********************************************

//     // **** defino variables ****/
//     let text = "";
//     let modifiedArray = [];
//     let arrayString = [];
//     let d = ""; //Defino la descripcion del parametro
//     let a = ""; //Defino el assessment del parametro.

//     myArray.forEach((value) => {
//         let arrayOfKeyValues = value.split(' : ');
//         let k = arrayOfKeyValues[0].trim();  //Nombre del parametro.
//         let v = arrayOfKeyValues[1].trim();        // valor del parametro.

//         //*** busco dentro del estandard */
//         jqxhr.always(function (data) {
//             $.each(data.items, function (i, item) {
//                 if (data.items.list[i].level0 === "1.") {
//                     console.log(item);
//                     return false;
//                 }
//             });

//             // console.log( "mis datos :" + data.list[0].level1 );
//         });


//         let valor = obj.list.find(record => record.id === "1.1.1").level1;

//         switch (k) {
//             case 'MinPasswordAge':
//                 d = "The Minimum password age policy setting determines the period of time (in days) that a password must be used before the user can change it.";
//                 v = moment.duration(v).asDays() + " Days";
//                 a = "OK";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v.trim() + '","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'LockoutDuration':
//                 d = "The Account lockout duration policy setting determines the number of minutes that a locked-out account remains locked out before automatically becoming unlocked.";
//                 v = moment.duration(v).asMinutes() + " Minutes";
//                 a = "OK";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v.trim() + '","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'LockoutObservationWindow':
//                 d = "Reset lockout counter";
//                 v = moment.duration(v).asMinutes() + " Minutes";
//                 a = "OK";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v.trim() + '","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'LockoutThreshold':
//                 d = "Number of failed logon attempts that is allowed before a user account is locked-out";
//                 a = (v > "0") ? "OK" : "The account will never get locked-out. This parameter must be greater than 0 (zero)";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v + ' invalid logon attempts","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'ComplexityEnabled':
//                 d = "Password Complexity";
//                 a = (v == "True") ? "OK" : "Password Complexity : Disabled  <-- This setting should be set to 'True'.";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v + '","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'MaxPasswordAge':
//                 d = "The Maximum password age policy setting determines the period of time (in days) that a password can be used before the system requires the user to change it.";
//                 v = moment.duration(v).asDays() + " Days";
//                 a = "OK";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v.trim() + '","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'MinPasswordLength':
//                 d = "Minimum number of characters a Password should contain";
//                 a = (v > 8) ? "OK" : "Minimum number of characters a Password should be 8 or greater";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v + ' characters","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'PasswordHistoryCount':
//                 d = "The Enforce password history policy setting determines the number of unique new passwords that must be associated with a user account before an old password can be reused";
//                 a = (v > 23) ? "OK" : "Minimum number of password remembered should be 24 or greater";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v + ' Passwords Remembered","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'ReversibleEncryptionEnabled':
//                 d = "Reversible encryption has the ability to decrypt the stored password";
//                 a = (v == "False") ? "OK" : "The password is stored using reversible encryption, This should be set to False that equals to Disable";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v + '","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             case 'DistinguishedName':
//                 d = "The LDAP API references an LDAP object by its distinguished name (DN) = Domain Name.";
//                 a = "";
//                 arrayString = '{"key": "' + k + '"' + ',"value": "' + v + '","desc": "' + d + '","assess": "' + a + '"}';
//                 modifiedArray.push(arrayString);
//                 break;
//             default:
//                 text += "";

//         }

//     })
//     let jsonDataString = "[ " + modifiedArray.toString() + " ]";
//     let jsonData = JSON.parse(jsonDataString);

//     text = "  <hr class='my-4'> <div> <h3> Assessment Results: </h3> </div>";
//     text += "<table class='table table-striped table-sm'> <thead> <tr> <th scope='col'>#</th> <th scope='col'>Parameter</th> <th scope='col'>Description</th> <th scope='col'>Value</th> <th scope='col'>Assessment</th> </tr></thead> <tbody>"
//     for (x in jsonData) {
//         text += "<tr><td>" + x + "</td>";
//         text += "<td>" + jsonData[x].key + "</td>";
//         text += "<td>" + jsonData[x].desc + "</td>";
//         text += "<td>" + jsonData[x].value + "</td>";
//         text += "<td>" + jsonData[x].assess + "</td></tr>";
//     }
//     text += "</tbody></table>"
//     document.getElementById("demo").innerHTML = text;

// }


// // function mybuscavalor(value){
// //     if (value.list[i]["System Parameter"] == k)
// //         console.log(value.list[i]["Recommended Value"]);
// // }


// // limpia el campo textarea en donde ingresa la info y el informe
// function clean() {
//     document.getElementById('cnsl').value = "";
//     document.getElementById("demo").innerHTML = "";
// }

// // genera JSON 

// // function runjson(){

// //     var x = document.getElementById('cnsl').value;
// //     const myArray = x.split("\n");
// //     let modifiedArray = [];
// //     myArray.forEach(mytojson);
// //     let jsonDataString = "[ " + modifiedArray.toString() + " ]";

// //     let jsonData = JSON.parse(jsonDataString);
// //     let text = "<h2> The above command returns the following results: </h2>";
// //     text += "<table class='table table-striped'> <thead> <tr> <th scope='col'>#</th> <th scope='col'>Parametro</th> <th scope='col'>Valor</th> </tr></thead> <tbody>"
// //     for (x in jsonData) {
// //         text += "<tr><td>" + x + "</td>";
// //         text += "<td>" + jsonData[x].key + "</td>";
// //         text += "<td>" + jsonData[x].value + "</td></tr>";
// //     }
// //     text += "</tbody></table>"    
// //     document.getElementById("demo").innerHTML = text;
// //     console.log(jsonData);

// //     //  document.getElementById("demo").innerHTML = jsonData.key + jsonData.value;

// //     function mytojson(value) {
// //         let arrayOfKeyValues = value.split(' : ');
// //         let arrayString ='{"key": "'+arrayOfKeyValues[0].trim()+'"'+',"value": "'+arrayOfKeyValues[1].trim()+'"}';
// //         modifiedArray.push(arrayString);
// //     }

// // }